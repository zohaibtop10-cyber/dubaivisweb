"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useOverlay } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { WhatsApp } from "@/components/icons";
import { BRAND } from "@/lib/brand";
import { FrontLandOverlay } from "@/components/front-land-overlay";

export function HomeHero() {
  const { openCalc } = useOverlay();
  const [activeTab, setActiveTab] = useState<"new" | "renewal">("new");

  return (
    <section
      id="hero"
      aria-label="Dubai Property & Golden Visa Residency"
      className="relative w-full overflow-hidden select-none text-white bg-[#020617] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28"
      style={{
        // Desktop responsive height matching the ~2.4:1 reference proportion
        minHeight: "640px",
        height: "clamp(640px, 92vh, 840px)",
      }}
    >
      {/* ───────────────────────────────────────────────────────────────────────
          LAYER 1: BACKGROUND IMAGE (8K ULTRA HD BLUE DUBAI SKYLINE) [z-0]
          Arrangement across viewport width:
          - x: 0% - 17%: Burj Khalifa spire and towers (fully visible to left of text)
          - x: 18% - 46%: Deep sky area where the Left Content sits
          - x: 38% - 60%: Museum of the Future ring torus (centered)
          - x: 59% - 77%: Space where the Phone Screen sits
          - x: 77% - 88%: Burj Al Arab sail (completely visible to right of phone)
          - x: 88% - 100%: Marina towers on the far right
          ─────────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden"
      >
        {/* Base dark nocturnal blue gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #020617 0%, #030e2e 25%, #071c4d 60%, #020617 100%)",
          }}
        />

        {/* Full-width pristine Dubai skyline background image (8K Ultra HD 7680x3270) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero/dubai-skyline-bg.png"
            alt="Dubai Skyline Night Scene — 8K Ultra HD"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-bottom"
            quality={100}
          />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────────
          LAYER 2: VISA CALCULATOR COMPONENT [z-10]
          - Sits in the designated slot between Museum of the Future and Burj Al Arab
          - Prominent defined outer border with glowing cyan/sapphire depth
          - Properly sized desktop card with clear, legible typography
          - Front Land gently touches only below the Newborn Visa component
          ─────────────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-auto absolute left-[59%] md:left-[60.5%] lg:left-[61.5%] xl:left-[62%] bottom-[75px] sm:bottom-[82px] lg:bottom-[88px] xl:bottom-[92px] z-10 hidden md:flex items-start">
        {/* Visa Calculator Card */}
        <div
          className="relative w-[320px] sm:w-[335px] lg:w-[350px] xl:w-[360px] rounded-2xl sm:rounded-3xl bg-white/98 backdrop-blur-xl border-2 border-blue-400/80 shadow-[0_0_0_1px_rgba(255,255,255,0.7),0_25px_60px_-12px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.25)] p-4 sm:p-4.5 text-slate-900 transition-transform duration-500 hover:scale-[1.015]"
        >
          {/* Top subtle highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

          {/* Card 1: Visa fee calculator banner */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/70 p-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
                  <CalculatorIcon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-[13px] sm:text-[13.5px] font-bold text-slate-900 leading-tight">
                    Visa fee calculator
                  </h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">
                    Exact government fees in 30 seconds
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/50 px-2.5 py-0.5 text-[9px] sm:text-[9.5px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                2026 fees
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-2.5 flex items-center justify-between text-[9px] sm:text-[9.5px] text-slate-500 font-semibold mb-1">
              <span>Step 1 of 3</span>
              <span className="text-blue-600 font-bold">Eligibility check</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-blue-600 rounded-full" />
            </div>
          </div>

          {/* Segmented Toggle: New visa vs Renewal */}
          <div className="mt-2.5 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 text-[11px] sm:text-[11.5px] font-bold border border-slate-200/60">
            <button
              type="button"
              onClick={() => setActiveTab("new")}
              className={`rounded-lg py-1.5 transition-all text-center cursor-pointer ${
                activeTab === "new"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              New visa
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("renewal")}
              className={`rounded-lg py-1.5 transition-all text-center cursor-pointer ${
                activeTab === "renewal"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Renewal
            </button>
          </div>

          {/* Category label */}
          <div className="mt-2.5 flex items-center justify-between px-1">
            <span className="font-display text-[11.5px] sm:text-[12px] font-bold text-slate-900">
              Which visa do you need?
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-bold text-blue-600">Tap to calculate</span>
          </div>

          {/* 4 Visa Option Cards */}
          <div className="mt-2 flex flex-col gap-1.5">
            {/* 1. Property Visa */}
            <button
              type="button"
              onClick={() => openCalc("property")}
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                  🏢
                </div>
                <div>
                  <div className="font-display text-[11px] sm:text-[11.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    Property Visa
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-500">2-year renewable</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-blue-700">
                  from AED 6,311
                </span>
                <span className="text-slate-400 text-xs">→</span>
              </div>
            </button>

            {/* 2. Golden Visa (Featured Gold) */}
            <button
              type="button"
              onClick={() => openCalc("golden")}
              className="flex items-center justify-between p-2.5 rounded-xl border border-amber-300/90 bg-amber-50/60 hover:bg-amber-50 hover:border-amber-400 hover:shadow-sm transition-all text-left group cursor-pointer relative"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-[11px] font-bold">
                  ★
                </div>
                <div>
                  <div className="font-display text-[11px] sm:text-[11.5px] font-bold text-amber-950 leading-tight flex items-center gap-1">
                    <span>Golden Visa</span>
                    <span className="text-[8px] bg-amber-200 text-amber-900 rounded px-1 font-extrabold">Top</span>
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-amber-800/80">10-year residency</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-amber-900">
                  from AED 9,421
                </span>
                <span className="text-amber-700 text-xs">→</span>
              </div>
            </button>

            {/* 3. Family Visa */}
            <button
              type="button"
              onClick={() => openCalc("family")}
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-sm transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                  👥
                </div>
                <div>
                  <div className="font-display text-[11px] sm:text-[11.5px] font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                    Family Visa
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-500">Spouse &amp; dependents</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-emerald-700">
                  AED 1,103 ea
                </span>
                <span className="text-slate-400 text-xs">→</span>
              </div>
            </button>

            {/* 4. Newborn Visa */}
            <button
              type="button"
              onClick={() => openCalc("newborn")}
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-sm transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">
                  👶
                </div>
                <div>
                  <div className="font-display text-[11px] sm:text-[11.5px] font-bold text-slate-900 leading-tight group-hover:text-purple-700 transition-colors">
                    Newborn Visa
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-500">120-day rule package</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-purple-50 border border-purple-200 px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-purple-700">
                  AED 350
                </span>
                <span className="text-slate-400 text-xs">→</span>
              </div>
            </button>
          </div>

          {/* Trust endorsement line */}
          <div className="mt-2.5 text-center pb-0.5">
            <span className="text-xs font-medium text-slate-500">
              Operated under licensed DLD Trustee #0429
            </span>
          </div>
        </div>
        </div>

      {/* ───────────────────────────────────────────────────────────────────────
          LAYER 3: FRONT LAND OVERLAY [z-20]
          - Rolling blue dune foundation across bottom
          - Swells under the phone screen and Burj Al Arab
          ─────────────────────────────────────────────────────────────────────── */}
      <FrontLandOverlay className="z-20 h-[260px] sm:h-[290px] lg:h-[320px] xl:h-[340px]" />

      {/* ───────────────────────────────────────────────────────────────────────
          LAYER 4: CONTENT HERO SECTION (ARRANGEMENT MATCHING REFERENCE) [z-30]
          - Sits in the open sky between Burj Khalifa (left) and Museum of the Future (center)
          - Exactly 2 lines H1 headline
          - Compact 3-line paragraph
          - Primary pill button + secondary link with arrow
          ─────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full max-w-[1240px] xl:max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex items-start justify-between gap-8 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8">
        {/* Left column content: placed upward in the open night sky with nocturnal contrast scrim */}
        <div className="relative w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[500px] flex flex-col justify-start">
          {/* Ambient contrast scrim to guarantee high text readability against skyline */}
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-[#020617]/90 via-[#030d2a]/75 to-transparent blur-2xl pointer-events-none" />
          
          {/* Headline: High-contrast white and electric cyan with strong drop shadow */}
          <h1 className="font-display font-black text-white tracking-tight leading-[1.08] text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px]">
            <span className="block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Turn your Dubai property</span>
            <span className="block mt-1 text-[#38bdf8] drop-shadow-[0_0_25px_rgba(56,189,248,0.5),0_4px_16px_rgba(0,0,0,0.95)]">
              into UAE residency
            </span>
          </h1>

          {/* Subtitle Paragraph: Crisp high-contrast white */}
          <p className="mt-4 text-white/95 text-[14.5px] sm:text-[16px] leading-relaxed max-w-[440px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] font-medium">
            A renewable 2-year residence visa from AED 750K or the 10-year Golden Visa from AED 2M. Official government fees itemised, pre-approval in 48 hours, and your Emirates ID delivered to your door.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-7 flex items-center gap-4">
            <button
              type="button"
              onClick={() => openCalc()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-display text-[14px] font-bold px-7 py-3.5 rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.55),0_0_20px_rgba(56,189,248,0.4)] transition-all hover:scale-105 cursor-pointer border border-cyan-300/30"
            >
              <CalculatorIcon className="h-4.5 w-4.5" />
              <span>Calculate My Visa Fees</span>
            </button>

            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-5 py-3.5 font-display text-[13.5px] font-bold text-white shadow-md backdrop-blur-md transition-all hover:border-white/40 group cursor-pointer"
            >
              <WhatsApp className="h-4 w-4 text-emerald-400" />
              <span>Talk to an Officer</span>
              <span className="text-cyan-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────────
          LAYER 5: BOTTOM BAR BADGES (ARRANGEMENT MATCHING REFERENCE) [z-30]
          - Left: Laurel Wreath ("App Of The Day" position)
          - Center: Overlapping Avatars + 5 Gold Stars + 4.9 Rating ("Rating & Reviews" position)
          - Right: Bold stat "15,000+ / Visas Issued" ("5 Million+ / Downloads" position)
          ─────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full max-w-[1240px] xl:max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 pb-4 sm:pb-5">
        <div className="w-full flex items-center justify-between text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          
          {/* Left: Laurel Wreath "DLD & ICP Partner" Badge (matching App of the Day) */}
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-8 text-cyan-300" viewBox="0 0 16 28" fill="currentColor">
              <path d="M14 26C11 23 8 18 8 12C8 6 12 2 14 1C12 4 10 9 10 14C10 19 12 23 14 26Z" opacity="0.6"/>
              <ellipse cx="6" cy="7" rx="3.5" ry="1.8" transform="rotate(-35 6 7)"/>
              <ellipse cx="4" cy="13" rx="3.5" ry="1.8" transform="rotate(-15 4 13)"/>
              <ellipse cx="5" cy="19" rx="3.5" ry="1.8" transform="rotate(15 5 19)"/>
              <ellipse cx="8" cy="24" rx="3.5" ry="1.8" transform="rotate(35 8 24)"/>
            </svg>
            <div className="flex flex-col items-center text-center px-1">
              <span className="font-display text-[10.5px] uppercase tracking-widest text-cyan-300 font-bold">
                DLD &amp; ICP
              </span>
              <span className="font-display text-[13.5px] font-extrabold text-white leading-tight">
                Accredited Partner
              </span>
            </div>
            <svg className="w-5 h-8 text-cyan-300" viewBox="0 0 16 28" fill="currentColor">
              <path d="M2 26C5 23 8 18 8 12C8 6 4 2 2 1C4 4 6 9 6 14C6 19 4 23 2 26Z" opacity="0.6"/>
              <ellipse cx="10" cy="7" rx="3.5" ry="1.8" transform="rotate(35 10 7)"/>
              <ellipse cx="12" cy="13" rx="3.5" ry="1.8" transform="rotate(15 12 13)"/>
              <ellipse cx="11" cy="19" rx="3.5" ry="1.8" transform="rotate(-15 11 19)"/>
              <ellipse cx="8" cy="24" rx="3.5" ry="1.8" transform="rotate(-35 8 24)"/>
            </svg>
          </div>

          {/* Center: Overlapping Avatars + 5 Gold Stars + 4.9 Rating (matching Center position) */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="flex -space-x-2">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#0e2762] ring-1 ring-white/30 bg-slate-800">
                <Image src="/images/properties/balcony-skyline.svg" alt="Client Avatar" fill className="object-cover" />
              </div>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#0e2762] ring-1 ring-white/30 bg-indigo-900">
                <Image src="/images/properties/marina-skyline.svg" alt="Client Avatar" fill className="object-cover" />
              </div>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#0e2762] ring-1 ring-white/30 bg-blue-950">
                <Image src="/images/properties/skyline-blue.svg" alt="Client Avatar" fill className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-400 gap-0.5 text-[11px] sm:text-[12px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="font-display text-[12.5px] sm:text-[13px] font-bold text-white">
                  4.9 Rating
                </span>
              </div>
              <span className="text-xs text-slate-200 font-medium">
                Over 49,000 verified reviews
              </span>
            </div>
          </div>

          {/* Right: Bold Stat Badge (matching "5 Million+ / Downloads" position) */}
          <div className="flex flex-col items-end text-right">
            <span className="font-display text-[20px] sm:text-[23px] font-black text-white leading-tight tracking-tight">
              15,000+
            </span>
            <span className="text-xs font-bold text-cyan-300 tracking-wide">
              Visas Issued &middot; 99.8% Approval Rate
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}