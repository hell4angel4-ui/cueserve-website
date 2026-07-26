# Cueserve Website — Design System Reference (design.md)

Source of truth: Figma file `Cueserve Website Redesign — Homepage Concept`
Frames: `Homepage` (16:18, above-the-fold, 1440×1024) and `Homepage scrolled view` (48:2, full page, 1440×11182).
Live behavior reference: https://arooth.webflow.io (animations, micro-interactions, color tokens, font pairing).
⚠️ Note: Arooth is a paid Webflow template by Amziro. The Figma file mirrors its structure and copy — verify the template license covers your commercial use before launch, or ensure enough of the content/imagery is original to Cueserve.
Use this document when building any new page so every page stays visually consistent with the homepage.

---

## 1. Brand Foundation

**Vibe:** Clean, modern, editorial agency aesthetic. Generous whitespace, oversized display type, pill-shaped UI, soft blue accents on near-white backgrounds, with dark ink text.

**Canvas:** Desktop design width 1440px. Content container 1146px wide, centered (≈147px side margins).

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#111827` | Primary text, headings, dark UI elements (most-used color) |
| `primary` | `#0040C1` | Brand blue — accent text, links, eyebrow labels, CTAs, big numerals |
| `primary-light` | `#D1E0FF` | Light blue — tinted surfaces, FAQ open-state secondary text |
| `surface-blue` | `#F5FAFF` | Very light blue section/card backgrounds |
| `surface-blue-2` | `#EFF4FF` | Alternate pale blue surface |
| `white` | `#FFFFFF` | Base background, text on dark/blue surfaces |
| `black` | `#000000` | Card titles, service labels, footer copyright |
| `sky` | `#2384C6` | Secondary blue (illustrative/graphic accents) |
| `deep-navy` | `#0C385A` | Dark graphic accent |
| `cream` | `#FFF3D1` | Small warm accent (tags/highlights) |
| `neutral-line` | `#EBEBEB` | Hairlines / dividers |

**Reference-site token set (Arooth style guide)** — use these as the canonical scale:
- Primary blue ramp: `#00359E` → `#0040C1` / `#0042C5` → `#2970FF` → `#6199FF`
- Neutrals: `#111827` (ink), `#4B5563` (gray-600 body), `#6B7280` (gray-500 muted), `#FFFFFF`
- Tint surface: `#EFF4FF`

These align with the Figma palette; adopt `#4B5563` / `#6B7280` for secondary/muted body text (the Figma file uses `#111827` everywhere, which reads heavy — the reference uses grays for supporting copy).

**Gradients**
- `#0136A2 → #266DFB` (linear) — deep-to-bright blue, used on a feature surface (FAQ open card / hero band)
- `#2384C6 → #0040C1` (linear) — sky-to-brand blue

---

## 3. Typography

**Figma uses Poppins everywhere.** The live reference site pairs two families:
- **Headings (H1–H6): Instrument Sans**, Regular weight — scale: H1 64 / H2 52 / H3 40 / H4 32 / H5 28 / H6 22
- **Paragraphs: Poppins**, Regular — Big 18 / Regular 16 / Small 14

**DECISION NEEDED:** either follow the Figma (all-Poppins, sizes below) or adopt the reference pairing (Instrument Sans headings + Poppins body) for a closer match to the reference site's feel. Both are on Google Fonts. Recommendation: reference pairing.

Note: hierarchy is achieved through *size*, not weight — almost everything is Regular. Figma-measured sizes:

| Style | Font | Size | Color | Where |
|---|---|---|---|---|
| Display / Hero H1 | Poppins Regular | 72px | `#111827`, accent lines in `#0040C1` | Hero headline ("Crafting Modern — Vision For the Ambitious Brands") |
| Mega display | Poppins Regular + Italic | 116px | `#111827` / `#0040C1` italic | Footer CTA "PROJECT IN MIND?" |
| Stat numeral | Poppins Regular | 128px | `#0040C1` | "250+" About stat |
| Section heading (H2) | Poppins Regular | 48px | `#111827` / `#000000` / `#0040C1` | "Creativity Meets Functionality.", card titles, stat % |
| Large body / quote | Poppins Regular 36px, Light 28px | 28–36px | `#111827` | Intro paragraphs, testimonial quote |
| Card title (H3) | Poppins Regular | 24px | `#111827` / `#000000` | Project names, article titles |
| Sub-label | Poppins Regular | 20px | `#000000` / `#D1E0FF` | Service subtitles ("Development"), FAQ questions |
| Body | Poppins Regular | 18px | `#111827`, `#FFFFFF` on dark | Paragraphs, buttons |
| Small / nav / tags | Poppins Regular | 16px | `#111827` nav, `#0040C1` eyebrow labels | Nav links, "About Us" eyebrows, list items ("LOGO DESIGN, GUIDELINES…") |
| Caption uppercase | Poppins Light | 16px | `#111827` | Stat captions ("POSITIVE FEEDBACK FROM CLIENTS") |
| Numbered index | Poppins Light Italic | 28px | `#0040C1` | "01", "02" section counters |
| Meta dot separator | Poppins Regular | 12px | `#0040C1` | "●" separators in article meta and footer link lists |

**Eyebrow pattern:** small 16px `#0040C1` label (e.g. "About Us", "Our Services", "FAQ") above a 48px heading — repeated on every section. Keep this on all new pages.

---

## 4. Shape & Elevation

**Corner radii**
- `99px` (full pill) — buttons, tags, chips — dominant radius (66 uses)
- `40px` — large cards / section containers
- `20px` — media/images and inner cards
- `30px` — occasional mid-size container

**Shadows / effects**
- Card elevation (double drop shadow): `0 4px 4px rgba(12,12,13,0.05)` + `0 16px 32px rgba(12,12,13,0.10)`
- Layer blur 24px used on a decorative background card (glass/soft depth effect)

---

## 5. Layout System

- **Container:** 1146px max-width, centered. Full-bleed sections (Our Projects) span 1440px with 147px inner padding.
- **Section vertical rhythm:** 100px top/bottom padding on major sections (FAQ, Footer, News), 40–64px on lighter ones.
- **Gaps:** 48px between section header and content (standard), 20px between sibling cards, 100px between large project rows, 64px between logo marquee items.
- **Hero:** vertical stack, 200px top padding (clears fixed header), 20px gap.
- **Header:** horizontal bar, 1148px, padding 14px vertical / 24px left / 10px right, nav + pill "Contact Us" button (168×54).

---

## 6. Page Sections (Homepage anatomy — reuse patterns on new pages)

1. **Header** — logo, nav (Home, About Us, Services, Solutions, Our Work, Blog), pill Contact Us CTA. Sits over a masked hero background (1440×800 masked rectangle group).
2. **Hero** — 72px headline with blue accent line, 18px supporting paragraph, "Get Started Now" link/CTA in `#0040C1`.
3. **Software / logo strip** — horizontal marquee row, 64px gap, 96px tall.
4. **About / Projects-done** — eyebrow "About Us", 128px "250+" stat with "Projects Completed" caption, twin paragraphs, "More About Us" CTA.
5. **Counter band** — horizontal stat pairs: 48px "%" numerals + Light 16px uppercase captions (96% positive feedback, 98% accurately delivered).
6. **Types of services** — repeating marquee of service pairs (Kiosk / Backend / Frontend + "Development" sub-label), 48px + 20px type scale.
7. **Our Services** — numbered (01…) service rows: Brand Identity, UI/UX Strategy, Digital Marketing, Product Design; each with uppercase 16px capability tags (Logo Design, Guidelines, Color Strategy, Art Direction, Packaging) and "View Details".
8. **Our Projects** — full-bleed, numbered project cards 01–05, 24px titles + "UI/UX DESIGN" tag, 100px row gap, "View Projects" CTA.
9. **Testimonials** — eyebrow "Our Testimonials", 28px Light quote, Italic 24px client name, supporting stat chips (95% client satisfaction).
10. **News & Articles** — 3 article cards: category tag ("Advice"), ● separator, date meta (12px blue dot pattern), 24px title, "Read More" link.
11. **FAQ** — numbered accordion (QUESTION 01–04). Closed: light card, 20px question. Open: blue gradient card (`#0136A2→#266DFB`), white "Answer:" 24px, white 18px body, "More About Us" CTA.
12. **Footer CTA + Footer** — 116px "PROJECT IN MIND?" display headline with italic blue "MIND?", email capture ("Enter your email..."), link columns (Main Pages, Services) with ● separators, Location + Contact blocks, then copyright bar: "© 2026 Copyright - Cueserve…".

---

## 7. Component Library (to build once, reuse everywhere)

- `Button` — pill (r-99), variants: primary blue fill / outline / text-link with arrow. 18px Poppins.
- `Eyebrow + Heading` block — 16px blue label + 48px heading, 48px gap to content.
- `StatCounter` — 48px numeral + Light 16px uppercase caption (animate count-up on scroll).
- `ServiceRow` — index numeral (Light Italic 28px blue) + 48px title + tag list + View Details.
- `ProjectCard` — numbered, 20px-radius media, 24px title, category tag.
- `ArticleCard` — meta row with blue ● separator, title, Read More.
- `FAQItem` — accordion with closed/open (gradient) states.
- `LogoMarquee` — infinite horizontal scroll strip.
- `FooterCTA` — mega display headline + email input pill.

---

## 8. Motion & Micro-interactions (implementation spec)

The Figma frames are static. The live reference site (arooth.webflow.io) defines the motion language — replicate these behaviors:

**Hero**
- Giant decorative letters (V-I-S-I-O-N as individual SVGs) animate in one by one — staggered drop/reveal on page load, forming the backdrop word behind/around the hero content.
- Headline + paragraph + CTA stagger in after the letters.
- Ticker strip under hero: infinite marquee of "Real Results ✳ Modern Design ✳ …" repeating text (duplicated 3× in DOM for seamless loop — classic marquee technique).

**Counters (signature micro-animation)**
- Stats are NOT simple count-ups — they're **odometer / slot-machine rolling digits**: each digit is a vertical column of 0–9 that scrolls to its final value on viewport entry. (Visible in the DOM as stacked digit headings per column.) Implement with a digit-column translateY animation or a library like `react-odometerjs` / custom Framer Motion.
- Applies to: 95% / 250+ style stats in About, Counter band, and Testimonials sections.

**Buttons & links (signature micro-animation)**
- Every CTA has **doubled label + doubled arrow** in the DOM ("Get Started NowGet Started NowArrowArrow") — hover slides the first label/arrow out and the duplicate in (text roll-up effect). Build as a two-layer masked translateY on hover, ~300ms ease.
- Slider arrows likewise have black + white icon pairs — icon swap on hover (dark ↔ light state).

**Navigation**
- Nav includes a secondary indexed menu style — links with counts like "Services(04)" — used in the full-screen/overlay menu. Overlay menu opens with staggered link reveals.
- Sticky header with state change on scroll.

**Sections & cards**
- Scroll-triggered reveals on all sections: fade + rise, staggered children, ease-out.
- **Our Services:** numbered tab/accordion rows (01–04) — hovering/activating a row reveals its service image and tag list; rows expand/highlight interactively.
- **Our Projects:** numbered list rows; hover reveals project image + arrow chip, image scales inside its rounded clip.
- **Testimonials:** slider/carousel with prev/next arrow controls (arrows have the dark/light hover swap).
- **About:** inline autoplaying video block with a pause/play button overlay.
- **FAQ:** accordion with plus/minus icon cross-fade and height animation; open item switches to the blue-gradient surface (per Figma) ~350ms ease-in-out.

**Footer**
- "PR◯JECT IN MIND?" — the mega headline is a giant link; hover interaction on the whole block (color/letter shift). The "O" is replaced by a graphic element per the Figma.

**General timing rules:** 200–300ms for micro-interactions (buttons, icons), 400–600ms for reveals, 20–35s linear infinite for marquees, pause-on-hover for marquees. Easing: ease-out for entrances, ease-in-out for accordions.

Recommended stack: **Framer Motion** (reveals, stagger, digit odometers, accordion, text-roll buttons) + **CSS keyframes** (marquees) + **Embla or Swiper** (testimonial slider) + optionally **Lenis** smooth scroll.

Recommended stack: **Framer Motion** (reveals, stagger, accordion) + **CSS keyframes** (marquees) + optionally **Lenis** for smooth scrolling.

---

## 9. Assets & Fonts

- Font: Poppins (Light 300, Light Italic, Regular 400, Italic 400) via Google Fonts / `next/font`.
- Export from Figma: hero background mask images, project/article imagery, client photos, software logos (SVG where possible), Cueserve logo (SVG).

## 10. Known copy issues to fix in build

- "ACCURATEKY DELIVERED" → "ACCURATELY DELIVERED" (appears 3×).
- FAQ questions 01–04 all repeat the same question — needs real content.
- Article cards all share one title/date — placeholder content.
