"use client";

import { useState } from "react";
import { useOverlay } from "@/components/overlay-provider";
import type { WizardVisa } from "@/lib/calculator";
import {
  Icon3DCalculator,
  Icon3DPropertyCard,
  Icon3DGoldenCard,
  Icon3DFamilyCard,
  Icon3DNewbornCard,
  Icon3DRemoteWorkVisa,
} from "@/components/icons-3d";

type Stage = "new" | "renewal";

const STAGES: { value: Stage; label: string }[] = [
  { value: "new", label: "New Visa" },
  { value: "renewal", label: "Renewal" },
];

/** The calculator screen in the smartphone — matching Picture 1 with 3D Icons */
export function HeroCalculator() {
  const { openCalc } = useOverlay();
  const [stage, setStage] = useState<Stage>("new");

  return (
    <div
      data-hero-card
      className="relative overflow-hidden bg-white px-3.5 pt-1.5 pb-2.5 select-none"
    >
      {/* ── Top Header Card: Visa fee calculator & ~2500 AED badge with 3D Calculator Icon ── */}
      <div data-hero-header className="rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            {/* 3D Calculator Icon */}
            <div className="shrink-0 flex items-center justify-center">
              <Icon3DCalculator size={42} />
            </div>
            <div className="min-w-0">
              <p className="font-display text-[15px] font-extrabold leading-tight text-slate-900 tracking-tight">Visa fee calculator</p>
              <p className="text-[11.5px] leading-tight text-slate-400 font-medium mt-0.5">Check government fees in 30 seconds</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-600 border border-emerald-200/80 tracking-tight">
            ~2500 AED
          </span>
        </div>
      </div>

      {/* ── Segmented Toggle: New Visa | Renewal ── */}
      <div role="radiogroup" aria-label="Application type" className="mt-2.5 grid grid-cols-2 gap-1 rounded-2xl bg-slate-100/80 p-1">
        {STAGES.map((option) => {
          const on = stage === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setStage(option.value)}
              className={`rounded-xl py-2 text-center font-display text-[13px] font-bold transition-all cursor-pointer ${
                on
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* ── Section Header ── */}
      <div className="mt-3.5 flex items-center justify-between px-1">
        <h2 className="font-display text-[14px] font-extrabold text-slate-900 tracking-tight">Which visa do you need?</h2>
        <button
          type="button"
          onClick={() => openCalc("property", { stage })}
          className="text-[12px] font-bold text-blue-600 hover:underline cursor-pointer"
        >
          Tap to calculate
        </button>
      </div>

      {/* ── 5 Interactive Visa Cards (with 3D Icons matching Picture 1) ── */}
      <div className="mt-2.5 space-y-2">
        {/* Card 1: Property Visa */}
        <button
          type="button"
          onClick={() => openCalc("property", { stage })}
          className="group relative flex w-full items-center gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 text-left border border-slate-100/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        >
          <span className="shrink-0 flex items-center justify-center">
            <Icon3DPropertyCard size={40} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[14px] font-bold text-slate-900 leading-tight mb-1">Property Visa</span>
            <span className="flex items-center gap-2 text-[11px]">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 font-bold text-blue-600 text-[11px] leading-tight">
                750,000 AED
              </span>
              <span className="text-slate-400 font-medium text-[11px]">2 year visa</span>
            </span>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs font-bold shrink-0">
            ›
          </span>
        </button>

        {/* Card 2: Golden Visa (with 3D Gold Bars & spark badge matching Picture 1) */}
        <button
          type="button"
          onClick={() => openCalc("golden", { stage })}
          className="group relative flex w-full items-center gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 text-left border border-slate-100/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        >
          {/* Floating dark spark icon badge on border matching Picture 1 */}
          <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-[#181135] text-purple-300 text-[9px] grid place-items-center shadow-md border border-purple-400/40 z-10">
            ✦
          </span>

          <span className="shrink-0 flex items-center justify-center">
            <Icon3DGoldenCard size={40} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[14px] font-bold text-slate-900 leading-tight mb-1">Golden Visa</span>
            <span className="flex items-center gap-2 text-[11px]">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 font-bold text-blue-600 text-[11px] leading-tight">
                2,000,000 AED
              </span>
              <span className="text-slate-400 font-medium text-[11px]">10 year visa</span>
            </span>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs font-bold shrink-0">
            ›
          </span>
        </button>

        {/* Card 3: Family Visa */}
        <button
          type="button"
          onClick={() => openCalc("family", { stage })}
          className="group relative flex w-full items-center gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 text-left border border-slate-100/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        >
          <span className="shrink-0 flex items-center justify-center">
            <Icon3DFamilyCard size={40} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[14px] font-bold text-slate-900 leading-tight mb-1">Family Visa</span>
            <span className="flex items-center gap-2 text-[11px]">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 font-bold text-blue-600 text-[11px] leading-tight">
                AED 1,150 each
              </span>
              <span className="text-slate-400 font-medium text-[11px]">2 year visa</span>
            </span>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs font-bold shrink-0">
            ›
          </span>
        </button>

        {/* Card 4: Newborn Visa */}
        <button
          type="button"
          onClick={() => openCalc("newborn", { stage })}
          className="group relative flex w-full items-center gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 text-left border border-slate-100/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        >
          <span className="shrink-0 flex items-center justify-center">
            <Icon3DNewbornCard size={40} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[14px] font-bold text-slate-900 leading-tight mb-1">Newborn Visa</span>
            <span className="flex items-center gap-2 text-[11px]">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 font-bold text-blue-600 text-[11px] leading-tight">
                AED 350
              </span>
              <span className="text-slate-400 font-medium text-[11px]">2 year visa</span>
            </span>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs font-bold shrink-0">
            ›
          </span>
        </button>

        {/* Card 5: Remote Work Visa */}
        <button
          type="button"
          onClick={() => openCalc("property", { stage })}
          className="group relative flex w-full items-center gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 text-left border border-slate-100/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] transition-all hover:border-blue-300 hover:shadow-md cursor-pointer"
        >
          <span className="shrink-0 flex items-center justify-center">
            <Icon3DRemoteWorkVisa size={40} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[14px] font-bold text-slate-900 leading-tight mb-1">Remote Work Visa</span>
            <span className="flex items-center gap-2 text-[11px]">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-50 font-bold text-blue-600 text-[11px] leading-tight">
                AED 2,870
              </span>
              <span className="text-slate-400 font-medium text-[11px]">1 year visa</span>
            </span>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-xs font-bold shrink-0">
            ›
          </span>
        </button>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="mt-3 flex justify-center pb-0.5">
        <div className="h-1 w-32 bg-slate-900 rounded-full" />
      </div>
    </div>
  );
}
