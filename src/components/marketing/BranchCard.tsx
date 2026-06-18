"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Branch } from "@/types/branch";

/* OpenStreetMap embed URLs for the two physical branches */
const MAP_URLS: Record<string, string> = {
  "branch-buraayyuu":
    "https://www.openstreetmap.org/export/embed.html?bbox=38.6800%2C9.0000%2C38.7200%2C9.0300&layer=mapnik&marker=9.0150%2C38.7000",
  "branch-jamoo":
    "https://www.openstreetmap.org/export/embed.html?bbox=38.6600%2C8.9800%2C38.7000%2C9.0100&layer=mapnik&marker=8.9950%2C38.6800",
};

export function BranchCard({ branch }: { branch: Branch }) {
  const isOnline = branch.isOnline;
  const mapUrl = !isOnline ? MAP_URLS[branch.id] : null;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-brand-dark-card dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_8px_30px_rgba(13,71,161,0.2)]">
      {/* Top accent stripe */}
      <div
        className={`absolute top-0 left-0 h-1.5 w-full z-10 ${
          isOnline
            ? "bg-gradient-to-r from-brand-gold to-amber-400"
            : "bg-gradient-to-r from-brand-blue to-blue-400"
        }`}
      />

      {/* Map / Banner area */}
      <div className="relative h-40 w-full overflow-hidden">
        {mapUrl ? (
          /* Real OSM map embed for physical branches */
          <>
            <iframe
              src={mapUrl}
              title={`${branch.name} location map`}
              className="h-full w-full border-0 pointer-events-none"
              loading="lazy"
              aria-hidden="true"
            />
            {/* Slight gradient overlay at bottom so card content blends */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-brand-dark-card to-transparent" />
          </>
        ) : (
          /* Online branch — decorative placeholder */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 dark:from-[#0A1229] dark:to-[#0D1835]">
            <Wifi className="h-14 w-14 text-brand-gold/40 dark:text-brand-gold/20" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-brand-dark-card to-transparent" />
          </div>
        )}

        {/* Branch status badge */}
        <div className="absolute right-4 top-5 z-20">
          {isOnline ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 backdrop-blur-md dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live Online
            </span>
          ) : (
            /* ── FIX: was dark text on dark map — now white text on blue bg ── */
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue bg-brand-blue px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Physical Campus
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col px-6 pb-6 relative z-10 -mt-6">
        {/* Header: icon + name */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
              isOnline
                ? "border-amber-200 bg-amber-50 dark:border-white/10 dark:bg-brand-gold/10"
                : "border-blue-100 bg-blue-50 dark:border-white/10 dark:bg-brand-blue/10"
            }`}
          >
            {isOnline ? (
              <Wifi className="h-6 w-6 text-brand-gold" />
            ) : (
              /* ── FIX: was text-brand-blue-light (invisible in light mode) — now uses explicit colors ── */
              <MapPin className="h-6 w-6 text-brand-blue dark:text-blue-400" />
            )}
          </div>
          <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white mt-6">
            {branch.name}
          </h3>
        </div>

        {/* Info rows */}
        <ul className="mt-6 flex-1 space-y-4">
          <li className="flex items-start gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-white/5">
              {/* ── FIX: location icons are now brand-blue in light, blue-400 in dark ── */}
              <MapPin className="h-4 w-4 text-brand-blue dark:text-blue-400" />
            </div>
            <span className="mt-1">{branch.address}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-white/5">
              <Phone className="h-4 w-4 text-brand-blue dark:text-blue-400" />
            </div>
            <span className="font-medium text-brand-navy dark:text-slate-300">{branch.phone}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-white/5">
              <Clock className="h-4 w-4 text-brand-blue dark:text-blue-400" />
            </div>
            <span>{branch.hours}</span>
          </li>
        </ul>

        {/* Action buttons */}
        <div className="mt-6 flex gap-3 border-t border-slate-100 dark:border-white/10 pt-6">
          {isOnline ? (
            <>
              <Link href="/register" className="flex-1">
                <button
                  type="button"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-3 text-sm font-bold text-brand-navy shadow-[0_0_15px_rgba(245,166,35,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]"
                >
                  Join Online
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </Link>
              <Link href="/programs" className="flex-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Learn More
                </button>
              </Link>
            </>
          ) : (
            <>
              <a href={`tel:${branch.phone}`} className="flex-1">
                <button
                  type="button"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(13,71,161,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(13,71,161,0.4)]"
                >
                  <Phone className="h-4 w-4" />
                  Call Branch
                </button>
              </a>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
