import { AdminSidebar } from "./AdminSidebar";
import { AdminTopBar } from "./AdminTopBar";
import { Container } from "./Container";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Container className="py-6 lg:py-8">
        <AdminTopBar />
        <div className="flex gap-6">
          <AdminSidebar />
          <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 p-4 shadow-inner md:p-6">{children}</div>
        </div>
      </Container>
    </div>
  );
}
