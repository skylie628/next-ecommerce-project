import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { Suspense } from "react";
import { ThreeItemGrid } from "@/components/grid/three-items";
import HeroSection from "@/components/layout/hero/hero-section";
import PromoteSection from "@/components/layout/hero/promote-section";
import PrintSection from "@/components/layout/hero/print-section";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <>
      <HeroSection
        imageName="couple-collection"
        title="Couple Case"
        desc="Mark ownership. Be close."
        cta="view more"
      />
      <PromoteSection
        info={[
          {
            imageName: "img-glass-material-promo",
            title: "Glass Case",
            desc: "3 layers. Unfadeable.",
            cta: "view more",
          },
          {
            imageName: "img-color-promo",
            title: "Uv Frame",
            desc: "Find your color.",
            cta: "view more",
          },
          {
            imageName: "img-silicon-v2-material-promo",
            title: "Silicon Case",
            series: "series 2",
            desc: "x2 thickness. Same weight.",
            cta: "view more",
          },
          {
            imageName: "img-eye-promo",
            title: "Silicon Case",
            desc: "Full-eyes protection. Anti-scratch.",
            cta: "view more",
          },
        ]}
      />{" "}
      <Suspense>
        <PrintSection />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
