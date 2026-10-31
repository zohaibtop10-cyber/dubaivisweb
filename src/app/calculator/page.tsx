import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { WIZARD_VISAS } from "@/lib/calculator";
import { pickFaqs } from "@/lib/faqs";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { VisaWizard } from "@/components/visa-wizard";
import { FaqSection } from "@/components/faq-section";
import { CheckCircle, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "UAE visa fee calculator 2026",
  description:
    "Itemised UAE government fees for the Property Visa, Golden Visa, Family Visa and Newborn Visa — medical, Emirates ID, typing and issuance — plus our service fee.",
};

const HOW = [
  { title: "Choose your visa", body: "Property, Golden, Family or Newborn — new or renewal." },
  { title: "Add your details", body: "Property value, family members and where you’re applying from." },
  { title: "See every fee", body: "Government fees line by line, then our service fee and the total." },
];

const INCLUDED = [
  "DLD, ICP and GDRFA fees",
  "Medical test (18+)",
  "Emirates ID for the visa term",
  "Typing and submission",
  "Our service fee, shown separately",
];

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Visa calculator" }]}
        eyebrow="Visa fee calculator"
        title={
          <>
            See your visa fees <span className="text-primary">before you pay</span>
          </>
        }
        lead="Pick a visa, add your family and get an itemised estimate in about a minute. Send it to your WhatsApp when you’re done."
      >
        {WIZARD_VISAS.map((visa) => (
          <span
            key={visa.id}
            className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-[13.5px] font-semibold text-ink shadow-sm ring-1 ring-line"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={visa.image} alt="" className="h-8 w-8 rounded-full bg-mist object-contain" />
            {visa.title}
          </span>
        ))}
      </PageHero>

      <section className="section bg-white">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="space-y-6 lg:sticky lg:top-28">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="section-title mt-4">Three steps, one clear number</h2>
            </div>
            <ol className="space-y-3">
              {HOW.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-[22px] bg-mist p-4">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-display text-[16px] font-bold text-white ${
                      index % 2 === 0 ? "bg-primary" : "bg-teal"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-display text-[16px] font-semibold text-ink">{step.title}</span>
                    <span className="block text-[14px] text-muted">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="rounded-[24px] p-6 ring-1 ring-line">
              <p className="font-display text-[17px] font-semibold text-ink">Included in every estimate</p>
              <ul className="mt-4 space-y-2.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-body">
                    <CheckCircle className="h-4 w-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] bg-[#e9faf0] p-6 ring-1 ring-[#c9eed8]">
              <p className="font-display text-[17px] font-semibold text-ink">Not sure which visa you need?</p>
              <p className="mt-1.5 text-[14px] text-muted">A case manager can tell you in a couple of messages.</p>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green mt-4">
                <WhatsApp className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <VisaWizard open embedded />
          </Reveal>
        </div>
      </section>

      <FaqSection categories={pickFaqs("fees", "general")} className="bg-mist" />
    </>
  );
}
