"use client";

import { motion } from "motion/react";
import GradientMesh from "@/components/ui/GradientMesh";
import { AI_HUMANS } from "@/lib/content";

export default function AiHumansBand() {
  return (
    <section className="relative bg-ink-inverse text-white py-28 overflow-hidden">
      <GradientMesh variant="dark" className="opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,rgba(11,12,26,0.85))]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-eyebrow text-white/60 font-medium"
        >
          {AI_HUMANS.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]"
        >
          <span className="block">{AI_HUMANS.title.line1}</span>
          <span className="block italic text-white/80">{AI_HUMANS.title.line2}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-7 text-[16px] text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          {AI_HUMANS.body}
        </motion.p>
      </div>
    </section>
  );
}
