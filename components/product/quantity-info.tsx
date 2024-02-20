"use client";
import Price from "@/components/ui/price";
import { ProductVariant, Product } from "@/lib/sadida/types";
import { useAtom } from "jotai";
import { selectedVariantAtom } from "./variant-selector";
export default function QuantityInfo() {
  const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom);
  if (!selectedVariant) return <></>;

  return (
    <div className="pb-5">
      <div className="flex gap-3">
        <span>Instock available</span>
        <span>{selectedVariant["instock_available"]}</span>
      </div>
      <div className="flex gap-3">
        <span>Reserved available</span>
        <span>{selectedVariant["reserved_available"]}</span>
      </div>
    </div>
  );
}
