"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, Globe, Camera, Play } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";

const socials = [
    { id: 'telegram', Icon: MessageCircle, title: 'Telegram Community', desc: 'Join our Telegram community for updates, registration announcements, and learning resources.', url: 'https://t.me/bel_academy2' },
    { id: 'tiktok', Icon: Video, title: 'TikTok Lessons', desc: 'Watch short English lessons and educational videos.', url: 'https://www.tiktok.com/@bel_academy' },
    { id: 'facebook', Icon: Globe, title: 'Facebook Page', desc: 'Follow BEL Academy for announcements, student success stories, and academy updates.', url: 'PLACEHOLDER_FACEBOOK_LINK' },
    { id: 'instagram', Icon: Camera, title: 'Instagram', desc: 'See academy activities, learning tips, and student highlights.', url: 'PLACEHOLDER_INSTAGRAM_LINK' },
    { id: 'youtube', Icon: Play, title: 'YouTube Channel', desc: 'Watch long-form English lessons and educational content.', url: 'PLACEHOLDER_YOUTUBE_LINK' },
];

export function CommunitySection() {
    return (
        <Section className="bg-white">
            <div className="mx-auto max-w-4xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/10 bg-[#1D4ED8]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1D4ED8]">COMMUNITY</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-[#0F172A]">Join Our Learning Community</h2>
                <p className="mt-3 text-[#64748B]">Connect with BEL Academy through our social media channels and stay updated with new programs, lessons, and announcements.</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {socials.map((s, i) => (
                        <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl bg-[#F8FAFC] p-6 shadow-md transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                                        <s.Icon className="h-6 w-6 text-[#1D4ED8]" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="text-sm font-semibold text-[#0F172A]">{s.title}</div>
                                        <div className="mt-1 text-xs text-[#64748B]">{s.desc}</div>
                                    </div>
                                </div>
                                <div className="mt-4 text-right">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-[#1D4ED8]">Visit</span>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#F59E0B] p-8 text-white shadow-xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="font-display text-2xl font-bold">Ready to Start Your English Journey?</h3>
                        <p className="mt-3 text-white/90">Join hundreds of learners building confidence and fluency with BEL Academy.</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <a href="/register" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1D4ED8]">Register Now</a>
                            <a href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-medium text-white/95">Contact Us</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

export default CommunitySection;
