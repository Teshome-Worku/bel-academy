import { marketingStats } from "@/data/statistics";
import { Container } from "@/components/layout/Container";

export function StatsBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <Container>
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {marketingStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-sm text-brand-gray">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-brand-blue">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
