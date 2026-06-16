import { cn } from "@/lib/utils";

type SectionDividerProps = {
  /** Background color of the section above the divider */
  topColor?: string;
  /** Background color of the section below the divider */
  bottomColor?: string;
  className?: string;
};

export function SectionDivider({
  topColor = "transparent",
  bottomColor = "#f8fafc",
  className,
}: SectionDividerProps) {
  return (
    <div className={cn("relative -mt-px leading-none", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 48L60 42C120 36 240 24 360 18C480 12 600 12 720 18C840 24 960 36 1080 39C1200 42 1320 36 1380 33L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V48Z"
          fill={bottomColor}
        />
      </svg>
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"
        style={{ backgroundColor: topColor }}
      />
    </div>
  );
}
