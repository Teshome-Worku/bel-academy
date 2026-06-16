import Link from "next/link";
import { Wifi, ArrowRight } from "lucide-react";
import { branches } from "@/data/branches";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BranchCard } from "@/components/marketing/BranchCard";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = { title: "Branches" };

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Branches & Online"
        description="Buraayyuu, Jamoo Furii, and live online classes—learn where it works best for you."
      />
      <Section variant="white">
        <SectionHeading
          align="center"
          eyebrow="Find Us"
          title="Visit a campus or join online"
          description="Each location offers the same BEL Academy quality—with schedules and formats tailored to your community."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-navy to-brand-blue p-8 text-center text-white md:p-12">
          <Wifi className="mx-auto h-10 w-10 text-brand-gold" />
          <h2 className="mt-4 font-display text-2xl font-bold">
            Can&apos;t visit in person?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-300">
            Our online program delivers live instruction with the same expert
            teachers—study from anywhere in Ethiopia.
          </p>
          <Link
            href="/register"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3 font-bold text-brand-navy transition hover:shadow-lg"
          >
            Join Online Classes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
