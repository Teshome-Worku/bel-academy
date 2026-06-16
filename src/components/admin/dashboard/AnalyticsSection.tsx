"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  studentGrowthData,
  programEnrollmentData,
  branchDistributionData,
} from "@/data/dashboard-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const PIE_COLORS = ["#0D47A1", "#F5A623", "#64748B"];

export function AnalyticsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const barAxisWidth = isMobile ? 72 : 100;
  const pieRadius = isMobile ? 80 : 100;
  const axisFontSize = isMobile ? 10 : 12;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Student Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] w-full min-h-[280px]">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={studentGrowthData}>
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0D47A1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0D47A1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: axisFontSize }} />
                <YAxis tick={{ fontSize: axisFontSize }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#0D47A1"
                  fill="url(#growthGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Program Enrollment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] w-full min-h-[280px]">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={programEnrollmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: axisFontSize }} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={barAxisWidth}
                  tick={{ fontSize: isMobile ? 10 : 11 }}
                />
                <Tooltip />
                <Bar dataKey="students" fill="#0D47A1" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Branch Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] w-full min-h-[280px]">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={branchDistributionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={pieRadius}
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                >
                  {branchDistributionData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
