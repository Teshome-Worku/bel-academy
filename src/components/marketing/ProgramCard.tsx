"use client";

import Link from "next/link";
import { ArrowRight, Clock, BarChart3, BookOpen, Briefcase, GraduationCap, Award, School2 as School, MessageCircle, PenTool, Calendar, UserCheck } from "lucide-react";
import type { Program } from "@/types/program";
import { cn } from "@/lib/utils";

/* ── Icon resolver ────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  School,
  MessageCircle,
  PenTool,
  Clock,
  Calendar,
  UserCheck,
};

export function ProgramCard({ program, index, onViewDetails }: { program: Program; index?: number; onViewDetails: () => void }) {
  const Icon = iconMap[program.iconName] || BookOpen;

  // Alternate subtle gradients for the dark cards
  const gradientClass = (index ?? 0) % 2 === 0 
    ? "from-brand-dark-secondary to-brand-dark-card" 
    : "from-brand-dark-card to-[#0A1229]";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(13,71,161,0.2)] dark:hover:border-brand-blue/30",
        gradientClass
      )}
    >
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Popular badge */}
      {program.featured && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold shadow-[0_0_10px_rgba(245,166,35,0.1)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_5px_#F5A623]" />
            Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20">
        <Icon className="relative z-10 h-7 w-7 text-slate-300 transition-colors duration-300 group-hover:text-brand-gold" />
        <div className="absolute inset-0 z-0 rounded-2xl bg-brand-blue/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-blue-light">
        {program.title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {program.description}
      </p>

      {/* Meta info */}
      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
          <Clock className="h-4 w-4 text-brand-blue/80" />
          <span>{program.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
          <BarChart3 className="h-4 w-4 text-brand-gold/80" />
          <span className="capitalize">{program.level.replace("-", " ")}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/register" className="w-full sm:flex-1">
          <button
            type="button"
            className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(13,71,161,0.3)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(13,71,161,0.5)]"
          >
            Enroll Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </Link>
        <button
          type="button"
          onClick={onViewDetails}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white sm:w-auto"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
