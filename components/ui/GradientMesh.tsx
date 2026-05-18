"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "dark" | "bright";
};

export default function GradientMesh({ className, variant = "bright" }: Props) {
  const palette =
    variant === "dark"
      ? {
          a: "#2f5bff",
          b: "#7c5cff",
          c: "#1a2342",
        }
      : {
          a: "#88a5ff",
          b: "#c1a8ff",
          c: "#dfe7ff",
        };

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="mesh-blob animate-mesh-drift"
        style={{
          width: "55%",
          height: "70%",
          top: "-10%",
          left: "-8%",
          background: palette.a,
        }}
      />
      <div
        className="mesh-blob animate-mesh-drift-slow"
        style={{
          width: "50%",
          height: "70%",
          top: "20%",
          right: "-10%",
          background: palette.b,
          opacity: 0.65,
        }}
      />
      <div
        className="mesh-blob animate-mesh-drift"
        style={{
          width: "45%",
          height: "55%",
          bottom: "-15%",
          left: "25%",
          background: palette.c,
          opacity: 0.55,
        }}
      />
    </div>
  );
}
