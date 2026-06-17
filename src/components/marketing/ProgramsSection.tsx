"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { ProgramCard } from "./ProgramCard";
import { ProgramModal } from "./ProgramModal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Program } from "@/types/program";
import { SMOOTH_EASE } from "./animation";

const FEATURED_COUNT = 4;

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const featured = programs.slice(0, FEATURED_COUNT);

  return (
    <>
      <Section variant="muted">
        <SectionHeading
          align="center"
          eyebrow="Programs"
          title="Paths to fluency"
          description="Find the learning path that matches your goals—from everyday English to exam preparation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: SMOOTH_EASE }}
            >
              <ProgramCard
                program={p}
                index={i}
                onViewDetails={() => {
                  setSelectedProgram(p);
                  setSelectedIndex(i);
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-brand-dark-card px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:border-white/20 hover:bg-brand-dark-secondary dark:bg-brand-dark-card dark:hover:bg-brand-dark-secondary"
          >
            View all {programs.length} programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      <ProgramModal
        program={selectedProgram}
        accentIndex={selectedIndex}
        onClose={() => {
          setSelectedProgram(null);
          setSelectedIndex(null);
        }}
      />
    </>
  );
}
