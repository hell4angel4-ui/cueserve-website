import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "light" | "outline" | "text";

interface ButtonRollProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

// Pill button, 18px Poppins (design.md §7). Every variant shares a fixed
// h-14 row height — the two label rows are absolutely stacked inside it
// (see .btn-roll__row in tokens.css), so the height must match exactly for
// the resting/hover positions to line up.
const variantClasses: Record<Variant, string> = {
  primary: "bg-primary px-8 text-white",
  light: "bg-primary-100 px-8 text-primary",
  outline: "border border-ink px-8 text-ink",
  text: "text-primary",
};

// Solid variants (primary/light) show the arrow inside an inverse-color
// circle chip (per the Figma CTAs — "Book a Free Call" / "Check our
// Services"); outline/text keep a bare arrow.
const circleClasses: Partial<Record<Variant, string>> = {
  primary: "bg-white text-primary",
  light: "bg-primary text-white",
};

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
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

function ArrowIcon({ variant }: { variant: Variant }) {
  const circle = circleClasses[variant];
  if (!circle) return <Arrow />;
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${circle}`}>
      <Arrow />
    </span>
  );
}

// Text-roll CTA (design.md §8): label + arrow are doubled in the DOM as two
// absolutely-stacked rows; hover slides both up, swapping which is visible.
// Mechanics live in the `.btn-roll` / `.btn-roll__row` classes (tokens.css);
// this component just supplies the row content and a whitespace-nowrap
// label so the row can never wrap mid-text and break the clip.
export function ButtonRoll({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonRollProps) {
  const rowContent = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && <ArrowIcon variant={variant} />}
    </>
  );

  const classes = `btn-roll h-14 whitespace-nowrap font-sans text-body-lg ${variantClasses[variant]} ${className}`;
  const inner = (
    <span className="btn-roll__inner">
      <span className="btn-roll__row btn-roll__row--first">{rowContent}</span>
      <span className="btn-roll__row btn-roll__row--second">{rowContent}</span>
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
