import Link from "next/link";
import type { Program } from "@/types/program";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-brand-navy">{program.title}</h3>
          {program.featured ? <Badge>Popular</Badge> : null}
        </div>
        <p className="mt-3 flex-1 text-sm text-brand-gray">{program.description}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-brand-gray">
          <div>
            <dt className="font-medium text-brand-navy">Duration</dt>
            <dd>{program.duration}</dd>
          </div>
          <div>
            <dt className="font-medium text-brand-navy">Level</dt>
            <dd className="capitalize">{program.level.replace("-", " ")}</dd>
          </div>
        </dl>
        <Link href="/register" className="mt-5">
          <Button variant="outline" className="w-full">
            Enroll
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
