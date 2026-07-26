"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { StatOdometer } from "@/components/ui/StatOdometer";

const TESTIMONIALS = [
  {
    quote:
      "Working with Cueserve was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.",
    name: "Emma Johnson",
  },
  {
    quote:
      "The team's attention to detail and strategic thinking transformed our brand. Every milestone was delivered on time, and the final product spoke for itself.",
    name: "Daniel Cho",
  },
  {
    quote:
      "From the first call to launch day, Cueserve felt like an extension of our own team. Communication was effortless and the craft was exceptional.",
    name: "Priya Nair",
  },
];

const STATS = [
  { value: 95, suffix: "%", caption: "Client Satisfaction Rate" },
  { value: 40, suffix: "+", caption: "Global Brands Served Worldwide" },
];

function ArrowButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// Testimonials (design.md §6.9, Figma node 112:51). Embla carousel slider;
// arrows swap to a filled dark hover state per design.md §8.
export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section className="bg-white">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading eyebrow="Our Testimonials" size="h2" className="max-w-xl">
            Our success is measured by the satisfaction of our clients. We take pride in building
            long partnerships.
          </Heading>
          <div className="flex gap-3">
            <ArrowButton direction="prev" onClick={scrollPrev} />
            <ArrowButton direction="next" onClick={scrollNext} />
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="min-w-0 flex-[0_0_100%] px-1" aria-hidden={selected !== i}>
                <p className="max-w-3xl text-body-lg font-light text-ink">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-display text-h5 italic text-primary">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-16 border-t border-line pt-10">
          {STATS.map((stat) => (
            <div key={stat.caption} className="flex flex-col gap-2">
              <StatOdometer value={stat.value} suffix={stat.suffix} size="h2" />
              <p className="text-body-sm font-light uppercase text-muted">{stat.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
