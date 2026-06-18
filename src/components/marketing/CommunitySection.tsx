"use client";

import { useRef, useEffect, useState, type ComponentType } from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";
import { ArrowRight, Users } from "lucide-react";
import {
  FacebookIcon,
  TelegramIcon,
  TikTokIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";

type Platform = {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
  hoverGlow: string;
  bgGlass: string;
  Icon: ComponentType<{ className?: string; title?: string }>;
  cta: string;
  followers?: string;
};

const PLATFORMS: Platform[] = [
  {
    id: "telegram",
    name: "Telegram",
    description: "Join our active student community channel for announcements.",
    url: "https://t.me/BEL_ACADEMY2",
    color: "#26A5E4",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(38,165,228,0.35)]",
    bgGlass: "dark:hover:border-[#26A5E4]/30",
    Icon: TelegramIcon,
    cta: "Join Channel",
    followers: "4K",
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Stay updated with academy news and student success stories.",
    url: "https://web.facebook.com/profile.php?id=61575630489570",
    color: "#1877F2",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(24,119,242,0.35)]",
    bgGlass: "dark:hover:border-[#1877F2]/30",
    Icon: FacebookIcon,
    cta: "Visit Page",
    followers: "93K+",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Watch short English tips and speaking practice videos.",
    url: "https://www.tiktok.com/@bel_academy",
    color: "#69C9D0",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(105,201,208,0.35)]",
    bgGlass: "dark:hover:border-[#69C9D0]/30",
    Icon: TikTokIcon,
    cta: "Watch Videos",
    followers: "295K+",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Access free English lessons and educational content.",
    url: "https://www.youtube.com/@BELACADEMY",
    color: "#FF0000",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,0,0,0.25)]",
    bgGlass: "dark:hover:border-[#FF0000]/30",
    Icon: YouTubeIcon,
    cta: "Subscribe",
    followers: "88K+",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "See academy activities, achievements, and updates.",
    url: "https://www.instagram.com/bel_academy1/",
    color: "#E1306C",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(225,48,108,0.30)]",
    bgGlass: "dark:hover:border-[#E1306C]/30",
    Icon: InstagramIcon,
    cta: "Follow Us",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: SMOOTH_EASE },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: SMOOTH_EASE } },
};

export function CommunitySection() {
  return (
    <div>
      <Section variant="white" className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[120px] dark:bg-brand-blue/8" />
          <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-[100px] dark:bg-brand-gold/8" />
        </div>

        <SectionHeading
          align="center"
          eyebrow="JOIN OUR COMMUNITY"
          title="Learn Beyond The Classroom"
          description="Connect with BEL Academy across all platforms for lessons, announcements, student success stories, and learning resources."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mx-auto mt-12 grid max-w-6xl gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {PLATFORMS.map((p) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-brand-dark-card ${p.hoverGlow} ${p.bgGlass} hover:border-slate-300`}
            >
              {/* Top accent line */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: p.color }}
              />

              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${p.color}15` }}
              >
                <span style={{ color: p.color }}>
                  <p.Icon className="h-7 w-7" />
                </span>
              </div>

              {/* Content */}
              <div className="mt-4 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-brand-navy dark:text-white">
                    {p.name}
                  </h3>
                  {p.followers && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-gray dark:text-slate-400">
                      <Users className="h-3 w-3" />
                      {p.followers}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray dark:text-slate-400">{p.description}</p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <span
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 group-hover:shadow-md"
                  style={{ background: p.color }}
                >
                  {p.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: SMOOTH_EASE, delay: 0.3 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/20 bg-gradient-to-r from-brand-dark-bg via-brand-dark-secondary to-brand-dark-bg p-6 text-center shadow-xl dark:from-brand-dark-secondary dark:via-brand-dark-card dark:to-brand-dark-secondary"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Our Reach
          </p>
          <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Telegram Community", value: "4,156+" },
              { label: "TikTok Followers", value: "295K+" },
              { label: "YouTube Subscribers", value: "87.9K+" },
              { label: "Facebook Community", value: "93K+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
