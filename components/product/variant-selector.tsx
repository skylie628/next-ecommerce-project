"use client";
import clsx from "clsx";
import { atom, useAtom } from "jotai";
import { ProductOption, ProductVariant } from "@/lib/sadida/types";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useEffect } from "react";
type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};
export const selectedVariantAtom = atom(null);
export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const material = searchParams.get("material");
  const model = searchParams.get("model");
  const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom);
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.value.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }
  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.sku,
    sku: variant.sku,
    availableForSale: variant.reserved_available > 0,
    price: variant.price,
    reserved_available: variant.reserved_available,
    instock_available: variant.instock_available,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    //flatten the variant from array to object
    ...variant.options.reduce(
      (acc, option) => ({
        ...acc,
        [option.name.toLowerCase()]: option.value,
      }),
      {}
    ),
  }));
  useEffect(() => {
    //get seletected variants
    if (material && model) {
      const selectedVariant = combinations.find(
        (normalizeOptions) =>
          normalizeOptions.material === material &&
          normalizeOptions.model === model
      );
      if (selectedVariant) {
        setSelectedVariant(selectedVariant);
      }
    }
  }, [material, model]);
  return options.map((option) => (
    <dl className="mb-8" key={option.id}>
      <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
        {option.value.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );
          optionSearchParams.set(optionNameLowerCase, value);
          //url for every option
          const optionUrl = createUrl(pathname, optionSearchParams);
          const filtered = Array.from(optionSearchParams.entries()).filter(
            ([key, value]) =>
              options.find(
                (option) =>
                  option.name.toLowerCase() === key &&
                  option.value.includes(value)
              )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) =>
                combination[key] === value && combination.availableForSale
            )
          );
          const isActive = searchParams.get(optionNameLowerCase) === value;

          // dynamic render something that isn't clickable.
          const DynamicTag = isAvailableForSale ? Link : "p";
          const dynamicProps = {
            ...(isAvailableForSale && { scroll: false }),
          };

          return (
            <DynamicTag
              key={value}
              aria-disabled={!isAvailableForSale}
              href={optionUrl}
              title={`${option.name} ${value}${
                !isAvailableForSale ? " (Out of Stock)" : ""
              }`}
              className={clsx(
                "flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                {
                  "cursor-default ring-2 ring-blue-600": isActive,
                  "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ":
                    !isActive && isAvailableForSale,
                  "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700":
                    !isAvailableForSale,
                }
              )}
              {...dynamicProps}
            >
              {value}
            </DynamicTag>
          );
        })}
      </dd>
    </dl>
  ));
}
