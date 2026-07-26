import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { ButtonRoll } from "@/components/ui/ButtonRoll";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const ARTICLES = [
  { category: "Advice", date: "Nov 14, 2025", title: "Designing for Emotion: The Secret to Memorable Brands." },
  { category: "Advice", date: "Nov 14, 2025", title: "The Power of Minimalism in Modern Web Design." },
  { category: "Advice", date: "Nov 14, 2025", title: "Building Digital Trust Through Strong Brand Identity." },
];

// News & Articles (design.md §6.10, Figma node 140:26). Shared placeholder
// title/date across cards per design.md §10 (known copy issue).
export function NewsArticles() {
  return (
    <Section className="bg-surface-blue">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <Heading eyebrow="News & Articles" size="h2" className="max-w-xl">
            Fresh Perspectives On Strategy.
          </Heading>
          <ButtonRoll href="#" variant="outline">
            View All Articles
          </ButtonRoll>
        </Reveal>

        <Reveal stagger={0.12} className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <RevealItem key={i}>
              <ArticleCard {...article} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
