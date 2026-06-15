"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { isAuthenticated } from "@/lib/auth";
import { LoginBrandingPanel } from "@/components/auth/LoginBrandingPanel";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/admin");
    }
  }, [router]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy via-[#0a1628] to-brand-navy px-4 py-8">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-[920px]"
      >
        <div className="overflow-hidden rounded-3xl shadow-[0_25px_60px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80">
          <div className="flex flex-col lg:flex-row">
            <LoginBrandingPanel />
            <LoginForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
