"use client";

import { AnimatePresence, motion } from "framer-motion";

interface FaqItemProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

// FAQ accordion item (design.md §7, §8): closed = light card, open = blue
// gradient card, plus/minus icon crossfade, ~350ms ease-in-out height reveal.
export function FaqItem({ index, question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div
      className={`rounded-card p-6 sm:p-8 ${open ? "bg-gradient-brand text-white" : "bg-surface-blue text-ink"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span>
          <span className={`block text-body-sm uppercase ${open ? "text-primary-100" : "text-primary"}`}>
            Question {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-2 block text-[1.25rem]">{question}</span>
        </span>
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.svg
              key={open ? "minus" : "plus"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.25 }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              {!open && <path d="M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
            </motion.svg>
          </AnimatePresence>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-body-lg text-white">Answer:</p>
            <p className="mt-2 max-w-2xl text-body-lg text-white/90">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
