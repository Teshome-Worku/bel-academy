import { AuthGuard } from "@/components/auth/AuthGuard";
import { AdminLayout } from "@/components/layout/AdminLayout";

export default function AdminRouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <AdminLayout>{children}</AdminLayout>
    </AuthGuard>
  );
}
