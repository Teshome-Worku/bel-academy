"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SMOOTH_EASE } from "./animation";

export function CommunitySection() {
  return (
    <Section variant="white">
      <SectionHeading
        align="center"
        eyebrow="Community"
        title="Stay connected with BEL Academy"
        description="Follow us for lessons, announcements, and learning resources."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: SMOOTH_EASE }}
        className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {socialLinks.map((s) => {
          const CardInner = (
            <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <s.Icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-brand-navy">
                      {s.title}
                    </span>
                    {s.comingSoon ? (
                      <span className="rounded-full bg-brand-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-gold">
                        Soon
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-brand-gray">
                    {s.description}
                  </p>
                </div>
              </div>
              {!s.comingSoon ? (
                <span className="mt-4 inline-flex text-xs font-semibold text-brand-blue">
                  Visit →
                </span>
              ) : null}
            </div>
          );

          if (s.comingSoon) {
            return <div key={s.id}>{CardInner}</div>;
          }

          return (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardInner}
            </a>
          );
        })}
      </motion.div>
    </Section>
  );
}
