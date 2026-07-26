import type { Config } from "tailwindcss";

/**
 * Cueserve Website — Tailwind config
 * Tokens derived from design.md (Figma) + arooth.webflow.io reference.
 * Fonts wired via next/font CSS variables (see app/layout.tsx).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    // Content container: 1146px centered with responsive gutters.
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // 20px mobile
        md: "2rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1146px",
      },
    },
    extend: {
      colors: {
        // Brand blue ramp (Arooth style guide + Figma)
        primary: {
          DEFAULT: "#0040C1",
          50: "#EFF4FF",
          100: "#D1E0FF",
          400: "#6199FF",
          500: "#2970FF",
          600: "#0042C5",
          700: "#00359E",
        },
        // Ink + grays
        ink: "#111827",
        muted: "#4B5563", // secondary body
        subtle: "#6B7280", // captions / hints
        // Surfaces
        surface: {
          blue: "#F5FAFF",
          blue2: "#EFF4FF",
        },
        // Accents from Figma
        sky: "#2384C6",
        navy: "#0C385A",
        cream: "#FFF3D1",
        line: "#EBEBEB",
      },
      fontFamily: {
        // Headings — Instrument Sans; Body — Poppins (see design.md decision).
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Heading ramp (Arooth): H1 64 → H6 22. Fluid via clamp for large sizes.
        h1: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", fontWeight: "400" }],
        h2: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", fontWeight: "400" }],
        h3: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", fontWeight: "400" }],
        h4: ["2rem", { lineHeight: "1.2", fontWeight: "400" }],
        h5: ["1.75rem", { lineHeight: "1.25", fontWeight: "400" }],
        h6: ["1.375rem", { lineHeight: "1.3", fontWeight: "400" }],
        // Oversized display moments (Figma): hero 72, stat 128, footer 116
        hero: ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", fontWeight: "400" }],
        mega: ["clamp(3.5rem, 9vw, 7.25rem)", { lineHeight: "0.95", fontWeight: "400" }],
        stat: ["clamp(4rem, 10vw, 8rem)", { lineHeight: "1", fontWeight: "400" }],
        // Paragraph ramp (Poppins): 18 / 16 / 14
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        // Utility labels
        eyebrow: ["1rem", { lineHeight: "1.2", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        // Figma radii: pill 99, cards 40, media 20, mid 30
        pill: "99px",
        card: "40px",
        media: "20px",
        mid: "30px",
      },
      boxShadow: {
        // Figma card elevation (double drop shadow)
        card: "0 4px 4px rgba(12,12,13,0.05), 0 16px 32px rgba(12,12,13,0.10)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0136A2 0%, #266DFB 100%)",
        "gradient-sky": "linear-gradient(135deg, #2384C6 0%, #0040C1 100%)",
      },
      spacing: {
        // Section rhythm (Figma): major sections use 100px top/bottom
        section: "6.25rem", // 100px
        "section-sm": "4rem", // 64px
        gutter: "9.1875rem", // 147px full-bleed inner padding
      },
      maxWidth: {
        container: "1146px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // Marquee: pair with a duplicated track for a seamless loop.
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "fade-rise": "fade-rise 0.6s ease-out both",
      },
      transitionTimingFunction: {
        // House easings (design.md)
        entrance: "cubic-bezier(0.22, 1, 0.36, 1)", // ease-out for reveals
        accordion: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
      },
      transitionDuration: {
        micro: "250ms", // buttons, icons
        reveal: "550ms", // scroll entrances
      },
    },
  },
  plugins: [],
};

export default config;
