"use client";

import { motion } from "framer-motion";
import { branches } from "@/data/branches";
import { BranchCard } from "./BranchCard";
import { Section } from "@/components/layout/Section";
import { SMOOTH_EASE } from "./animation";

/* ── Animation variants ───────────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SMOOTH_EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.5,
      ease: SMOOTH_EASE,
    },
  }),
};

export function BranchesSection() {
  return (
    <Section className="bg-white">
      {/* Animated header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={headingVariants}
        className="mx-auto max-w-2xl text-center"
      >
        {/* Section badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/15 bg-brand-gold/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          Locations
        </span>

        <h2 className="mt-4 font-display text-3xl font-bold text-brand-navy md:text-4xl">
          Our branches
        </h2>

        <p className="mt-3 text-brand-gray">
          Visit us in person or join live online sessions from anywhere.
        </p>

        {/* Accent line */}
        <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-brand-blue" />
          <span className="h-1 w-3 rounded-full bg-brand-gold/40" />
          <span className="h-1 w-1.5 rounded-full bg-brand-gold/20" />
        </div>
      </motion.div>

      {/* Cards grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {branches.map((b, i) => (
          <motion.div
            key={b.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <BranchCard branch={b} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
