import { SERVICE_FEES, formatAed, mainApplicantFee, personFee } from "@/lib/calculator";

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "Do I need to visit a typing centre or your office?",
        answer:
          "No. Upload your documents from your phone or send them on WhatsApp — our team handles every government filing. The only in-person steps are the medical test and Emirates ID biometrics, and we book VIP slots around your schedule.",
      },
      {
        question: "Can my family complete their visa while staying inside the UAE?",
        answer:
          "Yes. We can file an in-country change of status, so your family doesn’t need to leave and re-enter the UAE. If they’re still abroad, we file an entry permit so they can travel on it.",
      },
      {
        question: "Which emirates do you cover?",
        answer:
          "All seven. Most of our files are in Dubai, Abu Dhabi and Sharjah, and our insured courier collects and delivers documents across every emirate.",
      },
      {
        question: "How fast is the process?",
        answer:
          "Many approvals come through within 24–48 hours of a complete file, and most property and Golden Visa files finish within one to two weeks. Attesting certificates issued abroad usually takes longest, so we start that first.",
      },
    ],
  },
  {
    id: "property",
    label: "Property Visa",
    items: [
      {
        question: "What’s the minimum property value for a property visa?",
        answer:
          "AED 750,000 for the property investor residence visa, filed through the DLD trustee channel. Joint owners need their own share to reach the minimum, and for mortgaged homes the amount you’ve paid counts.",
      },
      {
        question: "Are off-plan properties accepted?",
        answer:
          "Yes — off-plan units from approved developers can qualify once they’re registered with the Dubai Land Department (Oqood). We check your unit and the developer’s documents before you apply.",
      },
      {
        question: "I bought for AED 1.5M and it’s now worth more. Can I get a Golden Visa?",
        answer:
          "Possibly. An official DLD revaluation certifies your property’s current value. If the certified value is AED 2 million or more, it can support a 10-year Golden Visa application — we arrange the valuation for you.",
      },
      {
        question: "Can I sponsor my family on a property visa?",
        answer: "Yes. Property visa holders can add their spouse and children to the same file, and everyone renews together.",
      },
    ],
  },
  {
    id: "golden",
    label: "Golden Visa",
    items: [
      {
        question: "Can I get a Golden Visa with a mortgaged property?",
        answer:
          "Yes, provided you’ve paid at least AED 2,000,000 of the property’s value to the bank or developer, or hold the relevant NOC from your bank.",
      },
      {
        question: "Can I combine multiple properties?",
        answer: "Yes. You can combine up to three properties in your name to reach the AED 2,000,000 threshold.",
      },
      {
        question: "How long can I stay outside the UAE with a Golden Visa?",
        answer:
          "There’s no limit. Unlike a standard residence visa, the Golden Visa doesn’t lapse if you spend more than six months abroad.",
      },
      {
        question: "Do I lose my Golden Visa if I leave my job?",
        answer:
          "Not on the property route — your visa is linked to your property, not an employer. Salary-based Golden Visas are reviewed if the qualifying job changes.",
      },
    ],
  },
  {
    id: "family",
    label: "Family & newborn",
    items: [
      {
        question: "What salary do I need to sponsor my wife and children?",
        answer:
          "In Dubai the usual threshold is a monthly salary of AED 4,000, or AED 3,000 with company accommodation. Property and Golden Visa holders sponsor through their own residence instead.",
      },
      {
        question: "Can a female resident sponsor her husband and children?",
        answer: "Yes, as long as she meets the salary and housing requirements. We confirm the exact criteria for your case before filing.",
      },
      {
        question: "Which attestations do I need for family sponsorship?",
        answer:
          "Marriage and birth certificates issued outside the UAE need four stamps — notary, foreign ministry, UAE embassy and UAE MOFA — plus a legal Arabic translation if they aren’t in Arabic or English.",
      },
      {
        question: "How long do parents have to file a newborn visa?",
        answer:
          "120 days from the date of birth for babies born in the UAE. After that, daily fines can apply — so we start as soon as the birth certificate is issued.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees & payments",
    items: [
      {
        question: "Are government fees included in your pricing?",
        answer:
          "Government fees are billed at exact cost and listed line by line, with official ministry receipts. Our service fee is quoted separately — there are no hidden markups or typing surcharges.",
      },
      {
        question: "How much does a property visa cost?",
        answer: `Government fees start at ${formatAed(
          mainApplicantFee("property"),
        )} for the main applicant, covering the DLD file, entry permit, change of status, medical test, Emirates ID and visa stamping. Our filing fee starts at ${formatAed(
          SERVICE_FEES.property,
        )}.`,
      },
      {
        question: "How much does a Golden Visa cost?",
        answer: `Government fees start at ${formatAed(
          mainApplicantFee("golden"),
        )} for a property owner, including the DLD file and a 10-year Emirates ID. Each adult family member adds ${formatAed(
          personFee("golden", { adult: true }),
        )}, and each child ${formatAed(personFee("golden", { adult: false }))}.`,
      },
      {
        question: "Is there a refundable deposit?",
        answer:
          "For some visas, yes — parents’ residence visas and domestic worker visas usually need a refundable GDRFA deposit. We list it separately in your quote.",
      },
    ],
  },
];

export function pickFaqs(...ids: string[]): FaqCategory[] {
  return FAQ_CATEGORIES.filter((category) => ids.includes(category.id));
}
