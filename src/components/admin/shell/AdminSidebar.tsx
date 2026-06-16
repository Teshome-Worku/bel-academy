"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { adminNavItems, adminLogoutItem } from "@/constants/navigation";
import { BRAND, LOGO_PATH } from "@/constants/brand";
import { logout } from "@/lib/auth";
import { cn } from "@/lib/utils";

type AdminSidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

function AdminBrandHeader({
  collapsed,
  onClose,
}: {
  collapsed: boolean;
  onClose?: () => void;
}) {
  return (
    <div
      className={cn(
        "shrink-0 border-b border-slate-200 dark:border-slate-700",
        collapsed ? "flex justify-center px-3 py-4" : "px-4 py-4",
      )}
    >
      <div className="flex w-full items-start gap-2">
        <Link
          href="/admin"
          onClick={onClose}
          className={cn(
            "flex min-w-0 flex-1 flex-col items-center rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800",
            collapsed && "p-2",
          )}
        >
          <div
            className={cn(
              "relative w-full shrink-0",
              collapsed ? "h-12 w-12" : "h-20 w-full max-w-[200px]",
            )}
          >
            <Image
              src={LOGO_PATH}
              alt={`${BRAND.name} logo`}
              fill
              quality={100}
              sizes={collapsed ? "48px" : "200px"}
              className="object-contain object-center"
              priority
            />
          </div>
          {!collapsed && (
            <div className="mt-3 w-full text-center">
              <p className="font-heading text-sm font-bold text-brand-navy dark:text-slate-100">
                {BRAND.name}
              </p>
              <p className="mt-0.5 text-xs font-medium tracking-wide text-brand-gold">
                {BRAND.tagline}
              </p>
              <p className="mt-1 text-[11px] text-brand-gray dark:text-slate-400">
                Admin Portal
              </p>
            </div>
          )}
        </Link>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-brand-gray hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

function SidebarContent({
  collapsed,
  onNavClick,
  showCloseButton,
}: {
  collapsed: boolean;
  onNavClick?: () => void;
  showCloseButton?: boolean;
}) {
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

  return (
    <>
      <AdminBrandHeader
        collapsed={collapsed}
        onClose={showCloseButton ? onNavClick : undefined}
      />
      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
        {adminNavItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-brand-navy hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                collapsed && "justify-center px-2",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto shrink-0 border-t border-slate-200 p-3 dark:border-slate-700">
        <button
          type="button"
          onClick={handleLogout}
          title={collapsed ? adminLogoutItem.label : undefined}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40",
            collapsed && "justify-center px-2",
          )}
        >
          <LogOutIcon className="h-5 w-5 shrink-0" />
          {!collapsed && <span>{adminLogoutItem.label}</span>}
        </button>
      </div>
    </>
  );
}

export function AdminSidebar({
  collapsed,
  mobileOpen,
  onMobileClose,
}: AdminSidebarProps) {
  const sidebarSurfaceClasses = cn(
    "h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-900",
    collapsed ? "w-[72px]" : "w-64",
  );

  return (
    <>
      <aside
        className={cn(
          "sticky top-0 z-20 hidden h-screen shrink-0 flex-col lg:flex",
          sidebarSurfaceClasses,
        )}
      >
        <SidebarContent collapsed={collapsed} />
      </aside>

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
              className="fixed inset-y-0 left-0 z-50 flex w-[min(100vw,18rem)] flex-col border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:hidden"
            >
              <SidebarContent
                collapsed={false}
                onNavClick={onMobileClose}
                showCloseButton
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
