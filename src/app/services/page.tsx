import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { OTHER_SERVICES, VISA_SERVICES } from "@/lib/catalog";
import { pickFaqs } from "@/lib/faqs";
import { PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowRight, ArrowUpRight, Check, Users, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "UAE visa & government services in Dubai",
  description:
    "Property Visa, Golden Visa, family, newborn and maid visas, plus Emirates ID, attestation, translation, PRO and DLD trustee services — handled by one team.",
};

const VISA_ORDER = ["property-visa", "golden-visa", "family-visa", "newborn-visa", "maid-visa", "emirates-id"];

const TINTS = [
  "from-[#eef2ff] to-[#dbe4ff]",
  "from-[#fff5e6] to-[#ffe4bf]",
  "from-[#eaf8f0] to-[#cdeedc]",
  "from-[#fdf0f5] to-[#f9d9e7]",
  "from-[#f2efff] to-[#e0d8ff]",
  "from-[#eaf6fd] to-[#cfe9f9]",
];

export default function ServicesPage() {
  const visas = [...VISA_SERVICES].sort((a, b) => VISA_ORDER.indexOf(a.slug) - VISA_ORDER.indexOf(b.slug));
  const featured = visas.slice(0, 2);
  const others = visas.slice(2);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="Our services"
        title={
          <>
            Every visa and government service, <span className="text-primary">under one roof</span>
          </>
        }
        lead="Start with your property visa, then add your family, a newborn or household staff. Attestation, translation, PRO and DLD services are handled by the same team."
      >
        <OpenCalcButton className="btn-gold">
          <CalculatorIcon className="h-4 w-4" /> Visa Calculator
        </OpenCalcButton>
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask on WhatsApp
        </a>
      </PageHero>

      <section className="section bg-white">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Visa services"
              title="Residence visas for you and your family"
              lead="Property-led residence first, then everyone who lives with you."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featured.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80} className="h-full">
                <Link
                  href={service.href}
                  className="group grid h-full overflow-hidden rounded-[28px] bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(15,30,90,0.45)] sm:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className={`relative grid min-h-[220px] place-items-center bg-gradient-to-br p-6 ${TINTS[index]}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="h-44 w-44 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[12px] font-semibold text-ink shadow-sm">
                      {service.tag}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3 className="font-display text-[22px] font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[14.5px] leading-relaxed text-muted">{service.blurb}</p>
                    <ul className="mt-4 space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-[14px] text-body">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                      <span className="text-[14px] font-semibold text-primary">{service.from}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[26px] bg-white p-3 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(15,30,90,0.45)]"
                >
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br ${TINTS[(index + 2) % TINTS.length]}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                    <h3 className="font-display text-[17px] font-semibold text-ink">{service.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-snug text-muted">{service.short}</p>
                    <p className="mt-auto pt-4 text-[13px] font-semibold text-primary">{service.from}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Government & documents"
              title="Paperwork handled by the same team"
              lead="No running between typing centres, notaries and government offices — we coordinate it all on your file."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {OTHER_SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 5) * 40} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[24px] bg-white p-5 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(15,30,90,0.45)]"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt="" loading="lazy" className="h-12 w-12 object-contain mix-blend-multiply" />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold text-ink">{service.title}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{service.tag}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[13px] font-semibold text-primary transition-all group-hover:gap-2">
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Get started" title="Three easy ways to begin" />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-[#1638b8] p-7 text-white">
                <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[28px] border-white/10" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <CalculatorIcon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-[21px] font-semibold">Estimate your fees</h3>
                <p className="relative mt-2 text-[14.5px] leading-relaxed text-white/80">
                  Answer a few questions and see every government fee in about a minute.
                </p>
                <OpenCalcButton className="btn-white relative mt-6">Open calculator</OpenCalcButton>
              </div>
            </Reveal>
            <Reveal delay={60} className="h-full">
              <div className="h-full rounded-[28px] bg-[#e9faf0] p-7 ring-1 ring-[#c9eed8]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-whatsapp text-white">
                  <WhatsApp className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[21px] font-semibold text-ink">Message a case manager</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  Send a quick message and get an answer — usually within minutes during working hours.
                </p>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green mt-6">
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div className="h-full rounded-[28px] bg-navy p-7 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <Users className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[21px] font-semibold">Book a consultation</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">
                  A free call to map your route, documents and costs before you commit to anything.
                </p>
                <Link href="/contact" className="btn-white mt-6">
                  Book a free call
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection categories={pickFaqs("general", "property", "fees")} className="bg-mist" />
    </>
  );
}
