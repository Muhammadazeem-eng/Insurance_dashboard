"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { SHOWCASE } from "@/lib/content";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // map 0-1 across 3 slides
      const segment = 1 / SHOWCASE.slides.length;
      const idx = Math.min(SHOWCASE.slides.length - 1, Math.floor(v / segment + 0.001));
      setActiveIdx(idx);
    });
  }, [scrollYProgress]);

  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <section ref={ref} className="relative" style={{ height: `${SHOWCASE.slides.length * 110}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Heading */}
        <motion.div
          style={{ scale: titleScale }}
          className="pt-24 pb-8 px-6 lg:px-10 text-center max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {SHOWCASE.eyebrow}
          </motion.p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-tight">
            {SHOWCASE.title.lead}
            <span className="italic text-accent">{SHOWCASE.title.italic}</span>
          </h2>
        </motion.div>

        <div className="flex-1 mx-auto max-w-6xl w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pb-12">
          {/* Captions column */}
          <div className="lg:col-span-4 self-center order-2 lg:order-1">
            <div className="relative h-32 lg:h-44">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <div className="text-[11px] uppercase tracking-eyebrow text-accent font-medium">
                    {SHOWCASE.slides[activeIdx].label}
                  </div>
                  <p className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink">
                    {SHOWCASE.slides[activeIdx].caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-2">
              {SHOWCASE.slides.map((_, i) => (
                <div key={i} className="relative h-1 flex-1 rounded-full bg-black/[0.08] overflow-hidden">
                  <motion.div
                    animate={{ width: i === activeIdx ? "100%" : i < activeIdx ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 bg-accent rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Device frame with crossfading images */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              initial={{ y: 60, opacity: 0, rotate: -2 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[760px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-premium bg-white"
            >
              {/* browser chrome */}
              <div className="absolute top-0 inset-x-0 flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.06] bg-bg-soft z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-[10px] text-ink-mute font-mono">helixcover.com</span>
              </div>

              {/* Crossfade images */}
              <div className="absolute top-9 inset-x-0 bottom-0">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <SlideMock idx={activeIdx} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CSS-built dashboard mocks so the section looks great without real images.
// User can drop real images at SHOWCASE.slides[i].image later — we render those if present.
function SlideMock({ idx }: { idx: number }) {
  if (idx === 0) {
    // Quote screen
    return (
      <div className="absolute inset-0 p-6 lg:p-8 bg-white">
        <div className="font-serif text-xl tracking-tight">Compare three carriers</div>
        <div className="mt-1 text-[12px] text-ink-mute">For Northwind Labs · GL + Cyber + E&O</div>
        <div className="mt-5 space-y-2">
          {[
            { c: "Chubb", p: "189", best: true },
            { c: "Travelers", p: "204" },
            { c: "Hiscox", p: "216" },
          ].map((row, i) => (
            <motion.div
              key={row.c}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`flex items-center justify-between rounded-xl border border-black/[0.06] px-4 py-3 ${
                row.best ? "bg-accent/[0.05] ring-1 ring-accent/20" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-md bg-ink text-white grid place-items-center text-[11px]">
                  {row.c[0]}
                </span>
                <div>
                  <div className="font-medium text-[13px]">{row.c}</div>
                  <div className="text-[10px] text-ink-mute">AM Best · A++</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-serif text-lg leading-none">${row.p}</div>
                  <div className="text-[10px] text-ink-mute">/ month</div>
                </div>
                <button className="text-[11px] rounded-full bg-ink text-white px-3 py-1.5">Bind →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  if (idx === 1) {
    // COI screen
    return (
      <div className="absolute inset-0 p-6 lg:p-8 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-serif text-xl tracking-tight">Certificate of Insurance</div>
            <div className="text-[12px] text-ink-mute mt-1">Holder · Sequoia Capital Operations</div>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
            Ready · sent
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-5 rounded-xl border border-black/[0.08] p-5"
        >
          <div className="grid grid-cols-3 gap-4 text-[11px]">
            {[
              { l: "Policy Number", v: "HCV-2419-001" },
              { l: "Effective", v: "May 19 2026" },
              { l: "Expires", v: "May 19 2027" },
              { l: "Each Occurrence", v: "$2,000,000" },
              { l: "General Aggregate", v: "$4,000,000" },
              { l: "Products / CompOps", v: "$2,000,000" },
            ].map((r, i) => (
              <motion.div
                key={r.l}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <div className="text-ink-mute uppercase tracking-eyebrow text-[10px]">{r.l}</div>
                <div className="mt-1 text-ink font-medium text-[13px]">{r.v}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between">
            <div className="text-[11px] text-ink-mute">Signed · Helix Cover, MGA</div>
            <button className="text-[11px] rounded-full bg-ink text-white px-3 py-1.5">Download PDF →</button>
          </div>
        </motion.div>
      </div>
    );
  }
  // Claim screen
  return (
    <div className="absolute inset-0 p-6 lg:p-8 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-serif text-xl tracking-tight">Claim · CL-08842</div>
          <div className="text-[12px] text-ink-mute mt-1">Ransomware incident · opened 02:14 AM</div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-amber-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-amber-500" />
          </span>
          Active · specialist paged
        </span>
      </div>

      <div className="mt-5 space-y-2.5">
        {[
          { t: "02:14 AM", l: "Claim opened by Eli Park (CTO)", c: "bg-accent" },
          { t: "02:16 AM", l: "AI triage · severity P1 confirmed", c: "bg-accent-purple" },
          { t: "02:43 AM", l: "Specialist Maya Chen on the call", c: "bg-emerald-500" },
          { t: "03:08 AM", l: "Forensics vendor dispatched", c: "bg-amber-500" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.1, duration: 0.5 }}
            className="flex items-center gap-3 rounded-lg border border-black/[0.06] p-3 text-[12px]"
          >
            <span className={`w-2 h-2 rounded-full ${s.c}`} />
            <span className="font-mono text-ink-mute w-16">{s.t}</span>
            <span className="text-ink">{s.l}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
