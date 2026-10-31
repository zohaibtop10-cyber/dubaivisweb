import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowRight, Shield, Sparkles, WhatsApp } from "@/components/icons";

function GlowRing({ size, opacity }: { size: number; opacity: number }) {
  return (
    <span
      className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        background: `rgba(255,255,255,${opacity})`,
      }}
    />
  );
}

function PillButton({ href, onClick, children }: { href?: string; onClick?: () => void; children: ReactNode }) {
  const cls =
    "group inline-flex items-center justify-between gap-5 rounded-full bg-[#0a1835]/90 py-1.5 pl-6 pr-1.5 font-display text-[15px] font-semibold text-white shadow-[0_16px_32px_-14px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:bg-[#0a1835]";
  const knob = (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-blue-900 shadow-md transition-transform duration-300 group-hover:translate-x-0.5">
      <ArrowRight className="h-4.5 w-4.5" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {knob}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
      {knob}
    </button>
  );
}

export function CtaCard() {
  return (
    <section className="bg-[#080521] border-t border-white/10 pb-16 pt-10 lg:pb-24 text-white">
      <div className="shell">
        {/* Outer frosted ring */}
        <div className="rounded-[44px] border border-white/15 bg-slate-900/60 p-2.5 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-3">

          {/* Main sapphire gradient card */}
          <div className="relative overflow-hidden rounded-[36px] border border-blue-500/25 bg-gradient-to-br from-[#101b4d] via-[#14153d] to-[#0c0822] px-6 py-14 sm:px-12 sm:py-16 lg:px-18 lg:py-20">

            {/* Concentric ring decoration (right side) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-200px] top-1/2 hidden -translate-y-1/2 sm:block lg:right-[-40px]"
            >
              {[640, 500, 380, 260, 150].map((size, i) => (
                <GlowRing key={size} size={size} opacity={[0.06, 0.09, 0.13, 0.2, 0.9][i]} />
              ))}
            </div>

            {/* Star/dot grid overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />

            {/* Ambient glow blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-indigo-600/25 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#67e8f9]" />
                Free eligibility check
              </span>

              {/* Headline */}
              <h2 className="mt-6 font-display text-[clamp(2rem,1.2rem+3vw,3.2rem)] font-extrabold leading-[1.06] tracking-tight text-white drop-shadow-sm">
                Let&apos;s get your UAE{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#93c5fd] to-[#38bdf8] bg-clip-text text-transparent">
                    residency
                  </span>
                </span>{" "}
                started.
              </h2>

              {/* Subtext */}
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-blue-100">
                Calculate your exact government fees in seconds, or message us on WhatsApp —
                a licensed senior visa specialist replies in{" "}
                <strong className="text-white">minutes</strong>.
              </p>

              {/* Feature chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "No upfront payment",
                  "100% Online process",
                  "Licensed PRO team",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-semibold text-blue-100">
                    <Sparkles className="h-3 w-3 text-amber-300" />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PillButton href="/contact">Book a free consultation</PillButton>
                <OpenCalcButton className="group inline-flex items-center justify-between gap-5 rounded-full bg-[#0a1835]/90 py-1.5 pl-6 pr-1.5 font-display text-[15px] font-semibold text-white shadow-[0_16px_32px_-14px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:bg-[#0a1835]">
                  Open visa calculator
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-blue-900 shadow-md transition-transform duration-300 group-hover:translate-x-0.5">
                    <CalculatorIcon className="h-4.5 w-4.5" />
                  </span>
                </OpenCalcButton>
              </div>

              {/* WhatsApp link */}
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-blue-200 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <WhatsApp className="h-5 w-5 text-[#25d366]" />
                Prefer WhatsApp? Message us directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}