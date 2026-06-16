"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
      {initials}
    </div>
  );
}

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;
  const timerRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => setIndex((i) => (i + 1) % len), 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [len, paused]);

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;
    const flex = container.querySelector(".flex");
    if (!flex) return;
    const slides = Array.from(flex.children) as HTMLElement[];
    const slide = slides[index];
    if (!slide) return;
    const left =
      slide.offsetLeft -
      Math.max(0, (container.clientWidth - slide.clientWidth) / 2);
    container.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  return (
    <Section variant="white">
      <SectionHeading
        align="center"
        eyebrow="Success Stories"
        title="Trusted by students across Ethiopia"
        description="Hear how BEL Academy learners improved their confidence, speaking skills, and career opportunities."
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mx-auto mt-12 max-w-4xl"
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-md md:block"
        >
          <ChevronLeft className="h-5 w-5 text-brand-navy" />
        </button>

        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch" }}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="flex gap-4 px-2 md:gap-6 md:px-4">
            {testimonials.map((t, i) => {
              const isActive = i === index;
              return (
                <div
                  key={t.id}
                  className="w-[calc(100%-2rem)] flex-shrink-0 sm:min-w-[320px] md:min-w-[360px]"
                >
                  <div
                    className={`rounded-2xl border border-slate-200/80 bg-white p-6 transition-shadow ${
                      isActive ? "shadow-lg" : "shadow-sm opacity-80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Avatar name={t.name} />
                      <div className="min-w-0 flex-1 text-left">
                        <p className="font-semibold text-brand-navy">{t.name}</p>
                        <p className="text-xs text-brand-gray">{t.role}</p>
                        <div className="mt-1 flex text-brand-gold">
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <Star key={j} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-brand-navy">
                      <Quote className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      <p>&ldquo;{t.quote}&rdquo;</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-md md:block"
        >
          <ChevronRight className="h-5 w-5 text-brand-navy" />
        </button>

        <div className="mt-4 flex justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="rounded-full border border-slate-200 bg-white p-2 shadow-md"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="rounded-full border border-slate-200 bg-white p-2 shadow-md"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
