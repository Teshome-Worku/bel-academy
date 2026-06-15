import { AdminShell } from "@/components/admin/shell/AdminShell";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
