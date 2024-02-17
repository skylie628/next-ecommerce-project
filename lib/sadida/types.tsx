export enum ProductOrderField {
  Group = "GROUP",
  CreatedAt = "CREATED_AT",
  Date = "DATE",
  LastModified = "LAST_MODIFIED",
  LastModifiedAt = "LAST_MODIFIED_AT",
  MinimalPrice = "MINIMAL_PRICE",

  Name = "NAME",
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Price = "PRICE",
  /** Sort products by rating. */
  Rating = "RATING",
  /** Sort products by type. */
  Type = "TYPE",
}
enum Role {
  Member = "MEMBER",
  Admin = "ADMIN",
  Guess = "GUESS",
}
export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  emailVerified: boolean;
  role: string;
};
export type Catalogues = {
  name: string;
  _id: string;
  slug: string;
};
export type EcommerceCatalogues = Omit<Catalogues, "slug"> & { path: string };
export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};
export type ProductImage = {
  large: string;
  thumbnail: string;
  alt: string;
};
export type ProductQueryCriteria = {
  catalogues: string;
  group?: string | null;
  keyword?: string;
  pageIndex: number;
};
export type SortFilterItem = {
  name: string;
  slug: string | null;
  sortKey: ProductOrderField;
  reverse: boolean;
};
export type SEO = {
  title: string;
  description: string;
};
export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Money = {
  amount: string;
  currencyCode: string;
};
export type ProductOptions = {
  name: string;
  value: string[];
};
export type Option = {
  name: string;
  value: string;
};
export type ProductVariant = {
  _id: string;
  productId: string;
  sku: string;
  title: string;
  options: Option[];
  instock_available: number;
  reserved_available: number;
  price: number;
};

export type Product = Omit<
  SadidaBackdropEcommerceProduct,
  "variants" | "images"
> & {
  variants: ProductVariant[];
  images: Image[];
};

export type SadidaProduct = {
  title: string;
  slug: string;
  quantity: string;
  sku: string;
  images: string[];
  group: string;
  catalogues: string;
  minPrice: number;
  maxPrice: number;
  score: number;
  n_o_reviews: number;
  options: ProductOptions[];
  variants: ProductVariant[];
};
export type SadidaEcommerceProduct = Omit<SadidaProduct, "images"> & {
  images: ProductImage[];
};
export type SadidaBackdropEcommerceProduct = Omit<
  SadidaProduct,
  | "images"
  | "instock_reserved"
  | "quantity"
  | "group"
  | "catalogues"
  | "options"
  | "variants"
> & {
  thumbnailPath: string;
  showingImagePath: string;
  path: string;
};
//Collection
export type SadidaCollection = {
  _id: string;
  name: string;
  slug: string;
  path: string;
};
export type SadidaCollectionOperation = {
  data: { collections: SadidaCollection[] };
  variables: { catalogues: string };
};

export type SadidaCommerceCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};
export type Collection = SadidaCommerceCollection & {
  path: string;
};

//Catalogues
export type sadidaCatalogueOperation = {
  data: {
    catalogues?: Catalogues[];
  };
  variables: {};
};
//products
export type sadidaProductsOperation = {
  data: {
    products?: {
      products?: [
        Omit<SadidaProduct, "quantity" | "group" | "options" | "variants">
      ];
      count: number;
    };
  };
  variables: {
    query: ProductQueryCriteria;
    sortKey: string;
    reverse: boolean;
  };
};

export type SadidaProductOperation = {
  data: { product: SadidaProduct };
  variables: { slug: string };
};
//User
type ReturnUser = Omit<User, "password">;
export type SadidaUserSignupOperation = {
  data: ReturnUser;
  variables: { name: string; email: string; password: string };
};
// CART
export type Line = {
  sku: string;
  productTitle: string;
  title: string;
  price: string;
  options: string;
  images: string;
  slug: string;
  quantity: number;
};

export type Cart = {
  id: string;
  totalPrice: number;
  taxes: number;
  lines: [Line];
};
export type SadidaMutateCartLineOperation = {
  data: { cartId: string };
  variables: { cartId: string; sku: string };
};
export type SadidaQueryCartOperation = {
  data: Cart;
  variables: { cartId: string };
};
