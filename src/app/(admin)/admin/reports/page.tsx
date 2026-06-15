import { PremiumStatGrid } from "@/components/admin/dashboard/PremiumStatGrid";
import { AnalyticsSection } from "@/components/admin/dashboard/AnalyticsSection";
import { PageHeader } from "@/components/admin/shell/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, FileSpreadsheet } from "lucide-react";

export const metadata = { title: "Reports" };

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Analytics and exportable reports"
      />
      <PremiumStatGrid />
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="opacity-90">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand-blue" />
              Export PDF Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-brand-gray">
              Generate a comprehensive academy report with student and enrollment data.
            </p>
            <button
              type="button"
              disabled
              title="Demo — export not available"
              className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-brand-gray"
            >
              Export PDF (Demo)
            </button>
          </CardContent>
        </Card>
        <Card className="opacity-90">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-brand-gold" />
              Export Excel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-brand-gray">
              Download student and registration data as spreadsheet.
            </p>
            <button
              type="button"
              disabled
              title="Demo — export not available"
              className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-brand-gray"
            >
              Export Excel (Demo)
            </button>
          </CardContent>
        </Card>
      </div>
      <AnalyticsSection />
    </div>
  );
}
