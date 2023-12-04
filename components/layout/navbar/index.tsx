import React from "react";
import Cart from "@/components/cart";
import MobileCatalogues from "./mobile-catalogues";
import OpenCart from "@/components/cart/open-cart";
import AuthButtons from "./auth-buttons";
import { Suspense } from "react";
import Link from "next/link";
import Search from "./search";
import LogoSquare from "@/components/icons/logo-square";
import { getCatalogues } from "@/lib/sadida";
//type
import { EcommerceCatalogues } from "@/lib/sadida/types";
const { SITE_NAME } = process.env;
export default async function Navbar() {
  //run on server
  const catalogues = (await getCatalogues()) || [];
  return (
    <div className="">
      <div className="flex justify-between p-2 lg:px-6 bg-white">
        <span>New Promotion up to 50% sale off this Christmas</span>
        <ul className="flex gap-2 font-bold text-sm ">
          <li>
            <Link href="#" className=" hover:text-slate-500">
              Find a store
            </Link>
          </li>
          <li>
            <Link href="#" className=" hover:text-slate-500">
              Help
            </Link>
          </li>
          <AuthButtons />
        </ul>
      </div>

      <nav className=" p-4 lg:px-6 relative flex items-center justify-between">
        <div className="block flex-none md:hidden">
          <MobileCatalogues catalogues={catalogues} />
        </div>
        <div></div>
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
                {catalogues.map((item: EcommerceCatalogues) => (
                  <li key={item._id}>
                    <Link
                      href={item.path}
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
    </div>
  );
}
