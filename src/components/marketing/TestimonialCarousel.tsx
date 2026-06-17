"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

function Avatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-gold/30 shadow-lg">
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
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-blue-600 border-2 border-brand-blue/30 text-lg font-bold text-white shadow-[0_0_15px_rgba(13,71,161,0.5)]">
      {initials}
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

  const currentTestimonial = testimonials[index];

  return (
    <Section variant="muted" className="relative overflow-hidden">
      {/* Background glow effects */}
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
        className="relative mx-auto mt-16 max-w-4xl px-4 sm:px-12"
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/50 bg-white/80 p-3 text-brand-navy shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="relative h-[300px] sm:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) next();
                else if (swipe > 50) prev();
              }}
            >
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/20 bg-white/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl dark:bg-brand-dark-card/60 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:p-10">
                <div className="relative">
                  <Quote className="absolute -left-2 -top-4 h-12 w-12 text-brand-gold/20 dark:text-brand-gold/10" />
                  <p className="relative z-10 text-lg leading-relaxed text-brand-navy dark:text-slate-300 sm:text-xl md:text-2xl font-medium">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar name={currentTestimonial.name} photo={(currentTestimonial as any).photo} />
                    <div className="text-left">
                      <p className="font-display text-lg font-bold text-brand-navy dark:text-white">{currentTestimonial.name}</p>
                      <p className="text-sm font-medium text-brand-blue dark:text-brand-blue-light">{currentTestimonial.role}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex text-brand-gold">
                    {Array.from({ length: currentTestimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/50 bg-white/80 p-3 text-brand-navy shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
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
