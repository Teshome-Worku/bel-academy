import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-brand-navy placeholder:text-brand-gray focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
