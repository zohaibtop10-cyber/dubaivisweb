"use client";

import { useId } from "react";
import { BRAND } from "@/lib/brand";

export type FaqItem = { question: string; answer: string; badge?: string };

export function Faq({
  items,
  idPrefix = "faq",
}: {
  items: FaqItem[];
  idPrefix?: string;
}) {
  const generatedId = useId();
  const baseId = idPrefix || generatedId;

  return (
    <div className="relative pb-24">
      {/* Sticky stacking cards container */}
      <div className="flex flex-col">
        {items.map((item, index) => {
          // Dynamic offset for progressive stacking card deck with clear clearance below floating navbar
          const topOffset = `calc(7rem + ${index * 32}px)`;
          const cardNum = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
          const isLast = index === items.length - 1;

          return (
            <article
              key={item.question}
              id={`${baseId}-card-${index}`}
              className={`sticky rounded-[28px] border border-slate-200/90 bg-white transition-all duration-300 will-change-transform ${
                isLast ? "mb-0" : "mb-8 sm:mb-12"
              }`}
              style={{
                top: topOffset,
                zIndex: 10 + index,
                boxShadow:
                  "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Top gradient highlight strip for physical deck feel */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-t-[28px]" />

              <div className="p-6 sm:p-8">
                {/* Header row with card number badge and category indicator */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 font-display text-[13px] font-bold tracking-wider text-white shadow-sm shadow-blue-500/30">
                      Q.{cardNum}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-semibold text-blue-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {item.badge ?? "Verified Official Guideline"}
                    </span>
                  </div>

                  <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
                    Card {index + 1} of {items.length}
                  </span>
                </div>

                {/* Question title */}
                <h3 className="font-display text-[18px] sm:text-[21px] font-bold leading-snug text-slate-900">
                  {item.question}
                </h3>

                {/* Subtle divider */}
                <div className="my-4 h-px w-full bg-slate-100" />

                {/* Answer */}
                <div className="text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
                  <p>{item.answer}</p>
                </div>

                {/* Card footer reassurance badge */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-[12.5px] text-slate-600">
                  <span className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-emerald-600 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dubai Land Department &amp; GDRFA Process</span>
                  </span>

                  <a
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                  >
                    Ask question on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}