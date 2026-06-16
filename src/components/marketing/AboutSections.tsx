import { Target, Eye, Heart } from "lucide-react";
import { aboutContent } from "@/data/about";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionVisionSection() {
  const { mission, vision } = aboutContent;

  return (
    <Section variant="white">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
            <Target className="h-6 w-6 text-brand-blue" />
          </div>
          <h2 className="mt-5 font-display text-xl font-bold text-brand-navy">
            {mission.title}
          </h2>
          <p className="mt-3 leading-relaxed text-brand-gray">
            {mission.description}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15">
            <Eye className="h-6 w-6 text-brand-gold" />
          </div>
          <h2 className="mt-5 font-display text-xl font-bold text-brand-navy">
            {vision.title}
          </h2>
          <p className="mt-3 leading-relaxed text-brand-gray">
            {vision.description}
          </p>
        </div>
      </div>
    </Section>
  );
}

export function ImpactStatsSection() {
  const { impact } = aboutContent;

  return (
    <Section variant="navy">
      <SectionHeading
        align="center"
        eyebrow="Our Impact"
        title="Numbers that reflect our commitment"
        dark
        showAccent={false}
      />
      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {impact.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-brand-gold md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ValuesSection() {
  const { values } = aboutContent;

  return (
    <Section variant="muted">
      <SectionHeading
        align="center"
        eyebrow="Our Values"
        title="Why students trust BEL Academy"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
          >
            <Heart className="h-6 w-6 text-brand-gold" />
            <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FounderStorySection() {
  const { founder } = aboutContent;

  return (
    <Section variant="white">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Leadership"
          title={founder.name}
          description={founder.role}
        />
        <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-gold bg-slate-50 p-6 md:p-8">
          <p className="text-lg italic leading-relaxed text-brand-navy">
            &ldquo;{founder.quote}&rdquo;
          </p>
        </blockquote>
        <p className="mt-6 leading-relaxed text-brand-gray">{founder.bio}</p>
      </div>
    </Section>
  );
}
