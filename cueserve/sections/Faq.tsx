"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { FaqItem } from "@/components/ui/FaqItem";

// design.md §10: FAQ questions 01-04 repeat the same question/answer in the
// Figma file — kept as-is per "keep placeholders" instruction.
const FAQS = Array.from({ length: 4 }, () => ({
  question: "What services does Cueserve offer?",
  answer:
    "Cueserve provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.",
}));

// FAQ (design.md §6.11, Figma node 142:351).
export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section className="bg-white">
      <Container className="flex flex-col gap-12">
        <Heading eyebrow="FAQ" size="h2">
          Frequently Asked Questions.
        </Heading>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>

        <ButtonRoll href="#" variant="text" className="self-center">
          More About Us
        </ButtonRoll>
      </Container>
    </Section>
  );
}
