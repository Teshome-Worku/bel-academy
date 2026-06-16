import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ProgramsSection } from "@/components/marketing/ProgramsSection";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { FounderSection } from "@/components/marketing/FounderSection";
import { BranchesSection } from "@/components/marketing/BranchesSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CommunitySection } from "@/components/marketing/CommunitySection";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ProgramsSection />
      <TestimonialCarousel />
      <FounderSection />
      <BranchesSection />
      <FAQSection />
      <CommunitySection />
      <FinalCTA />
    </>
  );
}
