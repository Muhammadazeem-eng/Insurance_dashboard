"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HOW } from "@/lib/content";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how" ref={ref} className="py-24 sm:py-32 bg-bg-soft relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {HOW.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
          >
            {HOW.title}
          </motion.h2>
        </div>

        <div className="mt-16 relative">
          {/* progress line */}
          <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-black/[0.08]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-10 top-0 w-px bg-gradient-to-b from-accent via-accent-purple to-accent origin-top"
          />

          <ol className="space-y-12 sm:space-y-16">
            {HOW.steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16 sm:pl-24"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 sm:left-4 top-1 grid place-items-center w-12 h-12 rounded-full bg-white ring-1 ring-black/5 shadow-chip"
                >
                  <span className="font-serif text-lg text-accent">{s.n}</span>
                </motion.div>

                <h3 className="font-serif text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink-soft text-[15px] leading-relaxed max-w-xl">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
