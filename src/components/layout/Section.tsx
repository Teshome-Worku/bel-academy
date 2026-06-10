import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & { containerClassName?: string };

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
