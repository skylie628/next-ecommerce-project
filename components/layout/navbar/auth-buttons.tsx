"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
export default function AuthButtons() {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  return !session.data ? (
    <>
      <li>
        <Link href="/auth/signup" className=" hover:text-slate-500">
          Join us
        </Link>
      </li>
      <li>
        <Link href="/auth/signin" className=" hover:text-slate-500">
          Sign in
        </Link>
      </li>
    </>
  ) : (
    <li>
      <Link
        href="#"
        onClick={() => {
          console.log(
            "signOut ",
            `${process.env.NEXT_PUBLIC_SERVER}${window.location.pathname}`
          );
          signOut({
            callbackUrl: `${process.env.NEXT_PUBLIC_SERVER}${window.location.pathname}`,
          });
          router.refresh();
        }}
        className=" hover:text-slate-500"
      >
        Logout
      </Link>
    </li>
  );
}
