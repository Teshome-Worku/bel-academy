"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function Avatar({ name, accent }: { name: string; accent: string }) {
    const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
    return (
        <div style={{ background: accent }} className="h-14 w-14 flex items-center justify-center rounded-full text-white font-bold">
            {initials}
        </div>
    );
}

export function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const len = testimonials.length;
    const timerRef = useRef<number | null>(null);
    const [paused, setPaused] = useState(false);
    const [animateCounts, setAnimateCounts] = useState(false);

    useEffect(() => {
        if (paused) return;
        timerRef.current = window.setInterval(() => setIndex((i) => (i + 1) % len), 4500);
        return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
    }, [len, paused]);

    const prev = () => setIndex((i) => (i - 1 + len) % len);
    const next = () => setIndex((i) => (i + 1) % len);

    const palette = ["#1D4ED8", "#F59E0B", "#312E81", "#059669", "#1D4ED8", "#312E81"];

    return (
        <section className="py-16">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="text-sm font-bold text-[#1D4ED8]">SUCCESS STORIES</div>
                    <h2 className="mt-3 font-display text-3xl font-bold text-[#0F172A]">Trusted by Students Across Ethiopia</h2>
                    <p className="mt-2 text-[#64748B]">Hear how BEL Academy students improved their English confidence, speaking skills, and career opportunities.</p>
                </motion.div>

                <div className="mt-6 flex items-center justify-center gap-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm">
                        <div className="text-3xl font-bold">1,200+</div>
                        <div className="text-xs text-[#64748B]">Trusted students</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm">
                        <div className="flex items-center justify-center gap-2">
                            <div className="text-2xl font-bold">4.9</div>
                            <div className="text-sm text-[#F59E0B]">★★★★★</div>
                        </div>
                        <div className="text-xs text-[#64748B]">Student satisfaction</div>
                    </motion.div>
                </div>

                <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mt-8 relative">
                    <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 shadow-md">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="overflow-hidden">
                        <div className="flex gap-6 px-6" style={{ touchAction: 'pan-y' }}>
                            {testimonials.map((t, i) => {
                                const distance = Math.abs(i - index);
                                const isActive = i === index;
                                const isVisible = distance <= 2 || distance === testimonials.length - 1; // show neighbors
                                return (
                                    <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: isVisible ? 1 : 0.4, y: isActive ? 0 : 8 }} transition={{ duration: 0.45 }} className={`min-w-[280px] flex-shrink-0 sm:min-w-[320px] md:min-w-[360px] ${isActive ? 'scale-105' : 'scale-100'} transition-transform`}>
                                        <div className={`rounded-[24px] p-6`} style={{ background: 'rgba(255,255,255,0.85)', boxShadow: isActive ? '0 20px 50px rgba(15,23,42,0.12)' : '0 8px 24px rgba(15,23,42,0.06)' }}>
                                            <div className="flex items-center gap-4">
                                                <Avatar name={t.name} accent={palette[i % palette.length]} />
                                                <div className="flex-1 text-left">
                                                    <div className="flex items-center gap-2">
                                                        <div className="font-semibold text-[#0F172A]">{t.name}</div>
                                                        <div className="text-xs text-[#64748B]">{t.role}</div>
                                                    </div>
                                                    <div className="mt-2 text-[#F59E0B] flex items-center gap-1 text-sm">
                                                        {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="h-4 w-4" />))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 text-[#0F172A] text-sm">
                                                <Quote className="h-5 w-5 text-[#1D4ED8] float-left mr-3" />
                                                &ldquo;{t.quote}&rdquo;
                                            </div>
                                            <div className="mt-4 text-xs text-[#64748B] flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-[#F8FAFC] px-2 py-1 text-xs">BEL Academy</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 shadow-md">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TestimonialCarousel;
