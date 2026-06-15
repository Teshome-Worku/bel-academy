"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { LoginBrandingPanel } from "@/components/auth/LoginBrandingPanel";
import { LoginForm } from "@/components/auth/LoginForm";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/admin");
    }
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col lg:grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <LoginBrandingPanel />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-10 lg:px-12">
          <div className="mb-8 lg:hidden">
            <Logo imageClassName="h-20" showText={false} href={false} />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
