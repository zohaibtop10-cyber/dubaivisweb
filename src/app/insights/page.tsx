import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS } from "@/lib/content";
import { PageHero, SectionHeading } from "@/components/ui";
import { ArticlesBento } from "@/components/articles-bento";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Guides to UAE residency",
  description:
    "Plain-English guides to the Dubai property visa, the Golden Visa, family sponsorship, off-plan purchases and the documents you need.",
};

export default function InsightsPage() {
  const categories = Array.from(new Set(INSIGHTS.map((post) => post.category)));
  const more = INSIGHTS.slice(3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Guides" }]}
        eyebrow="Guides"
        title={
          <>
            Plain-English guides to <span className="text-primary">UAE residency</span>
          </>
        }
        lead="Short, practical reads on property visas, the Golden Visa, family sponsorship and fees — written by the people who file the applications."
      >
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-white px-4 py-2 text-[13.5px] font-semibold text-ink shadow-sm ring-1 ring-line">
            {category}
          </span>
        ))}
      </PageHero>

      <ArticlesBento
        posts={INSIGHTS.slice(0, 3)}
        eyebrow="Editor’s picks"
        title="Featured guides"
        lead="Start here if you’re new to the property visa or the Golden Visa."
        showAllLink={false}
      />

      {more.length > 0 && (
        <section className="section bg-mist">
          <div className="shell">
            <Reveal>
              <SectionHeading align="left" eyebrow="More guides" title="Keep reading" />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((post, index) => (
                <Reveal key={post.slug} delay={index * 60} className="h-full">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group flex h-full flex-col rounded-[26px] bg-white p-2.5 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(15,30,90,0.45)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-mist">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[12px] font-semibold text-primary shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                      <p className="text-[12.5px] font-medium text-muted">
                        {post.date} · {post.read}
                      </p>
                      <h3 className="mt-2 font-display text-[18px] font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-[14px] font-semibold text-primary transition-all group-hover:gap-2.5">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
