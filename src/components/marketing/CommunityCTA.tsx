import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function CommunityCTA() {
  return (
    <Section className="bg-brand-blue text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold">Join our learning community</h2>
        <p className="mt-4 text-blue-100">Connect with peers, attend conversation clubs, and grow together at BEL Academy.</p>
        <Link href="/contact" className="mt-8 inline-block">
          <Button variant="secondary" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </Section>
  );
}
