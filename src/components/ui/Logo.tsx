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
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={LOGO_PATH}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        width={220}
        height={88}
        quality={95}
        className={cn("h-full w-auto object-contain", imageClassName)}
        priority
      />
      {showText ? (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="font-heading text-lg font-semibold text-brand-navy">{BRAND.name}</span>
          <span className="text-xs text-brand-gray">{BRAND.tagline}</span>
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
