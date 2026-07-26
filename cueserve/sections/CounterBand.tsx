import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { StatOdometer } from "@/components/ui/StatOdometer";

const STATS = [
  { value: 96, suffix: "%", caption: "Positive Feedback From Clients" },
  { value: 98, suffix: "%", caption: "Accurately Delivered" },
];

// Counter band (design.md §6.5, Figma node 56:388). 48px numerals, smaller
// than the 128px hero/About stat.
export function CounterBand() {
  return (
    <Section spacing="sm" className="bg-surface-blue">
      <Container className="flex flex-wrap justify-center gap-16 text-center">
        {STATS.map((stat) => (
          <div key={stat.caption} className="flex flex-col items-center gap-2">
            <StatOdometer value={stat.value} suffix={stat.suffix} size="h2" />
            <p className="text-body-sm font-light uppercase text-ink">{stat.caption}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
}
