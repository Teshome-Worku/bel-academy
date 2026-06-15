"use client";

import { useMemo, useState } from "react";
import { registrations as initial } from "@/data/registrations";
import type { Registration, RegistrationStatus } from "@/types/registration";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./tables/RowActionsMenu";
import { RegistrationDetailModal } from "./tables/RegistrationDetailModal";

type TabStatus = RegistrationStatus | "all";

const tabs: { key: TabStatus; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
];

export function RegistrationsTable() {
  const [rows, setRows] = useState(initial);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabStatus>("pending");
  const [viewReg, setViewReg] = useState<Registration | null>(null);

  const counts = useMemo(() => ({
    all: rows.length,
    pending: rows.filter((r) => r.status === "pending").length,
    approved: rows.filter((r) => r.status === "approved").length,
    rejected: rows.filter((r) => r.status === "rejected").length,
  }), [rows]);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const q = query.toLowerCase();
      const matchQ =
        r.fullName.toLowerCase().includes(q) || r.phone.includes(q);
      const matchS = activeTab === "all" || r.status === activeTab;
      return matchQ && matchS;
    });
  }, [rows, query, activeTab]);

  function updateStatus(id: string, status: RegistrationStatus) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    if (viewReg?.id === id) {
      setViewReg((prev) => (prev ? { ...prev, status } : null));
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              activeTab === tab.key
                ? "bg-brand-blue text-white shadow-sm"
                : "bg-white text-brand-navy border border-slate-200 hover:bg-slate-50",
            )}
          >
            {tab.label}
            <span className="ml-1.5 text-xs opacity-80">
              ({counts[tab.key]})
            </span>
          </button>
        ))}
      </div>

      <Input
        placeholder="Search by name or phone..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm"
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-brand-gray">
              <tr>
                <th className="px-4 py-3 font-medium">Applicant</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Program</th>
                <th className="hidden px-4 py-3 font-medium lg:table-cell">Branch</th>
                <th className="px-4 py-3 font-medium">Submitted</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50/80">
                  <td className="px-4 py-3">
                    <p className="font-medium text-brand-navy">{r.fullName}</p>
                    <p className="text-xs text-brand-gray">{r.phone}</p>
                  </td>
                  <td className="hidden px-4 py-3 text-brand-gray md:table-cell">
                    {programs.find((p) => p.id === r.programId)?.title}
                  </td>
                  <td className="hidden px-4 py-3 text-brand-gray lg:table-cell">
                    {branches.find((b) => b.id === r.branchId)?.name}
                  </td>
                  <td className="px-4 py-3 text-brand-gray">{formatDate(r.submittedAt)}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {r.status === "pending" ? (
                        <>
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => updateStatus(r.id, "approved")}
                          >
                            Approve
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={() => updateStatus(r.id, "rejected")}
                          >
                            Reject
                          </Button>
                        </>
                      ) : null}
                      <RowActionsMenu
                        onView={() => setViewReg(r)}
                        onEdit={() => alert("Edit — demo only")}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RegistrationDetailModal
        registration={viewReg}
        onClose={() => setViewReg(null)}
        onApprove={() => {
          if (viewReg) updateStatus(viewReg.id, "approved");
        }}
        onReject={() => {
          if (viewReg) updateStatus(viewReg.id, "rejected");
        }}
      />
    </div>
  );
}
