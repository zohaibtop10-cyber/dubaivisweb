import type { ComponentType } from "react";
import { BRAND } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { CheckCircle, FileCheck, Google, Shield, Star, Users } from "@/components/icons";

type Stat = {
  value: string;
  label: string;
  note: string;
  icon: ComponentType<{ className?: string }>;
  tone: string;
  star?: boolean;
  highlight?: boolean;
  meter?: boolean;
};

const STATS: Stat[] = [
  { value: BRAND.visas, label: "Visas processed", note: "Property, Golden, family and newborn visas across Dubai, Abu Dhabi and all seven emirates.", icon: FileCheck, tone: "", highlight: true },
  { value: BRAND.approvalRate, label: "ICP approval rate", note: "Zero-rejection SLA", icon: Shield, tone: "", meter: true },
  { value: BRAND.rating, label: "Google rating", note: `${BRAND.reviews} verified reviews`, icon: Google, tone: "", star: true },
  { value: BRAND.stamped, label: "Visas stamped", note: "Express, in-country", icon: CheckCircle, tone: "" },
  { value: BRAND.pros, label: "Senior PROs", note: `Licensed, in-house · all ${BRAND.emirates} emirates`, icon: Users, tone: "" },
];

const BADGES = ["DLD & ICP accredited partner", "100% SLA guarantee", "Government fees at exact cost", "Zero-rejection pre-flight audit"];
const AGENCIES = ["UAE MOFA", "DHA medical", "MOHRE", "Amer centres", "Dubai Land Department"];

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }, (_, star) => (
        <Star key={star} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#07152f] via-[#10163b] to-[#211933] py-14 text-white sm:py-16 lg:py-20">
      <div aria-hidden="true" className="dots pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]" />
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[12px] font-semibold text-white/80">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#47d6bd] to-[#5479ff]" />
              Our track record
            </p>
            <h2 className="mt-5 max-w-[560px] font-display text-[2.5rem] font-bold leading-[1.08] text-white sm:text-5xl">
              Trusted by <span className="font-medium italic text-[#9eb3ff]">{BRAND.visas}</span> families, investors and owners
            </h2>
            <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-white/65 sm:text-base">
              We file directly with GDRFA, ICP and the Dubai Land Department — and licensed senior PROs audit every file
              before it’s submitted, so it’s approved the first time.
            </p>
            <ul className="mt-7 grid max-w-[560px] grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
              {BADGES.map((badge) => (
                <li key={badge} className="flex items-start gap-2.5 text-[13px] font-medium leading-5 text-white/80">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#35d4ad]" />
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:grid-rows-[300px_200px]">
            {STATS.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 50}
                className={`h-full ${stat.highlight ? "col-span-2" : ""}`}
              >
                {stat.highlight ? (
                  <article className="relative h-full min-h-[260px] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#3154df] via-[#2444bc] to-[#173271] p-5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.7)] sm:min-h-[280px] sm:p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{stat.label}</p>
                    <p className="mt-4 font-display text-6xl font-bold leading-none text-white sm:text-7xl">
                      <CountUp value={stat.value} />
                    </p>
                    <p className="mt-3 max-w-[410px] text-[13px] leading-5 text-white/75 sm:text-[14px]">{stat.note}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Property Visa", "Golden Visa", "Family Visa", "Newborn Visa"].map((route) => (
                        <span key={route} className="rounded-full border border-white/10 bg-white/[0.12] px-3 py-1.5 text-[11px] font-semibold text-white/90">
                          {route}
                        </span>
                      ))}
                    </div>
                  </article>
                ) : stat.meter ? (
                  <article className="flex h-full min-h-[205px] flex-col items-center justify-center rounded-[22px] border border-white/[0.08] bg-white/[0.045] p-4 text-center sm:min-h-[280px] sm:p-5">
                    <div className="grid h-[82px] w-[82px] place-items-center rounded-full border-[6px] border-[#28d0b3] shadow-[0_0_26px_-14px_rgba(40,208,179,0.9)] sm:h-[104px] sm:w-[104px] sm:border-[7px]">
                      <span className="font-display text-[18px] font-bold text-white sm:text-[20px]"><CountUp value={stat.value} /></span>
                    </div>
                    <p className="mt-3 text-[12px] font-semibold text-white sm:mt-5 sm:text-[13px]">{stat.label}</p>
                    <p className="mt-1 text-[10px] text-white/55 sm:text-[11px]">{stat.note}</p>
                  </article>
                ) : (
                  <article className="h-full min-h-[168px] rounded-[22px] border border-white/[0.08] bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.075] sm:min-h-[180px] sm:p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.09] text-[#73a1ff] sm:h-10 sm:w-10">
                      <stat.icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                    </span>
                    <p className="mt-3 flex items-center gap-1.5 font-display text-[25px] font-bold leading-none text-white sm:mt-4 sm:text-[28px]">
                      <CountUp value={stat.value} />
                      {stat.star && <Stars className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-white/90 sm:text-[12px]">{stat.label}</p>
                    <p className="mt-1 text-[10px] text-white/55 sm:text-[11px]">{stat.note}</p>
                  </article>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 lg:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-[11px] font-semibold text-white/45">Filed directly with</p>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold text-white/70 sm:justify-end sm:text-[13px]">
              {AGENCIES.map((agency) => <li key={agency}>{agency}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
