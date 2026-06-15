import Link from "next/link";
import { programs } from "@/data/programs";
import { branches } from "@/data/branches";
import { testimonials } from "@/data/testimonials";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ProgramCard } from "@/components/marketing/ProgramCard";
import { BranchCard } from "@/components/marketing/BranchCard";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { CommunityCTA } from "@/components/marketing/CommunityCTA";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <Section>
        <SectionHeading eyebrow="Programs" title="Seven paths to fluency" description="From kids classes to IELTS prep—find the right fit." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/programs" className="font-medium text-brand-blue hover:underline">
            View all programs
          </Link>
        </p>
      </Section>
      <Section className="bg-white">
        <SectionHeading eyebrow="Locations" title="Our branches" description="Visit us in person or join live online sessions." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Stories" title="What students say" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>
      <CommunityCTA />
      <CTABanner />
    </>
  );
}
