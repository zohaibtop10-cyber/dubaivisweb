import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { FEES, formatAed } from "@/lib/calculator";
import type { FaqCategory } from "@/lib/faqs";
import { FloatCard, PageHero } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ProcessRoad, type RoadStep } from "@/components/process-road";
import { FaqSection } from "@/components/faq-section";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { Check, FileCheck, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Newborn visa UAE — steps, documents & fees",
  description:
    "Register your newborn on your UAE residence within 120 days of birth. Birth certificate, MOFA attestation, visa and Emirates ID handled for you.",
};

const PHASES: RoadStep[] = [
  {
    title: "Birth certificate",
    when: "First week",
    image: "/images/services/newborn-visa.svg",
    body: "The hospital registers the birth and the Arabic birth certificate is issued.",
  },
  {
    title: "Baby’s passport",
    when: "1–3 weeks",
    image: "/images/services/emirates-id.svg",
    body: "Apply at your country’s embassy or consulate using the birth certificate.",
  },
  {
    title: "MOFA attestation",
    when: "1–2 days",
    image: "/images/services/attestation.svg",
    body: "The birth certificate is attested by the UAE Ministry of Foreign Affairs.",
  },
  {
    title: "Residence visa",
    when: "2–4 days",
    image: "/images/services/pro-services.svg",
    body: "We file the visa on the sponsoring parent’s residence and follow it up.",
  },
  {
    title: "Emirates ID",
    when: "3–5 days",
    image: "/images/services/family-visa.svg",
    body: "Your baby’s Emirates ID is issued — no medical test for children.",
  },
];

const FEE_ROWS = [
  { label: "Birth certificate (Arabic)", amount: FEES.birthCertificate },
  { label: "MOFA attestation", amount: FEES.mofaAttestation },
  { label: "Residence visa (2 years)", amount: FEES.residence2y },
  { label: "Emirates ID (2 years)", amount: FEES.eid2y },
  { label: "Certificate delivery", amount: FEES.certificateDelivery },
];
const FEE_TOTAL = FEE_ROWS.reduce((sum, row) => sum + row.amount, 0);

const DOCS = [
  { title: "From the hospital", items: ["Birth notification", "Arabic birth certificate", "Baby’s passport and photo"] },
  {
    title: "From the parents",
    items: [
      "Both parents’ passports",
      "Parents’ visas and Emirates IDs",
      "Marriage certificate (attested if issued abroad)",
      "Salary certificate or tenancy contract if requested",
    ],
  },
];

const FAQS: FaqCategory[] = [
  {
    id: "newborn",
    label: "Newborn visa",
    items: [
      {
        question: "How soon after birth do I need to apply?",
        answer:
          "Within 120 days of birth for babies born in the UAE. After that, daily late fees can apply — so it’s worth starting as soon as the birth certificate is issued.",
      },
      {
        question: "Does my baby need a medical test?",
        answer: "No. The medical fitness test only applies to applicants aged 18 and over.",
      },
      {
        question: "Can either parent sponsor the baby?",
        answer:
          "Usually the father sponsors, but a mother can sponsor if she meets the salary and housing rules or holds a qualifying residence such as a Golden Visa. We check your case first.",
      },
      {
        question: "Our baby was born abroad. Can we still apply?",
        answer:
          "Yes. The birth certificate is attested in the country of birth and by UAE MOFA, then we file an entry permit so your baby can travel and complete the visa here.",
      },
    ],
  },
];

export default function NewbornPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Newborn visa" }]}
        eyebrow="Newborn visa"
        title={
          <>
            Welcome your baby — <span className="text-primary">we’ll handle the paperwork</span>
          </>
        }
        lead="Register your newborn on your UAE residence within 120 days of birth. Birth certificate, attestation, visa and Emirates ID — handled for you, mostly online."
        image="/images/services/newborn-visa.svg"
        imageAlt="A newborn baby sleeping in a parent’s hands"
        aside={
          <FloatCard className="-bottom-5 left-6">
            <p className="text-[12px] text-muted">Government fees from</p>
            <p className="font-display text-[20px] font-bold text-primary">{formatAed(FEE_TOTAL)}</p>
          </FloatCard>
        }
      >
        <OpenCalcButton visa="newborn" className="btn-gold">
          <CalculatorIcon className="h-4 w-4" /> Calculate my fees
        </OpenCalcButton>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask on WhatsApp
        </a>
      </PageHero>

      <ProcessRoad
        id="newborn-road"
        steps={PHASES}
        eyebrow="The process"
        title="Five steps to your baby’s Emirates ID"
        lead="Typical timings — we track every step and keep you updated on WhatsApp."
        startLabel="Baby is born"
        finishLabel="Emirates ID issued"
      />

      <section className="section bg-mist">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="eyebrow">Indicative government fees</p>
            <h2 className="section-title mt-4">What it costs</h2>
            <div className="mt-8 overflow-hidden rounded-[24px] bg-white ring-1 ring-line">
              <table className="fee-table">
                <tbody>
                  {FEE_ROWS.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{formatAed(row.amount)}</td>
                    </tr>
                  ))}
                  <tr className="subtotal">
                    <td>Government fees (baby born in the UAE)</td>
                    <td>{formatAed(FEE_TOTAL)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13.5px] text-muted">
              Born abroad? An entry permit of {formatAed(FEES.entryPermit)} applies instead of the UAE birth certificate.
            </p>
            <OpenCalcButton visa="newborn" className="btn-gold mt-6">
              <CalculatorIcon className="h-4 w-4" /> Get my exact estimate
            </OpenCalcButton>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Documents</p>
            <h2 className="section-title mt-4">What you’ll need</h2>
            <div className="mt-8 grid gap-4">
              {DOCS.map((group) => (
                <div key={group.title} className="rounded-[24px] bg-white p-6 ring-1 ring-line">
                  <p className="flex items-center gap-2.5 font-display text-[17px] font-semibold text-ink">
                    <span className="icon-tile !h-10 !w-10">
                      <FileCheck className="h-5 w-5" />
                    </span>
                    {group.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[14.5px] text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        categories={FAQS}
        title="Newborn visa questions"
        lead="Every family’s situation is a little different — message us and we’ll check yours."
      />
    </>
  );
}
