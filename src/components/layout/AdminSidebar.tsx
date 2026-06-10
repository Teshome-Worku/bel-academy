"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNav } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="rounded-2xl bg-white p-4 shadow-lg">
        <div className="mb-6 flex justify-center border-b border-slate-100 pb-4">
          <Logo imageClassName="h-16" showText={false} />
        </div>
        <nav className="space-y-1">
          {adminNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium transition",
                  active ? "bg-brand-blue text-white" : "text-brand-navy hover:bg-slate-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
