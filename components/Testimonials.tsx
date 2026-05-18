"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {TESTIMONIALS.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight"
          >
            {TESTIMONIALS.title}
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:overflow-visible overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0">
          {TESTIMONIALS.items.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center min-w-[85%] md:min-w-0 rounded-2xl bg-white ring-1 ring-black/5 shadow-premium p-7"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 + 0.3 + j * 0.06, duration: 0.4 }}
                  >
                    <Star size={14} className="fill-accent text-accent" />
                  </motion.span>
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-medium text-[14px] text-ink">{t.author}</div>
                <div className="text-[13px] text-ink-mute">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
