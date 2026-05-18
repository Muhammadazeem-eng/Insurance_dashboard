"use client";

import { motion } from "motion/react";
import Marquee from "@/components/ui/Marquee";
import { TRUST } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-black/[0.06] bg-white relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-[12px] uppercase tracking-eyebrow text-ink-mute mb-6 font-medium"
      >
        {TRUST.intro}
      </motion.p>

      <Marquee
        speed={40}
        items={TRUST.carriers.map((c) => (
          <div
            key={c}
            className="inline-flex items-center gap-3 text-ink/70 hover:text-ink transition-colors"
          >
            <span className="font-serif text-3xl tracking-tight">{c}</span>
            <span className="text-ink-mute text-2xl">·</span>
          </div>
        ))}
      />
    </section>
  );
}
