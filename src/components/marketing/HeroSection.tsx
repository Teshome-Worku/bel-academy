"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";
import { Container } from "@/components/layout/Container";
import { CountUpStats } from "./CountUpStats";
import { SMOOTH_EASE } from "./animation";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: SMOOTH_EASE },
  }),
};

export function HeroSection() {
  return (
    <>
      <section
        className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Students learning English at BEL Academy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1E]/85 via-[#050B1E]/75 to-[#050B1E]" />

        <Container className="relative z-10 flex flex-1 flex-col justify-center pb-32 pt-2 sm:pb-36 sm:pt-6 md:pb-40">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp}>
              <span className="section-eyebrow border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
                Welcome to {BRAND.name}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Master English
              <br />
              <span className="text-brand-gold">With Confidence</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-lg"
            >
              Join thousands of learners at our Burayu and Jamoo Furii branches—or
              study online with expert instructors.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
            >
              <Link href="/register" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-brand-gold/25 transition hover:shadow-xl sm:text-base"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10 sm:text-base"
                >
                  View Programs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: SMOOTH_EASE }}
            className="absolute bottom-8 left-0 right-0 z-10 px-4 sm:bottom-10 md:bottom-12"
          >
            <div className="mx-auto max-w-5xl">
              <div className="glass rounded-2xl px-4 py-4 shadow-2xl sm:px-8 sm:py-6">
                <CountUpStats />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
