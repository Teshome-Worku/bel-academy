import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-navy/20 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-blue/20 blur-2xl" />
      <Container className="relative py-12 md:py-16 lg:py-20">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {eyebrow}
          </p>
        ) : (
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            BEL Academy
          </p>
        )}
        <h1
          className={cn(
            "font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl",
            eyebrow ? "mt-3" : "mt-3",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-6 flex items-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-brand-gold" />
          <span className="h-1 w-2 rounded-full bg-white/40" />
        </div>
      </Container>
    </section>
  );
}
