import { StudentsTable } from "@/components/admin/StudentsTable";
import { PageHeader } from "@/components/admin/shell/PageHeader";

export const metadata = { title: "Students" };

export default function AdminStudentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Students"
        description="Manage enrolled students across all programs and branches"
      />
      <StudentsTable />
    </div>
  );
}
