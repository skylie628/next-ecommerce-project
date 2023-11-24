import { ProductOrderField } from "./sadida/generated/graphql";
export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};
export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: ProductOrderField;
  reverse: boolean;
};
export const defaultSort: SortFilterItem = {
  title: "Trending",
  slug: "trending-desc",
  sortKey: ProductOrderField.Rating,
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: ProductOrderField.PublishedAt,
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: ProductOrderField.MinimalPrice,
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: ProductOrderField.MinimalPrice,
    reverse: true,
  },
];

export const DEFAULT_OPTION = "Default Title";
