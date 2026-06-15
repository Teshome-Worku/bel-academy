"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const features = [
  "Student Management",
  "Registration Tracking",
  "Branch Management",
  "Performance Analytics",
];

export function LoginBrandingPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center px-8 py-12 lg:px-12"
    >
      <Logo imageClassName="h-24 lg:h-28" showText={false} href={false} />
      <h1 className="mt-8 font-heading text-3xl font-bold text-white lg:text-4xl">
        Welcome Back
      </h1>
      <p className="mt-3 max-w-md text-base text-slate-300 lg:text-lg">
        Manage students, registrations, branches, and academy operations from one
        place.
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 text-slate-200"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium lg:text-base">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
