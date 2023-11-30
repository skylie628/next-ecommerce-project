import { SortFilterItem } from "./sadida/types";
export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};
export enum ProductOrderField {
  CreatedAt = "CREATED_AT",
  MinimalPrice = "MINIMAL_PRICE",
  Rating = "RATING",
}
export const defaultSort: SortFilterItem = {
  name: "Trending",
  slug: "trending-desc",
  sortKey: ProductOrderField.Rating,
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    name: "Latest arrivals",
    slug: "latest-desc",
    sortKey: ProductOrderField.CreatedAt,
    reverse: true,
  },
  {
    name: "Price: Low to high",
    slug: "price-asc",
    sortKey: ProductOrderField.MinimalPrice,
    reverse: false,
  }, // asc
  {
    name: "Price: High to low",
    slug: "price-desc",
    sortKey: ProductOrderField.MinimalPrice,
    reverse: true,
  },
];

export const DEFAULT_OPTION = "Default Title";
