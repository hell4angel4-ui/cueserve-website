"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { Marquee } from "@/components/ui/Marquee";

// Headline units for the stagger reveal. Verified against arooth.webflow.io:
// the real hero animates its actual headline text letter/word-by-word (GSAP
// SplitText) — there's no separate giant backdrop word. "Vision For the" is
// the blue-accented phrase; the small bar mirrors the site's decorative
// accent-line span between "Crafting Modern" and "Vision For the".
const HEADLINE: { text: string; accent?: boolean }[] = [
  { text: "Crafting" },
  { text: "Modern" },
  { text: "Vision", accent: true },
  { text: "For", accent: true },
  { text: "the", accent: true },
  { text: "Ambitious" },
  { text: "Brands" },
];

const parentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const headlineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const wordVariants: Variants = {
  hidden: { y: -40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Hero (design.md §6, Figma node 48:11 — structure/motion cross-checked
// against arooth.webflow.io). 200px top padding clears the sticky header.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-blue pt-[200px]">
      <Container className="relative flex flex-col items-center gap-5 pb-16 text-center">
        <motion.div
          className="flex flex-col items-center gap-5"
          variants={parentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={headlineVariants}
            className="flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-hero"
          >
            {HEADLINE.map(({ text, accent }, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                {i === 2 && (
                  <motion.span
                    aria-hidden="true"
                    variants={wordVariants}
                    className="inline-block h-[0.6em] w-3 rounded-pill bg-primary align-middle"
                  />
                )}
                <motion.span variants={wordVariants} className={accent ? "text-primary" : undefined}>
                  {text}
                </motion.span>
              </span>
            ))}
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
