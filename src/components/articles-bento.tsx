"use client";

import Link from "next/link";
import { BRAND, whatsappLink } from "@/lib/brand";
import { INSIGHTS, TESTIMONIALS } from "@/lib/content";
import { ArrowRight, FileCheck, WhatsApp } from "@/components/icons";

type Post = (typeof INSIGHTS)[number];

// Category color mapping
const CAT_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "Golden Visa": { bg: "bg-amber-50 ring-amber-200/60", text: "text-amber-800", dot: "bg-amber-500" },
  "Residency":   { bg: "bg-blue-50 ring-blue-200/60",  text: "text-blue-800",  dot: "bg-blue-600" },
  "Investment":  { bg: "bg-emerald-50 ring-emerald-200/60", text: "text-emerald-800", dot: "bg-emerald-600" },
  "Family":      { bg: "bg-purple-50 ring-purple-200/60", text: "text-purple-800", dot: "bg-purple-600" },
};
const defaultCat = { bg: "bg-slate-50 ring-slate-200", text: "text-slate-700", dot: "bg-slate-400" };

const AVATARS = ["bg-blue-600", "bg-amber-500", "bg-emerald-600", "bg-purple-600", "bg-indigo-600"];

function CategoryBadge({ category }: { category: string }) {
  const c = CAT_COLORS[category] ?? defaultCat;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-bold ring-1 ${c.bg} ${c.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {category}
    </span>
  );
}

function ReadMore() {
  return (
    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-[13px] font-bold text-blue-600 transition-all group-hover:gap-2.5">
      Read full guide <ArrowRight className="h-4 w-4" />
    </span>
  );
}

const ARTICLE_PHOTOS: Record<string, string> = {
  "golden-visa-property-threshold-2026": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  "property-visa-750k-explained": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
  "dubai-yield-guide-2026": "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
  "family-visa-through-property-2026": "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop",
};

function ArticleImage({
  src,
  alt,
  slug,
  aspectClass = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  slug?: string;
  aspectClass?: string;
}) {
  const photoUrl = (slug && ARTICLE_PHOTOS[slug]) || src;
  return (
    <div className={`relative ${aspectClass} overflow-hidden rounded-[22px] bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photoUrl}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = src;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
    </div>
  );
}

export function ArticlesBento({
  posts = INSIGHTS,
  eyebrow = "Official Guides & Knowledge Base",
  title = "Expert Visa & Property Insights",
  lead = "Short, practical guides on property visas, Golden Visa rules, family sponsorship, and official ministry fees — written by our licensed PRO case managers.",
  className = "bg-[#f5f7fa] border-t border-b border-slate-200/80 text-slate-900",
}: {
  posts?: ReadonlyArray<Post>;
  eyebrow?: string;
  title?: string;
  lead?: string;
  showAllLink?: boolean;
  className?: string;
}) {
  const [first, ...rest] = posts;
  if (!first) return null;
  const side = rest.slice(0, 2);

  return (
    <section className={`section ${className}`}>
      <div className="shell">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.05em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" /> {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,1.5rem+2vw,3rem)] font-extrabold leading-tight tracking-tight text-slate-900">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-600 mx-auto max-w-2xl">{lead}</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">

          {/* LEFT: Major Featured Article Card */}
          <div className="flex flex-col gap-5">
            <Link
              href={`/insights/${first.slug}`}
              className="group flex flex-1 flex-col overflow-hidden rounded-[32px] border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl sm:p-5"
            >
              <ArticleImage src={first.image} alt={first.title} slug={first.slug} aspectClass="aspect-[16/9]" />
              <div className="flex flex-1 flex-col p-3 sm:p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <CategoryBadge category={first.category} />
                  <span className="text-[12px] font-medium text-slate-500">
                    {first.date} · {first.read} read
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[22px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 sm:text-[25px]">
                  {first.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate-600">
                  {first.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-[13px] font-bold text-blue-600 transition-all group-hover:gap-2.5">
                  Read full guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Social Trust Proof Pill */}
            <div className="flex items-center justify-between rounded-[24px] border border-slate-200/90 bg-white p-4 px-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {TESTIMONIALS.slice(0, 4).map((person, i) => (
                    <span
                      key={person.initials}
                      className={`grid h-8 w-8 place-items-center rounded-full border-2 border-white font-display text-[10px] font-bold text-white shadow-sm ${AVATARS[i % AVATARS.length]}`}
                    >
                      {person.initials}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-display text-[13.5px] font-bold text-slate-900">
                    Over 5,000+ investors read our monthly guides
                  </p>
                  <p className="text-[11.5px] text-slate-500">Updated weekly with latest GDRFA &amp; DLD directives</p>
                </div>
              </div>

              <Link
                href="/insights"
                className="hidden font-display text-[13px] font-bold text-blue-600 hover:text-blue-700 sm:inline-flex items-center gap-1"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>

          {/* RIGHT: Secondary Articles Stack & Free PDF Download Card */}
          <div className="flex flex-col gap-5">
            {side.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-4 overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
              >
                <div className="sm:w-[160px] shrink-0">
                  <ArticleImage src={post.image} alt={post.title} slug={post.slug} aspectClass="aspect-[16/10] sm:aspect-square" />
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <CategoryBadge category={post.category} />
                      <span className="text-[11px] text-slate-500">{post.read}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-[16.5px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 sm:text-[18px]">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 font-display text-[12.5px] font-bold text-blue-600 group-hover:gap-2 transition-all">
                    Read article &rarr;
                  </span>
                </div>
              </Link>
            ))}

            {/* FREE PDF GUIDE DOWNLOAD CARD (High Value CTA) */}
            <div className="relative overflow-hidden rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-[#0e173e] via-[#0b1233] to-[#170e30] p-6 text-white shadow-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl"
              />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-300 backdrop-blur-sm shrink-0">
                  <FileCheck className="h-6 w-6" />
                </span>
                <div>
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                    Free 2026 Edition
                  </span>
                  <h4 className="mt-2 font-display text-[18px] font-bold leading-snug text-white">
                    Dubai Property &amp; Golden Visa Handbook (PDF)
                  </h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300">
                    Complete breakdown of eligibility thresholds, bank NOC requirements, and itemised fees.
                  </p>
                  <a
                    href={whatsappLink("Hi! Please send me the 2026 Dubai Property & Golden Visa PDF handbook.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsApp className="h-4 w-4" /> Download on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
