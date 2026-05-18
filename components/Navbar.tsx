"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { NAV, BRAND } from "@/lib/content";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.8)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(15,23,42,0)", "rgba(15,23,42,0.08)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-medium tracking-tight">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M4 4 C 12 8 12 16 4 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M20 4 C 12 8 12 16 20 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <span>{BRAND.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-3 py-1.5 text-[14px] text-ink-soft hover:text-ink transition-colors group"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-[1.5px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden sm:inline text-[14px] text-ink-soft hover:text-ink transition-colors px-3 py-1.5"
          >
            Sign in
          </a>
          <a
            href={NAV.cta.href}
            className="btn-pill btn-primary text-[14px] py-2 px-4"
          >
            {NAV.cta.label}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
