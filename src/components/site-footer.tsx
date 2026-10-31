import Link from "next/link";
import type { SVGProps } from "react";
import { BRAND, whatsappLink } from "@/lib/brand";
import { VISA_SERVICES } from "@/lib/catalog";
import { BrandMark, CalculatorIcon } from "@/components/brand-mark";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CtaCard } from "@/components/cta-card";
import { Clock, Mail, Phone, Pin, Shield, Star, WhatsApp } from "@/components/icons";

type IconProps = SVGProps<SVGSVGElement>;

const VISA_ORDER = ["property-visa", "golden-visa", "family-visa", "newborn-visa", "maid-visa", "emirates-id"];

const HELPFUL_LINKS = [
  { label: "About PropertyVisa Dubai", href: "/about" },
  { label: "Visa-Ready Properties", href: "/properties" },
  { label: "Visa Guides & Articles", href: "/insights" },
  { label: "Instant Fee Calculator", href: "/calculator" },
  { label: "Careers & PRO Desk", href: "/careers" },
  { label: "Contact Our Advisors", href: "/contact" },
];

const INFORMATION = [
  { label: "Certificate Attestation (MOFA)", href: "/attestation" },
  { label: "Dubai Land Dept Trustee", href: "/services/dld-trustee" },
  { label: "Property Revaluation for Visa", href: "/services/revaluation" },
  { label: "MOJ Legal Translation", href: "/services/translation" },
  { label: "Corporate PRO & Labour Services", href: "/services/pro-services" },
  { label: "Frequently Asked Questions", href: "/#faq" },
];

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.7c-1.4.1-2.7-.3-3.9-1.1v6.1c0 3.9-3.4 6.4-6.9 5.5-4.1-1.1-5-6.6-1.3-8.6 1-.5 2-.7 3.2-.5v2.8c-.4-.1-.8-.1-1.2 0-1.5.4-2.1 2.1-1.2 3.3 1 1.2 2.9.9 3.4-.6.1-.3.1-.7.1-1V3h3.9Z" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.9 8.9H3.8V20h3.1V8.9ZM5.3 3.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.6c0-3-1.6-4.9-4.3-4.9-1.4 0-2.4.8-2.8 1.5V8.9h-3V20h3.1v-5.8c0-1.5.6-2.6 2-2.6 1.3 0 1.9.9 1.9 2.6V20h3.1v-6.4Z" />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Facebook", href: BRAND.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: BRAND.social.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: BRAND.social.tiktok, Icon: TikTokIcon },
  { label: "LinkedIn", href: BRAND.social.linkedin, Icon: LinkedInIcon },
  { label: "YouTube", href: BRAND.social.youtube, Icon: YouTubeIcon },
];

const TRUST_STATS = [
  { value: "15,000+", label: "Visas Handled" },
  { value: "99.8%", label: "Approval Rate" },
  { value: "4.9★", label: "Google Rating" },
  { value: "10+ Yrs", label: "In Dubai" },
];

function ReferralBanner() {
  return (
    <div
      id="referral"
      className="relative scroll-mt-24 overflow-hidden rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-[#121c4a] via-[#14183d] to-[#0a071c] shadow-2xl"
    >
      {/* Decorative rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 -bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid dots overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 flex flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Client Referral Program
          </span>

          <h2 className="mt-4 font-display text-[clamp(1.5rem,1.2rem+2vw,2rem)] font-bold leading-tight tracking-tight text-white">
            Know someone buying property in Dubai?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
            Introduce friends, family, or investors. They get <strong className="text-white">priority expedited processing</strong>,
            and you earn an <strong className="text-amber-300">AED 1,000 referral reward</strong> for every completed Golden Visa file.
          </p>

          {/* Bullet benefits */}
          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "No cap on referrals",
              "Paid within 7 days of file approval",
              "Referral tracked via WhatsApp",
              "Works for residents & overseas clients",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-slate-300">
                <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={whatsappLink("Hi! I would like to refer an investor for the Dubai Property / Golden Visa program.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg transition-all hover:-translate-y-1"
          >
            <WhatsApp className="h-4.5 w-4.5" />
            Refer via WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
          >
            Learn more about the program
          </a>
        </div>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-sky-400">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13.5px] font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const visas = [...VISA_SERVICES].sort((a, b) => VISA_ORDER.indexOf(a.slug) - VISA_ORDER.indexOf(b.slug));

  return (
    <>
      <CtaCard />

      <footer className="relative overflow-hidden bg-gradient-to-b from-[#080521] via-[#050415] to-[#020108] px-3 pb-28 pt-8 sm:px-5 md:pb-10 border-t border-white/10 text-white">
        {/* Subtle ambient glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Nocturnal card wrapping everything */}
          <div className="rounded-[36px] border border-white/10 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-2xl sm:p-6 lg:p-8">

            {/* Referral Banner */}
            <ReferralBanner />

            {/* Trust stats strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-2 text-center">
                  <span className="font-display text-[22px] font-bold text-sky-400">{stat.value}</span>
                  <span className="mt-0.5 text-[12px] font-medium text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Main grid */}
            <div className="px-2 pb-4 pt-12 sm:px-4 lg:px-6">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.5fr] lg:gap-8">

                {/* Brand column */}
                <div>
                  <Link href="/" aria-label={`${BRAND.name} home`} className="inline-block">
                    <BrandMark light={true} size="md" />
                  </Link>
                  <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
                    {BRAND.headline} Operated under {BRAND.operator}.
                  </p>

                  {/* Social icons */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {SOCIAL.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-sky-400 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>

                  {/* Calculator CTA */}
                  <div className="mt-5">
                    <OpenCalcButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-[13px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                      <CalculatorIcon className="h-4 w-4" /> Visa Fee Calculator
                    </OpenCalcButton>
                  </div>
                </div>

                {/* Link columns */}
                <FooterColumn
                  title="Residency Visas"
                  links={visas.map((s) => ({ label: s.title, href: s.href }))}
                />
                <FooterColumn title="Company" links={HELPFUL_LINKS} />
                <FooterColumn title="PRO Services" links={INFORMATION} />

                {/* Contact column */}
                <div>
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-sky-400">Headquarters</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href={BRAND.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 text-[13px] text-slate-400 transition-colors hover:text-sky-300"
                      >
                        <Pin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                        <span className="leading-snug">{BRAND.address},<br />{BRAND.city}</span>
                      </a>
                    </li>
                    <li>
                      <a href={BRAND.phoneHref} className="flex gap-3 text-[13px] transition-colors hover:text-sky-300">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                        <div>
                          <span className="block font-bold text-white">{BRAND.phone}</span>
                          <span className="text-[11.5px] text-slate-400">Direct PRO Hotline</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={BRAND.tollFreeHref} className="flex gap-3 text-[13px] transition-colors hover:text-sky-300">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                        <div>
                          <span className="block font-bold text-white">{BRAND.tollFree}</span>
                          <span className="text-[11.5px] text-slate-400">UAE Toll-Free Line</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-[13px] text-slate-400 transition-colors hover:text-sky-300">
                        <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                        <span>{BRAND.email}</span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-[13px]">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                      <span className="leading-snug text-slate-400">{BRAND.hours}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Legal notice */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[12px] leading-relaxed text-slate-400">
                <b className="font-bold text-slate-200">Accreditation & Compliance:</b>{" "}
                {BRAND.name} is an authorized corporate residency consultancy operated by {BRAND.operator}. Visas and Emirates IDs
                are granted exclusively by the GDRFA, ICP, and DLD. Fee estimates on this platform separate official government
                receipts from private advisory fees.
              </div>

              {/* Bottom bar */}
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-[12.5px] text-slate-400 lg:flex-row lg:items-center lg:justify-between">
                <p>
                  © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Registered under Dubai Economy & Tourism.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  <span className="cursor-pointer transition-colors hover:text-sky-300">Privacy Policy</span>
                  <span className="cursor-pointer transition-colors hover:text-sky-300">Terms of Service</span>
                  <span className="cursor-pointer transition-colors hover:text-sky-300">Refund Policy</span>
                  <Link href="/admin" className="font-semibold text-sky-400 transition-colors hover:text-sky-300 hover:underline">
                    Advisor Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export function FloatingActions() {
  return (
    <>
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-[#25d366] py-3.5 pl-4.5 pr-6 font-display text-[15px] font-bold text-white shadow-[0_16px_32px_-10px_rgba(37,211,102,0.8)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.9)] md:inline-flex"
      >
        <WhatsApp className="h-5 w-5" /> Chat on WhatsApp
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#070b1e]/95 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <OpenCalcButton className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-[14px] font-bold text-white shadow-md">
            <CalculatorIcon className="h-4.5 w-4.5" /> Visa Calculator
          </OpenCalcButton>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 text-[14px] font-bold text-white shadow-md">
            <WhatsApp className="h-4.5 w-4.5" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}