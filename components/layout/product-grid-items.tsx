import Grid from "../grid";
import { GridTileImage } from "../grid/tile";
import { SadidaBackdropEcommerceProduct } from "@/lib/sadida/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: SadidaBackdropEcommerceProduct[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.slug} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={product.path}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.price.toString(),
                currencyCode: "VND",
              }}
              src={product.thumbnailPath}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
