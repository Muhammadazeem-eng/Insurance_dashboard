"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { CTA } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] overflow-hidden p-12 sm:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #88a5ff 0%, #a18bff 45%, #c69cff 100%)",
          }}
        >
          {/* Floating glass shapes */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm rotate-12 pointer-events-none"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 right-16 w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm pointer-events-none"
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-8 w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm pointer-events-none"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-8 left-1/3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm pointer-events-none"
          />

          <div className="relative max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-[11px] uppercase tracking-eyebrow text-white/80 font-medium"
            >
              {CTA.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-5 font-serif text-white text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08]"
            >
              <span className="block">{CTA.title.line1}</span>
              <span className="block italic">{CTA.title.line2Italic}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-white/85 text-[15px]"
            >
              {CTA.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <MagneticButton href={CTA.primary.href} variant="primary">
                {CTA.primary.label}
                <ArrowRight size={16} />
              </MagneticButton>
              <a
                href={CTA.secondary.href}
                className="btn-pill text-white hover:text-white/80 transition-colors"
              >
                {CTA.secondary.label}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
