import React from "react";
import Cart from "@/components/cart";
import MobileMenu from "./mobile-menu";
import OpenCart from "@/components/cart/open-cart";
import { Suspense } from "react";
import Link from "next/link";
import Search from "./search";
import LogoSquare from "@/components/icons/logo-square";
import { getCatalogue } from "@/lib/sadida";
//type
import { Catalogues } from "@/lib/sadida/types";
const { SITE_NAME } = process.env;
export default async function Navbar() {
  //run on server
  const catalogues = (await getCatalogue()) || [];
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={catalogues} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-5/12">
          <Link
            href="/"
            aria-label="Go back home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {catalogues.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {catalogues.map((item: Catalogues) => (
                <li key={item._id}>
                  <Link
                    href={`localhost:3000/catalogues/${item.name.toLowerCase()}`}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-3/12">
          <Search />
        </div>
        <div className="flex justify-end md:w-4/12">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
