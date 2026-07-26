// app/page.tsx — homepage. Sections composed in Figma/design.md order.

import { Header } from "@/components/layout/Header";
import { VisionSplash } from "@/sections/VisionSplash";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { CounterBand } from "@/sections/CounterBand";
import { ServicesMarquee } from "@/sections/ServicesMarquee";
import { OurServices } from "@/sections/OurServices";
import { OurProjects } from "@/sections/OurProjects";
import { TestimonialSlider } from "@/sections/TestimonialSlider";
import { NewsArticles } from "@/sections/NewsArticles";
import { Faq } from "@/sections/Faq";
import { FooterCta } from "@/sections/FooterCta";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <VisionSplash />
      <Hero />
      <About />
      <CounterBand />
      <ServicesMarquee />
      <OurServices />
      <OurProjects />
      <TestimonialSlider />
      <NewsArticles />
      <Faq />
      <FooterCta />
      <Footer />
    </>
  );
}
