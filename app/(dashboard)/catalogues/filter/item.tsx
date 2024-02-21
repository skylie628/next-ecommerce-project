"use client";

import clsx from "clsx";
import { SortFilterItem } from "@/lib/sadida/types";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ListItem, PathFilterItem } from ".";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  //
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete("keyword");
  newParams.delete("keyword", createUrl(item.path, newParams));
  const DynamicTag = active ? "p" : Link;
  console.log("pathname la");
  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.name}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          "w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100",
          {
            "underline underline-offset-4": active,
          }
        )}
      >
        {item.name}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  const keyword = searchParams.get("keyword");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(keyword && { keyword }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? "p" : Link;

  return (
    <li
      className="mt-2 flex text-sm text-black dark:text-white"
      key={item.name}
    >
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        passHref={true}
        className={clsx("w-full hover:underline hover:underline-offset-4", {
          "underline underline-offset-4": active,
        })}
      >
        {item.name}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
