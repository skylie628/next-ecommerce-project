import { SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from "../constants";
import { createProductImgUrl, ensureStartsWith } from "../utils";
import { getCatalogueQuery } from "./queries/catalogue";
import { getProductQuery, getProductsQuery } from "./queries/product";
import { getCollectionsQuery } from "./queries/collection";
import {
  TypedDocumentString,
  GetProductBySlugDocument,
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
import { ProductOrderField } from "../constants";
import { GRAPHQL_API_URL } from "@/constants/url";
import { invariant } from "./utils";
//types
import {
  sadidaCatalogueOperation,
  sadidaProductsOperation,
  SadidaCollectionOperation,
  SadidaProductOperation,
  Product,
  Cart,
  ProductQueryCriteria,
  SadidaEcommerceProduct,
  SadidaUserSignupOperation,
} from "./types";
import { createUserMutation } from "./mutations/user";
const endpoint = process.env.SALEOR_INSTANCE_URL;
const sadidaEndpoint = GRAPHQL_API_URL;
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
  // invariant(endpoint, `Missing SALEOR_INSTANCE_URL!`);

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
      ...(tags && { next: { tags } }),
    });
    const body = await result.json();
    if (body.errors) {
      throw body.errors[0];
    }
    return {
      status: result.result,
      body,
    };
  } catch (err) {
    throw {
      error: err,
      query,
    };
  }
}

//CATALOGUE
export async function getCatalogues() {
  const catalogues = await sadidaFetch<sadidaCatalogueOperation>({
    query: getCatalogueQuery,
  });
  return catalogues?.body?.data?.catalogues?.map((cataloguesItem) => ({
    _id: cataloguesItem._id,
    name: cataloguesItem.name,
    path: `/catalogues/${cataloguesItem.slug}`,
  }));
}

//COLLECTION
export async function getCollections(catalogues: string) {
  const collections = await sadidaFetch<SadidaCollectionOperation>({
    query: getCollectionsQuery,
    variables: { catalogues },
  });
  const default1Collection = {
    _id: -1,
    name: "All",
    slug: "all",
    path: `/catalogues/${catalogues}`,
  };
  return [
    default1Collection,
    ...(collections?.body?.data?.collections?.map((collection) => ({
      ...collection,
      path: `/catalogues/${catalogues}/${collection.slug}`,
    })) || []),
  ];
}

// PRODUCTS

export async function getProduct(
  slug: string
): Promise<SadidaEcommerceProduct | undefined> {
  let sadidaProduct = await sadidaFetch<SadidaProductOperation>({
    query: getProductQuery,
    variables: { slug },
  });

  if (!sadidaProduct?.body?.data?.product) {
    throw new Error(`Product not found: ${slug}`);
  }
  const { images, ...returnProduct } = sadidaProduct.body.data.product;
  return {
    images: [
      {
        large: createProductImgUrl(images[0], "str image"),
        thumbnail: createProductImgUrl(images[2], "straight image thumbnail"),
        alt: `straight image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl(images[1], "side image"),
        thumbnail: createProductImgUrl(images[3], "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl("default1", "side image"),
        thumbnail: createProductImgUrl("default1", "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
      {
        large: createProductImgUrl("default2", "side image"),
        thumbnail: createProductImgUrl("default2", "side image thumbnail"),
        alt: `side image of product ${returnProduct.title}`,
      },
    ],
    ...returnProduct,
  };
}

export async function getSadidaProducts({
  query,
  sortKey,
  reverse,
}: {
  query: ProductQueryCriteria;
  sortKey: string;
  reverse: boolean;
}) {
  const products = await sadidaFetch<sadidaProductsOperation>({
    query: getProductsQuery,
    variables: {
      query,
      sortKey,
      reverse,
    },
  }).catch((err) => console.log(err));
  const returnedProducts =
    products?.body?.data?.products?.products?.map((product) => ({
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
      path: `/product/${product.slug}`,
    })) || [];
  return returnedProducts;
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
        channel: "default1-channel",
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
//User
export async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const userInfo = await sadidaFetch<SadidaUserSignupOperation>({
    query: createUserMutation,
    variables: { name, email, password },
  });
  return userInfo;
}
