"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { Marquee } from "@/components/ui/Marquee";

// Backdrop word — placeholder for the exported "V-I-S-I-O-N" SVG letter set
// (design.md §8, §9). Rendered as styled text until those assets exist.
const VISION = ["V", "I", "S", "I", "O", "N"];

const letterVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contentVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: VISION.length * 0.08 + 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Hero (design.md §6, Figma node 48:11): vertical stack, 200px top padding to
// clear the fixed header, 20px gap. Letters drop in first, then headline +
// paragraph + CTA stagger in, then the results ticker plays underneath.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-blue pt-[200px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex w-full justify-between px-6 text-[12vw] font-display leading-none text-primary-100 select-none md:px-16"
      >
        {VISION.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="show"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <Container className="relative flex flex-col items-center gap-5 pb-16 text-center">
        <motion.div
          className="flex flex-col items-center gap-5"
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} className="max-w-3xl text-hero">
            Crafting Modern — <span className="text-primary">Vision</span> For the Ambitious
            Brands
          </motion.h1>
          <motion.p variants={itemVariants} className="max-w-xl text-body-lg text-muted">
            We blend creativity with strategy to build digital experiences that move brands
            forward.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ButtonRoll href="#" variant="text">
              Get Started Now
            </ButtonRoll>
          </motion.div>
        </motion.div>
      </Container>

      <div className="relative border-t border-line bg-white/60 py-6">
        <Marquee>
          <span className="px-8 text-h5">Real Results ✳</span>
          <span className="px-8 text-h5">Modern Design ✳</span>
          <span className="px-8 text-h5">Ambitious Brands ✳</span>
        </Marquee>
      </div>
    </section>
  );
}
