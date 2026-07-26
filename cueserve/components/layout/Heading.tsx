import { ElementType, ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "hero" | "mega" | "stat";

// Static map so Tailwind's compiler can see every class literally (design.md §3 type scale).
const sizeClasses: Record<HeadingSize, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
  hero: "text-hero",
  mega: "text-mega",
  stat: "text-stat",
};

interface HeadingProps {
  eyebrow?: ReactNode;
  as?: ElementType;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
}

// Eyebrow + Heading block — repeats above nearly every section (design.md §3, §7).
export function Heading({
  eyebrow,
  as: Tag = "h2",
  size = "h2",
  children,
  className = "",
}: HeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className={`${sizeClasses[size]} ${className}`}>{children}</Tag>
    </div>
  );
}
