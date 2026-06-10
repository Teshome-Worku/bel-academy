"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { registrationChartData } from "@/data/dashboard-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function RegistrationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Registrations</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={registrationChartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="registrations" fill="#0D47A1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
