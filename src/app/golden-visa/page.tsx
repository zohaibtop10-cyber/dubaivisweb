import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { FEES, formatAed, mainApplicantFee, personFee } from "@/lib/calculator";
import { DOCUMENTS } from "@/lib/visa";
import { pickFaqs } from "@/lib/faqs";
import { IMAGES } from "@/lib/properties";
import { FloatCard, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { RoutesCompare } from "@/components/routes-compare";
import { ProcessRoad, type RoadStep } from "@/components/process-road";
import { FaqSection } from "@/components/faq-section";
import { VisaWizard } from "@/components/visa-wizard";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { Building, CheckCircle, Clock, FileCheck, Globe, Key, Shield, Users, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "UAE Golden Visa through Dubai property",
  description:
    "Secure a renewable 10-year UAE Golden Visa with AED 2 million or more in Dubai property. Eligibility, documents, itemised government fees and the full process.",
};

const BENEFITS = [
  { icon: Clock, title: "10 years, renewable", body: "Renew for as long as you keep qualifying property — no reapplying every two years." },
  { icon: Users, title: "Your whole family", body: "Spouse, children and parents join the same file with the same 10-year validity." },
  { icon: Shield, title: "No sponsor needed", body: "Your property is your sponsor — no employer or local partner required." },
  { icon: Globe, title: "No limit abroad", body: "Stay outside the UAE for as long as you like without your visa lapsing." },
  { icon: Building, title: "Combine properties", body: "Several properties in your name can be added together to reach AED 2 million." },
  { icon: Key, title: "Off-plan can qualify", body: "Off-plan homes from approved developers can count once they’re registered with DLD." },
];

const TONES = [
  "bg-primary-soft text-primary",
  "bg-[#fff3e3] text-[#d97706]",
  "bg-[#e8f7ef] text-[#16a34a]",
  "bg-[#f1edff] text-[#6d4aff]",
  "bg-teal-soft text-teal",
  "bg-[#fdecf3] text-[#db2777]",
];

const STEPS: RoadStep[] = [
  {
    title: "Eligibility & value check",
    when: "Day 1",
    image: "/images/services/golden-visa.svg",
    body: "We confirm your qualifying value — your share, the amount paid and any properties you can combine.",
  },
  {
    title: "DLD approval",
    when: "Days 1–4",
    image: "/images/services/dld-trustee.svg",
    body: "Your title deeds or Oqood are submitted to the Dubai Land Department to confirm the property value.",
  },
  {
    title: "ICP application",
    when: "Days 3–8",
    image: "/images/services/pro-services.svg",
    body: "We file your Golden Visa application with ICP and follow it up until it’s approved.",
  },
  {
    title: "Medical & biometrics",
    when: "Days 6–12",
    image: "/images/services/medical.svg",
    body: "Your medical test and Emirates ID biometrics are booked around your schedule.",
  },
  {
    title: "Golden Visa issued",
    when: "Days 10–21",
    image: "/images/services/family-visa.svg",
    body: "Your 10-year residence and Emirates ID are issued — then we add your family to the same file.",
  },
];

export default function GoldenVisaPage() {
  const feeCards = [
    { label: "Main applicant", note: "DLD file, issuance, medical, 10-year Emirates ID", amount: mainApplicantFee("golden") },
    { label: "Each adult joining you", note: "Spouse or parent", amount: personFee("golden", { adult: true }) },
    { label: "Each child under 18", note: "No medical test", amount: personFee("golden", { adult: false }) },
    { label: "Family file", note: "Once, with the first dependant", amount: FEES.goldenFamilyFile },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Golden Visa" }]}
        eyebrow="10-year UAE residency"
        title={
          <>
            The UAE Golden Visa through <span className="text-primary">Dubai property</span>
          </>
        }
        lead="Own property worth AED 2 million or more and secure a renewable 10-year residence for you and your family. We confirm your eligibility, handle DLD and ICP, and book every appointment."
        image={IMAGES.skylineBlue}
        imageAlt="The Dubai skyline at twilight"
        aside={
          <>
            <FloatCard className="-left-4 top-8 hidden sm:block lg:-left-10">
              <p className="text-[12px] text-muted">Minimum property value</p>
              <p className="font-display text-[20px] font-bold text-primary">AED 2,000,000</p>
            </FloatCard>
            <FloatCard className="-bottom-5 right-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7ef] text-[#16a34a]">
                <CheckCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-[14px] font-semibold text-ink">10 years, renewable</span>
                <span className="block text-[12px] text-muted">Family on the same file</span>
              </span>
            </FloatCard>
          </>
        }
      >
        <OpenCalcButton visa="golden" preset={{ propertyValue: 2_000_000 }} className="btn-gold">
          <CalculatorIcon className="h-4 w-4" /> Check my eligibility
        </OpenCalcButton>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask on WhatsApp
        </a>
      </PageHero>

      <section className="section bg-white">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="What you get"
              title="Why owners choose the Golden Visa"
              lead="Long-term stability for your family, with the flexibility to live, work and travel on your own terms."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={(index % 3) * 60} className="h-full">
                <div className="card-lift h-full p-6">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${TONES[index % TONES.length]}`}>
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RoutesCompare
        eyebrow="Is it right for you?"
        title="Golden Visa or Property Visa?"
        lead="Both routes are renewable and cover your family. The difference is the property value — and how long your visa lasts."
      />

      <section id="calculator" className="section scroll-mt-24 bg-white">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">Fee calculator</p>
            <h2 className="section-title mt-4">What will your Golden Visa cost?</h2>
            <p className="section-lead mt-4">
              Add your family to see every government fee, line by line, alongside our filing fee.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {feeCards.map((card) => (
                <div key={card.label} className="rounded-[22px] bg-mist p-5">
                  <p className="text-[13px] font-semibold text-ink">{card.label}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted">{card.note}</p>
                  <p className="mt-3 font-display text-[22px] font-bold text-primary tabular">{formatAed(card.amount)}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              Indicative government fees. DLD transfer and agency fees belong to the property purchase and aren’t
              included.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <VisaWizard open embedded initialVisa="golden" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Documents"
              title="What you’ll need to apply"
              lead="Most of these you already have. We check every document before anything is submitted."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTS.map((document, index) => (
              <Reveal key={document.title} delay={(index % 3) * 60} className="h-full">
                <div className="flex h-full gap-4 rounded-[24px] bg-white p-5 ring-1 ring-line">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary font-display text-[15px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[16px] font-semibold text-ink">{document.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">{document.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[14px] text-muted">
            <FileCheck className="h-4 w-4 text-primary" />
            Family certificates issued abroad must be attested before filing.
          </p>
        </div>
      </section>

      <ProcessRoad
        id="golden-road"
        steps={STEPS}
        eyebrow="The process"
        title="Five steps to your Golden Visa"
        lead="Usually two to three weeks from a complete file — and you’re updated on WhatsApp at every step."
        finishLabel="10-year visa issued"
      />

      <FaqSection categories={pickFaqs("golden", "fees", "general")} className="bg-mist" />
    </>
  );
}
