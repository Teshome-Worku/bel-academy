import { PremiumStatGrid } from "@/components/admin/dashboard/PremiumStatGrid";
import { AnalyticsSection } from "@/components/admin/dashboard/AnalyticsSection";
import { QuickActions } from "@/components/admin/dashboard/QuickActions";
import { RecentActivity } from "@/components/admin/dashboard/RecentActivity";
import { RecentRegistrationsTable } from "@/components/admin/RecentRegistrationsTable";
import { PageHeader } from "@/components/admin/shell/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = { title: "Dashboard" };

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of academy operations and performance"
      />
      <PremiumStatGrid />
      <div>
        <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-brand-gray">
          Quick Actions
        </h2>
        <QuickActions />
      </div>
      <AnalyticsSection />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentRegistrationsTable />
          </CardContent>
        </Card>
        <RecentActivity />
      </div>
    </div>
  );
}
