"use client";

import { useMemo, useState } from "react";
import { students as initial } from "@/data/students";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { StatusBadge } from "./StatusBadge";
import { StudentAvatar } from "./tables/StudentAvatar";
import { RowActionsMenu } from "./tables/RowActionsMenu";
import { Pagination } from "./tables/Pagination";
import { StudentDetailModal } from "./tables/StudentDetailModal";
import type { Student } from "@/types/student";

const PAGE_SIZE = 8;

export function StudentsTable() {
  const [rows, setRows] = useState(initial);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [programId, setProgramId] = useState("all");
  const [branchId, setBranchId] = useState("all");
  const [page, setPage] = useState(1);
  const [viewStudent, setViewStudent] = useState<Student | null>(null);

  const filtered = useMemo(() => {
    return rows.filter((s) => {
      const q = query.toLowerCase();
      const matchQ =
        s.fullName.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q) ||
        s.phone.includes(q);
      const matchS = status === "all" || s.status === status;
      const matchP = programId === "all" || s.programId === programId;
      const matchB = branchId === "all" || s.branchId === branchId;
      return matchQ && matchS && matchP && matchB;
    });
  }, [rows, query, status, programId, branchId]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleDelete(id: string) {
    if (confirm("Remove this student? (Demo — no persistence)")) {
      setRows((prev) => prev.filter((s) => s.id !== id));
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
        <Input
          placeholder="Search students..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="max-w-sm"
        />
        <Select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="max-w-[160px]"
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="graduated">Graduated</option>
        </Select>
        <Select
          value={programId}
          onChange={(e) => {
            setProgramId(e.target.value);
            setPage(1);
          }}
          className="max-w-[180px]"
        >
          <option value="all">All programs</option>
          {programs.map((p) => (
            <option key={p.id} value={p.id}>{p.title}</option>
          ))}
        </Select>
        <Select
          value={branchId}
          onChange={(e) => {
            setBranchId(e.target.value);
            setPage(1);
          }}
          className="max-w-[180px]"
        >
          <option value="all">All branches</option>
          {branches.map((b) => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </Select>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900 text-brand-gray dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Student</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Program</th>
                <th className="hidden px-4 py-3 font-medium lg:table-cell">Branch</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium w-12">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((s) => (
                <tr
                  key={s.id}
                  className="border-t border-slate-100 dark:border-slate-700 transition hover:bg-slate-50/80 dark:hover:bg-slate-800/60"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <StudentAvatar name={s.fullName} />
                      <div>
                        <p className="font-medium text-brand-navy dark:text-slate-100">{s.fullName}</p>
                        <p className="text-xs text-brand-gray dark:text-slate-400">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-brand-gray">{s.phone}</td>
                  <td className="hidden px-4 py-3 text-brand-gray dark:text-slate-400 md:table-cell">
                    {programs.find((p) => p.id === s.programId)?.title}
                  </td>
                  <td className="hidden px-4 py-3 text-brand-gray dark:text-slate-400 lg:table-cell">
                    {branches.find((b) => b.id === s.branchId)?.name}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={s.status} />
                  </td>
                  <td className="px-4 py-3">
                    <RowActionsMenu
                      onView={() => setViewStudent(s)}
                      onEdit={() => alert("Edit student — demo only")}
                      onDelete={() => handleDelete(s.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      <StudentDetailModal
        student={viewStudent}
        onClose={() => setViewStudent(null)}
      />
    </div>
  );
}
