"use client";

import {
  Users,
  UserPlus,
  BookOpen,
  MapPin,
  Monitor,
  TrendingUp,
} from "lucide-react";
import { dashboardOverview } from "@/data/dashboard-stats";
import { PremiumStatCard } from "./PremiumStatCard";

export function PremiumStatGrid() {
  const stats = [
    {
      label: "Total Students",
      value: dashboardOverview.totalStudents.toLocaleString(),
      icon: Users,
      gradient: "from-brand-blue to-blue-700",
    },
    {
      label: "New Registrations",
      value: dashboardOverview.pendingRegistrations,
      icon: UserPlus,
      gradient: "from-brand-gold to-amber-500",
    },
    {
      label: "Programs",
      value: dashboardOverview.activePrograms,
      icon: BookOpen,
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      label: "Branches",
      value: dashboardOverview.activeBranches,
      icon: MapPin,
      gradient: "from-violet-500 to-violet-600",
    },
    {
      label: "Online Students",
      value: dashboardOverview.onlineStudents,
      icon: Monitor,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      label: "Monthly Growth",
      value: dashboardOverview.monthlyGrowth,
      icon: TrendingUp,
      trend: "vs last month",
      gradient: "from-brand-navy to-slate-700",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((s) => (
        <PremiumStatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
