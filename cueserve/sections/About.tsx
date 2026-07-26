"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { StatOdometer } from "@/components/ui/StatOdometer";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// About / Projects-done (design.md §6.4, Figma node 52:280). The 250+ stat
// uses the rolling-digit StatOdometer; the video block is a placeholder
// pending the real autoplay asset (design.md §8 About motion spec).
export function About() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative"
        >
          <PlaceholderImage
            label="About — autoplaying video placeholder"
            className="aspect-square w-full rounded-card"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-card"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5v11l9-5.5-9-5.5Z" />
            </svg>
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col items-start gap-4"
        >
          <Eyebrow>About Us</Eyebrow>
          <StatOdometer value={250} suffix="+" />
          <p className="-mt-2 text-body-sm font-light uppercase text-muted">Projects Completed</p>

          <p className="mt-4 text-body-lg text-ink">
            Our team of designers, developers, and thinkers driven by one purpose — to craft
            digital experiences.
          </p>
          <p className="text-body text-muted">
            We combine strategy, creativity, and technology to help brands grow in the modern
            digital landscape. Every project we take on is fueled by curiosity, guided by
            precision.
          </p>

          <ButtonRoll href="#" variant="text">
            More About Us
          </ButtonRoll>
        </motion.div>
      </Container>
    </Section>
  );
}
