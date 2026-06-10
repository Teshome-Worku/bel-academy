import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { BRAND } from "@/constants/brand";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title={`About ${BRAND.name}`} description="Empowering learners across Ethiopia with practical, confidence-building English education since 2010." />
      <Section>
        <div className="prose prose-slate max-w-3xl">
          <p className="text-brand-gray">
            BEL Academy offers structured programs for students, professionals, and young learners. Our instructors combine international standards with local context so you can use English at school, work, and abroad.
          </p>
          <p className="mt-4 text-brand-gray">
            With campuses in Buraayyuu and Jamoo Furii plus a full online schedule, we meet you where you are—literally and in your learning journey.
          </p>
        </div>
      </Section>
    </>
  );
}
