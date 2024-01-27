import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
export default function HeroSection({
  imageName,
  title = "",
  desc = "",
  cta = "",
}: {
  imageName: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <div className="relative w-full h-[500px] sm:h-[548px] md:h-[617px] lg:h-[624px] max-w-[2560px] mx-auto">
      <Link
        href=""
        className="w-full h-full container mx-auto overflow-hidden"
      ></Link>
      <div className="w-full h-full container mx-auto overflow-hidden">
        <div className="relative z-10 flex flex-col">
          <h2 className="text-stone-900  text-3xl md:text-4xl lg:text-5xl  font-bold text-center mt-10">
            {title}
          </h2>
          <h3 className="text-stone-900 text-lg md:text-xl xl:text-2xl font-medium text-center mt-1 md:mt-3 xl:mt-4">
            {desc}
          </h3>
          <Link
            href=""
            className="text-blue-600 text-xl font-medium  flex flex-row justify-center gap-1 mt-1 md:mt-3 xl:mt-4"
          >
            <span className="hover:underline">Look over </span>
            <ChevronRightIcon className="h-4 w-4 text-blue-700 mt-auto mb-1 font-bold" />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full  overflow-hidden">
          <figure className="absolute left-1/2 transform -translate-x-1/2 w-full h-full img-couple-collection"></figure>
        </div>
      </div>
    </div>
  );
}
