import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { SERVICE_FEES, formatAed } from "@/lib/calculator";
import { IMAGES } from "@/lib/properties";
import { FloatCard, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { WhyChoose } from "@/components/why-choose";
import { ReviewsShowcase } from "@/components/reviews-showcase";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { CheckCircle, FileCheck, Shield, Star, Users, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "About us",
  description: `${BRAND.name} helps families and investors turn Dubai property into UAE residency — property advice and visa processing in one team.`,
};

const VALUES = [
  {
    icon: Shield,
    tone: "bg-primary-soft text-primary",
    title: "Eligibility before inventory",
    body: "We confirm your visa route before showing a single home, so every property on your shortlist actually works.",
  },
  {
    icon: Users,
    tone: "bg-teal-soft text-teal",
    title: "One case manager",
    body: "The person you speak to first stays with your file through filing, medical and Emirates ID.",
  },
  {
    icon: FileCheck,
    tone: "bg-[#fff3e3] text-[#d97706]",
    title: "Fees in writing",
    body: "Government fees and our service fee are listed separately and agreed before any work starts.",
  },
];

const TEAM = [
  {
    initials: "BS",
    tone: "bg-primary",
    name: "Bilal Saleem",
    role: "Founder, Brightlink Group",
    body: "Built the direct filing workflows with GDRFA, ICP and Dubai Economy & Tourism that every file runs on today.",
  },
  {
    initials: "PRO",
    tone: "bg-teal",
    name: "Senior PRO case officers",
    role: `${BRAND.pros} licensed PROs`,
    body: "Audit every document, file with GDRFA and ICP, and stay with your family file until the Emirates ID is delivered.",
  },
  {
    initials: "DLD",
    tone: "bg-[#8b5cf6]",
    name: "Property & DLD desk",
    role: "Trustee transfers & valuations",
    body: "Handles title deed audits, DLD trustee transfers and official revaluations for property and Golden Visa files.",
  },
];

const FEES = [
  { label: "Property Visa filing", amount: SERVICE_FEES.property, note: "Main applicant" },
  { label: "Golden Visa filing", amount: SERVICE_FEES.golden, note: "Main applicant" },
  { label: "Family Visa filing", amount: SERVICE_FEES.family, note: "First family member" },
  { label: "Newborn Visa filing", amount: SERVICE_FEES.newborn, note: "Per baby" },
  { label: "Each additional person", amount: SERVICE_FEES.perExtraPerson, note: "On the same file" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About us" }]}
        eyebrow="About us"
        title={
          <>
            We turn Dubai property into <span className="text-primary">UAE residency</span>
          </>
        }
        lead="Buying a home and getting a visa usually means juggling agents, developers, banks and government portals. We bring it all into one team, with one person who knows your file."
        image="/images/properties/coastal-living.svg"
        imageAlt="A case manager talking a couple through their application"
        aside={
          <>
            <FloatCard className="-left-4 top-8 hidden sm:block lg:-left-10">
              <p className="font-display text-[22px] font-bold text-primary">{BRAND.visas}</p>
              <p className="text-[12px] text-muted">visas handled</p>
            </FloatCard>
            <FloatCard className="-bottom-5 right-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff3e3] text-[#d97706]">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <span>
                <span className="block font-display text-[15px] font-semibold text-ink">{BRAND.rating} / 5</span>
                <span className="block text-[12px] text-muted">from {BRAND.reviews}+ clients</span>
              </span>
            </FloatCard>
          </>
        }
      />

      <section className="section bg-white">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative pb-10 pr-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.marinaAerial}
              alt="An aerial view of Dubai Marina"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[28px] object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.cityViewSuite}
              alt="A bright apartment with a city view"
              loading="lazy"
              className="absolute bottom-0 right-0 aspect-square w-[42%] rounded-[24px] border-[6px] border-white object-cover shadow-[0_30px_60px_-30px_rgba(15,30,90,0.5)]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">Property and paperwork, finally in one place</h2>
            <p className="section-lead mt-4">
              We started {BRAND.name} after watching families buy the right home and then lose weeks to the visa —
              documents rejected, appointments missed, nobody owning the file.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body">
              Today our property advisors and visa team work side by side. We check eligibility first, shortlist homes
              that qualify, and carry every application through to the Emirates ID — with fees agreed in writing.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: BRAND.visas, label: "visas handled" },
                { value: `${BRAND.rating}★`, label: "client rating" },
                { value: "1–3 wks", label: "typical timeline" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[20px] bg-mist p-4 text-center">
                  <p className="font-display text-[20px] font-bold text-ink sm:text-[24px]">{stat.value}</p>
                  <p className="mt-1 text-[12.5px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Three promises we keep" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 60} className="h-full">
                <div className="h-full rounded-[28px] bg-white p-7 ring-1 ring-line">
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl ${value.tone}`}>
                      <value.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[40px] font-bold leading-none text-line">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose showStats={false} />

      <section className="section bg-mist">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="The team" title="The people on your file" lead="A small, senior team — you’ll know exactly who is handling your application." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TEAM.map((person, index) => (
              <Reveal key={person.name} delay={index * 60} className="h-full">
                <div className="h-full rounded-[28px] bg-white p-7 text-center ring-1 ring-line">
                  <span
                    className={`mx-auto grid h-20 w-20 place-items-center rounded-full font-display text-[24px] font-bold text-white ring-8 ring-mist ${person.tone}`}
                  >
                    {person.initials}
                  </span>
                  <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">{person.name}</h3>
                  <p className="mt-1 text-[13.5px] font-semibold text-primary">{person.role}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{person.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="section scroll-mt-24 bg-white">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our fees</p>
            <h2 className="section-title mt-4">Simple, published service fees</h2>
            <p className="section-lead mt-4">
              Government fees are paid at cost and itemised separately. Our service fee covers document checks, filing
              and follow-up until your Emirates ID is issued.
            </p>
            <ul className="mt-6 space-y-3">
              {["No fee until the scope is agreed in writing", "No second service fee if we need to resubmit", "Official receipts for every government payment"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-body">
                    <CheckCircle className="h-5 w-5 shrink-0 text-success" /> {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <OpenCalcButton className="btn-gold">
                <CalculatorIcon className="h-4 w-4" /> Estimate my total
              </OpenCalcButton>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask a question
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[28px] ring-1 ring-line">
              {FEES.map((fee, index) => (
                <div
                  key={fee.label}
                  className={`flex items-center justify-between gap-4 px-6 py-5 ${index > 0 ? "border-t border-line" : ""} ${
                    index === 0 ? "bg-primary-soft" : "bg-white"
                  }`}
                >
                  <div>
                    <p className="font-display text-[16px] font-semibold text-ink">{fee.label}</p>
                    <p className="text-[13px] text-muted">{fee.note}</p>
                  </div>
                  <p className="font-display text-[19px] font-bold text-primary tabular">from {formatAed(fee.amount)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ReviewsShowcase />
    </>
  );
}
