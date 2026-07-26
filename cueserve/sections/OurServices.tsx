"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const TAGS = ["Logo Design", "Guidelines", "Color Strategy", "Art Direction", "Brand Strategy"];

const SERVICES = [
  { title: "Brand Identity", tags: TAGS },
  { title: "UI/UX Strategy", tags: TAGS },
  { title: "Digital Marketing", tags: TAGS },
  { title: "Product Design", tags: TAGS },
];

// Our Services (design.md §6.7, Figma node 79:230). Hovering a row reveals
// its service image alongside the tag list (design.md §8 motion spec).
export function OurServices() {
  const [active, setActive] = useState(0);

  return (
    <Section className="bg-white">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <Heading eyebrow="Our Services" size="h2">
            Creativity Meets Functionality.
          </Heading>
        </Reveal>

        <Reveal stagger={0.1} className="flex flex-col divide-y divide-line border-b border-t border-line">
          {SERVICES.map((service, i) => (
            <RevealItem
              key={service.title}
              onMouseEnter={() => setActive(i)}
              className="group grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[auto_1fr_auto_auto] md:gap-6 lg:gap-10"
            >
              <span className="font-display text-[1.75rem] font-light italic text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-h2 text-ink transition-colors group-hover:text-primary">
                {service.title}
              </span>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 96 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="hidden overflow-hidden rounded-media md:block"
                  >
                    <PlaceholderImage label={`${service.title} — placeholder`} className="h-16 w-24" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-4">
                <div className="hidden flex-wrap gap-3 lg:flex">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-body uppercase text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <ButtonRoll href="#" variant="text" showArrow={false}>
                  View Details
                </ButtonRoll>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
