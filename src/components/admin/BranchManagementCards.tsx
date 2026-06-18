"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { branches } from "@/data/branches";
import { branchDistributionData } from "@/data/dashboard-stats";
import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./tables/RowActionsMenu";

const countMap: Record<string, number> = {
  Buraayyuu: 520,
  "Jamoo Furii": 442,
  Online: 386,
};

export function BranchManagementCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {branches.map((b, i) => {
        const shortName = b.name.replace(" Branch", "").replace("Online", "Online");
        const count =
          branchDistributionData.find((d) =>
            b.name.includes(d.name.split(" ")[0]) || d.name === "Online" && b.isOnline,
          )?.value ??
          countMap[shortName] ??
          0;

        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <MapPin className="h-5 w-5" />
              </div>
              <RowActionsMenu
                onView={() => alert(`View ${b.name} — demo`)}
                onEdit={() => alert(`Edit ${b.name} — demo`)}
              />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy dark:text-slate-100">
              {b.name}
            </h3>
            <p className="mt-1 text-sm text-brand-gray dark:text-slate-400">{b.address}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-brand-gray dark:text-slate-400">
              <Phone className="h-4 w-4 shrink-0" />
              {b.phone}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
              <div>
                <p className="text-xs text-brand-gray dark:text-slate-400">Students</p>
                <p className="font-heading text-xl font-bold text-brand-navy dark:text-slate-100">{count}</p>
              </div>
              <StatusBadge status="active" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
