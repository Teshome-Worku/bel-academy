import { cn } from "@/lib/utils";

const styles = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  active: "bg-green-100 text-green-800",
  inactive: "bg-slate-100 text-slate-700",
  graduated: "bg-blue-100 text-blue-800",
} as const;

type Status = keyof typeof styles;

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", styles[status] ?? styles.pending)}>
      {status}
    </span>
  );
}
