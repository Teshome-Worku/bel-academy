"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Branch } from "@/types/branch";

export function BranchCard({ branch }: { branch: Branch }) {
  const isOnline = branch.isOnline;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Top accent stripe */}
      <div className={`h-1.5 w-full ${isOnline ? "bg-gradient-to-r from-brand-gold to-amber-400" : "bg-gradient-to-r from-brand-blue to-blue-500"}`} />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isOnline ? "bg-brand-gold/10" : "bg-brand-blue/10"}`}>
              {isOnline ? (
                <Wifi className="h-5 w-5 text-brand-gold" />
              ) : (
                <MapPin className="h-5 w-5 text-brand-blue" />
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-brand-navy">{branch.name}</h3>
          </div>

          {isOnline && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Live
            </span>
          )}
        </div>

        {/* Info rows */}
        <ul className="mt-5 flex-1 space-y-3">
          <li className="flex items-center gap-3 text-sm text-brand-gray">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
              <MapPin className="h-4 w-4 text-brand-blue" />
            </div>
            <span>{branch.address}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
              <Phone className="h-4 w-4 text-brand-blue" />
            </div>
            <span className="font-medium text-brand-navy">{branch.phone}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-brand-gray">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
              <Clock className="h-4 w-4 text-brand-blue" />
            </div>
            <span>{branch.hours}</span>
          </li>
        </ul>

        {/* Action buttons */}
        <div className="mt-5 flex gap-2 border-t border-slate-100 pt-5">
          {isOnline ? (
            <>
              <Link href="/register" className="flex-1">
                <button
                  type="button"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:bg-amber-500 hover:shadow-md"
                >
                  Join Online
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </Link>
              <Link href="/programs" className="flex-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-brand-navy transition-all duration-200 hover:border-brand-blue/30 hover:bg-blue-50 hover:text-brand-blue"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Learn More
                </button>
              </Link>
            </>
          ) : (
            <>
              <a href={`tel:${branch.phone}`} className="flex-1">
                <button
                  type="button"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-800 hover:shadow-md hover:shadow-brand-blue/20"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call Branch
                </button>
              </a>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-brand-navy transition-all duration-200 hover:border-brand-blue/30 hover:bg-blue-50 hover:text-brand-blue"
              >
                <Navigation className="h-3.5 w-3.5" />
                Directions
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
