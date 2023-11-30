import clsx from "clsx";
import { Suspense } from "react";
import { getCollections } from "@/lib/sadida";
import FilterList from "./filter";
async function CollectionList() {
  const collections = await getCollections("smartphone");
  /*const collections = [
    { _id: "0", name: "Cyberpunk", slug: "cyberpunk", path: "cyberpunk" },
    { _id: "1", name: "Messi", slug: "messi", path: "messi" },
    { _id: "3", name: "Mpappe", slug: "mpappe", path: "mpappe" },
    { _id: "4", name: "Neymar", slug: "neymar", path: "neymar" },
    {
      _id: "5",
      name: "Minimalist",
      slug: "minimalist",
      path: "minimalist",
    },
    {
      _id: "6",
      name: "12 Zodiacs",
      slug: "12-zodiacs",
      path: "12-zodiacs",
    },
    { _id: "7", name: "Couple", slug: "couple", path: "couple" },
    { _id: "8", name: "Astronaut", slug: "astronaut", path: "astronaut" },
    { _id: "9", name: "Unique", slug: "unique", path: "unique" },
    {
      _id: "10",
      name: "Japan Vibe",
      slug: "japan-vibe",
      path: "japan-vibe",
    },
  ];*/
  return <FilterList list={collections} title="Collections" />;
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
