"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ButtonRoll } from "@/components/ui/ButtonRoll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LETTERS = [
  { src: "/letter-v.svg", width: 187, height: 224, alt: "V" },
  { src: "/letter-i.svg", width: 43, height: 224, alt: "I" },
  { src: "/letter-s.svg", width: 173, height: 232, alt: "S" },
  { src: "/letter-i.svg", width: 43, height: 224, alt: "I" },
];
const LETTER_N = { src: "/letter-n.svg", width: 173, height: 224, alt: "N" };
const LETTER_HEIGHT = "h-[clamp(2.75rem,13vw,9rem)]";

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
          <Image
            src="/letter-v.svg"
            alt=""
            width={187}
            height={224}
            priority
            className="h-[clamp(4rem,20vw,14rem)] w-auto"
          />
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
          <div className={`flex w-full max-w-5xl items-stretch justify-between ${LETTER_HEIGHT}`}>
            {LETTERS.map((letter, i) => (
              <Image
                key={i}
                src={letter.src}
                alt={letter.alt}
                width={letter.width}
                height={letter.height}
                className="h-full w-auto"
              />
            ))}
            <div className="relative mx-[1vw] flex-[1.7] overflow-hidden rounded-pill">
              <Image
                src="/vision-portrait.jpg"
                alt="Cueserve"
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
            <Image
              src={LETTER_N.src}
              alt={LETTER_N.alt}
              width={LETTER_N.width}
              height={LETTER_N.height}
              className="h-full w-auto"
            />
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
