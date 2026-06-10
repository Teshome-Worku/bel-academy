import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-12 md:py-16">
      <Container>
        <h1 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-brand-gray">{description}</p> : null}
      </Container>
    </section>
  );
}
