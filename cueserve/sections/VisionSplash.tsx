"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

// Real exported letterforms (Cueserve brand assets) — each keeps its native
// aspect ratio via width/height, scaled to a shared height in the row below.
const LETTERS = [
  { src: "/letter-v.svg", width: 187, height: 224, alt: "V" },
  { src: "/letter-i.svg", width: 43, height: 224, alt: "I" },
  { src: "/letter-s.svg", width: 173, height: 232, alt: "S" },
  { src: "/letter-i.svg", width: 43, height: 224, alt: "I" },
];
const LETTER_N = { src: "/letter-n.svg", width: 173, height: 224, alt: "N" };

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
// five letters + the wide O-photo would otherwise clip on mobile.
const LETTER_HEIGHT = "h-[clamp(2.75rem,13vw,9rem)]";

// Above-the-fold VISION splash (Figma frame "Homepage", 16:18). Giant
// wordmark with the "O" replaced by the real masked photo, over the actual
// exported banner background.
export function VisionSplash() {
  return (
    <section className="relative overflow-hidden pb-24 pt-8">
      <Image
        src="/banner-bg.jpg"
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      <Container className={`relative mt-16 flex w-full items-stretch justify-between ${LETTER_HEIGHT}`}>
        {LETTERS.map((letter, i) => (
          <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="show">
            <Image src={letter.src} alt={letter.alt} width={letter.width} height={letter.height} className="h-full w-auto" />
          </motion.span>
        ))}
        <motion.div
          custom={4}
          variants={letterVariants}
          initial="hidden"
          animate="show"
          className="relative mx-[1vw] flex-[1.7] overflow-hidden rounded-pill"
        >
          <Image src="/vision-portrait.jpg" alt="Cueserve" fill className="object-cover" />
        </motion.div>
        <motion.span custom={5} variants={letterVariants} initial="hidden" animate="show">
          <Image
            src={LETTER_N.src}
            alt={LETTER_N.alt}
            width={LETTER_N.width}
            height={LETTER_N.height}
            className="h-full w-auto"
          />
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
