"use client";
import Price from "@/components/ui/price";
import { ProductVariant, Product } from "@/lib/sadida/types";
import { useSearchParams } from "next/navigation";
export default function DynamicPriceDisplay({ product }: { product: Product }) {
  const searchParams = useSearchParams();
  const material = searchParams.get("material");
  const model = searchParams.get("model");
  const { variants } = product || [];
  if (!material || !model)
    return (
      <Price
        minPrice={product.minPrice}
        maxPrice={product.maxPrice}
        currencyCode="USD"
      />
    );
  const selectedVariant =
    variants.filter((variant) => {
      const normalizeOptions =
        variant.options.reduce(
          (acc, option) => ({
            ...acc,
            [option.name.toLowerCase()]: option.value,
          }),
          {}
        ) || {};
      return (
        normalizeOptions.material === material &&
        normalizeOptions.model === model
      );
    })[0] || {};
  return (
    <Price
      minPrice={selectedVariant.price.toString()}
      maxPrice={selectedVariant.price.toString()}
      currencyCode="USD"
    />
  );
}
