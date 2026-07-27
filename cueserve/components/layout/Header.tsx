import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

const NAV_LINKS = ["Home", "About Us", "Services", "Solutions", "Our Work", "Blog"];

// Floating rounded nav pill, inset from the viewport edges with a shadow —
// per the Figma header (matches the "Home" active pill state and the
// Contact Us CTA). Sticky so it stays visible over both the VISION splash
// and the hero photo behind it.
export function Header() {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="flex items-center justify-between rounded-pill bg-white py-2 pl-4 pr-2 sm:pl-6 sm:pr-2.5 shadow-card">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/logo-full.svg" alt="Cueserve" width={140} height={32} priority />
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
