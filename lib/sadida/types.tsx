export type Catalogues = {
  name: string;
  _id: string;
  path: string;
};
export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
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
export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};
export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SadiddaCommerceProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  // array of variant with node and edge
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};
export type Product = Omit<SadiddaCommerceProduct, "variants" | "images"> & {
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
  price: number;
  score: number;
  n_o_reviews: number;
  instock_reserved: number;
  instock_available: number;
};
export type SadidaEcommerceProduct = Omit<SadidaProduct, "images">;
export type SadidaBackdropEcommerceProduct = Omit<
  SadidaProduct,
  "images" | "instock_reserved" | "quantity" | "group"
> & {
  thumbnailPath: "string";
  showingImagePath: "string";
  path: "string";
};
// CART
export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type SadidaCommerceCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};
export type Cart = Omit<SadidaCommerceCart, "lines"> & {
  lines: CartItem[];
};
//Collection
export type SadidaCollection = {
  _id: string;
  name: string;
};
export type SadidaCollectionOperation = {
  data: SadidaCollection[];
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
      products?: Omit<
        SadidaEcommerceProduct,
        "quantity" | "instock_reserved" | "group"
      >;
      count: number;
    };
  };
  variables: {
    pageIndex: number;
    group?: string;
    sortBy?: string;
    catalogues?: string;
  };
};
