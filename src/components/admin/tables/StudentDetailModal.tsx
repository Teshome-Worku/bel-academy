"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Student } from "@/types/student";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { StudentAvatar } from "./StudentAvatar";
import { StatusBadge } from "../StatusBadge";
import { Button } from "@/components/ui/Button";

type StudentDetailModalProps = {
  student: Student | null;
  onClose: () => void;
};

export function StudentDetailModal({ student, onClose }: StudentDetailModalProps) {
  if (!student) return null;

  const program = programs.find((p) => p.id === student.programId);
  const branch = branches.find((b) => b.id === student.branchId);

  return (
    <AnimatePresence>
      {student && (
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
              <div className="flex items-center gap-3">
                <StudentAvatar name={student.fullName} className="h-12 w-12 text-sm" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-brand-navy dark:text-slate-100">
                    {student.fullName}
                  </h3>
                  <StatusBadge status={student.status} />
                </div>
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
                <dt className="text-brand-gray dark:text-slate-400">Phone</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{student.phone}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray dark:text-slate-400">Email</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{student.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray dark:text-slate-400">Program</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{program?.title}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray dark:text-slate-400">Branch</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">{branch?.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brand-gray dark:text-slate-400">Enrolled</dt>
                <dd className="font-medium text-brand-navy dark:text-slate-100">
                  {formatDate(student.enrolledAt)}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex gap-2">
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
