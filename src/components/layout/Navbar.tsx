"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { marketingNav } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Container } from "./Container";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const langRef = useRef<HTMLDivElement>(null);

  /* ── Scroll listener ─────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close language dropdown on outside click ────── */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ── Close mobile menu on route change ─────────── */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* ── Lock body scroll when mobile menu is open ──── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const languages = [
    { label: "English", code: "en" },
    { label: "Afaan Oromo", code: "om" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-all duration-300",
        scrolled ? "shadow-lg" : "shadow-sm",
      )}
    >
      <Container className="px-2.5 sm:px-4 lg:px-5 xl:px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-[4.25rem] md:h-[4.5rem]" : "h-[4.5rem] md:h-20",
          )}
        >
          {/* ── LEFT: Logo + Brand Name ──────────────────── */}
          <Logo
            className="-ml-1 sm:gap-3"
            imageClassName={cn(
              "transition-all duration-300",
              scrolled ? "h-[3.75rem] md:h-[4.25rem]" : "h-16 md:h-[4.75rem]",
            )}
            showText
          />

          {/* ── CENTER: Navigation Links ─────────────────── */}
          <nav className="hidden items-center gap-1 lg:flex">
            {marketingNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-brand-blue"
                      : "text-brand-navy hover:text-brand-blue",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2.5px] w-5 -translate-x-1/2 rounded-full bg-brand-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT: Language Dropdown + Register Button ── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-brand-navy transition-colors hover:border-brand-blue/30 hover:bg-blue-50"
              >
                <Globe className="h-4 w-4 text-brand-gray" />
                <span>{selectedLang}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-brand-gray transition-transform duration-200",
                    langOpen && "rotate-180",
                  )}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-100 bg-white py-1.5 shadow-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.label);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors",
                        selectedLang === lang.label
                          ? "bg-blue-50 font-medium text-brand-blue"
                          : "text-brand-navy hover:bg-slate-50",
                      )}
                    >
                      {lang.label}
                      {selectedLang === lang.label && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Register Now Button */}
            <Link href="/register">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg hover:shadow-brand-blue/30 active:translate-y-0"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </Link>
          </div>

          {/* ── MOBILE: Hamburger (only shows when menu is closed) ── */}
          {!mobileOpen ? (
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-brand-navy" />
            </button>
          ) : null}
        </div>
      </Container>

      {/* ── MOBILE BACKDROP ─────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── MOBILE SLIDE-OUT DRAWER ──────────────────────── */}
      <div
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-[19rem] max-w-[calc(100vw-1rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer Header — single close button */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Logo imageClassName="h-14" showText={false} href={false} />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-brand-navy" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <div className="space-y-1">
            {marketingNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3.5 text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-brand-blue"
                      : "text-brand-navy hover:bg-slate-50",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Language Selector */}
          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-brand-gray">
              Language
            </p>
            <div className="grid gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setSelectedLang(lang.label)}
                  className={cn(
                    "flex min-h-11 w-full items-center rounded-lg px-3.5 py-2.5 text-sm transition-colors",
                    selectedLang === lang.label
                      ? "bg-white font-semibold text-brand-blue shadow-sm"
                      : "text-brand-navy hover:bg-white",
                  )}
                >
                  <Globe className="mr-2.5 h-4 w-4 text-brand-gray" />
                  {lang.label}
                  {selectedLang === lang.label && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Register Button */}
        <div className="border-t border-slate-100 p-4">
          <Link href="/register" onClick={() => setMobileOpen(false)}>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-all hover:bg-blue-800"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
