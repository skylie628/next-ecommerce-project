//component
import { Suspense } from "react";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Suspense>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
