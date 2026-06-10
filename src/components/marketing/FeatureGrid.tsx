import { BookOpen, Globe, Users, Award } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { icon: BookOpen, title: "Structured Curriculum", description: "CEFR-aligned lessons from beginner to advanced levels." },
  { icon: Users, title: "Small Classes", description: "Personal attention with interactive speaking practice every session." },
  { icon: Globe, title: "Online & On-Campus", description: "Choose Buraayyuu, Jamoo Furii, or live online classes." },
  { icon: Award, title: "Certified Teachers", description: "Experienced instructors focused on real-world fluency." },
];

export function FeatureGrid() {
  return (
    <Section className="bg-white">
      <SectionHeading eyebrow="Why BEL" title="Learn with purpose" description="Everything you need to reach your English goals—in one academy." align="center" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-slate-200 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-brand-navy">{title}</h3>
            <p className="mt-2 text-sm text-brand-gray">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
