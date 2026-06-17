"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Wifi, ArrowRight, Map as MapIcon } from "lucide-react";
import Link from "next/link";
import type { Branch } from "@/types/branch";

export function BranchCard({ branch }: { branch: Branch }) {
  const isOnline = branch.isOnline;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-brand-dark-card dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      {/* Top accent stripe */}
      <div className={`absolute top-0 left-0 h-1.5 w-full z-10 ${isOnline ? "bg-gradient-to-r from-brand-gold to-amber-400" : "bg-gradient-to-r from-brand-blue to-blue-400"}`} />

      {/* Map Placeholder */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-[#0A1229]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5" />
        <div className="absolute inset-0 flex items-center justify-center opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <MapIcon className="h-12 w-12 text-slate-300 dark:text-brand-dark-secondary" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-brand-dark-card" />
        
        {/* Branch status badge overlaying map */}
        <div className="absolute right-4 top-5">
          {isOnline ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live Online
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue dark:bg-brand-blue-light" />
              Physical Campus
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 relative z-10 -mt-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg border border-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${isOnline ? "bg-amber-50 dark:bg-brand-gold/10" : "bg-blue-50 dark:bg-brand-blue/10"}`}>
            {isOnline ? (
              <Wifi className="h-6 w-6 text-brand-gold" />
            ) : (
              <MapPin className="h-6 w-6 text-brand-blue dark:text-brand-blue-light" />
            )}
          </div>
          <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white mt-6">{branch.name}</h3>
        </div>

        {/* Info rows */}
        <ul className="mt-6 flex-1 space-y-4">
          <li className="flex items-start gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-white/5">
              <MapPin className="h-4 w-4 text-brand-blue dark:text-brand-blue-light" />
            </div>
            <span className="mt-1">{branch.address}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-white/5">
              <Phone className="h-4 w-4 text-brand-blue dark:text-brand-blue-light" />
            </div>
            <span className="font-medium text-brand-navy dark:text-slate-300">{branch.phone}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray dark:text-slate-400">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-white/5">
              <Clock className="h-4 w-4 text-brand-blue dark:text-brand-blue-light" />
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 py-3 text-sm font-semibold text-brand-navy dark:text-slate-200 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
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
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 py-3 text-sm font-semibold text-brand-navy dark:text-slate-200 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
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
