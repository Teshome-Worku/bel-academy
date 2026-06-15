"use client";

import { motion } from "framer-motion";
import { UserPlus, ClipboardList, BookOpen, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  {
    label: "Add Student",
    icon: UserPlus,
    color: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  },
  {
    label: "Add Registration",
    icon: ClipboardList,
    color: "bg-brand-gold/10 text-amber-700 border-brand-gold/30",
  },
  {
    label: "Add Program",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    label: "Add Branch",
    icon: MapPin,
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
];

export function QuickActions() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((action, i) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={action.label}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => alert("Demo action — showcase only")}
            className={cn(
              "flex items-center gap-3 rounded-xl border p-4 text-left transition hover:shadow-md",
              action.color,
            )}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-semibold">{action.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
