"use client";

import Link from "next/link";
import { ArrowRight, Clock, BarChart3, BookOpen, Briefcase, GraduationCap, Award, School2 as School, MessageCircle, PenTool } from "lucide-react";
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

/* ── Color accent per program for visual variety ──── */
const accentMap: Record<string, { iconBg: string; iconColor: string; hoverBorder: string; cardBg: string; stripe: string }> = {
  "General English": { iconBg: "bg-blue-50", iconColor: "text-brand-blue", hoverBorder: "hover:border-brand-blue/40", cardBg: "from-blue-50/60 to-white", stripe: "bg-brand-blue/10" },
  "Business English": { iconBg: "bg-amber-50", iconColor: "text-amber-600", hoverBorder: "hover:border-amber-400/40", cardBg: "from-amber-50/60 to-white", stripe: "bg-amber-600/10" },
  "IELTS Preparation": { iconBg: "bg-emerald-50", iconColor: "text-emerald-600", hoverBorder: "hover:border-emerald-400/40", cardBg: "from-emerald-50/60 to-white", stripe: "bg-emerald-600/10" },
  "TOEFL Preparation": { iconBg: "bg-purple-50", iconColor: "text-purple-600", hoverBorder: "hover:border-purple-400/40", cardBg: "from-purple-50/60 to-white", stripe: "bg-purple-600/10" },
  "Kids English": { iconBg: "bg-pink-50", iconColor: "text-pink-600", hoverBorder: "hover:border-pink-400/40", cardBg: "from-pink-50/60 to-white", stripe: "bg-pink-600/10" },
  "Conversation Club": { iconBg: "bg-sky-50", iconColor: "text-sky-600", hoverBorder: "hover:border-sky-400/40", cardBg: "from-sky-50/60 to-white", stripe: "bg-sky-600/10" },
  "Academic Writing": { iconBg: "bg-orange-50", iconColor: "text-orange-600", hoverBorder: "hover:border-orange-400/40", cardBg: "from-orange-50/60 to-white", stripe: "bg-orange-600/10" },
};

const defaultAccent = { iconBg: "bg-blue-50", iconColor: "text-brand-blue", hoverBorder: "hover:border-brand-blue/40", cardBg: "from-blue-50/60 to-white", stripe: "bg-brand-blue/10" };

export function ProgramCard({ program, onViewDetails }: { program: Program; onViewDetails: () => void }) {
  const Icon = iconMap[program.iconName] || BookOpen;
  const accent = accentMap[program.title] || defaultAccent;

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 px-6 py-6 pl-10 transition-all duration-300 hover:-translate-y-1 ${accent.hoverBorder} bg-gradient-to-b ${accent.cardBg}`}
    >
      {/* left color stripe */}
      <div className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl ${accent.stripe}`} />
      {/* Popular badge */}
      {program.featured && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.iconBg} transition-transform duration-300 group-hover:scale-110 ring-1 ring-white/30`}>
        <Icon className={`h-6 w-6 ${accent.iconColor}`} />
      </div>

      {/* Title */}
      <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
        {program.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray">
        {program.description}
      </p>

      {/* Meta info */}
      <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-brand-gray">
          <Clock className="h-3.5 w-3.5 text-brand-blue" />
          <span>{program.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-brand-gray">
          <BarChart3 className="h-3.5 w-3.5 text-brand-gold" />
          <span className="capitalize">{program.level.replace("-", " ")}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-2">
        <Link href="/register" className="flex-1">
          <button
            type="button"
            className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-800 hover:shadow-md hover:shadow-brand-blue/20"
          >
            Enroll Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </button>
        </Link>
        <button
          type="button"
          onClick={onViewDetails}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-brand-navy transition-all duration-200 hover:border-brand-blue/30 hover:bg-blue-50 hover:text-brand-blue"
        >
          Details
        </button>
      </div>
    </div>
  );
}
