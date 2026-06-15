"use client";

import { Check } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { Logo } from "@/components/ui/Logo";

const features = [
  "Student Management",
  "Registration Tracking",
  "Branch Management",
  "Performance Analytics",
];

export function LoginBrandingPanel() {
  return (
    <div className="relative flex flex-col bg-brand-navy p-8 text-white lg:w-[42%] lg:p-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold/40" />

      <div className="inline-flex w-fit rounded-xl bg-white p-4 shadow-sm">
        <Logo imageClassName="h-20 lg:h-24" showText={false} href={false} />
      </div>

      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-brand-gold">
        {BRAND.tagline}
      </p>
      <h1 className="mt-2 font-heading text-2xl font-bold lg:text-3xl">
        Welcome Back
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-300 lg:text-base">
        Manage students, registrations, branches, and academy operations from
        one place.
      </p>

      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-slate-200">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
