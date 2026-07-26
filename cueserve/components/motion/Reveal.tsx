"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeRise: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

// Scroll-triggered fade+rise (design.md §8: "Scroll-triggered reveals on all
// sections: fade + rise, staggered children, ease-out"). Pass `stagger` to
// turn this into a staggering parent for <RevealItem> children; without it,
// Reveal itself just fades/rises once in view. Reduced-motion handling comes
// from the app-wide <MotionConfig reducedMotion="user"> (MotionProvider).
export function Reveal({ children, className = "", stagger, delayChildren = 0 }: RevealProps) {
  const variants: Variants = stagger
    ? { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }
    : fadeRise;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Child of a staggering <Reveal> — inherits the parent's "show" state, no
// viewport trigger of its own.
export function RevealItem({ children, className = "", onMouseEnter, onMouseLeave }: RevealItemProps) {
  return (
    <motion.div
      variants={fadeRise}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
