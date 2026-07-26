import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const SERVICES = ["Kiosk", "Backend", "Frontend", "Mobile", "Cloud"];

// Types of services marquee (design.md §6.6, Figma node 74:69). Repeating
// service pairs — 48px label + 20px "Development" sub-label.
export function ServicesMarquee() {
  return (
    <Reveal className="border-y border-line bg-white py-10">
      <Marquee gap="gap-12 sm:gap-20">
        {SERVICES.map((label) => (
          <span key={label} className="flex items-baseline gap-3 px-4">
            <span className="text-h2 text-ink">{label}</span>
            <span className="text-[1.25rem] text-muted">Development</span>
          </span>
        ))}
      </Marquee>
    </Reveal>
  );
}
