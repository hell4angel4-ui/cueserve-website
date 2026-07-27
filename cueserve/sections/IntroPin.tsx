"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Wordmark scale — clamped so it never overflows narrow viewports.
const LETTER_SIZE = "text-[clamp(3rem,15vw,15.2rem)]";

// Pinned 3-frame scroll intro — cross-checked against the colleague's build,
// which pins the viewport with GSAP ScrollTrigger and morphs between three
// states as the user scrolls, rather than three stacked sections (design.md
// §6/§8's "VISION splash" + "Hero" are frames 3 and 2 of this sequence; frame
// 1 is the AI-focused opener). Respects prefers-reduced-motion by skipping
// the pin/scrub entirely and showing the final frame statically.
export function IntroPin() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(frame1Ref.current, { autoAlpha: 0 });
      gsap.set(frame2Ref.current, { autoAlpha: 0 });
      gsap.set(frame3Ref.current, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([frame2Ref.current, frame3Ref.current], { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: pinRef.current,
        },
      });

      tl.to(frame1Ref.current, { autoAlpha: 0, duration: 1 })
        .to(frame2Ref.current, { autoAlpha: 1, duration: 0.5 }, "<")
        .to({}, { duration: 1 })
        .to(frame2Ref.current, { autoAlpha: 0, duration: 1 })
        .to(frame3Ref.current, { autoAlpha: 1, duration: 0.5 }, "<");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative h-[300vh]">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        <Image src="/banner-bg.jpg" alt="" fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover" />

        <div
          ref={frame1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center"
        >
          <span
            aria-hidden="true"
            className={`font-wordmark font-bold leading-none text-primary ${LETTER_SIZE}`}
          >
            V
          </span>
          <p className="max-w-xl text-body-lg text-ink">
            At CueServe, we blend AI innovation with engineering precision to build digital
            experiences that transform enterprises. From crafting intelligent workflows to
            scalable platforms.
          </p>
          <ButtonRoll href="#" variant="text">
            Get Started Now
          </ButtonRoll>
        </div>

        <div
          ref={frame2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
        >
          <h1 className="text-hero">
            Crafting Modern
            <br />
            <span className="text-primary">— Vision For the</span>
            <br />
            Ambitious Brands
          </h1>
          <p className="max-w-lg text-body-lg text-muted">
            We blend creativity with strategy to build digital experiences that move brands
            forward. From crafting standout websites.
          </p>
          <ButtonRoll href="#" variant="text">
            Get Started Now
          </ButtonRoll>
        </div>

        <div ref={frame3Ref} className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6">
          {/* Wordmark is live Space Grotesk text (as on the reference build),
              not SVG letterforms — the photo replaces the "O". */}
          <div
            aria-label="VISION"
            className={`flex w-full max-w-5xl items-center justify-between font-wordmark font-bold leading-none text-primary ${LETTER_SIZE}`}
          >
            <span aria-hidden="true">VISI</span>
            <span className="relative mx-[1vw] h-[0.72em] flex-1 overflow-hidden rounded-pill">
              <Image
                src="/hero_men.png"
                alt=""
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
              />
            </span>
            <span aria-hidden="true">N</span>
          </div>
          <p className="max-w-lg text-center text-body-lg text-ink">
            We blend creativity with strategy to build digital experiences that move brands
            forward. From crafting standout websites.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonRoll href="#" variant="primary">
              Book a Free Call
            </ButtonRoll>
            <ButtonRoll href="#" variant="text">
              Get Started Now
            </ButtonRoll>
          </div>
        </div>
      </div>
    </div>
  );
}
