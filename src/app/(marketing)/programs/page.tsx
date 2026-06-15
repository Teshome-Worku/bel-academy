import { programs } from "@/data/programs";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { ProgramsGrid } from "@/components/marketing/ProgramsGrid";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs" description="Seven specialized tracks designed for real-world English mastery." />
      <Section>
        <ProgramsGrid programs={programs} />
      </Section>
    </>
  );
}
