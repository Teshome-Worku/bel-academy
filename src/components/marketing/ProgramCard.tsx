"use client";

import Link from "next/link";
import { ArrowRight, Clock, BarChart3, BookOpen, Briefcase, GraduationCap, Award, School2 as School, MessageCircle, PenTool, Calendar, UserCheck } from "lucide-react";
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
  Clock,
  Calendar,
  UserCheck,
};

/* ── Color palettes (index-based rotation) ───────── */
const PALETTES = [
  { start: "#1D4ED8", end: "#60A5FA", stripe: "#1D4ED8" }, // Blue
  { start: "#F59E0B", end: "#FDE68A", stripe: "#F59E0B" }, // Gold
  { start: "#312E81", end: "#6366F1", stripe: "#312E81" }, // Indigo
  { start: "#059669", end: "#34D399", stripe: "#059669" }, // Emerald
  { start: "#1D4ED8", end: "#F59E0B", stripe: "#1D4ED8" }, // Blue-Gold
  { start: "#312E81", end: "#1D4ED8", stripe: "#312E81" }, // Indigo-Blue
  { start: "#F59E0B", end: "#059669", stripe: "#F59E0B" }, // Gold-Emerald
];

const defaultAccent = { start: "#1D4ED8", end: "#60A5FA", stripe: "#1D4ED8" };

export function ProgramCard({ program, index, onViewDetails }: { program: Program; index?: number; onViewDetails: () => void }) {
  const Icon = iconMap[program.iconName] || BookOpen;
  const palette = typeof index === "number" ? PALETTES[index % PALETTES.length] : defaultAccent;
  const start = palette.start;
  const end = palette.end;
  const stripe = palette.stripe;

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] px-6 py-6 pl-10 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl`}
      style={{
        background: `linear-gradient(135deg, ${start} 0%, ${end} 100%)`,
        boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
      }}
    >
      {/* left color stripe */}
      <div style={{ background: stripe }} className="absolute left-0 top-0 h-full w-2 rounded-l-[24px]" />
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
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ring-1 ring-white/30"
        style={{ background: 'rgba(255,255,255,0.12)' }}
      >
        <Icon className="h-6 w-6" style={{ color: start }} />
      </div>

      {/* Title */}
      <h3 className="mt-4 font-display text-lg font-bold text-white">
        {program.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/90">
        {program.description}
      </p>

      {/* Meta info */}
      <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-white/90">
          <Clock className="h-3.5 w-3.5 text-white/90" />
          <span>{program.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/90">
          <BarChart3 className="h-3.5 w-3.5 text-white/90" />
          <span className="capitalize">{program.level.replace("-", " ")}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-3 flex-col sm:flex-row">
        <Link href="/register" className="w-full sm:flex-1">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-200"
            style={{ background: '#ffffff', color: start }}
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
        <button
          type="button"
          onClick={onViewDetails}
          className="w-full sm:w-auto rounded-xl border border-white/30 px-4 py-3 text-sm font-medium text-white/95 transition-all duration-200 hover:backdrop-brightness-110"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
