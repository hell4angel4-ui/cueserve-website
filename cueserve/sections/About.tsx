import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { StatOdometer } from "@/components/ui/StatOdometer";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/motion/Reveal";

// About / Projects-done (design.md §6.4, Figma node 52:280). The 250+ stat
// uses the rolling-digit StatOdometer; the video block is a placeholder
// pending the real autoplay asset (design.md §8 About motion spec).
export function About() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal className="relative">
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
        </Reveal>

        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow>About Us</Eyebrow>
          <StatOdometer value={250} suffix="+" />
          <p className="-mt-2 text-body font-light uppercase text-muted">Projects Completed</p>

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
