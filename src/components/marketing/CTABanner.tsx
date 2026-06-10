import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <Section className="bg-white">
      <div className="rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue p-8 text-center text-white md:p-12">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to improve your English?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-200">Register in minutes for any of our seven programs.</p>
        <Link href="/register" className="mt-6 inline-block">
          <Button variant="secondary" size="lg">
            Register Today
          </Button>
        </Link>
      </div>
    </Section>
  );
}
