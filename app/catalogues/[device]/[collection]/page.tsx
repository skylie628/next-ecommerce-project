import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { ProductQueryCriteria } from "@/lib/sadida/types";
import { getSadidaProducts } from "@/lib/sadida";
export const runtime = "edge";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function CataloguesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchValue = "";
  const { sort, device, collection } = searchParams as {
    [key: string]: string;
  };
  const { sortKey, reverse } =
    sorting.find((criteria) => criteria.slug === sort) || defaultSort;
  const queryCriteria: ProductQueryCriteria = {
    catalogues: device,
    group: collection && collection != "all" ? collection : null,
    pageIndex: 1,
  };
  //const products = await getProducts({ sortKey, reverse, query: searchValue });
  const products =
    (await getSadidaProducts({
      query: queryCriteria,
      sortKey: sortKey,
      reverse: reverse,
    })) || [];
  const resultsText = products.length > 1 ? "results" : "result";
  return (
    <>
      {device ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match filter"
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products?.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
