"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";

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
        <Section className="bg-[#F8FAFC]">
            <div className="mx-auto max-w-3xl">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/10 bg-[#1D4ED8]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1D4ED8]">FAQ</span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
                    <p className="mt-3 text-[#64748B]">Find quick answers to common questions about BEL Academy programs, registration, schedules, and learning options.</p>
                </div>

                <div className="mt-10 space-y-4">
                    {faqs.map((f, i) => (
                        <motion.div key={f.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div
                                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1"
                                style={{ boxShadow: '0 10px 30px rgba(2,6,23,0.06)' }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-5 py-4"
                                >
                                    <span className="text-left">
                                        <div className="text-sm font-semibold text-[#0F172A]">{f.q}</div>
                                        <div className="mt-1 text-xs text-[#64748B]">&nbsp;</div>
                                    </span>
                                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#1D4ED8] transition-all duration-200 group-hover:scale-105">
                                        {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="px-5 pb-5">
                                            <div className="text-sm text-[#374151] leading-relaxed">{f.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default FAQSection;
