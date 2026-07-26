"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// reducedMotion="user" makes every Framer Motion animation in the tree defer
// to the OS-level prefers-reduced-motion setting automatically (transform
// animations jump to their end state; opacity still fades). The CSS rule in
// tokens.css only covers CSS transitions/animations — Framer Motion's
// JS-driven ones need this separately.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
