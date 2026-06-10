import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const IconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-gray transition hover:bg-slate-100 hover:text-brand-navy",
        className,
      )}
      {...props}
    />
  ),
);
IconButton.displayName = "IconButton";
