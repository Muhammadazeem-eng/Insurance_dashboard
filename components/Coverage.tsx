"use client";

import { motion } from "motion/react";
import { Shield, Lock, Briefcase, Users, ArrowRight, Check } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import { COVERAGE } from "@/lib/content";

const ICONS = { shield: Shield, lock: Lock, briefcase: Briefcase, users: Users };

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {COVERAGE.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
          >
            {COVERAGE.title}
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {COVERAGE.items.map((c, i) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="rounded-2xl">
                  <div className="relative rounded-2xl bg-white ring-1 ring-black/5 p-8 shadow-premium overflow-hidden">
                    {/* corner gradient */}
                    <div
                      className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-50"
                      style={{ background: "radial-gradient(circle, rgba(47,91,255,0.45), transparent 60%)" }}
                    />

                    <div className="relative flex items-start justify-between">
                      <div className="grid place-items-center w-12 h-12 rounded-xl bg-ink text-white">
                        <Icon size={20} />
                      </div>
                      {c.tag && (
                        <span className="text-[11px] font-medium text-accent bg-accent/8 ring-1 ring-accent/15 rounded-full px-2.5 py-1">
                          {c.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="relative mt-6 font-serif text-3xl tracking-tight">{c.title}</h3>
                    <p className="relative mt-3 text-[14px] text-ink-soft leading-relaxed">{c.body}</p>

                    <ul className="relative mt-5 space-y-2">
                      {c.bullet.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[13px] text-ink-soft">
                          <Check size={14} className="mt-0.5 text-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent group/cta"
                    >
                      Learn more
                      <ArrowRight size={13} className="transition-transform group-hover/cta:translate-x-1" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
