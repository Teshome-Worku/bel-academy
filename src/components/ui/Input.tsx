import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-brand-navy placeholder:text-brand-gray focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
