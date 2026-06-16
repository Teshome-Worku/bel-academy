import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Quote } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { branches } from "@/data/branches";
import { testimonials } from "@/data/testimonials";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata = { title: "Contact" };

const featuredTestimonial = testimonials[0];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We're here to help you start"
        description="Questions about programs, schedules, or registration? Reach out and our team will guide you."
      />
      <Section variant="white">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6">
              <h2 className="font-display text-lg font-bold text-brand-navy">
                Contact Information
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                      Phone
                    </p>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="font-medium text-brand-navy hover:text-brand-blue"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                      Email
                    </p>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="font-medium text-brand-navy hover:text-brand-blue"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                      Address
                    </p>
                    <p className="font-medium text-brand-navy">{BRAND.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                      Response Time
                    </p>
                    <p className="font-medium text-brand-navy">
                      Within 1 business day
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-blue">
                Our Branches
              </h3>
              <ul className="mt-4 space-y-3">
                {branches.map((b) => (
                  <li key={b.id} className="text-sm">
                    <p className="font-semibold text-brand-navy">{b.name}</p>
                    <p className="text-brand-gray">{b.address}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/branches"
                className="mt-4 inline-block text-sm font-semibold text-brand-blue hover:underline"
              >
                View all locations →
              </Link>
            </div>

            {featuredTestimonial ? (
              <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6">
                <Quote className="h-6 w-6 text-brand-gold" />
                <p className="mt-3 text-sm italic leading-relaxed text-brand-navy">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold text-brand-gray">
                  — {featuredTestimonial.name}, {featuredTestimonial.role}
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md md:p-8">
            <h2 className="font-display text-lg font-bold text-brand-navy">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-brand-gray">
              We typically respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
