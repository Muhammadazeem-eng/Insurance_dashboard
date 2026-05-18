"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function CursorBlob() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 18, mass: 0.6 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handle = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{
        translateX: sx,
        translateY: sy,
        x: "-50%",
        y: "-50%",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden md:block"
    >
      <div
        className="w-[460px] h-[460px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(47,91,255,0.35), rgba(124,92,255,0.18) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
