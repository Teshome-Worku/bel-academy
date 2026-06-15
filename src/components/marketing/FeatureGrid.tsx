"use client";

import { BookOpen, Globe, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SMOOTH_EASE } from "./animation";

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "CEFR-aligned lessons from beginner to advanced levels.",
    accent: { bg: "bg-blue-50", color: "text-brand-blue", ring: "group-hover:ring-brand-blue/20" },
  },
  {
    icon: Users,
    title: "Small Classes",
    description: "Personal attention with interactive speaking practice every session.",
    accent: { bg: "bg-amber-50", color: "text-amber-600", ring: "group-hover:ring-amber-400/20" },
  },
  {
    icon: Globe,
    title: "Online & On-Campus",
    description: "Choose Buraayyuu, Jamoo Furii, or live online classes.",
    accent: { bg: "bg-emerald-50", color: "text-emerald-600", ring: "group-hover:ring-emerald-400/20" },
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "Experienced instructors focused on real-world fluency.",
    accent: { bg: "bg-purple-50", color: "text-purple-600", ring: "group-hover:ring-purple-400/20" },
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SMOOTH_EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: SMOOTH_EASE,
    },
  }),
};

export function FeatureGrid() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50">
      {/* Animated heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={headingVariants}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/15 bg-brand-gold/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          Why BEL
        </span>

        <h2 className="mt-4 font-display text-3xl font-bold text-brand-navy md:text-4xl">
          Learn with purpose
        </h2>

        <p className="mt-3 text-brand-gray">
          Everything you need to reach your English goals—in one academy.
        </p>

        <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-brand-gold" />
          <span className="h-1 w-3 rounded-full bg-brand-blue/30" />
          <span className="h-1 w-1.5 rounded-full bg-brand-blue/15" />
        </div>
      </motion.div>

      {/* Feature cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description, accent }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className={`group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-0 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 hover:ring-4 ${accent.ring}`}>
              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`h-6 w-6 ${accent.color}`} />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-base font-bold text-brand-navy">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-auto pt-5">
                <div className="h-0.5 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-brand-blue" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
