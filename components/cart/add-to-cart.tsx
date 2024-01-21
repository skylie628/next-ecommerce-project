"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addLineToCartAction } from "@/lib/sadida/actions/cart";
import LoadingDots from "../LoadingDot";
import { ProductVariant, Product } from "@/lib/sadida/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
export function AddToCart({ product }: { product: Product }) {
  const { variants } = product || {};
  const router = useRouter();
  const searchParams = useSearchParams();
  const material = searchParams.get("material");
  const model = searchParams.get("model");
  const [isPending, startTransition] = useTransition();
  /*const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );*/
  //options =[{name:material, value:'red'},{name:model,value:nddd}]
  const selectedVariant =
    variants.length > 0 && material && model
      ? variants.filter((variant) => {
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
        })[0]
      : {};
  const availableForSale = selectedVariant?.reserved_available;
  const title =
    selectedVariant && selectedVariant.sku
      ? "Please select options"
      : !availableForSale
      ? "Out of stock"
      : undefined;
  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !selectedVariant}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !selectedVariant) return;

        startTransition(async () => {
          //add new product to carts
          const res = await addLineToCartAction({ sku: selectedVariant.sku });
          router.refresh();
        });
      }}
      className={clsx(
        "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90",
        {
          "cursor-not-allowed opacity-60 hover:opacity-60":
            !availableForSale || !selectedVariant,
          "cursor-not-allowed": isPending,
        }
      )}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? (
          <PlusIcon className="h-5" />
        ) : (
          <LoadingDots className="mb-3 bg-white" />
        )}
      </div>
      <span> Add To Cart </span>
    </button>
  );
}
