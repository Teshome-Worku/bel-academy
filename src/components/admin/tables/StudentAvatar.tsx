"use client";

import { cn } from "@/lib/utils";

type StudentAvatarProps = {
  name: string;
  className?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const colors = [
  "bg-brand-blue text-white",
  "bg-brand-gold text-brand-navy",
  "bg-emerald-500 text-white",
  "bg-violet-500 text-white",
  "bg-cyan-500 text-white",
];

export function StudentAvatar({ name, className }: StudentAvatarProps) {
  const colorIndex = name.charCodeAt(0) % colors.length;
  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
        colors[colorIndex],
        className,
      )}
    >
      {getInitials(name)}
    </div>
  );
}
