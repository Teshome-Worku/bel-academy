"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { programEnrollmentData } from "@/data/dashboard-stats";
import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./tables/RowActionsMenu";
import { Badge } from "@/components/ui/Badge";

export function ProgramsManagementTable() {
  const enrollmentMap = Object.fromEntries(
    programEnrollmentData.map((p) => [p.name, p.students]),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-brand-gray">
            <tr>
              <th className="px-4 py-3 font-medium">Program</th>
              <th className="px-4 py-3 font-medium">Students</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Duration</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium w-12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p, i) => {
              const enrolled = enrollmentMap[p.title] ?? 0;
              return (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-t border-slate-100 hover:bg-slate-50/80"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-brand-navy">{p.title}</p>
                      {p.featured ? (
                        <Badge className="bg-brand-gold/20 text-amber-800">Featured</Badge>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-brand-gray line-clamp-1">
                      {p.deliveryMode}
                    </p>
                  </td>
                  <td className="px-4 py-3 font-semibold text-brand-navy">
                    {enrolled}
                  </td>
                  <td className="hidden px-4 py-3 text-brand-gray md:table-cell">
                    {p.duration}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status="active" />
                  </td>
                  <td className="px-4 py-3">
                    <RowActionsMenu
                      onView={() => alert(`View ${p.title} — demo`)}
                      onEdit={() => alert(`Edit ${p.title} — demo`)}
                    />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
