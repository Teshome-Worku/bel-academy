"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { adminNavItems, adminLogoutItem } from "@/constants/navigation";
import { logout } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

type AdminSidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function AdminSidebar({ collapsed, mobileOpen, onMobileClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  const LogOutIcon = adminLogoutItem.icon;

  const sidebarContent = (
  <>
      <div
        className={cn(
          "flex items-center border-b border-slate-100 px-3 py-4",
          collapsed ? "justify-center" : "justify-center",
        )}
      >
        <div className="rounded-xl bg-white p-2 shadow-sm">
          <Logo
            imageClassName={collapsed ? "h-10" : "h-16"}
            showText={false}
            href="/admin"
          />
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {adminNavItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onMobileClose}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-brand-navy hover:bg-slate-100",
                collapsed && "justify-center px-2",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-slate-100 p-3">
        <button
          type="button"
          onClick={handleLogout}
          title={collapsed ? adminLogoutItem.label : undefined}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50",
            collapsed && "justify-center px-2",
          )}
        >
          <LogOutIcon className="h-5 w-5 shrink-0" />
          {!collapsed && <span>{adminLogoutItem.label}</span>}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden shrink-0 flex-col border-r border-slate-200 bg-white transition-all duration-300 lg:flex",
          collapsed ? "w-[72px]" : "w-64",
        )}
      >
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={onMobileClose}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-xl lg:hidden"
            >
              <button
                type="button"
                onClick={onMobileClose}
                className="absolute right-3 top-3 rounded-lg p-2 text-brand-gray hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
