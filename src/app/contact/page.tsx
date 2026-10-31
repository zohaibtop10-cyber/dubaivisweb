import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { pickFaqs } from "@/lib/faqs";
import { IMAGES } from "@/lib/properties";
import { PageHero } from "@/components/ui";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { FaqSection } from "@/components/faq-section";
import { ArrowUpRight, Clock, Mail, Phone, Pin, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Talk to a ${BRAND.name} case manager about your Dubai property visa, Golden Visa or family visa. WhatsApp, phone, email or visit us in ${BRAND.address}.`,
};

const INTERESTS = new Set([
  "Golden Visa (AED 2M+)",
  "Property owner visa (AED 750K+)",
  "Family sponsorship",
  "Investment & yield advice",
  "Property search",
  "Referral partnership",
]);

const NEXT_STEPS = [
  "A case manager reads your message and checks your eligibility.",
  "You receive an itemised estimate and a document checklist.",
  "We agree the scope in writing — no fee before that.",
  "We file, follow up and keep you posted on WhatsApp.",
];

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.interest) ? params.interest[0] : params.interest;
  const interest = raw && INTERESTS.has(raw) ? raw : "";

  const channels = [
    {
      icon: WhatsApp,
      tone: "bg-[#e8f9ef] text-[#16a34a]",
      label: "WhatsApp",
      value: "Fastest reply",
      action: "Start a chat",
      href: BRAND.whatsapp,
      external: true,
    },
    { icon: Phone, tone: "bg-primary-soft text-primary", label: "Call us", value: BRAND.phone, action: "Call now", href: BRAND.phoneHref, external: false },
    { icon: Mail, tone: "bg-[#fff3e3] text-[#d97706]", label: "Email", value: BRAND.email, action: "Send an email", href: `mailto:${BRAND.email}`, external: false },
    { icon: Pin, tone: "bg-[#f1edff] text-[#6d4aff]", label: "Visit us", value: BRAND.address, action: "Get directions", href: BRAND.maps, external: true },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Talk to a <span className="text-primary">case manager</span>
          </>
        }
        lead="Tell us about your property and family. We’ll confirm the right visa and send an itemised estimate — usually within the hour."
      />

      <section className="bg-white">
        <div className="shell">
          <div className="relative z-10 -mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-[24px] bg-white p-5 shadow-[0_24px_50px_-32px_rgba(15,30,90,0.5)] ring-1 ring-line transition-all duration-300 hover:-translate-y-1"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${channel.tone}`}>
                  <channel.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[13px] text-muted">{channel.label}</p>
                <p className="mt-0.5 truncate font-display text-[16px] font-semibold text-ink">{channel.value}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary">
                  {channel.action} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <LeadForm
              source="consultation"
              defaultInterest={interest}
              title="Send us a message"
              description="Every message is read by a case manager. If we’re not the right fit, we’ll tell you honestly."
              submitLabel="Send my message"
            />
          </Reveal>

          <Reveal delay={80} className="space-y-5">
            <div className="rounded-[28px] bg-navy p-7 text-white">
              <p className="eyebrow eyebrow-light">What happens next</p>
              <ol className="mt-6 space-y-4">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-[14px] font-bold ${
                        index % 2 === 0 ? "bg-primary" : "bg-teal"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-[14.5px] leading-relaxed text-white/80">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMAGES.skylineDusk} alt="The Dubai skyline at dusk" loading="lazy" className="aspect-[16/8] w-full object-cover" />
              <div className="p-6">
                <p className="font-display text-[18px] font-semibold text-ink">Our office</p>
                <ul className="mt-4 space-y-3 text-[14.5px] text-body">
                  <li className="flex items-center gap-3">
                    <Pin className="h-4 w-4 shrink-0 text-primary" /> {BRAND.address}, {BRAND.city}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-primary" /> {BRAND.hours}
                  </li>
                </ul>
                <a href={BRAND.maps} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5">
                  Open in Google Maps <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection categories={pickFaqs("general", "fees")} className="bg-mist" />
    </>
  );
}
