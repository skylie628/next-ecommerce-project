import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo-square";
export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-5">
      <figure className="h-full block w-full relative lg:col-span-2">
        <Image
          src="/images/bg-auth.jpg"
          alt="Model handling a case"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 object-cover opacity-50 brightness-50 hover: brightness-80 "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link
          href="/"
          className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight "
        >
          <LogoIcon />
          <span>{"Sadida"}</span>
        </Link>
        <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base">
          <span>created by </span>

          <a
            href="https://unsplash.com/ja/@pixelperfektion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            className="hover:underline"
          >
            Skylie
          </a>
        </div>
      </figure>
      <main className="bg-slate-100 container absolute top-1/2  col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-3">
        {children}
      </main>
    </div>
  );
}
