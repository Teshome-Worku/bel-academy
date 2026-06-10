import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        alt="Students learning English"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/75" />
      <Container className="relative flex min-h-[520px] flex-col justify-center py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Welcome to {BRAND.name}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Master English With Confidence
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Join thousands of learners at our Buraayyuu and Jamoo Furii branches—or study online with expert instructors.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Start Registration
            </Button>
          </Link>
          <Link href="/programs">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Programs
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
