"use client";

import { motion } from "motion/react";
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { FOOTER, BRAND } from "@/lib/content";

const socials = [Twitter, Linkedin, Facebook, Instagram];

export default function Footer() {
  return (
    <footer className="bg-ink-inverse text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Company column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 text-[15px] font-medium tracking-tight">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-white text-ink text-[12px]">i</span>
              <span>{FOOTER.company.name}</span>
            </div>
            <div className="mt-5 text-[13px] text-white/60 leading-relaxed space-y-1">
              {FOOTER.company.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-4 text-[13px] text-white/70 space-y-1">
              <p>
                <a href={`mailto:${FOOTER.company.email}`} className="hover:text-white transition-colors">
                  {FOOTER.company.email}
                </a>
              </p>
              <p>{FOOTER.company.phone}</p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                  className="grid place-items-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-[11px] uppercase tracking-eyebrow text-white/50 font-medium">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-white/50 font-medium">
              {FOOTER.newsletter.title}
            </p>
            <p className="mt-4 text-[13px] text-white/70 leading-relaxed">
              {FOOTER.newsletter.sub}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full bg-white/5 p-1 ring-1 ring-white/10 focus-within:ring-white/30 transition-all"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-full bg-accent text-white px-4 py-2 text-[13px] font-medium hover:bg-accent-purple transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center gap-2 text-[11px] text-white/50">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-white/5 ring-1 ring-white/10">
                <ArrowRight size={12} />
              </span>
              <span>{FOOTER.badge}</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
          <p>{FOOTER.legalLeft}</p>
          <ul className="flex items-center gap-5">
            {FOOTER.legalRight.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white/80 transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a href="#top" className="text-[11px] uppercase tracking-eyebrow text-white/40 hover:text-white/70 transition-colors">
            ↑ Back to top — {BRAND.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
