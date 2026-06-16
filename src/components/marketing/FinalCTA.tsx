import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { BRAND } from "@/constants/brand";

export function FinalCTA() {
  return (
    <Section variant="white" className="pb-20 pt-8 md:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy px-6 py-12 text-center text-white shadow-2xl md:px-12 md:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {BRAND.tagline}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Start Your English Journey{" "}
            <span className="text-brand-gold">Today</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Join {BRAND.name} and learn with expert instructors at our branches
            or online. Registration takes just a few minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-navy shadow-lg shadow-brand-gold/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
