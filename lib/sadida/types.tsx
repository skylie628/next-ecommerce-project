export type Catalogues = {
  name: string;
  id: string;
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
