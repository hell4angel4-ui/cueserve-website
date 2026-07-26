import { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

// 1146px max-width, centered, responsive gutters — via the `container`
// utility configured in tailwind.config.ts (design.md §5).
export function Container({ as: Tag = "div", children, className = "" }: ContainerProps) {
  return <Tag className={`container ${className}`}>{children}</Tag>;
}
