import React from "react";
import Cart from "@/components/cart";
import OpenCart from "@/components/cart/open-cart";
import MobileMenu from "./mobile-menu";
import { getMenu } from "@/lib/sadida";
import { Suspense } from "react";
import Link from "next/link";
import Search from "./search";
import LogoSquare from "@/components/icons/logo-square";
//type
import { Menu } from "@/lib/sadida/types";
const { SITE_NAME } = process.env;
export default async function Navbar() {
  //run on server
  const menu = await getMenu("next-js-frontend-header-menu");
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
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
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
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
