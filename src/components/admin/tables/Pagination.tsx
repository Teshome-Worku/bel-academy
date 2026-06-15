"use client";

import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
      <p className="text-sm text-brand-gray">
        Page {page} of {totalPages}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition",
            page <= 1
              ? "text-slate-300"
              : "text-brand-navy hover:bg-slate-100",
          )}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition",
            page >= totalPages
              ? "text-slate-300"
              : "text-brand-navy hover:bg-slate-100",
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
}
