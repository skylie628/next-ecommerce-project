import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { Suspense } from "react";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
