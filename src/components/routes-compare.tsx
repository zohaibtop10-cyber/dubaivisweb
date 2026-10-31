import Link from "next/link";
import { GOLDEN_MIN, PROPERTY_MIN, formatAed, mainApplicantFee } from "@/lib/calculator";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { OpenCalcButton } from "@/components/overlay-provider";
import { Building, Key } from "@/components/icons";

const ROUTES: {
  key: "property" | "golden";
  name: string;
  tag: string;
  min: number;
  href: string;
  rows: [string, string][];
}[] = [
  {
    key: "property",
    name: "Property Visa",
    tag: "Renewable 2-year residence",
    min: PROPERTY_MIN,
    href: "/services/property-visa",
    rows: [
      ["Minimum property value", "AED 750,000"],
      ["Visa validity", "2 years, renewable"],
      ["Off-plan property", "Case by case"],
      ["Mortgaged property", "Yes — paid amount counts"],
      ["Family on the same file", "Spouse & children"],
      ["Time outside the UAE", "Up to 6 months at a time"],
    ],
  },
  {
    key: "golden",
    name: "Golden Visa",
    tag: "Renewable 10-year residence",
    min: GOLDEN_MIN,
    href: "/golden-visa",
    rows: [
      ["Minimum property value", "AED 2,000,000"],
      ["Visa validity", "10 years, renewable"],
      ["Off-plan property", "Yes, approved developers"],
      ["Mortgaged property", "Yes — paid amount counts"],
      ["Family on the same file", "Spouse, children & parents"],
      ["Time outside the UAE", "No limit"],
    ],
  },
];

export function RoutesCompare({
  className = "bg-mist",
  eyebrow = "Visa routes",
  title = "Two ways to live in the UAE through property",
  lead = "Your property value decides the visa. Both routes cover your family and renew for as long as you keep the property.",
}: {
  className?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="shell">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {ROUTES.map((route, index) => {
            const golden = route.key === "golden";
            return (
              <Reveal key={route.key} delay={index * 80} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 sm:p-8 ${
                    golden
                      ? "bg-gradient-to-br from-primary to-[#1638b8] text-white shadow-[0_40px_80px_-40px_rgba(37,84,242,0.85)]"
                      : "bg-white ring-1 ring-line"
                  }`}
                >
                  {golden && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[36px] border-white/10"
                    />
                  )}
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl ${
                          golden ? "bg-white/15 text-white" : "bg-primary-soft text-primary"
                        }`}
                      >
                        {golden ? <Key className="h-6 w-6" /> : <Building className="h-6 w-6" />}
                      </span>
                      <h3 className={`mt-5 font-display text-[24px] font-semibold ${golden ? "text-white" : "text-ink"}`}>
                        {route.name}
                      </h3>
                      <p className={`mt-1 text-[14px] ${golden ? "text-white/70" : "text-muted"}`}>{route.tag}</p>
                    </div>
                    {golden && (
                      <span className="rounded-full bg-goldlight px-3 py-1 text-[11.5px] font-semibold text-navydeep">
                        Longest validity
                      </span>
                    )}
                  </div>

                  <dl className={`relative mt-6 divide-y ${golden ? "divide-white/15" : "divide-line"}`}>
                    {route.rows.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 py-3 text-[14px]">
                        <dt className={golden ? "text-white/70" : "text-muted"}>{label}</dt>
                        <dd className={`text-right font-semibold ${golden ? "text-white" : "text-ink"}`}>{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className={`relative mt-6 rounded-2xl px-4 py-3.5 ${golden ? "bg-white/10" : "bg-mist"}`}>
                    <p className={`text-[12.5px] ${golden ? "text-white/70" : "text-muted"}`}>
                      Government fees from (main applicant)
                    </p>
                    <p className={`mt-0.5 font-display text-[22px] font-bold tabular ${golden ? "text-white" : "text-primary"}`}>
                      {formatAed(mainApplicantFee(route.key))}
                    </p>
                  </div>

                  <div className="relative mt-auto flex flex-col gap-2.5 pt-6 sm:flex-row">
                    <OpenCalcButton
                      visa={route.key}
                      preset={{ propertyValue: route.min }}
                      className={`${golden ? "btn-white" : "btn-gold"} flex-1`}
                    >
                      Estimate my fees
                    </OpenCalcButton>
                    <Link href={route.href} className={`${golden ? "btn-ghost-light" : "btn-outline"} flex-1`}>
                      Read the guide
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
