import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const MAIN_PAGES = ["Home", "About Us", "Services", "Projects", "Blogs", "Contact"];
const SERVICES = ["Brand Identity", "UI/UX Strategy", "Digital Marketing", "Product Design"];
const SOCIALS = ["Facebook", "Twitter", "Dribbble", "Instagram"];

// Footer (design.md §6.12, Figma node 153:645). Link columns, location +
// contact blocks, then the copyright bar.
export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Reveal stagger={0.1}>
        <Container className="grid grid-cols-1 gap-12 py-section md:grid-cols-4">
          <RevealItem className="flex flex-col gap-4 md:col-span-1">
            <span className="text-h6 font-display">Cueserve</span>
            <p className="text-body-sm text-white/70">
              We combine strategy, creativity, and technology to help brands grow in the modern
              digital landscape.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-body-sm">
              {SOCIALS.map((social, i) => (
                <span key={social} className="flex items-center gap-3">
                  <Link href="#" className="text-white/70 hover:text-white">
                    {social}
                  </Link>
                  {i < SOCIALS.length - 1 && (
                    <span aria-hidden="true" className="text-xs">
                      ●
                    </span>
                  )}
                </span>
              ))}
            </div>
          </RevealItem>

          <RevealItem className="flex flex-col gap-3">
            <span className="text-body-sm uppercase text-white/50">Main Pages</span>
            {MAIN_PAGES.map((page) => (
              <Link key={page} href="#" className="text-body text-white/80 hover:text-white">
                {page}
              </Link>
            ))}
          </RevealItem>

          <RevealItem className="flex flex-col gap-3">
            <span className="text-body-sm uppercase text-white/50">Services</span>
            {SERVICES.map((service) => (
              <Link key={service} href="#" className="text-body text-white/80 hover:text-white">
                {service}
              </Link>
            ))}
          </RevealItem>

          <RevealItem className="flex flex-col gap-6">
            <div>
              <span className="text-body-sm uppercase text-white/50">Location</span>
              <p className="mt-2 text-body text-white/80">4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
            <div>
              <span className="text-body-sm uppercase text-white/50">Contact</span>
              <p className="mt-2 text-body text-white/80">hello@cueserve.com</p>
              <p className="text-body text-white/80">(302) 555-0107</p>
            </div>
          </RevealItem>
        </Container>
      </Reveal>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-body-sm text-white/50">
          © 2026 Copyright - Cueserve. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
