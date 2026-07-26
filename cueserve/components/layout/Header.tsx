import Link from "next/link";
import { Container } from "./Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

const NAV_LINKS = ["Home", "About Us", "Services", "Solutions", "Our Work", "Blog"];

// Horizontal bar, 14px vertical / 24px left / 10px right padding (design.md §5).
// Sticky + transparent so it sits over the hero background, matching the
// Figma masked-hero group. Logo is a text wordmark placeholder until the
// Cueserve SVG mark is exported (design.md §9).
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-blue/80 backdrop-blur">
      <Container className="flex items-center justify-between py-[14px] pl-6 pr-2.5">
        <Link href="/" className="text-h6 font-display text-ink">
          Cueserve
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-body text-ink transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <ButtonRoll href="#" variant="primary" className="w-[168px]">
          Contact Us
        </ButtonRoll>
      </Container>
    </header>
  );
}
