import { DashboardStatGrid } from "@/components/admin/DashboardStatGrid";
import { RegistrationChart } from "@/components/admin/RegistrationChart";
import { RecentRegistrationsTable } from "@/components/admin/RecentRegistrationsTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardStatGrid />
      <RegistrationChart />
      <Card>
        <CardHeader>
          <CardTitle>Recent Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentRegistrationsTable />
        </CardContent>
      </Card>
    </div>
  );
}
