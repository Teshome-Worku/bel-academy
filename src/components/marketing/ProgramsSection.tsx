"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { ProgramCard } from "./ProgramCard";
import { ProgramModal } from "./ProgramModal";
import { Section } from "@/components/layout/Section";
import type { Program } from "@/types/program";

/* ── Animation variants ───────────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <>
      <Section className="bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Section badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Programs
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold text-brand-navy md:text-4xl">
            Seven paths to fluency
          </h2>

          <p className="mt-3 text-brand-gray">
            Find the learning path that matches your goals—from everyday English to exam preparation.
          </p>

          {/* Accent line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 rounded-full bg-brand-gold" />
            <span className="h-1 w-3 rounded-full bg-brand-blue/30" />
            <span className="h-1 w-1.5 rounded-full bg-brand-blue/15" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <ProgramCard
                program={p}
                onViewDetails={() => setSelectedProgram(p)}
              />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="mt-10 text-center"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-medium text-brand-blue transition-colors hover:text-blue-800"
          >
            View all programs
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Section>

      {/* Program details modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
}
