import { programs } from "@/data/programs";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { ProgramCard } from "@/components/marketing/ProgramCard";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs" description="Seven specialized tracks designed for real-world English mastery." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
