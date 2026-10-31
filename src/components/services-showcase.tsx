import Link from "next/link";
import { OTHER_SERVICES } from "@/lib/catalog";
import { FEES, formatAed, mainApplicantFee, personFee, type WizardVisa } from "@/lib/calculator";
import { Reveal } from "@/components/reveal";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  Icon3DPropertyVisa,
  Icon3DGoldenVisa,
  Icon3DFamilyVisa,
  Icon3DNewbornVisa,
  Icon3DMaidVisa,
  Icon3DEmiratesId,
  Icon3DDocService,
} from "@/components/icons-3d";

type Service = {
  key: string;
  title: string;
  tag: string;
  body: string;
  validity: string;
  time: string;
  price: number;
  priceLabel: string;
  href: string;
  visa?: WizardVisa;
  tint?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const NEWBORN_TOTAL =
  FEES.birthCertificate + FEES.mofaAttestation + FEES.residence2y + FEES.eid2y + FEES.certificateDelivery + FEES.typing;

const FEATURED: Service[] = [
  {
    key: "property",
    title: "Property Investor Visa",
    tag: "DLD trustee channel",
    body: "Residence for Dubai property owners from AED 750,000. DLD filing accepts off-plan and mortgaged homes.",
    validity: "2–5 years",
    time: "2–3 days",
    price: mainApplicantFee("property"),
    priceLabel: "Govt. fees from",
    href: "/services/property-visa",
    visa: "property",
    icon: Icon3DPropertyVisa,
  },
  {
    key: "golden",
    title: "10-Year Golden Visa",
    tag: "Self-sponsored",
    body: "10-year self-sponsored residence from AED 2M property equity or AED 30,000 salary. Add family on the same file.",
    validity: "10 years",
    time: "48h VIP turnaround",
    price: mainApplicantFee("golden"),
    priceLabel: "Govt. fees from (property owner)",
    href: "/golden-visa",
    visa: "golden",
    icon: Icon3DGoldenVisa,
  },
];

const MORE: Service[] = [
  {
    key: "family",
    title: "Family Residency",
    tag: "Spouse & children",
    body: "Sponsor spouse, children and parents under your property file with shared medical and biometrics appointments.",
    validity: "Matches investor",
    time: "24–48 hours",
    price: personFee("residence", { adult: false, renewal: false }),
    priceLabel: "Govt. fees each",
    href: "/services/family-visa",
    visa: "family",
    tint: "from-[#eaf8f0] to-[#cdeedc]",
    icon: Icon3DFamilyVisa,
  },
  {
    key: "newborn",
    title: "Newborn Visa & ID",
    tag: "120-day rule",
    body: "Birth certificate, MOFA attestation, residence permit and Emirates ID issued without fines or office visits.",
    validity: "2–10 years",
    time: "5–7 days",
    price: NEWBORN_TOTAL,
    priceLabel: "All ministry fees",
    href: "/new-born",
    visa: "newborn",
    tint: "from-[#fdf0f5] to-[#f8d8e6]",
    icon: Icon3DNewbornVisa,
  },
  {
    key: "maid",
    title: "Maid & Nanny Visa",
    tag: "Domestic staff",
    body: "Tadbeer-compliant domestic worker sponsorship for property owners, including contract, entry permit and medical.",
    validity: "1–2 years",
    time: "3–5 days",
    price: 3850,
    priceLabel: "Complete package",
    href: "/services/maid-visa",
    tint: "from-[#fff6e5] to-[#ffe2b8]",
    icon: Icon3DMaidVisa,
  },
  {
    key: "eid",
    title: "Emirates ID VIP",
    tag: "Fast-track queue",
    body: "Executive lounge biometrics appointment and smart courier delivery to your home or office anywhere in Dubai.",
    validity: "Validity of visa",
    time: "Next day",
    price: 490,
    priceLabel: "Executive lounge",
    href: "/services/emirates-id",
    tint: "from-[#eef2ff] to-[#d9e3ff]",
    icon: Icon3DEmiratesId,
  },
];

function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex min-w-0 max-w-full items-center gap-1 overflow-hidden whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold sm:gap-1.5 sm:px-3 sm:py-1 sm:text-[12px] ${
        dark
          ? "bg-white/15 text-white ring-1 ring-white/20"
          : "bg-slate-100 text-slate-700 ring-1 ring-slate-200/80"
      }`}
    >
      <span className="truncate">{children}</span>
    </span>
  );
}

export function ServicesShowcase() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#ffffff] py-14 sm:py-18 lg:py-24 text-slate-900 border-t border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle ambient lighting for pure white section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 h-[450px] w-[600px] rounded-full bg-blue-50/60 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-10 h-[380px] w-[500px] rounded-full bg-slate-100/70 blur-[110px]"
      />
      <div className="shell relative z-10">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="max-w-[620px]">
              <p className="eyebrow">Our services</p>
              <h2 className="mt-3 font-display text-[26px] font-bold leading-[1.1] text-slate-900 sm:text-[34px] lg:text-[40px]">
                Residency services,{" "}
                <span className="text-blue-600">
                  priced to the dirham
                </span>
              </h2>
              <p className="mt-3 max-w-[520px] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                Government fees at exact cost with official receipts — and our service fee always shown separately.
              </p>
            </div>
            <div className="flex shrink-0 gap-2.5">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-4 py-2.5 text-[13px] font-bold text-slate-800 shadow-sm transition-all">
                All services <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
              </Link>
              <OpenCalcButton className="btn-primary !rounded-full !px-5 !py-2.5 !text-[13px]">
                <CalculatorIcon className="h-4 w-4" /> Visa calculator
              </OpenCalcButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-4">
          {FEATURED.map((service, index) => {
            const dark = service.key === "golden";
            return (
              <Reveal key={service.key} delay={index * 60} className="h-full min-[480px]:col-span-2">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1 min-[480px]:flex-row ${
                    dark
                      ? "bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#1e3a8a] text-white shadow-xl shadow-blue-900/20"
                      : "bg-white border border-slate-200/90 text-slate-900 shadow-sm hover:shadow-md hover:border-blue-400"
                  }`}
                >
                  {dark && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-white/[0.08]"
                    />
                  )}
                  <div className="relative flex min-w-0 flex-1 flex-col p-4 sm:p-5 lg:p-6">
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-[9.5px] font-bold sm:px-3 sm:text-[11px] ${
                        dark ? "bg-amber-400 text-slate-950 font-extrabold" : "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                      }`}
                    >
                      {service.tag}
                    </span>
                    <h3 className={`mt-2.5 font-display text-[15px] font-bold leading-tight sm:text-[17px] lg:mt-3 lg:text-[21px] ${dark ? "text-white" : "text-slate-900"}`}>{service.title}</h3>
                    <p className={`mt-1.5 line-clamp-2 text-[10px] leading-[1.4] sm:text-[11px] lg:mt-2 lg:text-[13px] ${dark ? "text-blue-100" : "text-slate-600"}`}>{service.body}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5 lg:mt-3">
                      <Chip dark={dark}>
                        {service.validity}
                      </Chip>
                      <Chip dark={dark}>
                        {service.time}
                      </Chip>
                    </div>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-3 lg:pt-5">
                      <div>
                        <p className={`text-xs font-medium ${dark ? "text-blue-200" : "text-slate-500"}`}>{service.priceLabel}</p>
                        <p className={`font-display text-[16px] font-extrabold tabular sm:text-[18px] lg:text-[23px] ${dark ? "text-white" : "text-blue-600"}`}>
                          {formatAed(service.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {service.visa && (
                          <OpenCalcButton visa={service.visa} className={`inline-flex rounded-full font-bold px-3 py-1.5 text-[11px] transition-all ${
                            dark ? "bg-white text-blue-900 hover:bg-blue-50" : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                          }`}>
                            Calculate
                          </OpenCalcButton>
                        )}
                        <Link
                          href={service.href}
                          aria-label={`${service.title} details`}
                          className={`grid h-8 w-8 place-items-center rounded-full transition-colors sm:h-9 sm:w-9 ${
                            dark ? "bg-white/15 text-white hover:bg-white/25" : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`relative m-2.5 mt-0 flex min-h-[120px] items-center justify-center rounded-[18px] p-4 transition-transform duration-500 group-hover:scale-105 min-[480px]:my-2.5 min-[480px]:ml-0 min-[480px]:mr-2.5 min-[480px]:min-h-0 min-[480px]:w-[36%] md:m-3 md:w-[40%] ${
                      dark ? "bg-white/10" : "bg-slate-50 border border-slate-100"
                    }`}
                  >
                    <service.icon size={88} className="drop-shadow-lg" />
                  </div>
                </article>
              </Reveal>
            );
          })}

          {MORE.map((service, index) => (
            <Reveal key={service.key} delay={index * 60} className="h-full">
              <article className="group flex h-full flex-col rounded-[22px] bg-white border border-slate-200/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md sm:p-5">
                <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-[16px] bg-slate-50 border border-slate-100 p-3">
                  <service.icon size={78} className="transition-transform duration-500 group-hover:scale-110 drop-shadow-sm" />
                  <span className="absolute left-2.5 top-2.5 max-w-[calc(100%-1rem)] truncate rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[9.5px] font-bold text-slate-800 shadow-xs sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
                    {service.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-1 pb-1 pt-3.5">
                  <h3 className="line-clamp-2 font-display text-[13px] font-bold leading-snug text-slate-900 sm:text-[14px] lg:line-clamp-none lg:text-[16px]">{service.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-[1.45] text-slate-600 sm:text-[11px] lg:line-clamp-3 lg:text-[12.5px]">{service.body}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3">
                    <Chip>{service.validity}</Chip>
                    <Chip>{service.time}</Chip>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-2 pt-3 sm:pt-4">
                    <div>
                      <p className="whitespace-nowrap text-xs text-slate-500">{service.priceLabel}</p>
                      <p className="whitespace-nowrap font-display text-[13px] font-extrabold text-blue-600 tabular sm:text-[15px] lg:text-[19px]">{formatAed(service.price)}</p>
                    </div>
                    <div className="flex gap-1.5">
                      {service.visa && (
                        <OpenCalcButton
                          visa={service.visa}
                          ariaLabel={`Calculate ${service.title} fees`}
                          className="hidden h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-blue-600 hover:text-white min-[768px]:grid sm:h-9 sm:w-9"
                        >
                          <CalculatorIcon className="h-4 w-4" />
                        </OpenCalcButton>
                      )}
                      <Link
                        href={service.href}
                        aria-label={`${service.title} details`}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500 sm:h-9 sm:w-9"
                      >
                        <ArrowUpRight className="h-4.5 w-4.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-4 flex flex-col gap-3 rounded-[14px] bg-white p-3 shadow-[0_7px_20px_-16px_rgba(30,41,59,0.45)] ring-1 ring-[#e7e1d7] sm:p-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="shrink-0 lg:w-52">
              <p className="font-display text-[13px] font-semibold text-ink sm:text-[14px]">Government &amp; document services</p>
              <p className="mt-0.5 text-[10px] text-muted sm:text-[11px]">Handled by the same PRO team</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {OTHER_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f5f0] py-1 pl-1 pr-2.5 text-[10px] font-medium text-ink transition-colors hover:bg-primary-soft hover:text-primary sm:gap-2 sm:py-1.5 sm:pl-1.5 sm:pr-3.5 sm:text-[12px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt="" loading="lazy" className="h-6 w-6 rounded-full bg-white object-contain sm:h-7 sm:w-7" />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
