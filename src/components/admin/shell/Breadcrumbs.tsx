"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { breadcrumbLabels } from "@/constants/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) {
    return (
      <nav className="flex items-center text-sm text-brand-gray">
        <span className="font-medium text-brand-navy">Dashboard</span>
      </nav>
    );
  }

  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = breadcrumbLabels[seg] ?? seg;
    const isLast = i === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav className="flex items-center gap-1 text-sm text-brand-gray">
      <Link href="/admin" className="hover:text-brand-blue">Dashboard</Link>
      {crumbs.slice(1).map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" />
          {crumb.isLast ? (
            <span className="font-medium text-brand-navy">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-brand-blue">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
