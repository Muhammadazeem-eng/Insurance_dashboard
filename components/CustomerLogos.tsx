"use client";

import { motion } from "motion/react";
import { CUSTOMERS } from "@/lib/content";

// Lightweight CSS "logo" cards — render an abstract mark + wordmark.
// User can replace with real <Image src=... /> later.
function LogoCard({ name, i }: { name: string; i: number }) {
  const marks = ["◆", "◉", "▲", "●", "✦", "◐", "■", "▶"];
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-black/[0.06] px-6 py-4 shadow-chip min-w-[200px]">
      <div
        className="grid place-items-center w-9 h-9 rounded-lg text-white"
        style={{
          background: `linear-gradient(135deg, hsl(${(i * 47) % 360},70%,55%), hsl(${(i * 47 + 80) % 360},60%,45%))`,
        }}
      >
        <span className="text-lg">{marks[i % marks.length]}</span>
      </div>
      <div>
        <div className="font-serif text-lg tracking-tight leading-none">{name.replace("-style", "")}</div>
        <div className="text-[10px] uppercase tracking-eyebrow text-ink-mute mt-1">Active customer</div>
      </div>
    </div>
  );
}

export default function CustomerLogos() {
  const row = CUSTOMERS.logos.map((n, i) => <LogoCard key={`a-${n}-${i}`} name={n} i={i} />);
  const rowB = [...CUSTOMERS.logos].reverse().map((n, i) => <LogoCard key={`b-${n}-${i}`} name={n} i={i + 4} />);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-[12px] uppercase tracking-eyebrow text-ink-mute font-medium"
        >
          {CUSTOMERS.intro}
        </motion.p>
      </div>

      {/* row 1 */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {row}
          {row}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* row 2 — reverse direction */}
      <div className="relative overflow-hidden mt-4">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {rowB}
          {rowB}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
