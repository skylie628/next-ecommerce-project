import { AddToCart } from "../cart/add-to-cart";
import { Provider } from "jotai";
import Prose from "../ui/prose";
import { SadidaEcommerceProduct } from "@/lib/sadida/types";
import { VariantSelector } from "./variant-selector";
import QuantityInfo from "./quantity-info";
import DynamicPriceDisplay from "./dynamic-price-display";
export function ProductDescription({
  product,
}: {
  product: SadidaEcommerceProduct;
}) {
  return (
    <Provider>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <DynamicPriceDisplay product={product} />
        </div>
      </div>
      <Prose
        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
        html="Brand new design with funny emoji"
      />
      <VariantSelector options={product.options} variants={product.variants} />
      <QuantityInfo />
      <AddToCart product={product} availableForSale={true} />
    </Provider>
  );
}
