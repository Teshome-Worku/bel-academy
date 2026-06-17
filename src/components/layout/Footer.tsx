import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Video } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { marketingNav } from "@/constants/navigation";
import { activeSocialLinks } from "@/data/social";
import { Logo } from "@/components/ui/Logo";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-navy text-white">
      <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue" />
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 text-center sm:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <Logo className="mx-auto sm:mx-0" imageClassName="h-24 md:h-28" showText={false} href="/" />
            <p className="mt-4 font-heading text-sm font-semibold text-brand-gold mx-auto sm:mx-0">
              {BRAND.tagline}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400 mx-auto sm:mx-0">
              Quality English instruction for Afaan Oromo speakers across Addis
              Ababa and online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading text-sm font-semibold text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {marketingNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="font-heading text-sm font-semibold text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-heading text-sm font-semibold text-white">
              Community
            </p>
            <ul className="mt-4 space-y-2.5">
              {activeSocialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-brand-gold"
                  >
                    <social.Icon className="h-4 w-4" />
                    {social.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3 justify-center sm:justify-start">
              <a
                href="https://t.me/bel_academy2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-brand-gold hover:text-brand-navy"
                aria-label="Telegram"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@bel_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-brand-gold hover:text-brand-navy"
                aria-label="TikTok"
              >
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Developed by{" "}
            <Link
              href="https://walin-tech.vercel.app"
              className="text-brand-gold hover:underline"
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
