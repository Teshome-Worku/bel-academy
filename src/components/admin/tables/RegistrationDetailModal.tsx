"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Registration } from "@/types/registration";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "../StatusBadge";
import { Button } from "@/components/ui/Button";

type RegistrationDetailModalProps = {
  registration: Registration | null;
  onClose: () => void;
  onApprove?: () => void;
  onReject?: () => void;
};

export function RegistrationDetailModal({
  registration,
  onClose,
  onApprove,
  onReject,
}: RegistrationDetailModalProps) {
  if (!registration) return null;

  const program = programs.find((p) => p.id === registration.programId);
  const branch = branches.find((b) => b.id === registration.branchId);

  return (
    <AnimatePresence>
      {registration && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800 dark:text-slate-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold text-brand-navy">
                  Registration Details
                </h3>
                <StatusBadge status={registration.status} />
              </div>
              <button
                title="Close"
                type="button"
                onClick={onClose}
                className="rounded-lg p-1 text-brand-gray hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-brand-gray">Name</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{registration.fullName}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Phone</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{registration.phone}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Email</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{registration.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Program</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{program?.title}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Branch</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{branch?.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Schedule</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100 capitalize">{registration.schedule}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray">Submitted</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">
                  {formatDate(registration.submittedAt)}
                </dd>
              </div>
            </dl>
            {registration.status === "pending" ? (
              <div className="mt-6 flex gap-2">
                <Button className="flex-1" onClick={onApprove}>Approve</Button>
                <Button variant="outline" className="flex-1" onClick={onReject}>
                  Reject
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="mt-6 w-full" onClick={onClose}>
                Close
              </Button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
