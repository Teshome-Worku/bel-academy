import { branches } from "@/data/branches";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { BranchCard } from "@/components/marketing/BranchCard";

export const metadata = { title: "Branches" };

export default function BranchesPage() {
  return (
    <>
      <PageHero title="Branches & Online" description="Buraayyuu, Jamoo Furii, and live online classes." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </Section>
    </>
  );
}
