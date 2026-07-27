import Link from "next/link";

type Variant = "primary" | "light" | "outline" | "text";

interface ButtonRollProps {
  /** Plain string — it gets split per character for the staggered roll. */
  children: string;
  href?: string;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

// Per-character stagger step, matching the reference build's 18ms increment.
const STAGGER_MS = 18;

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary hover:bg-primary-700 text-white border border-primary shadow-md hover:shadow-lg",
  light: "bg-primary-100 hover:bg-primary-50 text-primary border border-primary-100 shadow-md hover:shadow-lg",
  outline: "bg-transparent text-ink border border-line hover:border-primary",
  text: "bg-transparent text-primary border border-transparent",
};

// Arrow chip colours per variant (inverse of the button fill).
const chipClasses: Record<Variant, string> = {
  primary: "bg-white text-primary group-hover:bg-neutral-100",
  light: "bg-primary text-white group-hover:bg-primary-700",
  outline: "bg-ink text-white",
  text: "bg-primary text-white",
};

// One character: two stacked copies clipped to a single line-height box. The
// resting copy slides up out of view on hover while its duplicate slides in
// from below — each character offset by STAGGER_MS so the label "rolls"
// left-to-right rather than as one block (design.md §8 text-roll, matched to
// the reference build's per-character implementation).
function RollChar({ char, delay }: { char: string; delay: number }) {
  const content = char === " " ? " " : char;
  const style = { transitionDelay: `${delay}ms` };
  return (
    <span className="relative inline-block h-6 overflow-hidden leading-6 md:h-7 md:leading-7">
      <span
        className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none"
        style={style}
      >
        {content}
      </span>
      <span
        className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
        style={style}
      >
        {content}
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function ButtonRoll({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonRollProps) {
  const chars = Array.from(children);

  const classes = [
    "group relative inline-flex shrink-0 items-center gap-2 rounded-pill font-sans",
    "text-[13px] md:text-[16px] transition-all duration-300 md:gap-3",
    showArrow ? "py-1 pl-4 pr-1 md:py-1.5 md:pl-6 md:pr-1.5" : "px-4 py-2 md:px-6",
    variantClasses[variant],
    className,
  ].join(" ");

  const inner = (
    <>
      {/* aria-label carries the real text; the split characters are decorative. */}
      <span className="inline-flex h-6 items-center overflow-hidden leading-6 md:h-7 md:leading-7" aria-hidden="true">
        {chars.map((char, i) => (
          <RollChar key={i} char={char} delay={i * STAGGER_MS} />
        ))}
      </span>
      {showArrow && (
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:scale-105 md:h-10 md:w-10 ${chipClasses[variant]}`}
        >
          <Arrow />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={children} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={children} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
