# Cueserve — Starter Setup

Drop-in tokens, Tailwind config, and font wiring for the Next.js build.
Placeholders and imagery stay as-is (per plan) — swap real content after boss sign-off.

## 1. Create the project

```bash
npx create-next-app@latest cueserve --typescript --tailwind --app --eslint
cd cueserve
npm install framer-motion embla-carousel-react
# optional: npm install lenis   # smooth scroll
```

## 2. Place the files

| File | Destination |
|---|---|
| `tailwind.config.ts` | project root (replace the generated one) |
| `tokens.css` | `app/tokens.css` |
| `globals.css` | `app/globals.css` (replace generated one) |
| `layout.tsx` | `app/layout.tsx` (replace generated one) |
| `design.md` | project root (reference for Claude Code) |

If you kept the default `postcss.config` from create-next-app, it already works.
Tailwind v4 users: the `@import "tailwindcss/base|components|utilities"` lines in
`globals.css` should be replaced with a single `@import "tailwindcss";` and the
theme moved to `@theme` — tell me and I'll output the v4 variant.

## 3. Fonts

Handled by `next/font` in `layout.tsx` — no `<link>` tags, no manual @font-face.
- Headings: **Instrument Sans** → `font-display` / `var(--font-display)`
- Body: **Poppins** → `font-sans` / `var(--font-body)`

## 4. Token cheat sheet (use in components)

```
Colors    bg-primary text-ink text-muted bg-surface-blue text-primary-700
Type      text-hero text-h2 text-body-lg  (headings inherit font-display)
Radius    rounded-pill rounded-card rounded-media
Shadow    shadow-card
Layout    container  py-section  (max-w-container mx-auto)
Motion    animate-marquee  animate-fade-rise  duration-micro  ease-entrance
Gradient  bg-gradient-brand  bg-gradient-sky
```

## 5. Build order (recommended)

1. Layout primitives: `Container`, `Section`, `Eyebrow`, `Heading`.
2. Components: `ButtonRoll`, `Marquee`, `StatOdometer`, `ServiceRow`,
   `ProjectRow`, `ArticleCard`, `FaqItem`, `TestimonialSlider`, `FooterCTA`.
3. Sections (compose components) against Figma nodes — one at a time.
4. Wire motion (Framer Motion reveals + odometer + text-roll; CSS marquee).

Keep text/image content in a single `content/home.ts` file so the eventual
swap is one edit, not a hunt through JSX.

## 6. Deploy

Push to GitHub → import to Vercel → done (zero-config for Next.js).
