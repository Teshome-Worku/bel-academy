import { programs } from "@/data/programs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProgramsOverviewGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {programs.map((p) => (
        <Card key={p.id}>
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>{p.title}</CardTitle>
              {p.featured ? <Badge>Featured</Badge> : null}
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-brand-gray">
            <p>{p.description}</p>
            <p>
              <span className="font-medium text-brand-navy">Duration:</span> {p.duration}
            </p>
            <p>
              <span className="font-medium text-brand-navy">Level:</span> {p.level}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
