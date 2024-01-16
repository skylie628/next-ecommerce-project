import { AddToCart } from "../cart/add-to-cart";
import Price from "../ui/price";
import Prose from "../ui/prose";
import { SadidaEcommerceProduct } from "@/lib/sadida/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({
  product,
}: {
  product: SadidaEcommerceProduct;
}) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            minPrice={product.minPrice}
            maxPrice={product.maxPrice}
            currencyCode="USD"
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      <Prose
        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
        html="Brand new design with funny emoji"
      />

      <AddToCart variants={product} availableForSale={true} />
    </>
  );
}
