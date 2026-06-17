"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  { q: "Do I need prior English knowledge to join?", a: "No. BEL Academy offers programs for beginners, intermediate learners, and advanced students." },
  { q: "Are classes available online?", a: "Yes. Students can learn from anywhere through our online learning programs." },
  { q: "What class schedules are available?", a: "Regular, Night, Weekend, VIP, VVIP, Private, and Online classes are available." },
  { q: "Where are your branches located?", a: "BEL Academy currently serves students through Burayyuu Branch, Jamoo Furii Branch, and online programs." },
  { q: "How can I register?", a: "You can complete the registration form on the website and our team will contact you." },
  { q: "Do you offer private coaching?", a: "Yes. Private and personalized English coaching is available." },
  { q: "Which program is best for beginners?", a: "Our Regular Class program is designed for learners starting their English journey." },
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
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-brand-blue/30 bg-white shadow-[0_4px_20px_rgba(13,71,161,0.08)] dark:border-brand-blue/30 dark:bg-brand-dark-card dark:shadow-[0_4px_20px_rgba(13,71,161,0.2)]"
                  : "border-slate-200/80 bg-white shadow-sm hover:border-slate-300 dark:border-white/5 dark:bg-brand-dark-card/60 dark:hover:border-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-sm font-semibold transition-colors duration-200 ${
                  isOpen ? "text-brand-blue dark:text-brand-gold" : "text-brand-navy dark:text-white"
                }`}>
                  {f.q}
                </span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "bg-brand-blue text-white dark:bg-brand-gold dark:text-brand-navy shadow-[0_0_12px_rgba(13,71,161,0.4)] dark:shadow-[0_0_12px_rgba(245,166,35,0.4)]"
                    : "bg-slate-50 text-brand-blue dark:bg-white/5 dark:text-slate-400"
                }`}>
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-100 dark:border-white/5 px-6 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-brand-gray dark:text-slate-400">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
