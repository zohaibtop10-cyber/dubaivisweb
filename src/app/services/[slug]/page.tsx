import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { CATALOG, getService } from "@/lib/catalog";
import type { WizardVisa } from "@/lib/calculator";
import { FloatCard, PageHero, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowUpRight, Check, CheckCircle, Clock, FileCheck, Phone, WhatsApp } from "@/components/icons";

type PageProps = { params: Promise<{ slug: string }> };

const CALC_VISA: Record<string, WizardVisa> = {
  "property-visa": "property",
  "golden-visa": "golden",
  "family-visa": "family",
  "newborn-visa": "newborn",
};

const INTEREST: Record<string, string> = {
  "property-visa": "Property owner visa (AED 750K+)",
  "golden-visa": "Golden Visa (AED 2M+)",
  "family-visa": "Family sponsorship",
  "newborn-visa": "Family sponsorship",
};

export function generateStaticParams() {
  return CATALOG.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return { title: `${service.title} in Dubai`, description: service.blurb };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const visa = CALC_VISA[service.slug];
  const related = CATALOG.filter((item) => item.slug !== service.slug && item.category === service.category).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={service.tag}
        title={service.title}
        lead={service.blurb}
        image={service.image}
        imageAlt=""
        imageFit="contain"
        aside={
          <>
            <FloatCard className="-left-4 top-6 hidden sm:block lg:-left-10">
              <p className="text-[12px] text-muted">Pricing</p>
              <p className="font-display text-[16px] font-bold text-primary">{service.from}</p>
            </FloatCard>
            <FloatCard className="-bottom-5 right-6 flex max-w-[260px] items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <span className="text-[12.5px] leading-snug text-body">{service.timeline}</span>
            </FloatCard>
          </>
        }
      >
        {visa ? (
          <OpenCalcButton visa={visa} className="btn-gold">
            <CalculatorIcon className="h-4 w-4" /> Calculate my fees
          </OpenCalcButton>
        ) : (
          <a href="#enquire" className="btn-gold">
            Request a quote
          </a>
        )}
        <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask on WhatsApp
        </a>
      </PageHero>

      <section className="section bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:gap-12">
          <div className="space-y-12">
            <Reveal>
              <p className="eyebrow">At a glance</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-[14px] font-medium text-primary">
                    <CheckCircle className="h-4 w-4" /> {point}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-[26px] font-semibold text-ink">What’s included</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-[20px] bg-mist p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display text-[13px] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-[14.5px] leading-snug text-body">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[24px] p-6 ring-1 ring-line">
                  <span className="icon-tile">
                    <FileCheck className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[19px] font-semibold text-ink">Documents you’ll need</h3>
                  <ul className="mt-3 space-y-2.5">
                    {service.docs.map((doc) => (
                      <li key={doc} className="flex items-start gap-2.5 text-[14px] leading-snug text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] bg-navy p-6 text-white">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[19px] font-semibold">Timeline &amp; pricing</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/75">{service.timeline}</p>
                  <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 font-display text-[16px] font-semibold">{service.from}</p>
                  <p className="mt-3 text-[12.5px] text-white/60">Government fees are paid at cost and itemised separately.</p>
                </div>
              </div>
            </Reveal>

            {service.faqs.length > 0 && (
              <Reveal>
                <h2 className="font-display text-[26px] font-semibold text-ink">Common questions</h2>
                <div className="mt-5">
                  <Faq items={service.faqs} idPrefix={`${service.slug}-faq`} />
                </div>
              </Reveal>
            )}
          </div>

          <aside id="enquire" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
            <LeadForm
              source="consultation"
              defaultInterest={INTEREST[service.slug] ?? ""}
              title={`Enquire about ${service.title}`}
              description="Tell us your situation. We reply with eligibility, documents and an itemised fee sheet."
              submitLabel="Request a quote"
              compact
            />
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <a href={BRAND.phoneHref} className="btn-outline !px-3">
                <Phone className="h-4 w-4 text-primary" /> Call us
              </a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green !px-3">
                <WhatsApp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-mist">
          <div className="shell">
            <SectionHeading align="left" eyebrow="Related" title="You might also need" />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-[24px] bg-white p-4 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(15,30,90,0.45)]"
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-mist">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" loading="lazy" className="h-14 w-14 object-contain mix-blend-multiply" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[16px] font-semibold text-ink">{item.title}</span>
                    <span className="block truncate text-[13px] text-muted">{item.from}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
