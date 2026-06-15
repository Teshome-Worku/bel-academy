import { testimonials } from "@/data/testimonials";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ProgramsSection } from "@/components/marketing/ProgramsSection";
import { BranchesSection } from "@/components/marketing/BranchesSection";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import TestimonialCarousel from "@/components/marketing/TestimonialCarousel";
import { CommunityCTA } from "@/components/marketing/CommunityCTA";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CommunitySection } from "@/components/marketing/CommunitySection";
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
      <FAQSection />
      <CommunitySection />
      <TestimonialCarousel />
      <CommunityCTA />
      <CTABanner />
    </>
  );
}
