"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Quote,
  CheckCircle2,
  GraduationCap,
  MapPin,
  BookOpen,
  Users,
} from "lucide-react";
import { aboutContent } from "@/data/about";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";

/* ── Counter hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, duration, started]);

  return { count, start };
}

/* ── Stats data ───────────────────────────────────── */
const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Students Trained" },
  { icon: MapPin, value: 2, suffix: "", label: "Physical Branches" },
  { icon: BookOpen, value: 7, suffix: "", label: "Learning Programs" },
  { icon: GraduationCap, value: 10, suffix: "+", label: "Years Experience" },
];

/* ── Floating trust badges ────────────────────────── */
const trustBadges = [
  "Established Since 2010",
  "Two Physical Branches",
  "Online Learning Available",
  "Trusted By 1,200+ Students",
];

/* ── Stat item with counter ───────────────────────── */
function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  onVisible,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  onVisible: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCountUp(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          onVisible();
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [start, onVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/15">
        <Icon className="h-5 w-5 text-brand-gold" />
      </div>
      <p className="font-display text-2xl font-bold tabular-nums text-white lg:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-0.5 text-xs font-medium text-slate-400">{label}</p>
    </div>
  );
}

/* ── Main Section ─────────────────────────────────── */
export function FounderSection() {
  const { founder } = aboutContent;

  return (
    <Section variant="navy" className="relative overflow-hidden">
      {/* Background decorative glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-blue/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-gold/6 blur-[100px]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── LEFT: Story Content ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
        >
          <SectionHeading
            eyebrow="Our Story"
            title="Built For Learners. Trusted By Families."
            description="For years BEL Academy has helped students, professionals, and future leaders improve their English with confidence."
            dark
          />

          {/* Story paragraph */}
          <p className="mt-6 text-sm leading-relaxed text-slate-300/90">
            {founder.bio}
          </p>

          {/* Founder quote card */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: SMOOTH_EASE }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10 backdrop-blur-md"
          >
            <Quote className="h-7 w-7 text-brand-gold/70" />
            <p className="mt-3 text-[15px] italic leading-relaxed text-slate-200">
              &ldquo;BEL Academy was created with one mission: helping learners
              communicate confidently in English while respecting their goals,
              culture, and future ambitions.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-right">
                <p className="font-display text-sm font-semibold text-white">
                  {founder.name}
                </p>
                <p className="text-xs text-brand-gold">{founder.role}</p>
              </div>
            </footer>
          </motion.blockquote>

          {/* CTA link */}
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition hover:text-white"
          >
            Read our full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* ── RIGHT: Real Office Image ──────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: SMOOTH_EASE }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Main image container */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30 sm:aspect-[4/5]">
            <Image
              src="/images/belacademyoffice.jpg"
              alt="BEL Academy office — real campus with branded signage"
              fill
              quality={95}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/60 to-transparent" />
          </div>

          {/* Decorative offset frame */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-brand-gold/15" />

          {/* Floating trust badges */}
          <div className="absolute -left-3 bottom-6 z-10 flex flex-col gap-2 sm:-left-6 sm:bottom-10">
            {trustBadges.slice(0, 2).map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.12,
                  ease: SMOOTH_EASE,
                }}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-brand-navy/90 px-3 py-1.5 shadow-lg backdrop-blur-md sm:px-4 sm:py-2"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="text-[11px] font-medium text-slate-200 sm:text-xs">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="absolute -right-3 top-6 z-10 flex flex-col gap-2 sm:-right-6 sm:top-10">
            {trustBadges.slice(2).map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.12,
                  ease: SMOOTH_EASE,
                }}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-brand-navy/90 px-3 py-1.5 shadow-lg backdrop-blur-md sm:px-4 sm:py-2"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="text-[11px] font-medium text-slate-200 sm:text-xs">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM: Academy Stats Grid ─────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: SMOOTH_EASE }}
        className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm lg:mt-20"
      >
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem
              key={s.label}
              icon={s.icon}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              onVisible={() => {}}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
