import { MapPin, Phone, Clock } from "lucide-react";
import type { Branch } from "@/types/branch";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-brand-navy">{branch.name}</h3>
          {branch.isOnline ? <Badge className="bg-brand-gold/20 text-brand-navy">Online</Badge> : null}
        </div>
        <ul className="mt-4 space-y-3 text-sm text-brand-gray">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            {branch.address}
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
            {branch.phone}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-brand-blue" />
            {branch.hours}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
