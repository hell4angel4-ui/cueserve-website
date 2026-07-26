// app/page.tsx — homepage. Sections are composed one at a time per SETUP.md's
// build order, matched against Figma nodes (design.md).

import { Header } from "@/components/layout/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
