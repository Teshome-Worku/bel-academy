import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-brand-gray">{description}</p> : null}
    </div>
  );
}
