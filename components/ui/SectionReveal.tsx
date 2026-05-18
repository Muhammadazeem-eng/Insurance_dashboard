"use client";

import { motion, type Variants } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "footer";
};

const variants: Variants = {
  hidden: (custom: { y: number }) => ({
    opacity: 0,
    y: custom.y,
    filter: "blur(6px)",
  }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: Props) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      custom={{ y }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
