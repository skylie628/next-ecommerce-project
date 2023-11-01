import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
// exact type: object must have the same type and attribute name

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: string;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: string;
  /** The `Day` scalar type represents number of days by integer value. */
  Day: unknown;
  /**
   * Custom Decimal implementation.
   *
   * Returns Decimal as a float in the API,
   * parses float to the Decimal on the way back.
   */
  Decimal: number;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: unknown;
  JSON: unknown;
  JSONString: string;
  /**
   * Metadata is a map of key-value pairs, both keys and values are `String`.
   *
   * Example:
   * ```
   * {
   *     "key1": "value1",
   *     "key2": "value2"
   * }
   * ```
   */
  Metadata: Record<string, string>;
  /** The `Minute` scalar type represents number of minutes by integer value. */
  Minute: unknown;
  /**
   * Nonnegative Decimal scalar implementation.
   *
   * Should be used in places where value must be nonnegative (0 or greater).
   */
  PositiveDecimal: number;
  UUID: string;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: unknown;
  WeightScalar: number;
  /** _Any value scalar as defined by Federation spec. */
  _Any: unknown;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: { hash: string }) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
//MENU
export type GetMenuBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetMenuBySlugQuery = {
  menu?: {
    id: string;
    slug: string;
    name: string;
    items?: Array<{
      id: string;
      name: string;
      url?: string | null;
      children?: Array<{
        id: string;
        name: string;
        url?: string | null;
        children?: Array<{
          id: string;
          name: string;
          url?: string | null;
          children?: Array<{
            id: string;
            name: string;
            url?: string | null;
            collection?: {
              slug: string;
              products?: { totalCount?: number | null } | null;
            } | null;
            category?: {
              slug: string;
              products?: { totalCount?: number | null } | null;
            } | null;
            page?: { slug: string } | null;
          }> | null;
          collection?: {
            slug: string;
            products?: { totalCount?: number | null } | null;
          } | null;
          category?: {
            slug: string;
            products?: { totalCount?: number | null } | null;
          } | null;
          page?: { slug: string } | null;
        }> | null;
        collection?: {
          slug: string;
          products?: { totalCount?: number | null } | null;
        } | null;
        category?: {
          slug: string;
          products?: { totalCount?: number | null } | null;
        } | null;
        page?: { slug: string } | null;
      }> | null;
      collection?: {
        slug: string;
        products?: { totalCount?: number | null } | null;
      } | null;
      category?: {
        slug: string;
        products?: { totalCount?: number | null } | null;
      } | null;
      page?: { slug: string } | null;
    }> | null;
  } | null;
};
export const GetMenuBySlugDocument = new TypedDocumentString(`
    query GetMenuBySlug($slug: String!) {
  menu(slug: $slug, channel: "default-channel") {
    id
    slug
    name
    items {
      ...MenuItem
      children {
        ...MenuItem
        children {
          ...MenuItem
          children {
            ...MenuItem
          }
        }
      }
    }
  }
}
    fragment MenuItem on MenuItem {
  id
  name
  url
  collection {
    slug
    products(first: 0) {
      totalCount
    }
  }
  category {
    slug
    products(channel: "default-channel", first: 0) {
      totalCount
    }
  }
  page {
    slug
  }
}`) as unknown as TypedDocumentString<
  GetMenuBySlugQuery,
  GetMenuBySlugQueryVariables
>;
export type MenuItemFragment = {
  id: string;
  name: string;
  url?: string | null;
  collection?: {
    slug: string;
    products?: { totalCount?: number | null } | null;
  } | null;
  category?: {
    slug: string;
    products?: { totalCount?: number | null } | null;
  } | null;
  page?: { slug: string } | null;
};
