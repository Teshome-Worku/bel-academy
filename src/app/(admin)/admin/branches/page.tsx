import { BranchManagementTable } from "@/components/admin/BranchManagementTable";

export const metadata = { title: "Branches" };

export default function AdminBranchesPage() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-brand-navy">Branches</h2>
      <BranchManagementTable />
    </div>
  );
}
