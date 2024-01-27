import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
type PromoteInfo = {
  imageName: string;
  series?: string;
  title: string;
  desc: string;
  cta: string;
};
export default function PromoteSection({ info }: { info: Array<PromoteInfo> }) {
  return (
    <div className="pt-[12px] gap-[12px] relative w-full max-w-[2560px] mx-auto  grid  grid-cols-1 md:grid-cols-2  bg-[#f5f5f7] tracking-wide">
      {info.map((item, id) => (
        <div
          key={id}
          className="relative h-[500px]  md:h-[490px] lg:h-[580px] w-full mx-auto overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <h2 className="text-stone-100  text-2xl md:text-3xl lg:text-4xl  font-bold text-center mt-10">
              {item.title}
            </h2>
            {item.series && (
              <h3 className="text-red-700 font-medium  text-md   text-center mt-1 tracking-wide">
                {item.series.toUpperCase()}
              </h3>
            )}
            <h3 className="text-stone-100 text-lg  xl:text-xl font-medium text-center mt-1  xl:mt-2">
              {item.desc}
            </h3>
            <Link
              href=""
              className="text-blue-500 text-xl font-medium  flex flex-row justify-center gap-1 mt-1  xl:mt-2"
            >
              <span className="hover:underline">Look over </span>
              <ChevronRightIcon className="h-4 w-4 text-blue-500 mt-auto mb-1 font-bold" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full  overflow-hidden">
            <figure
              className={clsx(
                "absolute left-1/2 transform -translate-x-1/2 w-full h-full ",
                item.imageName
              )}
            ></figure>
          </div>
        </div>
      ))}
    </div>
  );
}
