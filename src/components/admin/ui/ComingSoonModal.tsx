"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon?: LucideIcon;
};

export function ComingSoonModal({
  open,
  onClose,
  title,
  message,
  icon: Icon = Sparkles,
}: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <Icon className="h-6 w-6" />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-brand-gray hover:bg-slate-100 dark:hover:bg-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h2
              id="coming-soon-title"
              className="mt-4 font-heading text-xl font-semibold text-brand-navy dark:text-slate-100"
            >
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray dark:text-slate-400">
              {message}
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-gold">
              Coming soon in production
            </p>
            <Button type="button" className="mt-6 w-full" onClick={onClose}>
              Got it
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
