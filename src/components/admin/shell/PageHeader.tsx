import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div>
        <h1 className="font-heading text-2xl font-bold text-brand-navy dark:text-slate-100">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 text-sm text-brand-gray dark:text-slate-400">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
