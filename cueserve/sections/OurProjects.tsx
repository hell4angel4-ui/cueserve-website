"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const PROJECTS = ["Pixel Forge", "Studio Nova", "Brand Orbit", "Vision Core", "Design Flow"];

// Our Projects (design.md §6.8, Figma node 87:525). Hovering a row reveals
// the project image + arrow chip; image scales inside its rounded clip.
export function OurProjects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section className="bg-surface-blue">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading eyebrow="Our Projects" size="h2">
            Our Latest Projects.
          </Heading>
          <ButtonRoll href="#" variant="outline">
            View Projects
          </ButtonRoll>
        </div>

        <div className="flex flex-col divide-y divide-line border-b border-t border-line">
          {PROJECTS.map((name, i) => (
            <div
              key={name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex items-center justify-between gap-6 py-8"
            >
              <div className="flex items-center gap-6">
                <span className="font-display text-h6 font-light italic text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-h3 text-ink transition-colors group-hover:text-primary">
                  {name}
                </span>
                <span className="text-body-sm uppercase text-muted">UI/UX Design</span>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute right-24 top-1/2 hidden h-24 w-36 -translate-y-1/2 overflow-hidden rounded-media md:block"
                  >
                    <PlaceholderImage label={`${name} — project placeholder`} className="h-full w-full" />
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
