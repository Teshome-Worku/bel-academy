import { StudentsTable } from "@/components/admin/StudentsTable";

export const metadata = { title: "Students" };

export default function AdminStudentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-brand-navy">Students</h2>
      <StudentsTable />
    </div>
  );
}
