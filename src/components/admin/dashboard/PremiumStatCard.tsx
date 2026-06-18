"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

type PremiumStatCardProps = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  gradient?: string;
};

export function PremiumStatCard({
  label,
  value,
  icon: Icon,
  trend,
  gradient = "from-brand-blue to-brand-blue/80",
}: PremiumStatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
          gradient,
        )}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs sm:text-sm font-medium text-brand-gray dark:text-slate-400">{label}</p>
          <p className="mt-1 sm:mt-2 font-heading text-xl sm:text-3xl font-bold text-brand-navy dark:text-slate-100">
            {value}
          </p>
          {trend ? (
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              {trend}
            </p>
          ) : null}
        </div>
        <div
          className={cn(
            "flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ml-2",
            gradient,
          )}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>
    </motion.div>
  );
}
