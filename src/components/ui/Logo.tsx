import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH, BRAND } from "@/constants/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  href?: string | false;
};

export function Logo({
  className,
  imageClassName,
  showText = true,
  href = "/",
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-1.5 sm:gap-1", className)}>
      <span
        className={
          imageClassName
            ? cn("relative block aspect-square shrink-0 overflow-hidden", imageClassName)
            : "relative block aspect-square shrink-0 overflow-hidden h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
        }
      >
        <Image
          src={LOGO_PATH}
          alt={`${BRAND.name} logo`}
          fill
          quality={100}
          sizes="(max-width: 640px) 40px, 56px"
          className="object-contain scale-[1.15] transform-gpu"
          priority
        />
      </span>
      {showText ? (
        <span className="flex flex-col leading-tight">
          <span className="whitespace-nowrap font-display text-sm sm:text-[1.2rem] font-bold text-brand-navy dark:text-white md:text-[1.3rem]">
            {BRAND.name}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray dark:text-slate-300">
            <span className="inline-block h-px w-3 bg-brand-gold" />
            {BRAND.tagline}
            <span className="inline-block h-px w-3 bg-brand-gold" />
          </span>
        </span>
      ) : null}
    </span>
  );

  if (href === false) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
      {content}
    </Link>
  );
}
