"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "./FormField";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <p className="mt-3 font-display font-semibold text-brand-navy">
          Message sent!
        </p>
        <p className="mt-1 text-sm text-brand-gray">
          We will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormField label="Name" htmlFor="name">
        <Input id="name" required placeholder="Your name" className="rounded-xl" />
      </FormField>
      <FormField label="Email" htmlFor="contactEmail">
        <Input
          id="contactEmail"
          type="email"
          required
          placeholder="you@email.com"
          className="rounded-xl"
        />
      </FormField>
      <FormField label="Message" htmlFor="contactMessage">
        <Textarea
          id="contactMessage"
          required
          placeholder="How can we help you get started?"
          rows={5}
          className="rounded-xl"
        />
      </FormField>
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl bg-brand-blue sm:w-auto"
      >
        Send Message
      </Button>
    </form>
  );
}
