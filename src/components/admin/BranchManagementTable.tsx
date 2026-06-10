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
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-brand-gray">
            <tr>
              <th className="px-4 py-3 font-medium">Branch</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Address</th>
              <th className="px-4 py-3 font-medium">Hours</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-brand-navy">{b.name}</td>
                <td className="px-4 py-3 text-brand-gray">{b.phone}</td>
                <td className="px-4 py-3 text-brand-gray">{b.address}</td>
                <td className="px-4 py-3 text-brand-gray">{b.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
