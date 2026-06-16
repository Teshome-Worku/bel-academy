"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { branchOptions, programOptions, scheduleOptions } from "@/constants/form-options";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "./FormField";

const steps = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Program & Branch" },
  { id: 3, label: "Goals & Submit" },
];

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <p className="mt-4 font-display text-xl font-bold text-brand-navy">
          Welcome to BEL Academy!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray">
          Your registration has been received. Our admissions team will contact
          you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {i > 0 ? (
                  <div className="h-0.5 flex-1 bg-brand-blue/20" />
                ) : (
                  <div className="flex-1" />
                )}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                  {step.id}
                </div>
                {i < steps.length - 1 ? (
                  <div className="h-0.5 flex-1 bg-brand-blue/20" />
                ) : (
                  <div className="flex-1" />
                )}
              </div>
              <p className="mt-2 hidden text-center text-[10px] font-semibold uppercase tracking-wide text-brand-gray sm:block">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset className="space-y-5">
          <legend className="mb-1 font-display text-sm font-bold uppercase tracking-wide text-brand-blue">
            Step 1 — Personal Information
          </legend>
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
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="mb-1 font-display text-sm font-bold uppercase tracking-wide text-brand-blue">
            Step 2 — Program & Branch
          </legend>
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
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="mb-1 font-display text-sm font-bold uppercase tracking-wide text-brand-blue">
            Step 3 — Your Goals
          </legend>
          <FormField label="Message (optional)" htmlFor="message">
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your English learning goals..."
              rows={4}
            />
          </FormField>
        </fieldset>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-xl bg-brand-gold font-bold text-brand-navy hover:bg-brand-gold/90 sm:w-auto"
        >
          Submit Registration
        </Button>
      </form>
    </div>
  );
}
