import { RegistrationsTable } from "@/components/admin/RegistrationsTable";

export const metadata = { title: "Registrations" };

export default function AdminRegistrationsPage() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-brand-navy">Registrations</h2>
      <RegistrationsTable />
    </div>
  );
}
