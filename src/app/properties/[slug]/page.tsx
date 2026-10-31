import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { getPropertyBySlug, getRelatedProperties } from "@/lib/properties";
import { formatAed, formatNumber } from "@/lib/format";
import { mainApplicantFee } from "@/lib/calculator";
import { assessEligibility } from "@/lib/visa";
import { Breadcrumbs, SectionHeading } from "@/components/ui";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { Area, Bath, Bed, Building, Check, CheckCircle, Clock, Key, Pin, WhatsApp } from "@/components/icons";
import { PropertyCard } from "@/components/property-cards";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: "Property not found" };
  return {
    title: `${property.title}, ${property.area}`,
    description: `${property.bedrooms}-bedroom ${property.propertyType.toLowerCase()} in ${property.area} for ${formatAed(
      property.priceAed,
    )}. ${property.description.slice(0, 120)}…`,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const related = await getRelatedProperties(property);
  const assessment = assessEligibility({ priceAed: property.priceAed });
  const golden = assessment.tier === "golden";
  const route = golden ? "golden" : "property";
  const dld = Math.round(property.priceAed * 0.04);
  const agency = Math.round(property.priceAed * 0.02);
  const trustee = 4_200;
  const visaFees = mainApplicantFee(route);
  const total = property.priceAed + dld + agency + trustee + visaFees;
  const perSqft = Math.round(property.priceAed / property.sizeSqft);
  const gallery = [property.imageUrl, ...property.gallery.filter((image) => image !== property.imageUrl)].slice(0, 3);
  const interest = golden ? "Golden Visa (AED 2M+)" : "Property owner visa (AED 750K+)";
  const budget =
    property.priceAed >= 15_000_000
      ? "AED 15M+"
      : property.priceAed >= 5_000_000
        ? "AED 5M – 15M"
        : property.priceAed >= 2_000_000
          ? "AED 2M – 5M"
          : "AED 1M – 2M";

  const facts = [
    { icon: Bed, label: "Bedrooms", value: String(property.bedrooms) },
    { icon: Bath, label: "Bathrooms", value: String(property.bathrooms) },
    { icon: Area, label: "Internal area", value: `${formatNumber(property.sizeSqft)} sqft` },
    { icon: Clock, label: "Handover", value: property.status === "Off-plan" ? property.handover ?? "TBC" : "Ready" },
  ];

  const costs = [
    { label: "Guide price", amount: property.priceAed },
    { label: "DLD transfer fee (4%)", amount: dld },
    { label: "Agency fee (2%)", amount: agency },
    { label: "Trustee & admin fees", amount: trustee },
    { label: golden ? "Golden Visa government fees" : "Property Visa government fees", amount: visaFees },
  ];

  return (
    <>
      <section className="bg-white pt-6">
        <div className="shell">
          <Breadcrumbs crumbs={[{ label: "Properties", href: "/properties" }, { label: property.title }]} />

          <div className="mt-6 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-mist">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[0]}
                alt={`${property.title} — main view`}
                fetchPriority="high"
                className="aspect-[16/10] h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold shadow-sm ${
                    golden ? "bg-goldlight text-navydeep" : "bg-white text-primary"
                  }`}
                >
                  {golden ? "Golden Visa eligible" : "Property Visa eligible"}
                </span>
                <span className="rounded-full bg-navydeep/60 px-3.5 py-1.5 text-[12.5px] font-medium text-white backdrop-blur">
                  {property.status === "Off-plan" ? `Off-plan · ${property.handover ?? "TBC"}` : "Ready to move in"}
                </span>
              </div>
            </div>
            <div className="hidden gap-3 lg:grid">
              {gallery.slice(1, 3).map((image, index) => (
                <div key={`${image}-${index}`} className="overflow-hidden rounded-[28px] bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${property.title} — view ${index + 2}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-1.5 text-[14px] text-muted">
                <Pin className="h-4 w-4 text-primary" /> {property.area} · by {property.developer}
              </p>
              <h1 className="mt-2 font-display text-[clamp(2rem,1.4rem+2.4vw,3.1rem)] font-bold leading-tight tracking-[-0.03em] text-ink">
                {property.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {facts.slice(0, 3).map((fact) => (
                  <span
                    key={fact.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3.5 py-1.5 text-[13.5px] font-medium text-body"
                  >
                    <fact.icon className="h-4 w-4 text-primary" /> {fact.value} {fact.label.toLowerCase()}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3.5 py-1.5 text-[13.5px] font-medium text-body">
                  <Building className="h-4 w-4 text-primary" /> {property.propertyType}
                </span>
              </div>
            </div>
            <div className="lg:text-right">
              <p className="font-display text-[clamp(1.9rem,1.5rem+1.4vw,2.6rem)] font-bold leading-none text-primary">
                {formatAed(property.priceAed)}
              </p>
              <p className="mt-2 text-[14px] text-muted">
                {formatNumber(perSqft)} AED / sqft
                {property.rentalYield ? ` · ${property.rentalYield}% gross yield` : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-10 lg:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[1.5fr_0.9fr] lg:gap-12">
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-[22px] bg-mist p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display text-[16px] font-semibold text-ink">{fact.value}</p>
                  <p className="text-[12.5px] text-muted">{fact.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-[24px] font-semibold text-ink">About this home</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-body">{property.description}</p>
            </div>

            <div>
              <h2 className="font-display text-[24px] font-semibold text-ink">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 rounded-2xl bg-mist p-4 text-[14.5px] text-body">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative overflow-hidden rounded-[28px] p-6 sm:p-8 ${
                golden ? "bg-gradient-to-br from-primary to-[#1638b8] text-white" : "bg-primary-soft text-ink"
              }`}
            >
              {golden && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border-[32px] border-white/10"
                />
              )}
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className={`text-[12.5px] font-semibold uppercase tracking-[0.12em] ${golden ? "text-white/70" : "text-primary"}`}>
                    Your visa with this home
                  </p>
                  <h2 className="mt-2 font-display text-[24px] font-semibold">{assessment.label}</h2>
                </div>
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    golden ? "bg-white/15 text-white" : "bg-white text-primary"
                  }`}
                >
                  {golden ? <Key className="h-6 w-6" /> : <Building className="h-6 w-6" />}
                </span>
              </div>
              <p className={`relative mt-3 text-[15px] leading-relaxed ${golden ? "text-white/80" : "text-body"}`}>
                {assessment.summary}
              </p>
              <div className="relative mt-5">
                <div className={`h-2 overflow-hidden rounded-full ${golden ? "bg-white/20" : "bg-white"}`}>
                  <div
                    className={`h-full rounded-full ${golden ? "bg-goldlight" : "bg-primary"}`}
                    style={{ width: `${assessment.progressToGolden}%` }}
                  />
                </div>
                <p className={`mt-2 text-[13px] ${golden ? "text-white/70" : "text-muted"}`}>
                  {golden
                    ? "Above the AED 2,000,000 Golden Visa threshold"
                    : `${assessment.progressToGolden}% of the way to the AED 2,000,000 Golden Visa threshold`}
                </p>
              </div>
              <ul className="relative mt-5 grid gap-2 sm:grid-cols-2">
                {assessment.perks.slice(0, 4).map((perk) => (
                  <li key={perk} className={`flex items-start gap-2 text-[14px] ${golden ? "text-white/90" : "text-body"}`}>
                    <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${golden ? "text-goldlight" : "text-success"}`} />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-[24px] font-semibold text-ink">What you’ll pay</h2>
              <div className="mt-4 overflow-hidden rounded-[24px] ring-1 ring-line">
                <table className="fee-table">
                  <tbody>
                    {costs.map((cost) => (
                      <tr key={cost.label}>
                        <td>{cost.label}</td>
                        <td>{formatAed(cost.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-between bg-navy px-5 py-4 text-white">
                  <span className="text-[14px] font-semibold">Estimated total</span>
                  <span className="font-display text-[20px] font-bold tabular">{formatAed(total)}</span>
                </div>
              </div>
              <p className="mt-3 text-[13px] text-muted">
                Indicative figures for the main applicant. Mortgage costs and VAT are extra; a written cost sheet is
                issued before you reserve.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(15,30,90,0.5)] ring-1 ring-line">
              <p className="text-[13px] text-muted">Guide price</p>
              <p className="font-display text-[30px] font-bold leading-tight text-ink">{formatAed(property.priceAed)}</p>
              <div className="mt-5 space-y-3 border-y border-line py-5 text-[14px]">
                {[
                  ["Developer", property.developer],
                  ["Type", property.propertyType],
                  ["Status", property.status],
                  ["Visa route", golden ? "10-year Golden Visa" : "2-year Property Visa"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-muted">{label}</span>
                    <span className="text-right font-semibold text-ink">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2.5">
                <a href="#enquire" className="btn-gold w-full">
                  Enquire about this home
                </a>
                <OpenCalcButton
                  visa={route}
                  preset={{ propertyValue: property.priceAed, propertyStatus: property.status === "Off-plan" ? "offplan" : "ready" }}
                  className="btn-outline w-full"
                >
                  <CalculatorIcon className="h-4 w-4 text-primary" /> Estimate my visa fees
                </OpenCalcButton>
                <a
                  href={`${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I’d like details on ${property.title} (${property.area}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green w-full"
                >
                  <WhatsApp className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
              <p className="mt-4 text-center text-[12.5px] text-muted">A property advisor replies within one working day.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-24 bg-mist">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Private viewing</p>
            <h2 className="section-title mt-4">Interested in {property.title}?</h2>
            <p className="section-lead mt-4">
              We’ll send the full brochure, title documents, service-charge history and a written cost sheet — then
              arrange a viewing in person or by video call.
            </p>
            <ul className="mt-6 space-y-3">
              {["Floor plans and brochure", "Service-charge history", "Written cost sheet", "Visa eligibility in writing"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-body">
                  <CheckCircle className="h-5 w-5 text-success" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm
              source="property"
              propertySlug={property.slug}
              defaultInterest={interest}
              defaultBudget={budget}
              title={`Request details on ${property.title}`}
              description="Every enquiry is reviewed by a property advisor before we reply."
              submitLabel="Request brochure & costs"
              compact
            />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-white">
          <div className="shell">
            <SectionHeading align="left" eyebrow="Keep exploring" title="Similar homes you may like" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 60} className="h-full">
                  <PropertyCard property={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
