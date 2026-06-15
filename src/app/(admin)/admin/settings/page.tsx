"use client";

import { useState } from "react";
import { BRAND } from "@/constants/brand";
import { PageHeader } from "@/components/admin/shell/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function AdminSettingsPage() {
  const [lang, setLang] = useState("en");
  const [emailNotif, setEmailNotif] = useState(true);
  const [regNotif, setRegNotif] = useState(true);

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Academy and admin preferences" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Academy Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-navy">Name</label>
              <Input value={BRAND.name} readOnly />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-navy">Tagline</label>
              <Input value={BRAND.tagline} readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-navy">Phone</label>
              <Input value={BRAND.phone} readOnly />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-navy">Email</label>
              <Input value={BRAND.email} readOnly />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-navy">Address</label>
              <Input value={BRAND.address} readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Facebook URL" value="facebook.com/belacademy" readOnly />
            <Input placeholder="Telegram" value="t.me/belacademy" readOnly />
            <Input placeholder="YouTube" value="youtube.com/belacademy" readOnly />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Language Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <input
                type="radio"
                checked={lang === "en"}
                onChange={() => setLang("en")}
              />
              <span className="text-sm font-medium">English</span>
            </label>
            <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <input
                type="radio"
                checked={lang === "om"}
                onChange={() => setLang("om")}
              />
              <span className="text-sm font-medium">Afaan Oromo</span>
            </label>
            <p className="text-xs text-brand-gray">UI only — no translation in showcase.</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <span className="text-sm font-medium text-brand-navy">Email notifications</span>
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={(e) => setEmailNotif(e.target.checked)}
                className="h-4 w-4 rounded"
              />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <span className="text-sm font-medium text-brand-navy">New registration alerts</span>
              <input
                type="checkbox"
                checked={regNotif}
                onChange={(e) => setRegNotif(e.target.checked)}
                className="h-4 w-4 rounded"
              />
            </label>
            <Button onClick={() => alert("Settings saved — demo only")}>
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
