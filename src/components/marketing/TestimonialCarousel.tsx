"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

function Avatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand-gold/30 shadow-lg">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-blue-600 border-2 border-brand-blue/30 text-base font-bold text-white shadow-[0_0_12px_rgba(13,71,161,0.4)]">
      {initials}
    </div>
  );
}

/* Single card used in both mobile (1 visible) and desktop (3 visible) */
function TestimonialCard({ t, isActive = true }: { t: typeof testimonials[0]; isActive?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.5rem] border border-white/20 bg-white/60 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 dark:bg-brand-dark-card/70 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
      }`}
    >
      {/* Quote icon — above the text, clearly visible */}
      <div className="mb-4">
        <Quote className="h-8 w-8 text-brand-gold dark:text-brand-gold/80" />
      </div>

      {/* Quote text */}
      <p className="flex-1 text-base leading-relaxed text-brand-navy dark:text-slate-200 font-medium">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-slate-200 dark:bg-white/10" />

      {/* Author row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={t.name} photo={(t as any).photo} />
          <div>
            <p className="font-display text-sm font-bold text-brand-navy dark:text-white">{t.name}</p>
            <p className="text-xs font-medium text-brand-blue dark:text-blue-400">{t.role}</p>
          </div>
        </div>
        <div className="flex text-brand-gold">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % len), 6000);
    return () => window.clearInterval(timer);
  }, [len, paused]);

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  /* For desktop: pick 3 consecutive testimonials starting from index */
  const desktopSlice = [0, 1, 2].map((offset) => ({
    t: testimonials[(index + offset) % len],
    key: (index + offset) % len,
  }));

  return (
    <Section variant="muted" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[120px] dark:bg-brand-blue/10" />

      <SectionHeading
        align="center"
        eyebrow="Success Stories"
        title="Trusted by students across Ethiopia"
        description="Hear how BEL Academy learners improved their confidence, speaking skills, and career opportunities."
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mx-auto mt-14"
      >
        {/* ── DESKTOP: 3 cards side by side ── */}
        <div className="hidden md:block">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-6"
              >
                {desktopSlice.map(({ t, key }, pos) => (
                  <TestimonialCard key={key} t={t} isActive={pos === 1} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute -left-14 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-slate-200/50 bg-white/90 p-3 text-brand-navy shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="absolute -right-14 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-slate-200/50 bg-white/90 p-3 text-brand-navy shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── MOBILE: single card with swipe ── */}
        <div className="block md:hidden px-4">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -50) next();
                  else if (offset.x > 50) prev();
                }}
              >
                <TestimonialCard t={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand-gold" : "w-2 bg-slate-300 dark:bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
