import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

// Footer CTA (design.md §6.12, Figma node 153:645). Mega headline with the
// italic blue "MIND?"; the "O" graphic swap is a placeholder pending the
// real Figma export.
export function FooterCta() {
  return (
    <Section className="bg-white text-center">
      <Container className="flex flex-col items-center gap-10">
        <h2 className="text-mega text-ink">
          PR<span aria-hidden="true">O</span>JECT IN{" "}
          <span className="font-light italic text-primary">MIND?</span>
        </h2>

        <form className="flex w-full max-w-md items-center gap-2 rounded-pill border border-line p-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full bg-transparent px-4 text-body text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-pill bg-primary px-6 py-3 text-body text-white transition-colors hover:bg-primary-700"
          >
            Submit
          </button>
        </form>
      </Container>
    </Section>
  );
}
