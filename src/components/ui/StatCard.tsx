import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white p-5 shadow-sm", className)}>
      <p className="text-sm text-brand-gray">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{value}</p>
    </div>
  );
}
