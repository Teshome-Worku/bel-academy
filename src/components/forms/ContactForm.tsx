"use client";

import { FormEvent, useState } from "react";
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
    return <p className="rounded-lg bg-green-50 p-4 text-sm text-green-800">Message sent! We will reply within one business day.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormField label="Name" htmlFor="name">
        <Input id="name" required placeholder="Your name" />
      </FormField>
      <FormField label="Email" htmlFor="contactEmail">
        <Input id="contactEmail" type="email" required placeholder="you@email.com" />
      </FormField>
      <FormField label="Message" htmlFor="contactMessage">
        <Textarea id="contactMessage" required placeholder="How can we help?" />
      </FormField>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
