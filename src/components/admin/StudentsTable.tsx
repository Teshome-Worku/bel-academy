"use client";

import { useMemo, useState } from "react";
import { students as initial } from "@/data/students";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { StatusBadge } from "./StatusBadge";

export function StudentsTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const rows = useMemo(() => {
    return initial.filter((s) => {
      const matchQ = s.fullName.toLowerCase().includes(query.toLowerCase()) || s.email.toLowerCase().includes(query.toLowerCase());
      const matchS = status === "all" || s.status === status;
      return matchQ && matchS;
    });
  }, [query, status]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input placeholder="Search students..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="max-w-xs">
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="graduated">Graduated</option>
        </Select>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-brand-gray">
            <tr>
              <th className="px-4 py-3 font-medium">Student</th>
              <th className="px-4 py-3 font-medium">Program</th>
              <th className="px-4 py-3 font-medium">Branch</th>
              <th className="px-4 py-3 font-medium">Enrolled</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <p className="font-medium text-brand-navy">{s.fullName}</p>
                  <p className="text-xs text-brand-gray">{s.email}</p>
                </td>
                <td className="px-4 py-3 text-brand-gray">{programs.find((p) => p.id === s.programId)?.title}</td>
                <td className="px-4 py-3 text-brand-gray">{branches.find((b) => b.id === s.branchId)?.name}</td>
                <td className="px-4 py-3 text-brand-gray">{formatDate(s.enrolledAt)}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={s.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
