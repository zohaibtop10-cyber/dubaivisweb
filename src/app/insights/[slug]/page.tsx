import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { INSIGHTS, INSIGHT_BODIES } from "@/lib/content";
import { Breadcrumbs, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowRight, Check, CheckCircle, Clock, WhatsApp } from "@/components/icons";

type PageProps = { params: Promise<{ slug: string }> };

const anchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS.find((item) => item.slug === slug);
  if (!post) return { title: "Guide not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const post = INSIGHTS.find((item) => item.slug === slug);
  const body = INSIGHT_BODIES[slug];
  if (!post || !body) notFound();

  const related = INSIGHTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative px-3 pt-2 sm:px-5">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e4ebff] via-[#f2f5ff] to-[#fdfdff]">
          <div
            aria-hidden="true"
            className="dots pointer-events-none absolute right-0 top-0 h-56 w-80 opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
          />
          <div className="shell relative pb-40 pt-12 text-center sm:pt-16 lg:pb-52">
            <div className="mx-auto max-w-3xl animate-rise">
              <Breadcrumbs crumbs={[{ label: "Guides", href: "/insights" }, { label: post.category }]} center />
              <span className="mt-6 inline-flex rounded-full bg-primary px-3.5 py-1 text-[12.5px] font-semibold text-white">
                {post.category}
              </span>
              <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                {post.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[16.5px] leading-[1.75] text-body">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[13.5px] text-muted">
                <span className="rounded-full bg-white px-3.5 py-1.5 ring-1 ring-line">{post.date}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-line">
                  <Clock className="h-4 w-4 text-primary" /> {post.read}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="shell">
          <div className="relative z-10 mx-auto -mt-32 max-w-5xl overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(15,30,90,0.55)] lg:-mt-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt="" fetchPriority="high" className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]" />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article>
              <p className="text-[19px] font-medium leading-[1.8] text-ink">{body.intro}</p>
              {body.sections.map((section) => (
                <section key={section.heading} id={anchor(section.heading)} className="mt-10 scroll-mt-28">
                  <h2 className="font-display text-[26px] font-semibold leading-snug text-ink">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4 text-[16.5px] leading-[1.85] text-body">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 rounded-2xl bg-mist p-4 text-[14.5px] text-body">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="relative mt-12 overflow-hidden rounded-[28px] bg-navy p-7 text-white sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border-[30px] border-white/[0.06]"
                />
                <p className="eyebrow eyebrow-light relative">Key takeaways</p>
                <ul className="relative mt-5 space-y-3">
                  {body.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-white/85">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-goldlight" /> {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[24px] p-6 ring-1 ring-line">
                <p className="font-display text-[16px] font-semibold text-ink">On this page</p>
                <ul className="mt-4 space-y-1">
                  {body.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${anchor(section.heading)}`}
                        className="flex gap-3 rounded-xl px-2 py-2 text-[14px] text-body transition-colors hover:bg-mist hover:text-primary"
                      >
                        <span className="font-display font-semibold text-primary">0{index + 1}</span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary to-[#1638b8] p-6 text-white">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[24px] border-white/10"
                />
                <p className="relative font-display text-[18px] font-semibold">What will your visa cost?</p>
                <p className="relative mt-1.5 text-[14px] leading-relaxed text-white/80">See every government fee in about a minute.</p>
                <OpenCalcButton className="btn-white relative mt-5 w-full">
                  <CalculatorIcon className="h-4 w-4" /> Open calculator
                </OpenCalcButton>
              </div>
              <div className="rounded-[24px] bg-[#e9faf0] p-6 ring-1 ring-[#c9eed8]">
                <p className="font-display text-[16px] font-semibold text-ink">Have a question about this?</p>
                <p className="mt-1.5 text-[14px] text-muted">Our case managers reply within minutes.</p>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green mt-4 w-full">
                  <WhatsApp className="h-4 w-4" /> Ask on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading
            align="left"
            eyebrow="Keep reading"
            title="Related guides"
            action={
              <Link href="/insights" className="btn-outline">
                All guides <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60} className="h-full">
                <Link
                  href={`/insights/${item.slug}`}
                  className="group flex h-full flex-col rounded-[26px] bg-white p-2.5 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,30,90,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-mist">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                    <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-[12px] font-semibold text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-auto pt-3 text-[12.5px] text-muted">
                      {item.date} · {item.read}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
