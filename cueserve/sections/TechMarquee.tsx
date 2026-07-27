"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";

// Real logo exports (same set the reference build ships).
const LOGOS = [
  { src: "/Sliding_logos/dotnet.png", alt: "Microsoft .NET" },
  { src: "/Sliding_logos/angular.png", alt: "Angular" },
  { src: "/Sliding_logos/react.png", alt: "React" },
  { src: "/Sliding_logos/nextjs.png", alt: "Next.js" },
  { src: "/Sliding_logos/html.png", alt: "HTML5" },
  { src: "/Sliding_logos/css.png", alt: "CSS3" },
  { src: "/Sliding_logos/javascript.png", alt: "JavaScript" },
  { src: "/Sliding_logos/android-studio.png", alt: "Android Studio" },
];

// Software/logo strip (design.md §6.3) — 96px tall row, 64px gap.
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
        {LOGOS.map((logo) => (
          <span key={logo.src} className="flex h-16 w-32 shrink-0 items-center justify-center px-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="h-full w-auto object-contain"
            />
          </span>
        ))}
      </Marquee>
    </motion.div>
  );
}
