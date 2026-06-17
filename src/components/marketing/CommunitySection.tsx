"use client";

import { useRef, useEffect, useState, type ComponentType } from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";
import { ArrowRight } from "lucide-react";
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
  Icon: ComponentType<{ className?: string; title?: string }>;
  cta: string;
};

const PLATFORMS: Platform[] = [
  {
    id: "telegram",
    name: "Telegram",
    description: "Join our active student community and receive announcements.",
    url: "https://t.me/BEL_ACADEMY2",
    color: "#26A5E4",
    Icon: TelegramIcon,
    cta: "Join Telegram",
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Stay updated with academy news and success stories.",
    url: "https://web.facebook.com/profile.php?id=61575630489570",
    color: "#1877F2",
    Icon: FacebookIcon,
    cta: "Visit Facebook",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Watch short English learning videos and speaking tips.",
    url: "https://www.tiktok.com/@oromoenglish.bel.academy",
    color: "#69C9D0",
    Icon: TikTokIcon,
    cta: "Watch Videos",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Access free lessons and educational content.",
    url: "https://www.youtube.com/@BELACADEMY",
    color: "#FF0000",
    Icon: YouTubeIcon,
    cta: "Watch on YouTube",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "See academy activities, student achievements, and updates.",
    url: "https://www.instagram.com/oromo_english_bel_academy/",
    color: "#E1306C",
    Icon: InstagramIcon,
    cta: "Follow Instagram",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, ease: SMOOTH_EASE },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: SMOOTH_EASE } },
};

function useCountUp(target: number, startOn: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startOn) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [startOn, target, duration]);
  return value;
}

export function CommunitySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Social proof numbers (from user-provided data)
  const telegramCount = useCountUp(4156, visible);
  const tiktokCount = useCountUp(295200, visible);
  const youtubeCount = useCountUp(87900, visible);
  const facebookCount = useCountUp(93000, visible);

  return (
    <div ref={ref}>
      <Section variant="white">
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
          className="mx-auto mt-10 grid max-w-6xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {PLATFORMS.map((p) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative block overflow-hidden rounded-2xl p-6 shadow-xl"
              style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))` }}
            >
              <div className="absolute inset-0 -z-10 transform-gpu transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/90 shadow">
                  <span className="sr-only">{p.name}</span>
                  <span style={{ color: p.color }} aria-hidden>
                    <p.Icon className="h-8 w-8 transition-transform duration-200 group-hover:scale-110" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {p.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{p.description}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-gray">&nbsp;</span>
                <span className="ml-auto">
                  <span className="inline-flex">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy shadow-md transition-transform duration-200 group-hover:-translate-y-0.5">
                      <span>{p.cta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 p-6 text-center shadow-lg"
        >
          <p className="text-sm font-semibold text-brand-gold">Join thousands of learners across our community</p>

          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-white">{telegramCount >= 1000 ? telegramCount.toLocaleString() : telegramCount}</div>
              <div className="mt-1 text-sm text-slate-300">Telegram Community</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{tiktokCount >= 1000 ? (tiktokCount / 1000).toFixed(1) + "k" : tiktokCount}</div>
              <div className="mt-1 text-sm text-slate-300">TikTok Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{youtubeCount >= 1000 ? (youtubeCount / 1000).toFixed(1) + "k" : youtubeCount}</div>
              <div className="mt-1 text-sm text-slate-300">YouTube Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{facebookCount >= 1000 ? (facebookCount / 1000).toFixed(1) + "k" : facebookCount}</div>
              <div className="mt-1 text-sm text-slate-300">Facebook Community</div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
