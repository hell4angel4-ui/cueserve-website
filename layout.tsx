// app/layout.tsx
// Font setup via next/font (self-hosted, zero layout shift).
// Instrument Sans -> headings (--font-display); Poppins -> body (--font-body).

import type { Metadata } from "next";
import { Instrument_Sans, Poppins } from "next/font/google";
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
    <html lang="en" className={`${instrumentSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
