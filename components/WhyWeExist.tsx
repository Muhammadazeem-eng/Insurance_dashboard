"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WHY } from "@/lib/content";

export default function WhyWeExist() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-premium"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={WHY.image}
              alt={WHY.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="img-placeholder absolute inset-0 -z-10" data-name="manifesto-portrait.jpg" />
          </motion.div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            {WHY.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight"
          >
            {WHY.title.lead}
            <span className="italic text-accent">{WHY.title.italic}</span>
            {WHY.title.rest}
          </motion.h2>

          <div className="mt-7 space-y-5 text-ink-soft leading-relaxed text-[16px] max-w-xl">
            {WHY.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.7 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
