"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import clsx from "clsx";
export default function AuthButtons({ className }) {
  const session = useSession();
  const router = useRouter();
  return !session.data ? (
    <>
      <li>
        <Link href="/auth/signup" className={clsx(className)}>
          Join us
        </Link>
      </li>
      <li>
        <Link href="/auth/signin" className={clsx(className)}>
          Sign in
        </Link>
      </li>
    </>
  ) : (
    <li>
      <Link
        href="#"
        onClick={() => {
          signOut({
            callbackUrl: `${process.env.NEXT_PUBLIC_SERVER}${window.location.pathname}`,
          });
          router.refresh();
        }}
        className={clsx(className)}
      >
        Logout
      </Link>
    </li>
  );
}
