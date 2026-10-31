"use client";

import Link from "next/link";
import { BRAND, whatsappLink } from "@/lib/brand";
import { BrandMark, CalculatorIcon } from "@/components/brand-mark";
import {
  Close,
  WhatsApp,
  Shield,
  CheckCircle,
  Home,
  Building,
  Spark,
  FileCheck,
  Phone,
  ArrowRight,
  Star,
} from "@/components/icons";
import {
  Icon3DPropertyVisa,
  Icon3DGoldenVisa,
  Icon3DFamilyVisa,
  Icon3DNewbornVisa,
  Icon3DMaidVisa,
  Icon3DEmiratesId,
  Icon3DRemoteWorkVisa,
  Icon3DCorporateVisa,
  Icon3DCalculator,
  Icon3DDocService,
} from "@/components/icons-3d";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
  onOpenCalc: () => void;
};

// 1. LEFT SIDE: Page Navigations
const NAV_PAGES = [
  {
    label: "Home",
    href: "/",
    desc: "Overview & eligibility calculator",
    icon: Home,
    tag: "Main",
  },
  {
    label: "Golden Visa",
    href: "/golden-visa",
    desc: "10-year residency & investor criteria",
    icon: Spark,
    tag: "VIP 10-Yr",
    highlight: true,
  },
  {
    label: "Visa Properties",
    href: "/properties",
    desc: "AED 750K+ & 2M+ qualifying homes",
    icon: Building,
    tag: "Freehold",
  },
  {
    label: "Guides & Insights",
    href: "/insights",
    desc: "Official laws, fees & step-by-step rules",
    icon: FileCheck,
    tag: "2026 Rules",
  },
  {
    label: "About Sanad",
    href: "/about",
    desc: "Licensed PRO desk & DLD accreditation",
    icon: Shield,
    tag: "Licensed",
  },
  {
    label: "Contact & PRO Desk",
    href: "/contact",
    desc: "Direct WhatsApp & live consultation",
    icon: Phone,
    tag: "Live Desk",
  },
];

// 2. MIDDLE SIDE: All Popular Services (Top 6 most requested residency visas)
const POPULAR_SERVICES = [
  {
    slug: "property-visa",
    title: "Property Investor Visa",
    tagline: "From AED 750K Ready / Mortgaged",
    badge: "2–5 Yrs Renewable",
    href: "/services/property-visa",
    popular: true,
    bgGradient: "from-[#f8fbff] to-[#eff6ff]",
    borderHover: "hover:border-blue-400 hover:shadow-blue-500/10",
    icon: Icon3DPropertyVisa,
  },
  {
    slug: "golden-visa",
    title: "10-Year Golden Visa",
    tagline: "AED 2M+ Real Estate Investment",
    badge: "10-Year VIP",
    href: "/golden-visa",
    vip: true,
    bgGradient: "from-[#fffdf7] to-[#fffbeb]",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/10",
    icon: Icon3DGoldenVisa,
  },
  {
    slug: "family-visa",
    title: "Family Sponsorship",
    tagline: "Spouse, Children & Parents",
    badge: "Co-Terminus",
    href: "/services/family-visa",
    popular: true,
    bgGradient: "from-[#f8fdfa] to-[#ecfdf5]",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/10",
    icon: Icon3DFamilyVisa,
  },
  {
    slug: "newborn-visa",
    title: "Newborn Child Visa",
    tagline: "120-Day Window & Home EID",
    badge: "At-Home EID",
    href: "/new-born",
    popular: true,
    bgGradient: "from-[#fffafb] to-[#fff1f2]",
    borderHover: "hover:border-rose-400 hover:shadow-rose-500/10",
    icon: Icon3DNewbornVisa,
  },
  {
    slug: "emirates-id",
    title: "VIP Medical & Emirates ID",
    tagline: "24h Biometrics & Doorstep Delivery",
    badge: "Fast-Track",
    href: "/services/emirates-id",
    popular: true,
    bgGradient: "from-[#f8fbff] to-[#f0f9ff]",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/10",
    icon: Icon3DEmiratesId,
  },
  {
    slug: "maid-visa",
    title: "Domestic Worker Visa",
    tagline: "Maid, Nanny & Driver Sponsorship",
    badge: "MOHRE Labour",
    href: "/services/maid-visa",
    popular: true,
    bgGradient: "from-[#f7fcfa] to-[#f0fdfa]",
    borderHover: "hover:border-teal-400 hover:shadow-teal-500/10",
    icon: Icon3DMaidVisa,
  },
];

// 3. RIGHT SIDE: Other Services (All 10 remaining specialized, ministry, legal & commercial services)
const OTHER_SERVICES = [
  {
    title: "Corporate & Partner Visa",
    subtitle: "Mainland & Freezone business residence",
    href: "/services/pro-services",
    badge: "Business",
    icon: Icon3DCorporateVisa,
  },
  {
    title: "Remote Work / Nomad Visa",
    subtitle: "USD 3,500/mo remote income 1-yr residency",
    href: "/services/property-visa",
    badge: "Nomad",
    icon: Icon3DRemoteWorkVisa,
  },
  {
    title: "Amer Center Direct Desk",
    subtitle: "Residence permit & entry clearance typing",
    href: "/services/amer-center",
    badge: "Amer",
    isDoc: true,
    docType: "amer-center",
  },
  {
    title: "MOFA Document Attestation",
    subtitle: "Embassy, consular & apostille legalisation",
    href: "/attestation",
    badge: "Attest",
    isDoc: true,
    docType: "attestation",
  },
  {
    title: "MOJ Legal Translation",
    subtitle: "Ministry of Justice certified translators",
    href: "/services/translation",
    badge: "Legal",
    isDoc: true,
    docType: "translation",
  },
  {
    title: "DLD Trustee & Title Deed",
    subtitle: "Official registration, transfer & mortgage audit",
    href: "/services/dld-trustee",
    badge: "Trustee",
    isDoc: true,
    docType: "dld-trustee",
  },
  {
    title: "DLD Property Revaluation",
    subtitle: "DLD-panel valuation for Golden Visa & mortgages",
    href: "/services/revaluation",
    badge: "Valuation",
    isDoc: true,
    docType: "revaluation",
  },
  {
    title: "Power of Attorney (POA)",
    subtitle: "Notarised bilingual POA for property & court",
    href: "/services/power-of-attorney",
    badge: "Notary",
    isDoc: true,
    docType: "poa",
  },
  {
    title: "Wills & Estate Testament",
    subtitle: "DIFC & Abu Dhabi registered non-Muslim wills",
    href: "/services/wills-testament",
    badge: "DIFC",
    isDoc: true,
    docType: "wills",
  },
  {
    title: "ILOE Domestic Insurance",
    subtitle: "Mandatory MOHRE worker insurance placement",
    href: "/services/iloe-insurance",
    badge: "MOHRE",
    isDoc: true,
    docType: "iloe",
  },
];

export function MegaMenu({ open, onClose, onOpenCalc }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/80 p-2 sm:p-4 md:p-6 backdrop-blur-xl overflow-hidden"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="All Visa & Government Services"
        onClick={(e) => e.stopPropagation()}
        className="animate-pop relative flex flex-col w-full max-w-[1240px] max-h-[92vh] sm:max-h-[88vh] overflow-hidden rounded-[24px] sm:rounded-[30px] bg-white shadow-[0_30px_90px_-15px_rgba(2,6,23,0.85)] ring-1 ring-slate-200/80"
      >
        {/* ── LUXURY TOP HEADER (FIXED) ── */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-[#020617] via-[#09153a] to-[#040e2b] px-4 py-3 sm:px-6 sm:py-3.5 text-white">
          <div className="flex items-center gap-3">
            <Link href="/" onClick={onClose} aria-label={`${BRAND.name} home`}>
              <BrandMark size="sm" light={true} />
            </Link>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="hidden items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-2.5 py-0.5 text-[10.5px] font-semibold text-sky-200 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DLD &amp; ICP Accredited Direct Channel</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden items-center gap-1.5 text-[12px] font-bold text-sky-300 hover:text-white transition-colors md:flex"
            >
              <Phone className="h-3 w-3 text-sky-400" />
              <span>PRO Desk:</span>
              <span className="text-white">{BRAND.phone}</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105 cursor-pointer ring-1 ring-white/15"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── 3-COLUMN MAIN BODY (SCROLLABLE) ── */}
        <div className="flex-1 overflow-y-auto min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[205px_minmax(0,1.4fr)_335px] divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

          {/* ════════════════════════════════════════════════════════════════
              1. LEFT SIDE: PAGES NAVIGATIONS (COMPACT WIDTH)
              ════════════════════════════════════════════════════════════════ */}
          <div className="bg-[#f8fafc] p-3 sm:p-3.5 flex flex-col justify-between">
            <div>
              <div className="mb-2.5 flex items-center justify-between px-1">
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                  Navigation
                </span>
                <span className="rounded-full bg-slate-200/80 px-1.5 py-0.2 text-[8.5px] font-extrabold text-slate-600">
                  Pages
                </span>
              </div>

              <nav className="space-y-0.5">
                {NAV_PAGES.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between rounded-xl px-2.5 py-2 transition-all duration-200 ${
                        page.highlight
                          ? "bg-amber-500/10 text-amber-950 hover:bg-amber-500/15 border border-amber-200/60"
                          : "text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow-2xs border border-transparent hover:border-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg transition-colors ${
                            page.highlight
                              ? "bg-amber-500 text-white shadow-xs"
                              : "bg-white text-slate-500 shadow-2xs group-hover:bg-blue-600 group-hover:text-white"
                          }`}
                        >
                          <Icon className="h-3 w-3" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-display text-[12px] font-bold leading-tight">
                            {page.label}
                          </p>
                          <p className="truncate text-[9.5px] text-slate-400 group-hover:text-slate-500">
                            {page.desc}
                          </p>
                        </div>
                      </div>

                      {page.tag ? (
                        <span
                          className={`ml-1 shrink-0 rounded-full px-1.5 py-0.2 text-[8px] font-bold ${
                            page.highlight
                              ? "bg-amber-500 text-white"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {page.tag}
                        </span>
                      ) : (
                        <ArrowRight className="h-3 w-3 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Quick Consultation Badge */}
            <div className="mt-3 rounded-2xl border border-blue-100/90 bg-gradient-to-b from-blue-50/90 to-sky-50/50 p-2.5 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-600 text-white text-[9.5px] shadow-2xs">
                  ★
                </span>
                <span className="font-display text-[11px] font-bold text-blue-950">
                  Instant Eligibility
                </span>
              </div>
              <p className="mt-1 text-[9.5px] text-slate-600 leading-tight">
                Calculate official government fees in 30 seconds with zero typing costs.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCalc();
                }}
                className="mt-2 w-full rounded-lg bg-blue-600 hover:bg-blue-700 py-1 text-center font-display text-[10.5px] font-bold text-white shadow-xs transition-colors cursor-pointer"
              >
                Launch Calculator
              </button>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. MIDDLE SIDE: POPULAR SERVICES (EXPANDED PROMINENT WIDTH)
              ════════════════════════════════════════════════════════════════ */}
          <div className="bg-white p-3.5 sm:p-4 md:p-5 flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-2xs">
                    ★
                  </span>
                  <span className="text-[12px] font-extrabold uppercase tracking-wider text-slate-800">
                    Popular Services
                  </span>
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.2 text-[8.5px] font-extrabold text-slate-600">
                    6 Visas
                  </span>
                </div>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200/70 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 transition-colors"
                >
                  <span>All 16 Services</span>
                  <ArrowRight className="h-2.5 w-2.5" />
                </Link>
              </div>

              {/* 2-column Grid of Popular Visa Cards - All 6 Fully Visible */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {POPULAR_SERVICES.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.slug}
                      href={svc.href}
                      onClick={onClose}
                      className={`group relative flex items-center gap-3 rounded-[16px] border border-slate-200/80 bg-gradient-to-b ${svc.bgGradient || "from-[#fbfdff] to-[#f0f5fc]"} p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-white ${svc.borderHover}`}
                    >
                      {/* 3D Icon Presentation */}
                      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-2xs border border-slate-100/90 transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1">
                        <Icon size={36} />
                      </div>

                      {/* Details & Badges */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          {svc.vip ? (
                            <span className="rounded-full bg-amber-500 px-1.5 py-0.2 text-[8px] font-extrabold uppercase tracking-wider text-white shadow-2xs">
                              VIP Tier
                            </span>
                          ) : (
                            <span className="rounded-full bg-blue-600 px-1.5 py-0.2 text-[8px] font-extrabold uppercase tracking-wider text-white shadow-2xs">
                              Popular
                            </span>
                          )}
                          <span className="rounded-full bg-slate-200/80 px-1.5 py-0.2 text-[8.5px] font-bold text-slate-600">
                            {svc.badge}
                          </span>
                        </div>

                        <h4 className="font-display text-[12.5px] font-extrabold text-slate-900 leading-tight transition-colors group-hover:text-blue-600 truncate">
                          {svc.title}
                        </h4>
                        <p className="mt-0.5 text-[10px] leading-tight text-slate-500 truncate">
                          {svc.tagline}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Fast-Track SLA Banner */}
            <div className="mt-3 rounded-xl border border-slate-200/80 bg-slate-50 p-2 sm:px-3 flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-2 font-semibold text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <Shield className="h-3.5 w-3.5 text-blue-600" />
                Zero-rejection pre-flight audit · Licensed In-House PRO File Handling
              </span>
              <span className="font-bold text-blue-600 shrink-0 ml-2">24–48h SLA</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              3. RIGHT SIDE: ALL OTHER SERVICES (10 SPECIALIZED SERVICES)
              ════════════════════════════════════════════════════════════════ */}
          <div className="bg-[#fcfdfe] p-3 sm:p-3.5 flex flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-600">
                    Other Services
                  </span>
                  <span className="rounded-full bg-slate-200/80 px-1.5 py-0.2 text-[8.5px] font-extrabold text-slate-600">
                    10
                  </span>
                </div>
                <span className="rounded-full bg-indigo-50 border border-indigo-200/70 px-2 py-0.2 text-[8.5px] font-bold text-indigo-700">
                  Ministry &amp; Legal
                </span>
              </div>

              {/* Scrollable List of All 10 Other Services */}
              <div className="max-h-[355px] overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                {OTHER_SERVICES.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200/70 bg-white px-2 py-1.5 transition-all duration-200 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-50/40 hover:to-white hover:shadow-2xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-50 transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-100/70">
                          {item.isDoc ? (
                            <Icon3DDocService type={item.docType || "pro-services"} size={20} />
                          ) : (
                            item.icon && <item.icon size={20} />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-display text-[11px] font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                            {item.title}
                          </p>
                          <p className="truncate text-[9px] text-slate-400 group-hover:text-slate-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-1">
                        <span className="rounded-md bg-slate-100/90 group-hover:bg-blue-100/70 px-1.5 py-0.5 text-[8px] font-bold text-slate-500 group-hover:text-blue-700 transition-colors">
                          {item.badge}
                        </span>
                        <ArrowRight className="h-2.5 w-2.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Ministry Trust Box */}
            <div className="mt-2.5 rounded-xl border border-blue-100/80 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-2 flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-lg bg-blue-600 text-white shrink-0 shadow-2xs">
                <Shield className="h-3 w-3" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[10px] font-bold text-slate-900 leading-tight">
                  Zero-Markup Ministry Receipts
                </p>
                <p className="text-[9px] text-slate-500 leading-tight truncate">
                  ICP, GDRFA &amp; DLD fees billed at exact official cost.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── LUXURY BOTTOM ACTION BAR (FIXED) ── */}
        <div className="shrink-0 flex flex-col items-center justify-between gap-3 border-t border-blue-200/80 bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#1e3a8a] px-4 py-3 text-white sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 backdrop-blur-md shrink-0">
              <Icon3DCalculator size={26} />
            </div>
            <div>
              <p className="font-display text-[13px] font-extrabold text-white leading-tight">
                Need an itemised fee breakdown for your family or property?
              </p>
              <p className="text-[11px] text-blue-100 leading-tight">
                Check government fees, medical VIP, and Emirates ID costs in 30 seconds.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenCalc();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-display text-[12px] font-bold text-blue-900 shadow-sm transition-all hover:bg-blue-50 hover:scale-[1.02] cursor-pointer"
            >
              <CalculatorIcon className="h-3.5 w-3.5 text-blue-700" />
              <span>Launch Calculator</span>
            </button>

            <a
              href={whatsappLink("Hi! I would like to speak with a licensed PRO case officer regarding UAE residency services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] px-4 py-2 font-display text-[12px] font-bold text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <WhatsApp className="h-3.5 w-3.5" />
              <span>WhatsApp PRO</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
