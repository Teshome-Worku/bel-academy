import { CheckCircle2, Clock, Users } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { Logo } from "@/components/ui/Logo";
import { BRAND } from "@/constants/brand";
import { aboutContent } from "@/data/about";

export const metadata = { title: "Register" };

const trustPoints = [
  {
    icon: Users,
    text: "Certified instructors with real-world teaching experience",
  },
  {
    icon: Clock,
    text: "Admissions team responds within 24 hours",
  },
  {
    icon: CheckCircle2,
    text: "7 specialized programs for every learning goal",
  },
];

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join BEL Academy"
        description="Take the first step toward English fluency. Complete your registration and our team will guide you to the right program."
      />
      <Section variant="muted">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
              <Logo imageClassName="h-24" showText={false} href={false} />
              <p className="mt-4 font-display text-xl font-bold text-brand-navy">
                Start your journey with {BRAND.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {BRAND.tagline} — professional English education for Afaan Oromo
                speakers across Addis Ababa and online.
              </p>
            </div>

            <ul className="space-y-4">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                    <Icon className="h-4 w-4 text-brand-blue" />
                  </div>
                  <span className="text-sm leading-relaxed text-brand-gray">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              {aboutContent.impact.slice(0, 2).map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-brand-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-brand-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md md:p-8">
            <h2 className="font-display text-lg font-bold text-brand-navy">
              Registration Form
            </h2>
            <p className="mt-1 text-sm text-brand-gray">
              All fields marked required must be completed.
            </p>
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
