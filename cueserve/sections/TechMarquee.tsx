"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";

const SOFTWARE = ["Microsoft .NET", "Angular", "React", "Next.js", "HTML5", "CSS3", "JavaScript"];

// Software/logo strip (design.md §6.3) — sits right below the intro
// sequence, same position it held inside the old Hero section.
export function TechMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-16"
    >
      <Marquee>
        {SOFTWARE.map((name) => (
          <span key={name} className="px-8 text-h5 text-muted">
            {name}
          </span>
        ))}
      </Marquee>
    </motion.div>
  );
}
