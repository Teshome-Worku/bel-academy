import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { marketingNav } from "@/constants/navigation";
import { adminNavItems } from "@/constants/navigation";
import { activeSocialLinks } from "@/data/social";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, TelegramIcon, TikTokIcon, YouTubeIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Container } from "./Container";

const socialIcons = [
  { href: "https://web.facebook.com/profile.php?id=61575630489570", Icon: FacebookIcon, label: "Facebook", glow: "hover:shadow-[0_0_16px_rgba(24,119,242,0.5)] hover:border-[#1877F2]/30 hover:text-[#1877F2]" },
  { href: "https://t.me/BEL_ACADEMY2", Icon: TelegramIcon, label: "Telegram", glow: "hover:shadow-[0_0_16px_rgba(38,165,228,0.5)] hover:border-[#26A5E4]/30 hover:text-[#26A5E4]" },
  { href: "https://www.tiktok.com/@bel_academy", Icon: TikTokIcon, label: "TikTok", glow: "hover:shadow-[0_0_16px_rgba(105,201,208,0.5)] hover:border-[#69C9D0]/30 hover:text-white" },
  { href: "https://www.youtube.com/@BELACADEMY", Icon: YouTubeIcon, label: "YouTube", glow: "hover:shadow-[0_0_16px_rgba(255,0,0,0.4)] hover:border-[#FF0000]/30 hover:text-[#FF0000]" },
  { href: "https://www.instagram.com/bel_academy1/", Icon: InstagramIcon, label: "Instagram", glow: "hover:shadow-[0_0_16px_rgba(225,48,108,0.5)] hover:border-[#E1306C]/30 hover:text-white" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark-bg text-white">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 text-center sm:text-left">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <Logo className="mx-auto sm:mx-0" imageClassName="h-24 md:h-28" showText={false} href="/" />
            <p className="mt-4 font-display text-sm font-bold text-brand-gold">
              {BRAND.tagline}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
              Quality English instruction for Afaan Oromo speakers across Addis Ababa and online.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-2.5 justify-center sm:justify-start flex-wrap">
              {socialIcons.map(({ href, Icon, label, glow }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${glow}`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-sm font-bold text-white">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {marketingNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="font-display text-sm font-bold text-white">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <Phone className="h-4 w-4 text-brand-gold" />
                </div>
                <a href={`tel:${BRAND.phone}`} className="mt-1 hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <Mail className="h-4 w-4 text-brand-gold" />
                </div>
                <a href={`mailto:${BRAND.email}`} className="mt-1 hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                </div>
                <span className="mt-1">{BRAND.address}</span>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <p className="font-display text-sm font-bold text-white">Community</p>
            <ul className="mt-5 space-y-3">
              {activeSocialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-brand-gold"
                  >
                    <social.Icon className="h-4 w-4 shrink-0" />
                    {social.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Developed by{" "}
            <Link
              href="https://walin-tech.vercel.app"
              className="text-brand-gold transition-colors hover:text-amber-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BRAND.developer}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
