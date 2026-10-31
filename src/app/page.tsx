import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { FAQ_CATEGORIES } from "@/lib/faqs";
import { getProperties } from "@/lib/properties";
import { DubaiIntro } from "@/components/dubai-intro";
import { HomeHero } from "@/components/home-hero";
import { Achievements } from "@/components/achievements";
import { ServicesShowcase } from "@/components/services-showcase";
import { ProcessRoad, type RoadStep } from "@/components/process-road";
import { SupportSection } from "@/components/property-support";
import { WhyChoose } from "@/components/why-choose";
import { FaqSection } from "@/components/faq-section";
import { ReviewsShowcase } from "@/components/reviews-showcase";
import { ArticlesBento } from "@/components/articles-bento";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { WhatsApp } from "@/components/icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dubai Property Visa, Golden Visa & Family Residency — 100% Online",
  description: `${BRAND.headline} ${BRAND.subtagline}`,
};

const HOME_STEPS: RoadStep[] = [
  {
    title: "Free eligibility check",
    when: "Day 1",
    image: "/images/process/step-1.svg",
    body: "Get your exact government fees in 30 seconds with the calculator — or message a case officer on WhatsApp.",
  },
  {
    title: "Title deed audit",
    when: "Days 1–2",
    image: "/images/process/step-2.svg",
    body: "We verify your DLD records — including mortgaged equity or multiple title deeds — and secure pre-approval.",
  },
  {
    title: "Documents & pre-flight audit",
    when: "Days 2–3",
    image: "/images/process/step-3.svg",
    body: "Send documents from your phone. A licensed senior PRO audits every file before anything is submitted.",
  },
  {
    title: "ICP / GDRFA nomination",
    when: "Days 3–5",
    image: "/images/process/step-4.svg",
    body: "Your file is submitted for the official visa nomination and tracked until approval — often within 24–48 hours.",
  },
  {
    title: "VIP medical & biometrics",
    when: "Days 4–7",
    image: "/images/process/step-5.svg",
    body: "A 30-minute fast-track medical at an executive lounge, plus Emirates ID biometrics, booked around your schedule.",
  },
  {
    title: "Emirates ID delivered",
    when: "Days 5–10",
    image: "/images/process/step-6.svg",
    body: "Your visa is issued and your Emirates ID is couriered to your door — then we add your family to the same file.",
  },
];

export default async function HomePage() {
  const properties = await getProperties({ limit: 9 });
  const showcase = properties.map((property) => ({ ...property, createdAt: undefined }));

  return (
    <>
      {/* 0. Cinematic Dubai Cutout Horizontal Split Intro Animation (Image 2) */}
      <DubaiIntro />

      {/* 1. Hero */}
      <HomeHero />

      {/* 2. Achievements */}
      <Achievements />

      {/* 3. Services */}
      <ServicesShowcase />

      {/* 4. Process */}
      <ProcessRoad
        id="home-road"
        steps={HOME_STEPS}
        eyebrow="How it works"
        title="Your road to UAE residency"
        lead="Six clear steps from your first message to the Emirates ID at your door — and you always know which one you’re on."
        finishLabel="Emirates ID at your door"
        footer={
          <>
            <OpenCalcButton className="btn-gold">
              <CalculatorIcon className="h-4 w-4" /> Start with a fee estimate
            </OpenCalcButton>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <WhatsApp className="h-4 w-4 text-whatsapp" /> Ask on WhatsApp
            </a>
          </>
        }
      />

      
      <SupportSection />

      {/* 6. Why choose us */}
      <WhyChoose showStats={false} />

      {/* 7. FAQs */}
      <FaqSection categories={FAQ_CATEGORIES} className="bg-[#f3f5f9] border-t border-b border-slate-200/80" />

      {/* 8. Reviews */}
      <ReviewsShowcase />

      {/* 9. Articles */}
      <ArticlesBento />

      {/* 10–12. CTA, referral and footer are rendered site-wide by <SiteFooter /> */}
    </>
  );
}
