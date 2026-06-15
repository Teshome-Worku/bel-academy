import { testimonials } from "@/data/testimonials";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ProgramsSection } from "@/components/marketing/ProgramsSection";
import { BranchesSection } from "@/components/marketing/BranchesSection";
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
      <ProgramsSection />
      <BranchesSection />
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
