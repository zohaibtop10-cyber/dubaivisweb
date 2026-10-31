"use client";

import { useState, type ReactNode } from "react";
import type { FaqCategory } from "@/lib/faqs";
import { BRAND } from "@/lib/brand";
import { Faq } from "@/components/faq";
import { Phone, WhatsApp } from "@/components/icons";

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.8 8.8 0 0 1-3.9-.9L3 20.5l1.6-4.6A8.1 8.1 0 0 1 4 11.5a8.4 8.4 0 0 1 8.5-8.3 8.4 8.4 0 0 1 8.5 8.3Z" />
      <path d="M8.5 10h8M8.5 13.5h5" />
    </svg>
  );
}

export function FaqSection({
  categories,
  eyebrow = "FAQ",
  title = "Everything You Need To Know",
  lead = "Scroll through all answers below or select a category. Every detail is verified against current Dubai Land Department and GDRFA regulations.",
  className = "bg-[#f3f5f9] border-t border-b border-slate-200/80 text-slate-900",
}: {
  categories: FaqCategory[];
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const current = categories.find((category) => category.id === activeId) ?? categories[0];
  if (!current) return null;
  const tabs = categories.length > 1;

  return (
    <section id="faq" className={`section scroll-mt-24 ${className}`}>
      <div className="shell">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-center">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,1.5rem+2vw,3rem)] font-extrabold leading-tight tracking-tight text-slate-900">{title}</h2>
          {lead && <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{lead}</p>}
        </div>

        {/* 2-Column Layout with Sticky Sidebar on Left and Sticky Stacking Deck on Right */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-12 items-start">
          
          {/* Left Column: Sticky Sidebar containing category tabs & contact cards */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            {tabs && (
              <div className="rounded-[28px] border border-slate-200/90 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between px-3 pb-3 pt-1 border-b border-slate-100">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-slate-900">
                    Visa Categories
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                    {categories.length} Topics
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="FAQ topics"
                  className="no-scrollbar mt-3 -mx-2 flex gap-1.5 overflow-x-auto px-2 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
                >
                  {categories.map((category) => {
                    const on = category.id === current.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => {
                          setActiveId(category.id);
                          if (typeof window !== "undefined" && window.innerWidth < 1024) {
                            const deckEl = document.getElementById(`faq-deck-wrapper`);
                            deckEl?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className={`flex shrink-0 items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left font-display text-[14px] font-semibold transition-all duration-200 lg:px-4 lg:py-3.5 ${
                          on
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500"
                            : "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`h-2 w-2 rounded-full transition-colors ${
                              on ? "bg-white" : "bg-slate-300"
                            }`}
                          />
                          <span>{category.label}</span>
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                            on ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {category.items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Help & Support Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* WhatsApp Card */}
              <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] p-6 text-white shadow-xl">
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <ChatIcon className="h-6 w-6" />
                </span>
                <p className="relative mt-4 font-display text-[18px] font-bold leading-snug">
                  Have a specific question?
                </p>
                <p className="relative mt-1.5 text-[13.5px] leading-relaxed text-blue-100">
                  Our Dubai government-certified case managers reply on WhatsApp in under 5 minutes.
                </p>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-display text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <WhatsApp className="h-4 w-4" /> Message on WhatsApp
                </a>
              </div>

              {/* Phone Card */}
              <a
                href={BRAND.phoneHref}
                className="group flex items-center gap-4 rounded-[24px] border border-slate-200/90 bg-white p-4.5 shadow-sm transition hover:border-blue-500 hover:shadow-md"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30 group-hover:bg-blue-500 transition">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-medium text-slate-500">
                    Live consultation · {BRAND.hours}
                  </span>
                  <span className="block font-display text-[15.5px] font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {BRAND.phone}
                  </span>
                </span>
              </a>
            </div>
          </aside>

          {/* Right Column: Sticky Stacking Scroll Deck */}
          <div id="faq-deck-wrapper" className="min-w-0">
            {/* Top Deck Info Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-[13.5px] font-bold text-slate-900">
                  {current.label} FAQs ({current.items.length} Cards)
                </span>
              </div>
              <span className="text-[12px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                All Answers Opened · Scroll to Stack
              </span>
            </div>

            {/* Overlapping Scroll Deck of Cards */}
            <Faq key={current.id} items={current.items} idPrefix={`faq-${current.id}`} />
          </div>

        </div>
      </div>
    </section>
  );
}
