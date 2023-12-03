import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { getSadidaProducts } from "@/lib/sadida";
import { ProductQueryCriteria } from "@/lib/sadida/types";
export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
  params,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
  params?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, keyword } = searchParams as { [key: string]: string };
  const { device } = params as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const queryCriteria: ProductQueryCriteria = {
    catalogues: device,
    keyword,
    pageIndex: 1,
  };
  const products = await getSadidaProducts({
    sortKey,
    reverse,
    query: queryCriteria,
  });
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {keyword ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{keyword}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
