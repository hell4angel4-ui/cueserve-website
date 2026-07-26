import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "text";

interface ButtonRollProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

// Pill button, 18px Poppins (design.md §7). Every variant shares a fixed
// h-14 row height so the doubled label/arrow track (design.md §8) clips to
// a single row until hover — overflow only hides the duplicate when the
// outer box is exactly one row tall.
const variantClasses: Record<Variant, string> = {
  primary: "bg-primary px-8 text-white",
  outline: "border border-ink px-8 text-ink",
  text: "text-primary",
};

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Text-roll CTA (design.md §8): label + arrow are doubled in the DOM and the
// whole track slides up on hover, revealing the duplicate. Mechanics live in
// the `.btn-roll` / `.btn-roll__inner` classes (tokens.css); this component
// just supplies the two identical rows.
export function ButtonRoll({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonRollProps) {
  const rowClasses = "flex h-14 items-center justify-center gap-2 text-body";
  const row = (
    <span className={rowClasses}>
      {children}
      {showArrow && <Arrow />}
    </span>
  );

  const classes = `btn-roll h-14 font-sans ${variantClasses[variant]} ${className}`;
  const inner = (
    <span className="btn-roll__inner">
      {row}
      {row}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
