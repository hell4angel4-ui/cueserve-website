// app/page.tsx — homepage. VisionSplash (above-the-fold) is followed by Hero
// (the "Homepage scrolled view" section) as the user scrolls, per Figma.

import { Header } from "@/components/layout/Header";
import { VisionSplash } from "@/sections/VisionSplash";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <VisionSplash />
      <Hero />
    </>
  );
}
