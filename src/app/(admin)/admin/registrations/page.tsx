import { RegistrationsTable } from "@/components/admin/RegistrationsTable";
import { PageHeader } from "@/components/admin/shell/PageHeader";

export const metadata = { title: "Registrations" };

export default function AdminRegistrationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Registrations"
        description="Review and manage student registration pipeline"
      />
      <RegistrationsTable />
    </div>
  );
}
