import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  showAccent?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  showAccent = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        dark ? (
          <span className="section-eyebrow border-white/20 bg-white/10 text-brand-gold">
            {eyebrow}
          </span>
        ) : (
          <span className="section-eyebrow">{eyebrow}</span>
        )
      ) : null}
      <h2
        className={cn(
          "section-title mt-4",
          dark ? "!text-white" : "",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "section-lead mt-4",
            align === "center" && "mx-auto",
            dark ? "text-slate-300" : "text-brand-gray",
          )}
        >
          {description}
        </p>
      ) : null}
      {showAccent ? (
        <div
          className={cn(
            "mt-5 flex items-center gap-1.5",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-1 w-8 rounded-full bg-brand-gold" />
          <span className="h-1 w-2 rounded-full bg-brand-blue/60" />
          <span className="h-1 w-1 rounded-full bg-brand-gold/50" />
        </div>
      ) : null}
    </div>
  );
}
