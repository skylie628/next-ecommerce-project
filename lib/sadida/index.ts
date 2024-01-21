import { createProductImgUrl, ensureStartsWith } from "../utils";
import { getCatalogueQuery } from "./queries/catalogue";
import { getProductQuery, getProductsQuery } from "./queries/product";
import { getCollectionsQuery } from "./queries/collection";
import { getCartQuery } from "./queries/cart";
import {
  addToCartMutation,
  decreaseLineQuantityFromCartMutation,
  removeLineFromCartMutation,
} from "./mutations/cart";
import {
  TypedDocumentString,
  GetCheckoutByIdDocument,
} from "./generated/graphql";
import { saleorCheckoutToSadidaCart } from "./mapper";
import { GRAPHQL_API_URL } from "@/constants/url";
//types
import {
  sadidaCatalogueOperation,
  sadidaProductsOperation,
  SadidaCollectionOperation,
  SadidaProductOperation,
  Cart,
  ProductQueryCriteria,
  SadidaEcommerceProduct,
  SadidaUserSignupOperation,
  SadidaMutateCartLineOperation,
  SadidaQueryCartOperation,
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
      maxPrice: product.maxPrice,
      minPrice: product.minPrice,
      score: product.score,
      n_o_reviews: product.n_o_reviews,
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
  const sadidaCart = await sadidaFetch<SadidaQueryCartOperation>({
    query: getCartQuery,
    variables: {
      cartId,
    },
    cache: "no-store",
  }).then((res) => res?.body?.data?.cart || {});
  return sadidaCart;
}

export async function addToCart({
  cartId,
  sku,
}: {
  cartId: string;
  sku: string;
}) {
  const sadidaAddToCart = await sadidaFetch<SadidaMutateCartLineOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      sku,
    },
    cache: "no-store",
  });

  return sadidaAddToCart;
}
export async function decreaseLineQuantityFromCart(
  cartId: string,
  sku: string
) {
  const returnedData = await sadidaFetch<SadidaMutateCartLineOperation>({
    query: decreaseLineQuantityFromCartMutation,
    variables: {
      cartId,
      sku,
    },
    cache: "no-store",
  });
  return returnedData;
}
export async function removeLineFromCart(cartId: string, sku: string) {
  const returnedData = await sadidaFetch<SadidaMutateCartLineOperation>({
    query: removeLineFromCartMutation,
    variables: {
      cartId,
      sku,
    },
    cache: "no-store",
  });

  return returnedData;
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
