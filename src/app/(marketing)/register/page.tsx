import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/layout/Section";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { Logo } from "@/components/ui/Logo";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <>
      <PageHero title="Student Registration" description="Complete the form below and our admissions team will follow up within 24 hours." />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[240px_1fr]">
          <Card className="flex items-center justify-center bg-white p-6">
            <Logo imageClassName="h-28" showText={false} href={false} />
          </Card>
          <Card>
            <CardContent>
              <RegistrationForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
