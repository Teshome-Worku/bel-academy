"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { BRAND } from "@/constants/brand";
import { SMOOTH_EASE } from "./animation";

export function FinalCTA() {
  return (
    <Section variant="white" className="pb-20 pt-8 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: SMOOTH_EASE }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#050B1E] via-[#0D1835] to-[#0D47A1] px-6 py-14 text-center text-white shadow-2xl md:px-12 md:py-20"
      >
        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gold glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-[80px]" />
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
            {BRAND.tagline}
          </span>

          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Start Your English Journey{" "}
            <span className="text-brand-gold">Today</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Join {BRAND.name} and learn with expert instructors at our branches
            or online. Registration takes just a few minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-base font-bold text-brand-navy shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(245,166,35,0.6)] sm:w-auto"
            >
              Register Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Free placement assessment · No hidden fees · Flexible schedules
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
