"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardList, BookOpen, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComingSoonModal } from "@/components/admin/ui/ComingSoonModal";

const actions = [
  {
    label: "Add Student",
    icon: UserPlus,
    color:
      "bg-brand-blue/10 text-brand-blue border-brand-blue/20 dark:bg-brand-blue/20 dark:text-blue-300 dark:border-brand-blue/30",
    modalTitle: "Add Student",
    modalMessage:
      "Manual student registration is coming soon. You will be able to add students directly from this dashboard.",
  },
  {
    label: "Add Registration",
    icon: ClipboardList,
    color:
      "bg-brand-gold/10 text-amber-700 border-brand-gold/30 dark:bg-brand-gold/15 dark:text-amber-300 dark:border-brand-gold/25",
    modalTitle: "Add Registration",
    modalMessage:
      "Manual registration entry is coming soon. New applications will be manageable from this panel.",
  },
  {
    label: "Add Program",
    icon: BookOpen,
    color:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    modalTitle: "Add Program",
    modalMessage:
      "Program management is coming soon. You will be able to create and edit learning programs here.",
  },
  {
    label: "Add Branch",
    icon: MapPin,
    color:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
    modalTitle: "Add Branch",
    modalMessage:
      "Branch management is coming soon. New academy branches will be addable from this dashboard.",
  },
];

export function QuickActions() {
  const [modal, setModal] = useState<{
    title: string;
    message: string;
    icon: typeof UserPlus;
  } | null>(null);

  return (
    <>
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
              onClick={() =>
                setModal({
                  title: action.modalTitle,
                  message: action.modalMessage,
                  icon: action.icon,
                })
              }
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

      <ComingSoonModal
        open={modal !== null}
        onClose={() => setModal(null)}
        title={modal?.title ?? ""}
        message={modal?.message ?? ""}
        icon={modal?.icon}
      />
    </>
  );
}
