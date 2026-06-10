import { ProgramsOverviewGrid } from "@/components/admin/ProgramsOverviewGrid";

export const metadata = { title: "Programs" };

export default function AdminProgramsPage() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-brand-navy">Programs</h2>
      <ProgramsOverviewGrid />
    </div>
  );
}
