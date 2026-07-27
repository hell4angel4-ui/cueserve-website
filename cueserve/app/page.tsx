// app/page.tsx — homepage. Sections composed in Figma/design.md order.

import { Header } from "@/components/layout/Header";
import { IntroPin } from "@/sections/IntroPin";
import { TechMarquee } from "@/sections/TechMarquee";
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
      <IntroPin />
      <TechMarquee />
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
