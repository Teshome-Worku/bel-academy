"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { branches } from "@/data/branches";
import { BranchCard } from "./BranchCard";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";

export function BranchesSection() {
  return (
    <Section variant="white">
      <SectionHeading
        align="center"
        eyebrow="Locations"
        title="Our branches"
        description="Visit us in person or join live online sessions from anywhere."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {branches.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: SMOOTH_EASE }}
          >
            <BranchCard branch={b} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/branches"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-brand-gold transition hover:text-brand-navy dark:hover:text-amber-300"
        >
          View all locations
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}
