import Link from "next/link";
import { programs } from "@/data/programs";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramsGrid } from "@/components/marketing/ProgramsGrid";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Our Programs"
        description={`Seven specialized tracks designed for real-world English mastery. Find the program that fits your goals.`}
      />
      <Section variant="white">
        <SectionHeading
          align="center"
          eyebrow={`${programs.length} Programs`}
          title="Choose your path to fluency"
          description="From beginner foundations to exam preparation and professional English—each program is structured for measurable progress."
        />
        <div className="mt-12">
          <ProgramsGrid programs={programs} />
        </div>
        <p className="mt-10 text-center text-sm text-brand-gray">
          Not sure which program is right for you?{" "}
          <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
            Contact our team
          </Link>{" "}
          for guidance.
        </p>
      </Section>
      <FinalCTA />
    </>
  );
}
