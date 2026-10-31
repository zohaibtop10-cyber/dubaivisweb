import Link from "next/link";
import { BRAND, whatsappLink } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  Building,
  CheckCircle,
  Clock,
  FileCheck,
  Mail,
  Phone,
  Pin,
  Shield,
  Users,
  WhatsApp,
} from "@/components/icons";

const PROMISES = [
  { icon: Users, title: "Dedicated case officer", body: "A senior PRO assigned to your family file." },
  { icon: Pin, title: "Door-to-door courier", body: "Insured collection across all 7 emirates." },
  { icon: Clock, title: "Real-time tracking", body: "Know where every document is, any time." },
  { icon: FileCheck, title: "Official receipts", body: "Ministry receipts for every government fee." },
];

// Replaced PROPERTY_SERVICES with VISA_SERVICES
const VISA_SERVICES = [
  {
    icon: Shield,
    title: "Golden Visa",
    body: "10-year residency for property investors, professionals, and exceptional talents.",
    href: "/services/golden-visa",
  },
  {
    icon: Building,
    title: "Property Visa",
    body: "2-year residency linked to your AED 750,000+ real estate investment.",
    href: "/services/property-visa",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    body: "Sponsor your spouse, children, and parents with a streamlined process.",
    href: "/services/family-visa",
  },
  {
    icon: CheckCircle,
    title: "Newborn Visa",
    body: "Secure residency and Emirates ID for your newborn within the 120-day window.",
    href: "/services/newborn-visa",
  },
  {
    icon: FileCheck,
    title: "Maid & Nanny Visa",
    body: "Domestic worker sponsorship handled from entry permit to medical and stamping.",
    href: "/services/maid-visa",
  },
];

export function SupportSection() {
  return (
    <section id="support-section" className="section scroll-mt-24 bg-[#edf4fe] border-t border-b border-blue-100/90 py-16 lg:py-24 text-slate-900 relative overflow-hidden">
      {/* Subtle ice blue ambient aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]"
      />
      <div className="shell relative z-10">
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          
          {/* LEFT SIDE: Support Card (Signature Royal Blue) */}
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#1e3a8a] p-6 text-white shadow-xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_14px)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[36px] border-white/[0.08]"
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.05em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Support
                </p>
                <h3 className="mt-6 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.2rem)] font-bold leading-tight drop-shadow-sm text-white">
                  Real support from a senior case officer
                </h3>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-blue-100 font-medium">
                  No queues, no counters. Upload documents from your phone and your case officer handles every government
                  filing — with updates on WhatsApp at every step.
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white font-display text-[14px] font-extrabold text-blue-900 shadow-sm">
                    PRO
                    <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[16px] font-bold text-white">Senior PRO case officer</p>
                    <p className="text-[13px] font-medium text-blue-200">Typically replies within minutes</p>
                  </div>
                  <a
                    href={whatsappLink("Hi, I’d like to speak to a senior case officer.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex"
                  >
                    <WhatsApp className="h-4.5 w-4.5" /> Chat
                  </a>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {PROMISES.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 text-cyan-200">
                        <item.icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block font-display text-[15px] font-bold text-white">{item.title}</span>
                        <span className="mt-1.5 block text-[13.5px] font-medium leading-snug text-blue-100">{item.body}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:hidden">
                    <WhatsApp className="h-4.5 w-4.5" /> WhatsApp
                  </a>
                  <a href={BRAND.phoneHref} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/20">
                    <Phone className="h-4.5 w-4.5" /> {BRAND.phone}
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/20">
                    <Mail className="h-4.5 w-4.5" /> Email us
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-[13.5px] font-medium text-blue-200">
                  <Clock className="h-4.5 w-4.5 text-cyan-300" /> {BRAND.hours}
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE: Visa Services List (Clean White) */}
          <Reveal delay={80} className="h-full">
            <div className="h-full rounded-[32px] border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.05em] text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Visa Services
              </p>
              <h3 className="mt-5 font-display text-[24px] font-bold text-slate-900">
                Complete residency solutions
              </h3>
              <ul className="mt-5 divide-y divide-slate-100">
                {VISA_SERVICES.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="group flex items-start gap-5 py-5 transition-colors">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-100 bg-slate-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                        <service.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[16px] font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                          {service.title}
                        </span>
                        <span className="mt-1.5 block text-[14px] font-medium leading-relaxed text-slate-600">
                          {service.body}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-2 h-4.5 w-4.5 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-blue-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}