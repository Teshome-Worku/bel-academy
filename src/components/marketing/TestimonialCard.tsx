import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { Card, CardContent } from "@/components/ui/Card";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex gap-1 text-brand-gold">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-sm text-brand-gray">&ldquo;{testimonial.quote}&rdquo;</p>
        <p className="mt-4 font-medium text-brand-navy">{testimonial.name}</p>
        <p className="text-xs text-brand-gray">{testimonial.role}</p>
      </CardContent>
    </Card>
  );
}
