"use client";

import { BookOpen, Globe, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "CEFR-aligned lessons from beginner to advanced levels.",
  },
  {
    icon: Users,
    title: "Small Classes",
    description: "Personal attention with interactive speaking practice every session.",
  },
  {
    icon: Globe,
    title: "Online & On-Campus",
    description: "Choose Buraayyuu, Jamoo Furii, or live online classes.",
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "Experienced instructors focused on real-world fluency.",
  },
];

export function FeatureGrid() {
  return (
    <Section variant="white">
      <SectionHeading
        align="center"
        eyebrow="Why BEL Academy"
        title="Learn with purpose"
        description="Everything you need to reach your English goals—in one academy."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: SMOOTH_EASE }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
              <Icon className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-brand-navy">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              {description}
            </p>
            <div className="mt-auto pt-5">
              <div className="h-0.5 w-8 rounded-full bg-slate-200 transition-all group-hover:w-12 group-hover:bg-brand-gold" />
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
