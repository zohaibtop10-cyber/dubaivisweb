import { BRAND } from "@/lib/brand";
import { IMAGES } from "@/lib/properties";
import { Reveal } from "@/components/reveal";
import { CheckCircle, FileCheck, Shield, Star, Users, WhatsApp } from "@/components/icons";

const FEATURES = [
  {
    icon: Shield,
    tone: "bg-primary-soft text-primary",
    title: "Zero-rejection guarantee",
    tag: `${BRAND.approvalRate} ICP approval rate`,
    body: "Licensed senior PROs audit salary certificates, Ejari, attestations and translations before a single file is submitted.",
  },
  {
    icon: FileCheck,
    tone: "bg-[#fff3e3] text-[#d97706]",
    title: "Government fees at cost",
    tag: "AED 0 hidden markups",
    body: "Every GDRFA, ICP, medical and Emirates ID fee is billed at exact government cost — with official ministry receipts.",
  },
  {
    icon: Users,
    tone: "bg-[#e8f7ef] text-[#16a34a]",
    title: "A dedicated case officer",
    tag: "One person, your whole file",
    body: "A senior PRO case officer is assigned directly to your family file, from the first message to the Emirates ID.",
  },
  {
    icon: WhatsApp,
    tone: "bg-teal-soft text-teal",
    title: "No queues, no counters",
    tag: "Door-to-door courier",
    body: "Send documents from your phone. Our insured courier collects and delivers across all seven emirates.",
  },
];

const STATS = [
  { value: BRAND.visas, label: "Visas processed" },
  { value: `${BRAND.rating}/5`, label: "Google rating" },
  { value: BRAND.approvalRate, label: "ICP approval rate" },
  { value: "24–48h", label: "Typical approval time" },
];

function Feature({ item }: { item: (typeof FEATURES)[number] }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-xs transition-all hover:border-blue-400 hover:shadow-md">
        <span className={`grid h-10 w-10 place-items-center rounded-xl ${item.tone}`}>
          <item.icon className="h-5 w-5" />
        </span>
        <h3 className="mt-3 font-display text-[16px] font-semibold leading-tight text-slate-900 sm:text-[17px]">{item.title}</h3>
        <p className="mt-1 text-[11px] font-semibold text-blue-600 sm:text-[12px]">{item.tag}</p>
        <p className="mt-2 text-[12px] leading-[1.55] text-slate-600 sm:text-[13px]">{item.body}</p>
      </div>
    </Reveal>
  );
}

export function WhyChoose({ showStats = true }: { showStats?: boolean }) {
  return (
    <section className="overflow-hidden bg-[#faf8f5] border-t border-b border-stone-200/70 py-16 sm:py-20 lg:py-24 text-slate-900 relative">
      <div className="shell">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.04] text-slate-900 sm:text-[3.25rem]">
              Why choose
              <br />
              <span className="whitespace-nowrap font-display text-[0.85em] font-bold text-blue-600">{BRAND.name}</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[470px] text-[13px] leading-6 text-slate-600 sm:text-[15px] lg:ml-auto">
              Property residency means dealing with developers, banks, DLD, ICP and GDRFA. We bring it into one clear
              process — run by licensed PROs who know your file and bill every government fee at cost.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-8 lg:mt-9">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[108px] w-full lg:block"
            viewBox="0 0 1000 130"
            preserveAspectRatio="none"
          >
            <path d="M0 128 Q500 -42 1000 128" fill="none" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)_minmax(0,1fr)] lg:gap-7 lg:pt-12">
            <div className="order-2 grid gap-7 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-10">
              {FEATURES.slice(0, 2).map((item) => (
                <Feature key={item.title} item={item} />
              ))}
            </div>

            <div className="relative order-1 mx-auto w-full max-w-[360px] lg:order-2">
              <div
                aria-hidden="true"
                className="absolute inset-x-4 bottom-8 top-12 rounded-[48px] bg-gradient-to-b from-blue-600/15 to-transparent blur-2xl"
              />
              <div className="relative border border-slate-200/80 rounded-[32px] overflow-hidden shadow-lg" style={{ clipPath: "url(#why-arch)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES.whiteTower}
                  alt="A modern residential tower in Dubai"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <svg width="0" height="0" className="absolute" aria-hidden="true">
                <defs>
                  <clipPath id="why-arch" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 Q0.5,0.17 1,0 L1,1 L0,1 Z" />
                  </clipPath>
                </defs>
              </svg>

              <div className="animate-float absolute -left-2 top-[38%] flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-2 pr-3 shadow-lg sm:-left-8">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-[11px] font-bold text-slate-900 sm:text-[12px]">Pre-flight audit</span>
                  <span className="block text-[10px] text-slate-500 sm:text-[11px]">before anything is filed</span>
                </span>
              </div>
              <div className="absolute -right-2 bottom-[22%] rounded-xl border border-blue-400/30 bg-blue-600 px-3 py-2 text-white shadow-xl sm:-right-7">
                <p className="flex items-center gap-1 font-display text-[17px] font-bold leading-none">
                  {BRAND.rating} <Star className="h-3.5 w-3.5 fill-current text-amber-300" />
                </p>
                <p className="mt-1 text-[10px] text-white/80">{BRAND.reviews} reviews</p>
              </div>
            </div>

            <div className="order-3 grid gap-7 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
              {FEATURES.slice(2).map((item) => (
                <Feature key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>

        {showStats && (
          <Reveal className="mt-14 lg:mt-16">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-line ring-1 ring-line lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white px-5 py-6 text-center sm:py-7">
                  <p className="font-display text-[26px] font-bold leading-none text-ink sm:text-[32px]">{stat.value}</p>
                  <p className="mt-2 text-[13.5px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
