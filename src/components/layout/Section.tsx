import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionVariant = "default" | "muted" | "navy" | "white";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  variant?: SectionVariant;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-transparent",
  muted: "bg-slate-50",
  navy: "bg-brand-navy text-white",
  white: "bg-white",
};

export function Section({
  className,
  containerClassName,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("section-padding", variantClasses[variant], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
