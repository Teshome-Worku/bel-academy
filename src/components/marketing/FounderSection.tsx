"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { aboutContent } from "@/data/about";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";

export function FounderSection() {
  const { founder } = aboutContent;

  return (
    <Section variant="navy">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: SMOOTH_EASE }}
        >
          <SectionHeading
            eyebrow="Our Story"
            title="Built for learners who dream bigger"
            description={founder.bio}
            dark
          />
          <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <Quote className="h-8 w-8 text-brand-gold/80" />
            <p className="mt-4 text-lg italic leading-relaxed text-slate-200">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <footer className="mt-4">
              <p className="font-display font-semibold text-white">{founder.name}</p>
              <p className="text-sm text-brand-gold">{founder.role}</p>
            </footer>
          </blockquote>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition hover:text-white"
          >
            Read our full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: SMOOTH_EASE }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/40 to-brand-gold/20 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-gold/20 text-4xl font-bold text-brand-gold">
                BEL
              </div>
              <p className="mt-6 font-display text-2xl font-bold text-white">
                Way Maker
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Empowering English learners since 2010
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-brand-gold/20" />
        </motion.div>
      </div>
    </Section>
  );
}
