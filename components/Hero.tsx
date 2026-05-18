"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, MouseEvent } from "react";
import { ArrowRight, Check, PlayCircle, Shield, FileCheck, Zap, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { HERO } from "@/lib/content";

const charIn = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { delay: 0.02 * i, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SplitChars({ text, offset = 0, italicAccent = false }: { text: string; offset?: number; italicAccent?: boolean }) {
  return (
    <span className="inline-flex overflow-hidden align-baseline">
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={i}
          custom={i + offset}
          variants={charIn}
          initial="hidden"
          animate="visible"
          className={`inline-block ${italicAccent ? "italic text-accent" : ""}`}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Card scroll-driven scale + Y
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.6]);

  // Parallax for floating chips
  const chipY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const chipY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const chipY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const chipY4 = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);

  // Hero text scroll fade
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);

  // Mouse tilt on the card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 100, damping: 18 });
  const smy = useSpring(my, { stiffness: 100, damping: 18 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [6, -6]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft pointer-events-none" />

      {/* big drifting glow blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -right-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.28), transparent 60%)" }}
      />
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(47,91,255,0.32), transparent 60%)" }}
      />

      {/* TEXT */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white shadow-chip px-3 py-1 text-[12px] text-ink-soft mb-6 ring-1 ring-black/5"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          {HERO.badge}
        </motion.span>

        <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-tight text-ink">
          <span className="block"><SplitChars text={HERO.title.line1} /></span>
          <span className="block">
            <SplitChars text={HERO.title.line2Lead} offset={HERO.title.line1.length} />
            <span className="relative inline-block">
              <SplitChars text={HERO.title.line2Accent} offset={HERO.title.line1.length + HERO.title.line2Lead.length} italicAccent />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 right-2 h-[4px] bg-accent/25 origin-left rounded-full"
              />
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-7 text-[17px] leading-relaxed text-ink-soft max-w-2xl mx-auto"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href={HERO.primary.href} variant="primary">
            {HERO.primary.label}
            <ArrowRight size={16} />
          </MagneticButton>
          <a href={HERO.secondary.href} className="btn-pill btn-secondary inline-flex items-center gap-2 group">
            <PlayCircle size={18} className="group-hover:text-accent transition-colors" />
            {HERO.secondary.label}
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-ink-mute"
        >
          {HERO.chips.map((c) => (
            <li key={c} className="inline-flex items-center gap-1.5">
              <Check size={13} className="text-accent" />
              {c}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* MASSIVE ANIMATED HERO MOCKUP */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 mt-16">
        <motion.div
          style={{ scale: cardScale, y: cardY, opacity: cardOpacity }}
          className="relative"
        >
          {/* Floating chips around the card */}
          <motion.div
            style={{ y: chipY1 }}
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex absolute -left-2 lg:-left-10 top-12 z-20 items-center gap-2 rounded-2xl bg-white shadow-premium ring-1 ring-black/5 px-4 py-3"
          >
            <div className="grid place-items-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600">
              <FileCheck size={15} />
            </div>
            <div>
              <div className="text-[11px] text-ink-mute uppercase tracking-eyebrow">COI · ready</div>
              <div className="text-[13px] font-medium text-ink">Sent to legal@</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: chipY2 }}
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex absolute -right-2 lg:-right-10 top-24 z-20 items-center gap-2 rounded-2xl bg-white shadow-premium ring-1 ring-black/5 px-4 py-3"
          >
            <div className="grid place-items-center w-8 h-8 rounded-full bg-accent/10 text-accent">
              <Zap size={15} />
            </div>
            <div>
              <div className="text-[11px] text-ink-mute uppercase tracking-eyebrow">Quoted in</div>
              <div className="text-[13px] font-medium text-ink">3 min 41 sec</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: chipY3 }}
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex absolute -right-4 lg:-right-12 bottom-24 z-20 items-center gap-2 rounded-2xl bg-gradient-to-br from-accent to-accent-purple text-white shadow-premium px-4 py-3"
          >
            <Sparkles size={15} />
            <div>
              <div className="text-[11px] opacity-80 uppercase tracking-eyebrow">Premium</div>
              <div className="text-[13px] font-medium">$189 / month</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: chipY4 }}
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex absolute -left-4 lg:-left-12 bottom-16 z-20 items-center gap-2 rounded-2xl bg-white shadow-premium ring-1 ring-black/5 px-4 py-3"
          >
            <div className="grid place-items-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">
              <Shield size={15} />
            </div>
            <div>
              <div className="text-[11px] text-ink-mute uppercase tracking-eyebrow">Bound by</div>
              <div className="text-[13px] font-medium text-ink">Chubb · A++</div>
            </div>
          </motion.div>

          {/* The mockup card itself — tiltable */}
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX, rotateY, transformPerspective: 1400, transformStyle: "preserve-3d" }}
            className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-premium bg-white"
          >
            {/* browser chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.06] bg-bg-soft">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <div className="text-[11px] text-ink-mute font-mono">helixcover.com/quote/draft-2419</div>
              <div className="w-12" />
            </div>

            {/* dashboard mock — built with CSS so it looks great without real images */}
            <div className="grid grid-cols-12 min-h-[440px]">
              {/* sidebar */}
              <div className="col-span-3 lg:col-span-2 border-r border-black/[0.06] bg-bg-soft/50 p-4">
                <div className="space-y-3">
                  {["Overview", "Quote", "Policies", "Certificates", "Claims", "Billing"].map((s, i) => (
                    <div
                      key={s}
                      className={`flex items-center gap-2 text-[12px] rounded-md px-2 py-1.5 ${
                        i === 1 ? "bg-accent/10 text-accent font-medium" : "text-ink-mute"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-accent" : "bg-ink-mute/40"}`} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* main content */}
              <div className="col-span-9 lg:col-span-10 p-5 lg:p-7 space-y-5">
                {/* header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-eyebrow text-ink-mute">Draft quote · 2419</div>
                    <div className="font-serif text-2xl tracking-tight mt-1">Northwind Labs, Inc.</div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Eligible · 11 carriers</span>
                  </div>
                </div>

                {/* coverage progress */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "GL", v: "$2M / $4M", c: "bg-accent" },
                    { label: "Cyber", v: "$3M agg.", c: "bg-accent-purple" },
                    { label: "E&O", v: "$1M / $2M", c: "bg-emerald-500" },
                  ].map((p, i) => (
                    <div key={i} className="rounded-xl border border-black/[0.06] p-3">
                      <div className="text-[11px] text-ink-mute uppercase tracking-eyebrow">{p.label}</div>
                      <div className="mt-1 font-medium text-[14px]">{p.v}</div>
                      <div className="mt-3 h-1.5 rounded-full bg-black/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${60 + i * 12}%` }}
                          viewport={{ once: false, margin: "-40px" }}
                          transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full ${p.c}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* carrier comparison rows */}
                <div className="rounded-xl border border-black/[0.06] overflow-hidden">
                  {[
                    { name: "Chubb", rating: "A++", price: "189", best: true },
                    { name: "Travelers", rating: "A++", price: "204" },
                    { name: "Hiscox", rating: "A", price: "216" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-40px" }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                      className={`flex items-center justify-between px-4 py-3 text-[13px] border-b border-black/[0.04] last:border-0 ${
                        row.best ? "bg-accent/[0.04]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-md bg-ink text-white grid place-items-center text-[10px] font-medium">
                          {row.name[0]}
                        </span>
                        <div>
                          <div className="font-medium text-ink">{row.name}</div>
                          <div className="text-[11px] text-ink-mute">AM Best · {row.rating}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {row.best && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-white font-medium">
                            Best value
                          </span>
                        )}
                        <div className="text-right">
                          <div className="font-serif text-xl leading-none">${row.price}</div>
                          <div className="text-[10px] text-ink-mute">/ month</div>
                        </div>
                        <button className="text-[12px] rounded-full bg-ink text-white px-3 py-1.5">
                          Bind →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
