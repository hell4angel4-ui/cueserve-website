import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

// 16px brand-blue label used above every section heading (design.md §3).
// Styling comes from the `.eyebrow` class defined in tokens.css.
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
