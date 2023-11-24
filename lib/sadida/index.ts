import { SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from "../constants";
import { ensureStartsWith } from "../utils";
import { getCatalogueQuery } from "./queries/catalogue";
import { getProductsQuery } from "./queries/product";
import {
  TypedDocumentString,
  GetMenuBySlugDocument,
  GetCollectionProductsBySlugDocument,
  GetCategoryProductsBySlugDocument,
  MenuItemFragment,
  ProductOrderField,
  OrderDirection,
  ProductMediaType,
  GetProductBySlugDocument,
  SearchProductsDocument,
  GetCollectionsDocument,
  GetCheckoutByIdDocument,
  CreateCheckoutDocument,
  CheckoutAddLineDocument,
  CheckoutDeleteLineDocument,
  CheckoutUpdateLineDocument,
} from "./generated/graphql";
import {
  saleorProductToSadidaProduct,
  saleorCheckoutToSadidaCart,
} from "./mapper";
import { GRAPHQL_API_URL } from "@/constants/url";
import { invariant } from "./utils";
//types
import {
  sadidaCatalogueOperation,
  sadidaProductsOperation,
  Product,
  Cart,
  Collection,
} from "./types";
const endpoint = process.env.SALEOR_INSTANCE_URL;
const sadidaEndpoint = GRAPHQL_API_URL;
invariant(endpoint, `Missing SALEOR_INSTANCE_URL!`);
type GraphQlError = {
  message: string;
};
type GraphQlErrorRespone<T> = { data: T } | { errors: readonly GraphQlError[] };
export async function saleorFetch<Result, Variables>({
  query,
  variables,
  headers,
  cache,
  tags,
}: {
  query: TypedDocumentString<Result, Variables>;
  variables: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
  tags?: NextFetchRequestConfig["tags"];
}): Promise<Result> {
  invariant(endpoint, `Missing SALEOR_INSTANCE_URL!`);

  const options = cache
    ? { cache, next: { tags } }
    : { next: { revalidate: 900, tags } };
  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query: query.toString(),
      ...(variables && { variables }),
    }),
    ...options,
  });

  const body = (await result.json()) as GraphQlErrorRespone<Result>;

  if ("errors" in body) {
    throw body.errors[0];
  }

  return body.data;
}
type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;
export async function sadidaFetch<T>({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(sadidaEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    console.log(e);
    throw {
      error: e,
      query,
    };
  }
}

//CATALOGUE
export async function getCatalogue() {
  const catalogues = await sadidaFetch<sadidaCatalogueOperation>({
    query: getCatalogueQuery,
  });
  return catalogues.body?.data?.catalogues?.map((cataloguesItem) => ({
    _id: cataloguesItem._id,
    name: cataloguesItem.name,
    path: `localhost:3000/catalogues/${cataloguesItem.name}`,
  }));
}

const _getCollectionProducts = async ({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: ProductOrderField;
}) => {
  const fetched = await saleorFetch({
    query: GetCollectionProductsBySlugDocument,
    variables: {
      slug: collection,
      sortBy:
        sortKey === ProductOrderField.Rank
          ? ProductOrderField.Rating
          : sortKey || ProductOrderField.Rating,
      sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
    },
    tags: [TAGS.collections, TAGS.products],
  });
  if (fetched.collection) {
    return fetched.collection;
  }
};

const _getCategoryProducts = async ({
  category,
  reverse,
  sortKey,
}: {
  category: string;
  reverse?: boolean;
  sortKey?: ProductOrderField;
}) =>
  (
    await saleorFetch({
      query: GetCategoryProductsBySlugDocument,
      variables: {
        slug: category,
        sortBy:
          sortKey === ProductOrderField.Rank
            ? ProductOrderField.Rating
            : sortKey || ProductOrderField.Rating,
        sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
      },
      tags: [TAGS.collections, TAGS.products],
    })
  ).category;
export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: ProductOrderField;
}): Promise<Product[]> {
  if (typeof reverse === "undefined" && typeof sortKey === "undefined") {
    reverse = true;
    sortKey = ProductOrderField.Name;
  }

  const saleorCollectionProducts =
    (await _getCollectionProducts({
      collection,
      reverse,
      sortKey,
    })) ||
    (await _getCategoryProducts({
      category: collection,
      reverse,
      sortKey,
    }));
  if (!saleorCollectionProducts) {
    throw new Error(`Collection not found: ${collection}`);
  }

  return (
    saleorCollectionProducts.products?.edges.map((product) =>
      saleorProductToSadidaProduct(product.node)
    ) || []
  );
}
//COLLECTION
export async function getCollections(): Promise<Collection[]> {
  const saleorCollections = await saleorFetch({
    query: GetCollectionsDocument,
    variables: {},
    tags: [TAGS.collections],
  });

  return (
    saleorCollections.collections?.edges
      .map((edge) => {
        return {
          handle: edge.node.slug,
          title: edge.node.name,
          description: edge.node.description as string,
          seo: {
            title: edge.node.seoTitle || edge.node.name,
            description: edge.node.seoDescription || "",
          },
          updatedAt: edge.node.products?.edges?.[0]?.node.updatedAt || "",
          path: `/search/${edge.node.slug}`,
        };
      })
      .filter((el) => !el.handle.startsWith(`hidden-`)) ?? []
  );
}

// PRODUCTS

export async function getProduct(slug: string): Promise<Product | undefined> {
  const saleorProduct = await saleorFetch({
    query: GetProductBySlugDocument,
    variables: {
      slug,
    },
    tags: [TAGS.products],
  });

  if (!saleorProduct.product) {
    throw new Error(`Product not found: ${slug}`);
  }

  return saleorProductToSadidaProduct(saleorProduct.product);
}
export type GetProductBySlugQuery = {
  product?: {
    id: string;
    slug: string;
    name: string;
    isAvailableForPurchase?: boolean | null;
    description?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    updatedAt: string;
    pricing?: {
      priceRange?: {
        start?: { gross: { currency: string; amount: number } } | null;
        stop?: { gross: { currency: string; amount: number } } | null;
      } | null;
    } | null;
    media?: Array<{ url: string; type: ProductMediaType; alt: string }> | null;
    collections?: Array<{ name: string }> | null;
    variants?: Array<{
      id: string;
      name: string;
      attributes: Array<{
        attribute: {
          slug?: string | null;
          name?: string | null;
          choices?: { edges: Array<{ node: { name?: string | null } }> } | null;
        };
        values: Array<{ name?: string | null }>;
      }>;
      pricing?: {
        price?: { gross: { currency: string; amount: number } } | null;
      } | null;
    }> | null;
  } | null;
};

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  // @todo
  // tags: [TAGS.products],
  return [];
}
export async function getSadidaProducts({
  pageIndex,
  catalogues,
  group,
  sortBy,
}: {
  pageIndex: number;
  group?: string;
  catalogues?: string;
  sortBy?: string;
}) {
  const products = await sadidaFetch<sadidaProductsOperation>({
    query: getProductsQuery,
    variables: {
      pageIndex,
      group,
      sortBy,
      catalogues,
    },
  });
  console.log(products);
  return products.body?.data?.products?.products?.map((product) => ({
    sku: product.sku,
    title: product.title,
    slug: product.slug,
    price: product.price,
    score: product.score,
    n_o_reviews: product.n_o_reviews,
    instock_available: product.instock_available,
    thumbnailPath: product.images[4]
      ? `https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2FMedium%2Fshowing%20image%20thumnail%2F${product.images[4]}.png?alt=media`
      : "",
    showingImagePath: product.images[0]
      ? `https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2FMedium%2Fstr%20image%2F${product.images[0]}.png?alt=media&token=dd117ea5-2906-48b3-919c-a28b05f31881`
      : "",
    path: `localhost:3000/product/${product.slug}`,
  }));
}
export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: ProductOrderField;
}): Promise<Product[]> {
  const saleorProducts = await saleorFetch({
    query: SearchProductsDocument,
    variables: {
      search: query || "",
      sortBy: query
        ? sortKey || ProductOrderField.Rank
        : sortKey === ProductOrderField.Rank
        ? ProductOrderField.Rating
        : sortKey || ProductOrderField.Rating,
      sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
    },
    tags: [TAGS.products],
  });

  return (
    saleorProducts.products?.edges.map((product) =>
      saleorProductToSadidaProduct(product.node)
    ) || []
  );
}
//Cart
export async function getCart(cartId: string): Promise<Cart | null> {
  const saleorCheckout = await saleorFetch({
    query: GetCheckoutByIdDocument,
    variables: {
      id: cartId,
    },
    cache: "no-store",
  });

  if (!saleorCheckout.checkout) {
    return null;
  }

  return saleorCheckoutToSadidaCart(saleorCheckout.checkout);
}

export async function createCart(): Promise<Cart> {
  const saleorCheckout = await saleorFetch({
    query: CreateCheckoutDocument,
    variables: {
      input: {
        channel: "default-channel",
        lines: [],
      },
    },
    cache: "no-store",
  });

  if (!saleorCheckout.checkoutCreate?.checkout) {
    console.error(saleorCheckout.checkoutCreate?.errors);
    throw new Error(`Couldn't create checkout.`);
  }

  return saleorCheckoutToSadidaCart(saleorCheckout.checkoutCreate.checkout);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const saleorCheckout = await saleorFetch({
    query: CheckoutAddLineDocument,
    variables: {
      checkoutId: cartId,
      lines: lines.map(({ merchandiseId, quantity }) => ({
        variantId: merchandiseId,
        quantity,
      })),
    },
    cache: "no-store",
  });

  if (!saleorCheckout.checkoutLinesAdd?.checkout) {
    console.error(saleorCheckout.checkoutLinesAdd?.errors);
    throw new Error(`Couldn't add lines to checkout.`);
  }

  return saleorCheckoutToSadidaCart(saleorCheckout.checkoutLinesAdd.checkout);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const saleorCheckout = await saleorFetch({
    query: CheckoutDeleteLineDocument,
    variables: {
      checkoutId: cartId,
      lineIds,
    },
    cache: "no-store",
  });

  if (!saleorCheckout.checkoutLinesDelete?.checkout) {
    console.error(saleorCheckout.checkoutLinesDelete?.errors);
    throw new Error(`Couldn't remove lines from checkout.`);
  }

  return saleorCheckoutToSadidaCart(
    saleorCheckout.checkoutLinesDelete.checkout
  );
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const saleorCheckout = await saleorFetch({
    query: CheckoutUpdateLineDocument,
    variables: {
      checkoutId: cartId,
      lines: lines.map(({ id, quantity }) => ({ lineId: id, quantity })),
    },
    cache: "no-store",
  });

  if (!saleorCheckout.checkoutLinesUpdate?.checkout) {
    console.error(saleorCheckout.checkoutLinesUpdate?.errors);
    throw new Error(`Couldn't update lines in checkout.`);
  }

  return saleorCheckoutToSadidaCart(
    saleorCheckout.checkoutLinesUpdate.checkout
  );
}
