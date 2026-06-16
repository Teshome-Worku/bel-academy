"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Do I need prior English knowledge to join?",
    a: "No. BEL Academy offers programs for beginners, intermediate learners, and advanced students.",
  },
  {
    q: "Are classes available online?",
    a: "Yes. Students can learn from anywhere through our online learning programs.",
  },
  {
    q: "What class schedules are available?",
    a: "Regular, Night, Weekend, VIP, VVIP, Private, and Online classes are available.",
  },
  {
    q: "Where are your branches located?",
    a: "BEL Academy currently serves students through Burayyuu Branch, Jamoo Furii Branch, and online programs.",
  },
  {
    q: "How can I register?",
    a: "You can complete the registration form on the website and our team will contact you.",
  },
  {
    q: "Do you offer private coaching?",
    a: "Yes. Private and personalized English coaching is available.",
  },
  {
    q: "Which program is best for beginners?",
    a: "Our Regular Class program is designed for learners starting their English journey.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section variant="muted">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers about programs, registration, schedules, and learning options."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-brand-navy">{f.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-brand-blue">
                {openIndex === i ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-brand-gray">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
