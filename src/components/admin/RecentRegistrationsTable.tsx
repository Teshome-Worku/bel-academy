"use client";

import { useMemo, useState } from "react";
import { registrations as initial } from "@/data/registrations";
import { programs } from "@/data/programs";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { StatusBadge } from "./StatusBadge";

function programTitle(id: string) {
  return programs.find((p) => p.id === id)?.title ?? id;
}

export function RecentRegistrationsTable() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return initial.filter((r) => r.fullName.toLowerCase().includes(q) || r.email.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  return (
    <div className="space-y-4">
      <Input placeholder="Search recent..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full sm:max-w-xs" />
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 text-brand-gray dark:text-slate-300">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Program</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-100 dark:border-slate-700">
                <td className="px-4 py-3 font-medium text-brand-navy dark:text-slate-100">{r.fullName}</td>
                <td className="px-4 py-3 text-brand-gray dark:text-slate-400">{programTitle(r.programId)}</td>
                <td className="px-4 py-3 text-brand-gray dark:text-slate-400">{formatDate(r.submittedAt)}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
