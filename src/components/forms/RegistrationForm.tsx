"use client";

import { FormEvent, useState } from "react";
import { branchOptions, programOptions, scheduleOptions } from "@/constants/form-options";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "./FormField";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-display text-lg font-semibold text-brand-navy">Thank you!</p>
        <p className="mt-2 text-sm text-brand-gray">Your registration has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Full name" htmlFor="fullName">
          <Input id="fullName" name="fullName" required placeholder="Your full name" />
        </FormField>
        <FormField label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" required placeholder="09..." />
        </FormField>
      </div>
      <FormField label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required placeholder="you@email.com" />
      </FormField>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Program" htmlFor="program">
          <Select id="program" name="program" required defaultValue="">
            <option value="" disabled>
              Select program
            </option>
            {programOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Branch" htmlFor="branch">
          <Select id="branch" name="branch" required defaultValue="">
            <option value="" disabled>
              Select branch
            </option>
            {branchOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField label="Preferred schedule" htmlFor="schedule">
        <Select id="schedule" name="schedule" required defaultValue="">
          <option value="" disabled>
            Select schedule
          </option>
          {scheduleOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField label="Message (optional)" htmlFor="message">
        <Textarea id="message" name="message" placeholder="Tell us about your goals..." />
      </FormField>
      <Button type="submit" className="w-full md:w-auto">
        Submit Registration
      </Button>
    </form>
  );
}
