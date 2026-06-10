import { BRAND } from "@/constants/brand";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" description="Questions about programs, schedules, or registration? We are here to help." />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-3 text-sm text-brand-gray">
              <p>
                <span className="font-medium text-brand-navy">Phone:</span> {BRAND.phone}
              </p>
              <p>
                <span className="font-medium text-brand-navy">Email:</span> {BRAND.email}
              </p>
              <p>
                <span className="font-medium text-brand-navy">Address:</span> {BRAND.address}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
