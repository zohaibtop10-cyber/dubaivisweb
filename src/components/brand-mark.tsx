import type { SVGProps } from "react";
import { BRAND } from "@/lib/brand";

export function BrandMark({ light = false, size = "md" }: { light?: boolean; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9 rounded-[12px]" : "h-11 w-11 rounded-[14px]";
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`grid ${box} shrink-0 place-items-center bg-gradient-to-br from-[#4c7dff] to-primary text-white shadow-[0_10px_20px_-10px_rgba(37,84,242,0.9)]`}
      >
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 15.5 16 6.5l11 9" />
          <path d="M8.5 13.2V25.5h15V13.2" />
          <path d="M13.2 25.5v-4.8a2.8 2.8 0 0 1 5.6 0v4.8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[18px] sm:text-[19px] font-extrabold tracking-tight">
          <span className={light ? "text-white" : "text-slate-900"}>{BRAND.wordmark[0]}</span>
          <span className="font-serif italic font-bold text-sky-500 ml-1">{BRAND.wordmark[1]}</span>
        </span>
        <span className={`mt-0.5 text-xs font-semibold tracking-normal ${light ? "text-white/70" : "text-slate-500"}`}>
          OPERATED BY BRIGHTLINK &amp; 800 DOCS
        </span>
      </span>
    </span>
  );
}

export function CalculatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 6.5h8" />
      <path d="M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}
