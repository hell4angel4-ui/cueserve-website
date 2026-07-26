"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const letterVariants: Variants = {
  hidden: { y: -60, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// clamp() (not raw vw) so the wordmark never overflows narrow viewports —
// five letters + the wide O-placeholder would otherwise clip on mobile.
const LETTER_SIZE = "text-[clamp(2.75rem,13vw,9rem)]";
const LETTER_HEIGHT = "h-[clamp(2.75rem,13vw,9rem)]";

// Above-the-fold VISION splash (Figma frame "Homepage", 16:18). Giant
// wordmark with the "O" replaced by a masked photo, over a blue-to-white
// gradient with a decorative grid overlay. No real photography exists yet
// (design.md §9), so the "O" uses a placeholder graphic.
export function VisionSplash() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-500 via-primary-100 to-white pb-24 pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:8.33%_25%]"
      />

      <Container className={`relative mt-16 flex w-full items-stretch justify-between ${LETTER_HEIGHT}`}>
        {["V", "I", "S", "I"].map((letter, i) => (
          <motion.span
            key={letter + i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="show"
            className={`font-display ${LETTER_SIZE} leading-none text-primary`}
            style={{ lineHeight: 1 }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          custom={4}
          variants={letterVariants}
          initial="hidden"
          animate="show"
          className="mx-[1vw] flex-[1.7] overflow-hidden rounded-pill"
        >
          <PlaceholderImage label="Hero portrait — placeholder for Figma export" className="h-full w-full" />
        </motion.div>
        <motion.span
          custom={5}
          variants={letterVariants}
          initial="hidden"
          animate="show"
          className={`font-display ${LETTER_SIZE} leading-none text-primary`}
          style={{ lineHeight: 1 }}
        >
          N
        </motion.span>
      </Container>

      <Container className="relative">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start justify-between gap-8 pt-20 md:flex-row md:items-center"
        >
          <motion.p variants={itemVariants} className="max-w-lg text-body-lg text-ink">
            Gen AI, Agentic AI, and workflow automation that boosts efficiency and significantly
            reduces operational costs - delivered by a team that actually cares.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <ButtonRoll href="#" variant="primary">
              Book a Free Call
            </ButtonRoll>
            <ButtonRoll href="#" variant="light">
              Check our Services
            </ButtonRoll>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
