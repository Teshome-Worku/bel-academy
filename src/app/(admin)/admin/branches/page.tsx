import { BranchManagementCards } from "@/components/admin/BranchManagementCards";
import { PageHeader } from "@/components/admin/shell/PageHeader";

export const metadata = { title: "Branches" };

export default function AdminBranchesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Branches"
        description="Manage academy branches and locations"
      />
      <BranchManagementCards />
    </div>
  );
}
