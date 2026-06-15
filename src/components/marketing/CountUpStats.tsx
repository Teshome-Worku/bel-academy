"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Users, GraduationCap, BookOpen, Building2 } from "lucide-react";
import { marketingStats } from "@/data/statistics";

/* ── Icon map for each stat ────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  "Active Students": Users,
  "Expert Instructors": GraduationCap,
  Programs: BookOpen,
  Branches: Building2,
};

/* ── Color map for icon backgrounds ────────────────── */
const colorMap: Record<string, { bg: string; icon: string }> = {
  "Active Students": { bg: "bg-blue-500/20", icon: "text-blue-400" },
  "Expert Instructors": { bg: "bg-amber-500/20", icon: "text-amber-400" },
  Programs: { bg: "bg-emerald-500/20", icon: "text-emerald-400" },
  Branches: { bg: "bg-purple-500/20", icon: "text-purple-400" },
};

/* ── Animated counter hook ─────────────────────────── */
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (start) {
      animate();
    }
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, animate]);

  return count;
}

/* ── Individual Stat Item ──────────────────────────── */
function StatItem({
  label,
  value,
  numericValue,
  started,
}: {
  label: string;
  value: string;
  numericValue: number;
  started: boolean;
}) {
  const count = useCountUp(numericValue, 2200, started);
  const Icon = iconMap[label] || Users;
  const colors = colorMap[label] || { bg: "bg-blue-500/20", icon: "text-blue-400" };
  const suffix = value.includes("+") ? "+" : "";

  return (
    <div className="flex items-center gap-2.5 sm:gap-4">
      {/* Icon circle */}
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors.bg} sm:h-11 sm:w-11 sm:rounded-xl`}
      >
        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.icon}`} />
      </div>

      {/* Number + Label */}
      <div>
        <p className="tabular-nums font-display text-lg font-bold text-white sm:text-2xl lg:text-3xl">
          {started ? count.toLocaleString() : "0"}
          {suffix}
        </p>
        <p className="text-[10px] font-medium text-slate-400 sm:text-sm">{label}</p>
      </div>
    </div>
  );
}

/* ── Main CountUpStats Grid ──────────────────────── */
export function CountUpStats() {
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4"
    >
      {marketingStats.map((stat) => (
        <StatItem
          key={stat.label}
          label={stat.label}
          value={stat.value}
          numericValue={stat.numericValue}
          started={started}
        />
      ))}
    </div>
  );
}
