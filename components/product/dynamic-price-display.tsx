"use client";
import Price from "@/components/ui/price";
import { ProductVariant, Product } from "@/lib/sadida/types";
import { useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { selectedVariantAtom } from "./variant-selector";
export default function DynamicPriceDisplay({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom);
  if (!selectedVariant)
    return (
      <Price
        minPrice={product.minPrice}
        maxPrice={product.maxPrice}
        currencyCode="USD"
      />
    );

  return (
    <Price
      minPrice={selectedVariant.price.toString()}
      maxPrice={selectedVariant.price.toString()}
      currencyCode="USD"
    />
  );
}
