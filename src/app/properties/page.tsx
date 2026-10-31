import type { Metadata } from "next";
import Link from "next/link";
import { getProperties, parseFilters } from "@/lib/properties";
import { formatAed } from "@/lib/format";
import { PageHero } from "@/components/ui";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Building, CheckCircle, Key, Search, Shield } from "@/components/icons";
import { PropertyCard, PropertyFilters } from "@/components/property-cards";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Properties that qualify for a UAE residence visa",
  description:
    "Dubai homes checked against the 2-year Property Visa (AED 750,000+) and 10-year Golden Visa (AED 2M+) thresholds. Filter by area, type, budget and status.",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const PERKS = [
  { icon: Shield, title: "Visa-checked", body: "Every home is screened against both visa thresholds." },
  { icon: Key, title: "Off-market access", body: "Homes that never appear on the big portals." },
  { icon: CheckCircle, title: "Costs in writing", body: "DLD, agency and visa fees listed before you reserve." },
];

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = parseFilters(params);
  const [all, results] = await Promise.all([getProperties(), getProperties(filters)]);
  const lowest = all.length ? Math.min(...all.map((property) => property.priceAed)) : 0;
  const golden = all.filter((property) => property.priceAed >= 2_000_000).length;
  const offplan = all.filter((property) => property.status === "Off-plan").length;

  const stats = [
    { value: String(all.length), label: "homes listed" },
    { value: formatAed(lowest, { compact: true }), label: "entry price" },
    { value: String(golden), label: "Golden Visa homes" },
    { value: String(offplan), label: "off-plan" },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Properties" }]}
        eyebrow="Qualifying properties"
        title={
          <>
            Homes that come with a <span className="text-primary">UAE residence visa</span>
          </>
        }
        lead="Every listing is checked against the 2-year Property Visa and the 10-year Golden Visa thresholds before it reaches this page."
      >
        {stats.map((stat) => (
          <span
            key={stat.label}
            className="inline-flex items-baseline gap-1.5 rounded-full bg-white px-4 py-2 text-[13.5px] text-muted shadow-sm ring-1 ring-line"
          >
            <b className="font-display text-[15px] font-bold text-ink">{stat.value}</b> {stat.label}
          </span>
        ))}
      </PageHero>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="shell">
          <div className="relative z-10 -mt-8 sm:-mt-10">
            <PropertyFilters total={all.length} shown={results.length} />
          </div>

          {results.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((property, index) => (
                <Reveal key={property.slug} delay={Math.min(index * 50, 250)} className="h-full">
                  <PropertyCard property={property} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border-2 border-dashed border-line bg-mist px-6 py-16 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-primary shadow-sm">
                <Search className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-[24px] font-semibold text-ink">No homes match those filters</h2>
              <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                Try widening your budget or area — or tell us what you need and we’ll search our off-market list for you.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/properties" className="btn-gold">
                  Reset filters
                </Link>
                <Link href="#enquire" className="btn-outline">
                  Ask us to search
                </Link>
              </div>
            </div>
          )}

          <p className="mt-8 flex items-center gap-2 text-[13.5px] text-muted">
            <Building className="h-4 w-4 text-primary" />
            Guide prices shown. DLD transfer (4%), agency and visa fees are listed on each property.
          </p>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-24 bg-mist">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Off-market homes</p>
            <h2 className="section-title mt-4">Can’t find the right home?</h2>
            <p className="section-lead mt-4">
              Many of the homes we place never reach the portals. Share your budget and preferred areas, and we’ll send
              a shortlist that clears your visa threshold.
            </p>
            <div className="mt-8 grid gap-4">
              {PERKS.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4 rounded-[22px] bg-white p-4 ring-1 ring-line">
                  <span className="icon-tile">
                    <perk.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-[16px] font-semibold text-ink">{perk.title}</p>
                    <p className="mt-0.5 text-[14px] text-muted">{perk.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm
              source="property"
              defaultInterest="Property search"
              title="Request an off-market shortlist"
              description="Tell us your budget and preferred areas. A property advisor replies within one working day."
              submitLabel="Send my shortlist"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
