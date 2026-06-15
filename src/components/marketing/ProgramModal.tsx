"use client";

import { useEffect } from "react";
import { X, Clock, BarChart3, MapPin, CheckCircle2, BookOpen, Briefcase, GraduationCap, Award, School2 as School, MessageCircle, PenTool, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Program } from "@/types/program";

/* ── Icon resolver ────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  School,
  MessageCircle,
  PenTool,
};

/* ── Accent colors ─────────────────────────────────── */
const accentMap: Record<string, { bg: string; color: string; lightBg: string }> = {
  "General English":     { bg: "bg-brand-blue",     color: "text-brand-blue",  lightBg: "bg-blue-50" },
  "Business English":    { bg: "bg-amber-600",      color: "text-amber-600",   lightBg: "bg-amber-50" },
  "IELTS Preparation":   { bg: "bg-emerald-600",    color: "text-emerald-600", lightBg: "bg-emerald-50" },
  "TOEFL Preparation":   { bg: "bg-purple-600",     color: "text-purple-600",  lightBg: "bg-purple-50" },
  "Kids English":        { bg: "bg-pink-600",       color: "text-pink-600",    lightBg: "bg-pink-50" },
  "Conversation Club":   { bg: "bg-sky-600",        color: "text-sky-600",     lightBg: "bg-sky-50" },
  "Academic Writing":    { bg: "bg-orange-600",     color: "text-orange-600",  lightBg: "bg-orange-50" },
};

const defaultAccent = { bg: "bg-brand-blue", color: "text-brand-blue", lightBg: "bg-blue-50" };

export function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
  /* Lock body scroll when open */
  useEffect(() => {
    if (program) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [program]);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const Icon = program ? (iconMap[program.iconName] || BookOpen) : BookOpen;
  const accent = program ? (accentMap[program.title] || defaultAccent) : defaultAccent;

  return (
    <AnimatePresence>
      {program && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 z-[90] m-auto flex max-h-[90vh] max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            {/* Header with accent gradient */}
            <div className={`relative ${accent.bg} px-6 pb-6 pt-5`}>
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{program.title}</h3>
                  {program.featured && (
                    <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-white/80">
                      ★ Popular Program
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {/* Description */}
              <p className="text-sm leading-relaxed text-brand-gray">{program.description}</p>

              {/* Meta grid */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-gray">
                    <Clock className="h-3.5 w-3.5 text-brand-blue" />
                    Duration
                  </div>
                  <p className="mt-1 font-display text-sm font-semibold text-brand-navy">{program.duration}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-gray">
                    <BarChart3 className="h-3.5 w-3.5 text-brand-gold" />
                    Level
                  </div>
                  <p className="mt-1 font-display text-sm font-semibold capitalize text-brand-navy">{program.level.replace("-", " ")}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-gray">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                    Delivery
                  </div>
                  <p className="mt-1 font-display text-sm font-semibold text-brand-navy">{program.deliveryMode}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-gray">
                    <Clock className="h-3.5 w-3.5 text-purple-500" />
                    Schedule
                  </div>
                  <p className="mt-1 font-display text-sm font-semibold text-brand-navy">{program.schedule}</p>
                </div>
              </div>

              {/* Learning outcomes */}
              <div className="mt-5">
                <h4 className="font-display text-sm font-bold text-brand-navy">What You Will Learn</h4>
                <ul className="mt-3 space-y-2.5">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sm text-brand-gray">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent.color}`} />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-slate-100 px-6 py-4">
              <Link href="/register" onClick={onClose}>
                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3 text-sm font-bold text-white shadow-md shadow-brand-blue/20 transition-all duration-200 hover:bg-blue-800 hover:shadow-lg"
                >
                  Enroll in {program.title}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
