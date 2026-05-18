"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  items: (string | ReactNode)[];
  speed?: number;
  className?: string;
  reverse?: boolean;
};

export default function Marquee({ items, speed = 30, className, reverse = false }: Props) {
  const repeat = [...items, ...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex shrink-0 gap-12 whitespace-nowrap"
      >
        {repeat.map((it, i) => (
          <div key={i} className="inline-flex items-center gap-3 text-[14px]">
            {typeof it === "string" ? (
              <>
                <span>{it}</span>
                <span className="text-ink-mute">◆</span>
              </>
            ) : (
              it
            )}
          </div>
        ))}
      </motion.div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
