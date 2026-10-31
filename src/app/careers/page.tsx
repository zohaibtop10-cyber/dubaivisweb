import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { PageHero, SectionHeading } from "@/components/ui";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { CheckCircle, Clock, Pin, Shield, Star, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${BRAND.name}'s visa and property team in Dubai. Open roles for case managers, property advisors and PRO executives.`,
};

const ROLES = [
  {
    title: "Visa Case Manager",
    type: "Full-time",
    location: "Business Village, Deira",
    body: "Own client files from the first WhatsApp message to the Emirates ID. You’ll prepare documents, track applications and keep families updated.",
    tags: ["ICP & GDRFA", "WhatsApp-first", "Arabic or Hindi a plus"],
  },
  {
    title: "Property Advisor",
    type: "Full-time · RERA",
    location: "Dubai",
    body: "Help buyers find homes that clear the visa threshold. You’ll shortlist, negotiate and manage DLD transfers alongside our visa team.",
    tags: ["RERA certified", "Off-plan & ready", "Client-first"],
  },
  {
    title: "PRO Executive",
    type: "Full-time",
    location: "Dubai",
    body: "Handle typing, submissions and follow-ups across ICP, GDRFA, MOFA and Amer — and make sure nothing sits in a queue.",
    tags: ["Government portals", "Detail-oriented", "Driving licence a plus"],
  },
];

const PERKS = [
  { icon: Clock, tone: "bg-primary-soft text-primary", title: "Predictable hours", body: "A Monday-to-Saturday schedule with clear shifts." },
  { icon: Users, tone: "bg-teal-soft text-teal", title: "Small senior team", body: "Learn quickly alongside experienced advisors." },
  { icon: Star, tone: "bg-[#fff3e3] text-[#d97706]", title: "Shared bonus", body: "Rewards tied to happy, well-served clients." },
  { icon: Shield, tone: "bg-[#f1edff] text-[#6d4aff]", title: "Visa & insurance", body: "UAE residence visa and health insurance provided." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Careers" }]}
        eyebrow="Careers"
        title={
          <>
            Help families make the UAE <span className="text-primary">home</span>
          </>
        }
        lead="We’re a small team that cares about clean files, clear answers and clients who always know the next step. If that sounds like you, we’d love to hear from you."
      />

      <section className="section bg-white">
        <div className="shell">
          <Reveal>
            <SectionHeading align="left" eyebrow="Open roles" title="Where you could fit in" />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ROLES.map((role, index) => (
              <Reveal key={role.title} delay={index * 60} className="h-full">
                <div className="card-lift flex h-full flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-[12px] font-semibold text-primary">{role.type}</span>
                    <span className="inline-flex items-center gap-1 text-[13px] text-muted">
                      <Pin className="h-3.5 w-3.5" /> {role.location}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-semibold text-ink">{role.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{role.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-mist px-3 py-1 text-[12.5px] font-medium text-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#apply" className="link-arrow mt-auto pt-6">
                    Apply for this role
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Why join us" title="What you’ll get" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk, index) => (
              <Reveal key={perk.title} delay={index * 50} className="h-full">
                <div className="h-full rounded-[26px] bg-white p-6 ring-1 ring-line">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${perk.tone}`}>
                    <perk.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-ink">{perk.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{perk.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section scroll-mt-24 bg-white">
        <div className="shell grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Apply</p>
            <h2 className="section-title mt-4">Tell us about yourself</h2>
            <p className="section-lead mt-4">
              Mention the role you’re interested in and a line about your last 12 months. We reply to every application.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "You reply clearly and close loops the same day",
                "You’ve worked with ICP, GDRFA or DLD — or want to learn fast",
                "You’re comfortable telling a client when a route won’t work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-body">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-muted">
              Prefer email? Write to <span className="font-semibold text-ink">{BRAND.email}</span> with “Careers” in the subject.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm
              source="careers"
              title="Send your application"
              description="We read every application and reply within a few working days."
              submitLabel="Submit application"
              compact
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
