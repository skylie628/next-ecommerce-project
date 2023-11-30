"use client";
//component
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Search from "./search";
import Link from "next/link";
//icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
//hooks
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
//types
import { EcommerceCatalogues } from "@/lib/sadida/types";
export default function MobileCatalogues({
  catalogues,
}: {
  catalogues: EcommerceCatalogues[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileCatalogues = () => setIsOpen(true);
  const closeMobileCatalogues = () => setIsOpen(false);
  useEffect(() => {
    //!requirement: when user resize windows from medium screen to wide screen, MobileCatalogues auto close
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  useEffect(() => {
    //requirement: when user navigate through page, MobileCatalogues auto close
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      {" "}
      <button
        onClick={openMobileCatalogues}
        aria-label="Open mobile Catalogues"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileCatalogues} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={closeMobileCatalogues}
                  aria-label="Close mobile Catalogues"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Search />
                </div>
                {catalogues.length ? (
                  <ul className="flex w-full flex-col">
                    {catalogues.map((item: EcommerceCatalogues) => (
                      <li
                        className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                        key={item.name}
                      >
                        <Link href={item.path} onClick={closeMobileCatalogues}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
