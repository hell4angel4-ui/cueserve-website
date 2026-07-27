// app/layout.tsx
// Font setup via next/font (self-hosted, zero layout shift).
// Instrument Sans -> headings (--font-display); Poppins -> body (--font-body).

import type { Metadata } from "next";
import { DM_Sans, Instrument_Sans, JetBrains_Mono, Poppins, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  // Figma uses Light + Regular + italics; include what the design needs.
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

// UI text — nav links and button labels (reference build uses DM Sans here,
// not Poppins).
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ui",
  display: "swap",
});

// The oversized VISION wordmark is set in Space Grotesk on the reference
// build (rendered as live text, not SVG letterforms).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-wordmark",
  display: "swap",
});

// Used for the "%" / unit glyphs beside stat numerals.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cueserve — Crafting Modern Vision For Ambitious Brands",
  description:
    "We blend creativity with strategy to build digital experiences that move brands forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${poppins.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
