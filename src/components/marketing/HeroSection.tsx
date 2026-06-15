"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";
import { Container } from "@/components/layout/Container";
import { CountUpStats } from "./CountUpStats";

/* ── Framer Motion variants ───────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "calc(100vh - 4.5rem)" }}>
      {/* ── Background Image ─────────────────────────── */}
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        alt="Students learning English at BEL Academy"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Dark gradient overlay ────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/70 to-brand-navy/90" />

      {/* ── Subtle decorative elements ───────────────── */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand-gold/10 blur-3xl" />

      {/* ── Main Content ────────────────────────────── */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-10 sm:py-14 md:py-16 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Welcome badge */}
          <motion.div custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-gold backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Welcome to {BRAND.name}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Master English
            <br />
            <span className="text-brand-gold">With Confidence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-lg md:text-xl"
          >
            Join thousands of learners at our Buraayyuu and Jamoo Furii
            branches—or study online with expert instructors.
          </motion.p>

          {/* CTA Buttons — side by side on all screens */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-6 flex gap-3 sm:mt-8 sm:gap-4"
          >
            <Link href="/register" className="flex-1 sm:flex-none">
              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-sm font-bold text-brand-navy shadow-lg shadow-brand-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-gold/30 active:translate-y-0 sm:inline-flex sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/programs" className="flex-1 sm:flex-none">
              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 active:translate-y-0 sm:inline-flex sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Floating Statistics Card ─────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="relative z-10 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10"
      >
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-2xl px-5 py-5 shadow-2xl sm:px-10 sm:py-7">
            <CountUpStats />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
