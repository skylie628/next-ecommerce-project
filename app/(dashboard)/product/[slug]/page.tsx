//component
import Gallery from "@/components/product/gallery";
import RelatedProducts from "@/components/product/related-products";
import Footer from "@/components/layout/footer";
import { ProductDescription } from "@/components/product/product-description";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/sadida";
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  if (!product) return notFound();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.title,
    image: product.images[0].thumbnail,
    offers: {
      "@type": "AggregateOffer",

      priceCurrency: "VND",
      highPrice: product.maxPrice,
      lowPrice: product.minPrice,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery images={product.images} />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>{/*<RelatedProducts id={product.id}> />*/}</Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
