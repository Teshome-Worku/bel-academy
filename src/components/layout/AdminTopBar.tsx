import { BRAND } from "@/constants/brand";

export function AdminTopBar() {
  return (
    <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-sm text-slate-300">{BRAND.name} management portal</p>
      </div>
      <span className="rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-medium text-brand-gold">Showcase Demo</span>
    </div>
  );
}
