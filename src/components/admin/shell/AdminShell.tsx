"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminThemeProvider } from "./AdminThemeProvider";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopBar } from "./AdminTopBar";

function AdminShellInner({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when mobile sidebar/drawer is open
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    // ensure cleanup
    document.body.style.overflow = "";
    return () => { };
  }, [mobileOpen]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <AdminSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className="flex flex-1 min-w-0 flex-col h-full overflow-hidden">
        <AdminTopBar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          onOpenMobile={() => setMobileOpen(true)}
        />
        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto p-4 lg:p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <AdminThemeProvider>
      <AdminShellInner>{children}</AdminShellInner>
    </AdminThemeProvider>
  );
}
