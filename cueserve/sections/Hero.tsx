"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { Marquee } from "@/components/ui/Marquee";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const SOFTWARE = ["Microsoft .NET", "Angular", "React", "Next.js", "HTML5", "CSS3", "JavaScript"];

const parentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Hero (design.md §6, Figma "Homepage scrolled view" 48:2). Left-aligned,
// 3-line headline with a literal em dash before the accent phrase, portrait
// placeholder alongside, and a software-logo marquee under the CTA row.
export function Hero() {
  return (
    <section className="bg-white pb-16 pt-24">
      <Container>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-5">
            <PlaceholderImage
              label="Hero background portrait — placeholder for Figma export"
              className="aspect-[4/5] w-full rounded-card"
            />
          </motion.div>

          <div className="md:col-span-7">
            <motion.h1 variants={itemVariants} className="text-hero">
              Crafting Modern
              <br />
              <span className="text-primary">— Vision For the</span>
              <br />
              Ambitious Brands
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
            >
              <p className="max-w-sm text-body-lg text-muted">
                We blend creativity with strategy to build digital experiences that move brands
                forward. From crafting standout websites.
              </p>
              <ButtonRoll href="#" variant="text">
                Get Started Now
              </ButtonRoll>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-16"
      >
        <Marquee>
          {SOFTWARE.map((name) => (
            <span key={name} className="px-8 text-h5 text-muted">
              {name}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
