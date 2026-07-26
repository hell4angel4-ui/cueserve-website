import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "default" | "fast";
  gap?: string;
  className?: string;
}

// Infinite horizontal scroll strip (design.md §8), e.g. software/logo strip,
// hero ticker. `.marquee` (tokens.css) animates translateX(-50%), so the
// track is duplicated exactly once here for a seamless loop; pause-on-hover
// is built into the same class.
export function Marquee({ children, speed = "default", gap = "gap-16", className = "" }: MarqueeProps) {
  const animClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee ${animClass}`}>
        <div className={`flex shrink-0 items-center ${gap}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${gap}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
