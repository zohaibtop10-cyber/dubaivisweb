import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { FEES, formatAed } from "@/lib/calculator";
import type { FaqCategory } from "@/lib/faqs";
import { FloatCard, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { Clock, FileCheck, IdCard, Key, Users, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Document attestation for UAE visas",
  description:
    "Marriage, birth and degree certificates attested for UAE family, property and Golden Visas — notary, foreign ministry, UAE embassy and UAE MOFA.",
};

const CHAIN = [
  { n: "01", title: "Notary", where: "Country of issue", body: "The certificate is certified by a notary or the authority that issued it." },
  { n: "02", title: "Foreign ministry", where: "Country of issue", body: "That country’s foreign ministry authenticates the notary’s stamp." },
  { n: "03", title: "UAE embassy", where: "Country of issue", body: "The UAE embassy or consulate legalises the document for use in the UAE." },
  { n: "04", title: "UAE MOFA", where: "In the UAE", body: "The UAE Ministry of Foreign Affairs adds the final attestation." },
];

const USES = [
  { icon: Users, tone: "bg-primary-soft text-primary", title: "Family visas", body: "A marriage certificate for your spouse and birth certificates for your children." },
  { icon: Key, tone: "bg-[#fff3e3] text-[#d97706]", title: "Golden Visa", body: "Relationship certificates for every family member on your file." },
  { icon: IdCard, tone: "bg-[#fdecf3] text-[#db2777]", title: "Newborn visa", body: "MOFA attestation of your baby’s UAE birth certificate." },
  { icon: FileCheck, tone: "bg-teal-soft text-teal", title: "Work & study", body: "Degree certificates for employment, licensing and equivalency." },
];

const FAQS: FaqCategory[] = [
  {
    id: "attestation",
    label: "Attestation",
    items: [
      {
        question: "Which documents need attestation for a UAE visa?",
        answer:
          "Any certificate issued outside the UAE that proves a relationship or a qualification — most often marriage certificates, birth certificates and degrees. Documents issued inside the UAE usually only need the final MOFA attestation.",
      },
      {
        question: "How long does attestation take?",
        answer:
          "The UAE MOFA step usually takes one to three working days. The steps in the country of issue vary from about a week to several weeks, which is why we recommend starting before anything else.",
      },
      {
        question: "Do I need to send my original documents?",
        answer:
          "Yes. The stamps are added to the original certificate. We tell you exactly where each document needs to go and keep you updated as it moves through the chain.",
      },
      {
        question: "What if my certificate isn’t in Arabic or English?",
        answer: "A legal Arabic translation is normally required once the attestation is complete. We can arrange it as part of your file.",
      },
    ],
  },
];

export default function AttestationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "Attestation" }]}
        eyebrow="Document attestation"
        title={
          <>
            Certificates from abroad, <span className="text-primary">ready for your UAE visa</span>
          </>
        }
        lead="Marriage, birth and degree certificates usually need four stamps before UAE authorities accept them. We manage the whole chain and tell you exactly what your country requires."
        image="/images/properties/kitchen.svg"
        imageAlt="An open passport with travel stamps"
        aside={
          <FloatCard className="-bottom-5 left-6">
            <p className="text-[12px] text-muted">UAE MOFA government fee</p>
            <p className="font-display text-[20px] font-bold text-primary">
              {formatAed(FEES.mofaAttestation)} <span className="text-[13px] font-semibold text-muted">/ document</span>
            </p>
          </FloatCard>
        }
      >
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green">
          <WhatsApp className="h-4 w-4" /> Start on WhatsApp
        </a>
        <a href="/contact" className="btn-outline">
          Request a quote
        </a>
      </PageHero>

      <section className="section bg-white">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="The chain"
              title="Four stamps, in this order"
              lead="Each stamp depends on the one before it. Some countries add a local step — we confirm yours before you start."
            />
          </Reveal>
          <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-[34px] hidden border-t-2 border-dashed border-primary/25 lg:block"
            />
            {CHAIN.map((step, index) => (
              <Reveal key={step.n} delay={index * 70} className="h-full">
                <li className="relative h-full rounded-[26px] bg-white p-6 text-center ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,30,90,0.45)]">
                  <span
                    className={`relative mx-auto grid h-[68px] w-[68px] place-items-center rounded-full font-display text-[22px] font-bold text-white ring-8 ring-white ${
                      index % 2 === 0 ? "bg-primary" : "bg-teal"
                    }`}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-primary">{step.where}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">When you’ll need it</p>
            <h2 className="section-title mt-4">Most visa files start here</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {USES.map((use) => (
                <div key={use.title} className="rounded-[24px] bg-white p-5 ring-1 ring-line">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${use.tone}`}>
                    <use.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-[17px] font-semibold text-ink">{use.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{use.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Fees &amp; timing</p>
            <h2 className="section-title mt-4">What it costs</h2>
            <div className="mt-8 overflow-hidden rounded-[24px] bg-white ring-1 ring-line">
              <table className="fee-table">
                <tbody>
                  <tr>
                    <td>
                      UAE MOFA — personal &amp; educational
                      <small>Government fee per document</small>
                    </td>
                    <td>{formatAed(FEES.mofaAttestation)}</td>
                  </tr>
                  <tr>
                    <td>
                      UAE MOFA — commercial
                      <small>Government fee per document</small>
                    </td>
                    <td>AED 2,000</td>
                  </tr>
                  <tr>
                    <td>
                      Steps in the country of issue
                      <small>Notary, foreign ministry and embassy fees vary</small>
                    </td>
                    <td>Quoted per case</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-[22px] bg-white p-4 text-[14px] leading-relaxed text-body ring-1 ring-line">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              The UAE MOFA step usually takes 1–3 working days. The full chain from abroad typically takes one to six weeks,
              depending on the country.
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        categories={FAQS}
        title="Attestation questions"
        lead="Not sure what your document needs? Send us a photo on WhatsApp and we’ll tell you."
      />
    </>
  );
}
