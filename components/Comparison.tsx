"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { COMPARISON } from "@/lib/content";

export default function Comparison() {
  return (
    <section className="bg-bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {COMPARISON.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight"
          >
            {COMPARISON.title.lead}
            <span className="italic text-accent">{COMPARISON.title.italic}</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 relative bg-white rounded-2xl ring-1 ring-black/5 shadow-premium overflow-hidden"
        >
          {/* Highlight strip behind InsureTechOS column */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-accent/[0.06] via-accent/[0.03] to-transparent origin-top pointer-events-none"
          />

          <table className="relative w-full text-left">
            <thead>
              <tr className="border-b border-black/5">
                {COMPARISON.headers.map((h, i) => (
                  <th
                    key={h}
                    className={`px-6 sm:px-8 py-5 text-[11px] uppercase tracking-eyebrow font-medium ${
                      i === 0
                        ? "text-ink-mute"
                        : i === 2
                        ? "text-accent"
                        : "text-ink-mute"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((r, i) => (
                <motion.tr
                  key={r.area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  className="border-b border-black/5 last:border-b-0"
                >
                  <td className="px-6 sm:px-8 py-5 font-medium text-ink text-[14px]">{r.area}</td>
                  <td className="px-6 sm:px-8 py-5 text-ink-soft text-[14px]">
                    <span className="inline-flex items-center gap-2">
                      <Minus size={14} className="text-ink-mute shrink-0" />
                      {r.old}
                    </span>
                  </td>
                  <td className="px-6 sm:px-8 py-5 text-ink text-[14px] font-medium">
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} className="text-accent shrink-0" />
                      {r.neu}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
