import React from "react";
import SignIn from "@/components/auth/SignIn";
export default function SigninPage() {
  return (
    <div className="m-auto light:bg-slate-100 dark:bg-neutral-900 md:w-full h-full flex justify-center items-center ">
      <SignIn />
    </div>
  );
}
