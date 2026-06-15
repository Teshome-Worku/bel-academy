import { ProgramsManagementTable } from "@/components/admin/ProgramsManagementTable";
import { PageHeader } from "@/components/admin/shell/PageHeader";

export const metadata = { title: "Programs" };

export default function AdminProgramsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Programs"
        description="Manage learning programs and enrollment"
      />
      <ProgramsManagementTable />
    </div>
  );
}
