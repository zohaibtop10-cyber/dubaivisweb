"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function DubaiIntro() {
  const [stage, setStage] = useState<"holding" | "splitting" | "done">("holding");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Phase 1: Hold the centered DUBAI image on clean white screen for ~0.9s
    const holdTimer = setTimeout(() => {
      setStage("splitting");
    }, 900);

    // Phase 2: Split animation runs from 0.9s to 2.1s, then unmount
    const doneTimer = setTimeout(() => {
      setStage("done");
    }, 2250);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (!mounted || stage === "done") {
    return null;
  }

  // The shared typography view that sits centered in both the top and bottom halves
  // The word 'DUBAI' has the exact 8K hero section background skyline inside its letters
  const DubaiTextGraphic = () => (
    <div className="w-full h-full flex flex-col items-center justify-center select-none bg-white px-4">
      <div className="relative flex items-center justify-center">
        <h1
          className="font-black tracking-[-0.035em] uppercase leading-none select-none text-center"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Impact, Arial Black, sans-serif",
            fontWeight: 900,
            backgroundImage: "url('/images/hero/dubai-skyline-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            filter: "contrast(1.2) saturate(1.2)",
          }}
        >
          DUBAI
        </h1>
      </div>

      {/* Refined sub-brand label underneath */}
      <p className="mt-3 text-xs sm:text-sm font-extrabold tracking-[0.35em] text-slate-400 uppercase">
        Residency &amp; Golden Visa
      </p>
    </div>
  );

  return (
    <div
      onClick={() => setStage("done")}
      className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden"
    >
      {/* ───────────────────────────────────────────────────────────────────
          UPPER HALF CURTAIN: Moves UP (translateY -100%)
          ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: stage === "splitting" ? "-100%" : 0 }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1], // Smooth cinematic split easing
        }}
        className="absolute top-0 inset-x-0 h-[50vh] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-20"
        style={{ willChange: "transform" }}
      >
        {/* Full-height viewport container positioned so its top half displays here */}
        <div className="absolute top-0 left-0 w-full h-[100vh]">
          <DubaiTextGraphic />
        </div>

        {/* Crisp split blade line along bottom edge of upper half */}
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </motion.div>

      {/* ───────────────────────────────────────────────────────────────────
          LOWER HALF CURTAIN: Moves DOWN (translateY 100%)
          ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: stage === "splitting" ? "100%" : 0 }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1], // Exact matching cinematic split easing
        }}
        className="absolute bottom-0 inset-x-0 h-[50vh] overflow-hidden bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.18)] z-20"
        style={{ willChange: "transform" }}
      >
        {/* Full-height viewport container positioned so its bottom half displays here */}
        <div className="absolute bottom-0 left-0 w-full h-[100vh]">
          <DubaiTextGraphic />
        </div>

        {/* Crisp split blade line along top edge of lower half */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </motion.div>
    </div>
  );
}
