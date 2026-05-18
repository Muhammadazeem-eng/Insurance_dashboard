"use client";

import { motion } from "motion/react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-ink flex items-baseline gap-1">
                {s.format === "currency" && <span className="text-ink-mute text-2xl">$</span>}
                <AnimatedCounter to={s.value} duration={1.8} />
                <span className="text-accent">{s.suffix}</span>
              </div>
              <p className="mt-4 text-[13px] text-ink-mute max-w-[220px] leading-snug">
                {s.label}
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 left-0 h-[2px] w-16 bg-gradient-to-r from-accent to-accent-purple origin-left rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
