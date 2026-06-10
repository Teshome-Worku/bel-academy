"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { marketingNav } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <Container>
        <div className="flex h-14 items-center justify-between md:h-16">
          <Logo imageClassName="h-14 md:h-16" showText={false} />
          <nav className="hidden items-center gap-6 md:flex">
            {marketingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-brand-blue",
                  pathname === item.href ? "text-brand-blue" : "text-brand-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/register">
              <Button size="sm">Register Now</Button>
            </Link>
          </nav>
          <button type="button" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col gap-3 border-t border-slate-100 py-4 md:hidden">
            {marketingNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-brand-navy">
                {item.label}
              </Link>
            ))}
            <Link href="/register" onClick={() => setOpen(false)}>
              <Button className="w-full">Register Now</Button>
            </Link>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
