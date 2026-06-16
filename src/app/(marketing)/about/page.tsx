import { PageHero } from "@/components/marketing/PageHero";
import {
  MissionVisionSection,
  ImpactStatsSection,
  ValuesSection,
  FounderStorySection,
} from "@/components/marketing/AboutSections";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { BRAND } from "@/constants/brand";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`About ${BRAND.name}`}
        description="Empowering learners across Ethiopia with practical, confidence-building English education since 2010."
      />
      <MissionVisionSection />
      <ImpactStatsSection />
      <FounderStorySection />
      <ValuesSection />
      <FinalCTA />
    </>
  );
}
