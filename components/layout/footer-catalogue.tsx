"use client";
import clsx from "clsx";
import { Catalogues } from "@/lib/sadida/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FooterCataloguesItem = ({ item }: { item: Catalogues }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
          {
            "text-black dark:text-neutral-300": active,
          }
        )}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default function FooterCatalogues({
  catalogues,
}: {
  catalogues: Catalogues[];
}) {
  if (!catalogues.length) return null;

  return (
    <nav>
      <ul>
        {catalogues.map((item: Catalogues) => {
          return <FooterCataloguesItem key={item.name} item={item} />;
        })}
      </ul>
    </nav>
  );
}
