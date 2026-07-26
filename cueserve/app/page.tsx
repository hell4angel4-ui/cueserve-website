// app/page.tsx — component showcase.
// Demonstrates the layout primitives and shared UI components with the
// exact placeholder copy/numbers from design.md. Full page sections come next.

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { Marquee } from "@/components/ui/Marquee";
import { StatOdometer } from "@/components/ui/StatOdometer";

export default function Home() {
  return (
    <main>
      <Section>
        <Container className="flex flex-col gap-12">
          <Heading eyebrow="About Us" size="h2">
            Creativity Meets Functionality.
          </Heading>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonRoll href="#" variant="primary">
              Get Started Now
            </ButtonRoll>
            <ButtonRoll href="#" variant="outline">
              Contact Us
            </ButtonRoll>
            <ButtonRoll href="#" variant="text">
              View Details
            </ButtonRoll>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-2">
              <StatOdometer value={250} suffix="+" />
              <p className="text-body-sm font-light uppercase text-ink">Projects Completed</p>
            </div>
            <div className="flex flex-col gap-2">
              <StatOdometer value={96} suffix="%" />
              <p className="text-body-sm font-light uppercase text-ink">
                Positive Feedback From Clients
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <StatOdometer value={98} suffix="%" />
              <p className="text-body-sm font-light uppercase text-ink">Accurately Delivered</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="sm" className="bg-surface-blue">
        <Marquee>
          <span className="px-8 text-h4">Real Results ✳</span>
          <span className="px-8 text-h4">Modern Design ✳</span>
          <span className="px-8 text-h4">Ambitious Brands ✳</span>
        </Marquee>
      </Section>
    </main>
  );
}
