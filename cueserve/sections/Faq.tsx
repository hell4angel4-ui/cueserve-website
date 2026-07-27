"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { FaqItem } from "@/components/ui/FaqItem";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

// design.md §10 flags the Figma file's FAQ 01-04 as repeating the same
// question — a known issue it says to fix in the build. Differentiated here.
const FAQS = [
  {
    question: "What services does Cueserve offer?",
    answer:
      "Cueserve builds Gen AI and Agentic AI workflows, automation platforms, and the web/product experiences around them — from strategy and UI/UX through to engineering and ongoing optimization.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most engagements run 4-10 weeks depending on scope, starting with a discovery sprint to map the workflow before any build begins, so timelines are set on real requirements, not guesswork.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes — every project includes a support window after launch, and most clients move to an ongoing retainer for monitoring, iteration, and scaling the automation as their needs grow.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "Pricing is scoped per project based on complexity and integration needs. We share a fixed-fee proposal after discovery, so there are no open-ended hourly surprises.",
  },
];

// FAQ (design.md §6.11, Figma node 142:351).
export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section className="bg-white">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <Heading eyebrow="FAQ" size="h2">
            Frequently Asked Questions.
          </Heading>
        </Reveal>

        <Reveal stagger={0.1} className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <RevealItem key={i}>
              <FaqItem
                index={i}
                question={faq.question}
                answer={faq.answer}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </RevealItem>
          ))}
        </Reveal>

        <ButtonRoll href="#" variant="text" className="self-center">
          More About Us
        </ButtonRoll>
      </Container>
    </Section>
  );
}
