"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { CheckCircle, Pin } from "@/components/icons";

export type RoadStep = { title: string; body: string; when?: string; image: string };

const ROW = 236;

const TONES = [
  { badge: "bg-[#2563eb]", text: "text-[#2563eb]", soft: "bg-[#eff6ff]" }, // Blue
  { badge: "bg-[#0d9488]", text: "text-[#0d9488]", soft: "bg-[#f0fdfa]" }, // Teal
] as const;

const roadX = (index: number) => (index % 2 === 0 ? 70 : 30);

/** A winding road in a 100-wide coordinate space, one 100-unit row per step. */
function roadPath(count: number) {
  const y = (index: number) => index * 100 + 50;
  let d = `M ${roadX(0)} 4 L ${roadX(0)} ${y(0)}`;
  for (let index = 1; index < count; index += 1) {
    d += ` C ${roadX(index - 1)} ${y(index - 1) + 50} ${roadX(index)} ${y(index) - 50} ${roadX(index)} ${y(index)}`;
  }
  return `${d} L ${roadX(count - 1)} ${count * 100 - 4}`;
}

export function ProcessRoad({
  steps,
  title,
  eyebrow = "How it works",
  lead,
  id = "road",
  startLabel = "Start here",
  finishLabel = "Welcome to the UAE",
  footer,
  className = "bg-[#f0f3f7] border-t border-b border-slate-200/80 text-slate-900",
}: {
  steps: RoadStep[];
  title: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  id?: string;
  startLabel?: string;
  finishLabel?: string;
  footer?: ReactNode;
  className?: string;
}) {
  const count = steps.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  const clipHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const d = roadPath(count);

  const pill =
    "absolute z-20 -translate-x-1/2 flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-5 py-2.5 font-display text-[14px] font-bold text-slate-900 shadow-md";

  return (
    <section className={`section relative overflow-hidden py-24 ${className}`} ref={containerRef}>
      <div className="shell relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-center">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,1.5rem+2vw,2.75rem)] font-extrabold leading-tight tracking-tight text-slate-900">
            {title}
          </h2>
          {lead && <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-relaxed text-slate-600">{lead}</p>}
        </Reveal>

        {/* Desktop: Winding Road */}
        <div className="relative mx-auto mb-32 mt-32 hidden max-w-[1060px] lg:block" style={{ height: count * ROW }}>
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox={`0 0 100 ${count * 100}`}
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id={`${id}-scroll-clip`}>
                <motion.rect x="0" y="0" width="100" style={{ height: clipHeight }} />
              </clipPath>
            </defs>

            {/* 1. Light Gray Road Bed */}
            <path
              d={d}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={140}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* 2. Main Surface */}
            <path
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={108}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* 3. Static Faded Dashed Center Line */}
            <path
              d={d}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth={2.5}
              strokeDasharray="14 14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* 4. Animated Royal Blue Dashed Center Line (Draws on scroll) */}
            <path
              d={d}
              fill="none"
              stroke="#2563eb"
              strokeWidth={3.5}
              strokeDasharray="14 14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              clipPath={`url(#${id}-scroll-clip)`}
            />
          </svg>

          <span className={`${pill} -top-[104px]`} style={{ left: `${roadX(0)}%` }}>
            <Pin className="h-4.5 w-4.5 text-blue-600" /> {startLabel}
          </span>

          <ol className="relative grid h-full" style={{ gridTemplateRows: `repeat(${count}, minmax(0, 1fr))` }}>
            {steps.map((step, index) => {
              const roadRight = index % 2 === 0;
              const tone = TONES[index % 2];
              
              return (
                <li key={step.title} className="relative grid grid-cols-2 items-center">
                  
                  {/* Image Node */}
                  <div
                    className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${roadX(index)}%` }}
                  >
                    <div className="relative grid h-[120px] w-[120px] place-items-center rounded-full bg-white p-2.5 shadow-lg ring-[8px] ring-blue-50 border border-slate-200 transition-transform hover:scale-105">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.image} alt="" loading="lazy" className="h-full w-full rounded-full object-contain filter drop-shadow-sm" />
                      
                      {/* Number Badge attached to side */}
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 grid h-[48px] w-[48px] place-items-center rounded-full font-display text-[18px] font-bold text-white shadow-md ring-4 ring-white ${
                          tone.badge
                        } ${roadRight ? "-right-6" : "-left-6"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Clean Text Details */}
                  <Reveal delay={60} className={roadRight ? "col-start-1 pr-20" : "col-start-2 pl-20"}>
                    <div className={`flex w-full flex-col ${roadRight ? "items-end text-right" : "items-start text-left"}`}>
                      {step.when && (
                        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold text-blue-700">
                          {step.when}
                        </span>
                      )}
                      <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-[380px] text-[15px] leading-relaxed text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <span className={`${pill} -bottom-[104px]`} style={{ left: `${roadX(count - 1)}%` }}>
            <CheckCircle className="h-5 w-5 text-teal-600" /> {finishLabel}
          </span>
        </div>

        {/* Mobile & tablet: Vertical Road */}
        <ol className="relative mt-16 space-y-10 lg:hidden">
          {/* Static Track */}
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-[34px] top-10 w-2.5 rounded-full bg-slate-200"
          />
          {/* Animated Track */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[34px] top-10 w-2.5 rounded-full bg-blue-600 origin-top shadow-[0_0_10px_rgba(37,99,235,0.4)]"
            style={{ scaleY: smoothProgress, height: "calc(100% - 80px)" }}
          />

          {steps.map((step, index) => {
            const tone = TONES[index % 2];
            return (
              <li key={step.title} className="relative flex items-start gap-4">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white shadow-md ring-4 ring-blue-50 border border-slate-200">
                  <span className={`grid h-8 w-8 place-items-center rounded-full font-display text-[13px] font-bold text-white ${tone.badge}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  {step.when && (
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">
                      {step.when}
                    </span>
                  )}
                  <h3 className="mt-1 font-display text-[15px] font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-[13px] text-slate-600">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {footer && (
          <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center">
            {footer}
          </Reveal>
        )}
      </div>
    </section>
  );
}