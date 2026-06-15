"use client";

import { Search, Bell, Menu, PanelLeftClose, PanelLeft, Sun, Moon } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Input } from "@/components/ui/Input";
import { useAdminTheme } from "./AdminThemeProvider";

type AdminTopBarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onOpenMobile: () => void;
};

export function AdminTopBar({
  collapsed,
  onToggleCollapse,
  onOpenMobile,
}: AdminTopBarProps) {
  const { isDark, toggleTheme } = useAdminTheme();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 shrink-0 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        <button
          type="button"
          onClick={onOpenMobile}
          className="rounded-lg p-2 text-brand-navy hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onToggleCollapse}
          className="hidden rounded-lg p-2 text-brand-navy hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:block"
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <PanelLeft className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>

        <div className="hidden min-w-0 flex-1 lg:block">
          <Breadcrumbs />
        </div>

        <div className="relative hidden max-w-xs flex-1 md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray dark:text-slate-500" />
          <Input
            placeholder="Search..."
            className="h-9 border-slate-200 bg-white pl-9 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            readOnly
          />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <span className="hidden text-xs text-brand-gray dark:text-slate-400 sm:block">
            {today}
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-brand-navy hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="relative rounded-lg p-2 text-brand-navy hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-navy">
              3
            </span>
          </button>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1 pl-1 pr-3 dark:border-slate-600 dark:bg-slate-800">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
              A
            </div>
            <span className="hidden text-sm font-medium text-brand-navy dark:text-slate-200 sm:block">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
