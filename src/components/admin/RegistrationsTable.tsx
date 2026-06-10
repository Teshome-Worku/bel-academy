"use client";

import { useMemo, useState } from "react";
import { registrations as initial } from "@/data/registrations";
import type { RegistrationStatus } from "@/types/registration";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "./StatusBadge";

export function RegistrationsTable() {
  const [rows, setRows] = useState(initial);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const q = query.toLowerCase();
      const matchQ = r.fullName.toLowerCase().includes(q) || r.phone.includes(q);
      const matchS = statusFilter === "all" || r.status === statusFilter;
      return matchQ && matchS;
    });
  }, [rows, query, statusFilter]);

  function updateStatus(id: string, status: RegistrationStatus) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input placeholder="Search by name or phone..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="max-w-xs">
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </Select>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-brand-gray">
            <tr>
              <th className="px-4 py-3 font-medium">Applicant</th>
              <th className="px-4 py-3 font-medium">Program</th>
              <th className="px-4 py-3 font-medium">Branch</th>
              <th className="px-4 py-3 font-medium">Submitted</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <p className="font-medium text-brand-navy">{r.fullName}</p>
                  <p className="text-xs text-brand-gray">{r.phone}</p>
                </td>
                <td className="px-4 py-3 text-brand-gray">{programs.find((p) => p.id === r.programId)?.title}</td>
                <td className="px-4 py-3 text-brand-gray">{branches.find((b) => b.id === r.branchId)?.name}</td>
                <td className="px-4 py-3 text-brand-gray">{formatDate(r.submittedAt)}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={r.status} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" size="sm" variant="outline" onClick={() => updateStatus(r.id, "approved")}>
                      Approve
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => updateStatus(r.id, "rejected")}>
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
