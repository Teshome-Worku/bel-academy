"use client";

import { activities } from "@/data/activities";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  registration: "bg-blue-100 text-brand-blue",
  approval: "bg-emerald-100 text-emerald-700",
  program: "bg-amber-100 text-amber-700",
  branch: "bg-violet-100 text-violet-700",
  student: "bg-cyan-100 text-cyan-700",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <li key={activity.id} className="flex gap-3">
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    typeColors[activity.type],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-brand-navy dark:text-slate-100">
                    {activity.message}
                  </p>
                  <p className="text-xs text-brand-gray dark:text-slate-400">
                    {formatDate(activity.timestamp)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
