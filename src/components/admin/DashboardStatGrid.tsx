import { dashboardOverview } from "@/data/dashboard-stats";
import { StatCard } from "@/components/ui/StatCard";

export function DashboardStatGrid() {
  const stats = [
    { label: "Total Students", value: dashboardOverview.totalStudents.toLocaleString() },
    { label: "Pending Registrations", value: dashboardOverview.pendingRegistrations },
    { label: "Active Programs", value: dashboardOverview.activePrograms },
    { label: "Active Branches", value: dashboardOverview.activeBranches },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} label={s.label} value={s.value} />
      ))}
    </div>
  );
}
