import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { StatOdometer } from "@/components/ui/StatOdometer";
import { Reveal } from "@/components/motion/Reveal";

// About / Projects-done (design.md §6.4, Figma node 52:280). The 250+ stat
// uses the rolling-digit StatOdometer; the video block is a placeholder
// pending the real autoplay asset (design.md §8 About motion spec).
export function About() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal className="relative">
          {/* Autoplaying muted loop (design.md §8 About motion spec). */}
          <video
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-square w-full rounded-card object-cover"
          />
        </Reveal>

        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow>About Us</Eyebrow>
          <p className="text-body font-light uppercase text-muted">Projects</p>
          <StatOdometer value={250} suffix="+" />
          <p className="-mt-2 text-body font-light uppercase text-muted">Completed</p>

          <p className="mt-4 text-body-lg text-ink">
            Our team of designers, developers, and thinkers driven by one purpose — to craft
            digital experiences.
          </p>
          <p className="text-body-lg text-muted">
            We combine strategy, creativity, and technology to help brands grow in the modern
            digital landscape. Every project we take on is fueled by curiosity, guided by
            precision.
          </p>

          <ButtonRoll href="#" variant="text">
            More About Us
          </ButtonRoll>
        </Reveal>
      </Container>
    </Section>
  );
}
