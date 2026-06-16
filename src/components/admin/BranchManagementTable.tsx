"use client";

import { useMemo, useState } from "react";
import { branches as initial } from "@/data/branches";
import { Input } from "@/components/ui/Input";

export function BranchManagementTable() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return initial.filter((b) => b.name.toLowerCase().includes(q) || b.phone.includes(q));
  }, [query]);

  return (
    <div className="space-y-4">
      <Input placeholder="Search branches..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 text-brand-gray dark:text-slate-300">
            <tr>
              <th className="px-4 py-3 font-medium">Branch</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Address</th>
              <th className="px-4 py-3 font-medium">Hours</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id} className="border-t border-slate-100 dark:border-slate-700">
                <td className="px-4 py-3 font-medium text-brand-navy dark:text-slate-100">{b.name}</td>
                <td className="px-4 py-3 text-brand-gray dark:text-slate-400">{b.phone}</td>
                <td className="px-4 py-3 text-brand-gray dark:text-slate-400">{b.address}</td>
                <td className="px-4 py-3 text-brand-gray dark:text-slate-400">{b.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
