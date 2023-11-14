import { GetProductBySlugQuery, VariantFragment } from "./generated/graphql";
import { Product } from "./types";
import { parseEditorJsToHtml } from "./editorjs";
export function saleorVariantsToSadidaOptions(
  variants: VariantFragment[] | null | undefined
) {
  return (
    variants
      ?.flatMap((variant) => {
        return variant.attributes.flatMap((attribute) => {
          return {
            id: attribute.attribute.slug || "",
            name: attribute.attribute.name || "",
            values:
              attribute.attribute.choices?.edges.map(
                (choice) => choice.node.name || ""
              ) || [],
          };
        });
      })
      .filter(
        (value1, idx, arr) =>
          // filter unique
          arr.findIndex((value2) => value1.id === value2.id) === idx
      ) || []
  );
}
export function saleorVariantsToSadidaVariants(
  variants: null | undefined | VariantFragment[],
  isAvailableForPurchase: null | undefined | boolean
): Product["variants"] {
  return (
    variants?.map((variant) => {
      return {
        id: variant.id,
        title: variant.name,
        availableForSale: isAvailableForPurchase || true,
        selectedOptions: variant.attributes.flatMap((attribute) => {
          return attribute.values.map((value) => {
            return {
              name: attribute.attribute.name || "",
              value: value.name || "",
            };
          });
        }),
        price: {
          amount: variant.pricing?.price?.gross.amount.toString() || "0",
          currencyCode: variant.pricing?.price?.gross.currency || "",
        },
      };
    }) || []
  );
}
export function saleorProductToSadidaProduct(
  product: Exclude<GetProductBySlugQuery["product"], null | undefined>
): Product {
  const images =
    product.media
      ?.filter((media) => media.type === "IMAGE")
      .map((media) => {
        return {
          url: media.url,
          altText: media.alt || product.seoTitle || product.name,
          width: 2048,
          height: 2048,
        };
      }) || [];

  return {
    id: product.id,
    handle: product.slug,
    availableForSale: product.isAvailableForPurchase || true,
    title: product.name,
    description: product.description || "",
    descriptionHtml: product.description
      ? parseEditorJsToHtml(product.description)
      : "",
    options: saleorVariantsToSadidaOptions(product.variants),
    priceRange: {
      maxVariantPrice: {
        amount:
          product.pricing?.priceRange?.stop?.gross.amount.toString() || "0",
        currencyCode: product.pricing?.priceRange?.stop?.gross.currency || "",
      },
      minVariantPrice: {
        amount:
          product.pricing?.priceRange?.start?.gross.amount.toString() || "0",
        currencyCode: product.pricing?.priceRange?.start?.gross.currency || "",
      },
    },
    variants: saleorVariantsToSadidaVariants(
      product.variants,
      product.isAvailableForPurchase
    ),
    images: images,
    featuredImage: images[0]!,
    seo: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || "",
    },
    tags: product.collections?.map((c) => c.name) || [],
    updatedAt: product.updatedAt,
  };
}
