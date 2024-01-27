"use client";
import { useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
export default function PrintSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
    threshold: 0.9,
  });
  return (
    <section
      ref={ref}
      className={clsx("relative w-full lg:h-[640px] mt-[12px] pt-10 ")}
    >
      <div className="relative z-50 ">
        <h2 className="text-stone-100  text-3xl md:text-4xl lg:text-5xl  font-bold text-center">
          sInk Gen3
        </h2>
        <h3 className="text-stone-100 text-lg md:text-xl xl:text-2xl font-medium text-center mt-1 md:mt-3 xl:mt-4">
          A long step into reality.
        </h3>
        <Link
          href=""
          className="text-red-600 text-xl font-medium  flex flex-row justify-center gap-1 mt-1 md:mt-3 xl:mt-4"
        >
          <span className="hover:underline">Look over </span>
          <ChevronRightIcon className="h-4 w-4 text-blue-700 mt-auto mb-1 font-bold" />
        </Link>
      </div>
      <div className={clsx("canvas ", inView && "trigger-canvas-animation")}>
        <img
          src="https://sadida.s3.ap-southeast-2.amazonaws.com/background.png"
          alt=""
          className={inView && "trigger-canvas-img-animation"}
        />
      </div>
    </section>
  );
}
