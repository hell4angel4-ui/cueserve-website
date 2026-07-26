import { ElementType, ReactNode } from "react";

type Spacing = "default" | "sm" | "none";

interface SectionProps {
  as?: ElementType;
  spacing?: Spacing;
  children: ReactNode;
  className?: string;
}

// Vertical rhythm (design.md §5): 100px on major sections, 40-64px on lighter ones.
const spacingClasses: Record<Spacing, string> = {
  default: "py-section",
  sm: "py-section-sm",
  none: "",
};

export function Section({
  as: Tag = "section",
  spacing = "default",
  children,
  className = "",
}: SectionProps) {
  return <Tag className={`${spacingClasses[spacing]} ${className}`}>{children}</Tag>;
}
