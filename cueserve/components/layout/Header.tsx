import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

const NAV_LINKS = ["Home", "About Us", "Services", "Solutions", "Our Work", "Blog"];

// Floating rounded nav pill, inset from the viewport edges with a shadow —
// per the Figma header (matches the "Home" active pill state and the
// Contact Us CTA). Fixed (not sticky) so it stays visible over both the
// VISION splash and the hero photo regardless of scroll position; the
// translucent blur + primary-100 border were cross-checked against the
// colleague's deployed build.
export function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <Container>
        <div className="flex items-center justify-between rounded-pill border border-primary-100 bg-white/90 py-2 pl-4 pr-2 shadow-card backdrop-blur-md sm:pl-6 sm:pr-2.5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/logo-full.svg" alt="Cueserve" width={140} height={22} priority />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((label, i) => (
              <Link
                key={label}
                href="#"
                className={`rounded-pill px-4 py-2 text-body text-ink transition-colors hover:text-primary ${
                  i === 0 ? "bg-primary-100 text-primary" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <ButtonRoll href="#" variant="primary" className="shrink-0">
            Contact Us
          </ButtonRoll>
        </div>
      </Container>
    </header>
  );
}
