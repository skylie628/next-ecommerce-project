import Footer from "@/components/layout/footer";
import Collections from "@/app/catalogues/collections";
import FilterList from "@/app/catalogues/filter";
import { sorting } from "@/lib/constants";
import { Suspense } from "react";

export default function CataloguesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { [key: string]: string | string[] | undefined };
}) {
  const catalogues = params?.device || "smartphone";
  console.log("catalogues la", params);
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          {<Collections catalogues={catalogues} />}
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
