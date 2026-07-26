"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatOdometerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function DigitColumn({ digit, inView }: { digit: number; inView: boolean }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-top">
      <motion.span
        className="flex flex-col"
        initial={{ y: "0em" }}
        animate={{ y: inView ? `-${digit}em` : "0em" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {DIGITS.map((d) => (
          <span key={d} className="block h-[1em] leading-[1em]">
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

// Odometer / slot-machine rolling digits (design.md §8) — each digit is a
// vertical 0-9 column that scrolls to its final value on viewport entry.
// Used for stats like "250+" and "96%".
export function StatOdometer({ value, prefix = "", suffix = "", className = "" }: StatOdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const digits = String(value).split("").map(Number);

  return (
    <span ref={ref} className={`inline-flex items-baseline text-stat text-primary ${className}`}>
      {prefix}
      {digits.map((digit, i) => (
        <DigitColumn key={i} digit={digit} inView={inView} />
      ))}
      {suffix}
    </span>
  );
}
