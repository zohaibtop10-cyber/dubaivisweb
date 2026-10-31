import { BRAND } from "@/lib/brand";

export const CONTACT = {
  phone: BRAND.phone,
  phoneHref: BRAND.phoneHref,
  whatsapp: BRAND.whatsapp,
  email: BRAND.email,
  address: BRAND.address,
  city: BRAND.city,
  hours: BRAND.hours,
  licence: BRAND.licence,
  rating: BRAND.rating,
  reviews: BRAND.reviews,
} as const;

export const TRUST_STATS = [
  { value: "1,200+", label: "Visas & transfers handled" },
  { value: "AED 1.4B", label: "Property transacted" },
  { value: "10+", label: "Years advising in Dubai" },
  { value: "4.9/5", label: "Google rating" },
] as const;

export type Service = {
  slug: string;
  icon: "key" | "building" | "users" | "idcard" | "file" | "bank";
  title: string;
  tag: string;
  blurb: string;
  from: string;
  points: string[];
  href: string;
};

export const SERVICES: Service[] = [
  {
    slug: "property-visa",
    icon: "building",
    title: "Property Owner Visa",
    tag: "2 years · renewable",
    blurb:
      "Residence in your own name through freehold property from AED 750,000 — ready or off-plan, cash or mortgaged.",
    from: "From AED 750,000 property",
    points: ["Freehold & Oqood accepted", "Sponsor spouse & children", "Renewable while you hold the asset"],
    href: "/services#property-visa",
  },
  {
    slug: "golden-visa",
    icon: "key",
    title: "Golden Visa",
    tag: "10 years · renewable",
    blurb:
      "The UAE's long-term investor visa through AED 2,000,000 of qualifying property. No sponsor, no minimum stay.",
    from: "From AED 2,000,000 property",
    points: ["Family & staff sponsored", "No minimum stay requirement", "Complimentary eligibility review"],
    href: "/golden-visa",
  },
  {
    slug: "family-visa",
    icon: "users",
    title: "Family Sponsorship",
    tag: "Spouse · children · parents",
    blurb:
      "Add your spouse, children and parents to your residence file with the salary, housing and document criteria checked up front.",
    from: "From AED 4,500 per dependent",
    points: ["Eligibility & salary check", "Medical and Emirates ID booked", "Parents and newborn routes"],
    href: "/services#family-visa",
  },
  {
    slug: "emirates-id",
    icon: "idcard",
    title: "Emirates ID & Medical",
    tag: "5 – 7 working days",
    blurb:
      "Typing, medical screening, biometrics and ICP submission handled end to end, with slots booked around your schedule.",
    from: "From AED 12,000",
    points: ["Medical at home or centre", "Biometrics appointment booked", "Digital visa & ICP follow-up"],
    href: "/services#emirates-id",
  },
  {
    slug: "attestation",
    icon: "file",
    title: "Document Attestation",
    tag: "Marriage · birth · degree",
    blurb:
      "Certificates legalised through notary, foreign ministry, UAE embassy and MOFA — with collection and rider service.",
    from: "From AED 1,200 per document",
    points: ["Four-stage legalisation", "Doorstep document collection", "Arabic translation included"],
    href: "/services#attestation",
  },
  {
    slug: "banking",
    icon: "bank",
    title: "Bank Account Opening",
    tag: "Non-resident & resident",
    blurb:
      "Introductions to UAE retail and private banks, with your residency, source-of-funds and property file prepared for compliance.",
    from: "From AED 2,000",
    points: ["Personal & corporate accounts", "Source-of-funds pack prepared", "Property income structuring"],
    href: "/services#banking",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Free eligibility check",
    body: "A 20-minute call or WhatsApp thread. We confirm the route, the property threshold and every government fee before you commit.",
    icon: "file" as const,
  },
  {
    step: "02",
    title: "Property shortlist",
    body: "We match you to freehold residences that clear the threshold, with comparable sales, service charges and yield modelled.",
    icon: "building" as const,
  },
  {
    step: "03",
    title: "Acquisition & transfer",
    body: "Reservation, DLD transfer or Oqood registration, payment plan and the 4% DLD fee — our RERA brokers handle negotiation.",
    icon: "key" as const,
  },
  {
    step: "04",
    title: "Medical & Emirates ID",
    body: "Medical screening, biometrics and ICP submission filed by our in-house PRO team. We book the slots and chase the approvals.",
    icon: "idcard" as const,
  },
  {
    step: "05",
    title: "Visa issued & renewal",
    body: "Residence stamped, Emirates ID delivered, family added. Renewals diarised for the life of the asset.",
    icon: "users" as const,
  },
];

export const WHY_US = [
  {
    title: "Written eligibility before you buy",
    body: "We model your property value against the Golden Visa and property visa thresholds — including joint ownership and paid-up mortgage value — and put the opinion in writing.",
  },
  {
    title: "Licensed brokers and in-house PROs",
    body: "A DET-licensed brokerage with RERA-registered brokers and a PRO team that files directly through ICP and GDRFA channels. No outsourcing, no call centres.",
  },
  {
    title: "Government fees itemised upfront",
    body: "DLD 4%, agency 2%, trustee, medical, Emirates ID and typing — every line disclosed before you pay a deposit. Our quote matches the final invoice.",
  },
  {
    title: "One advisor, start to Emirates ID",
    body: "The person who takes your first call owns the file through transfer, medical and visa issuance. WhatsApp updates at every stage.",
  },
  {
    title: "Off-plan plans built around the visa",
    body: "Payment plans structured so your paid-up value crosses the threshold sooner, with Oqood registration accepted for residency.",
  },
  {
    title: "Renewals and family for the long term",
    body: "We keep your file after issuance — adding dependants, managing renewals and advising before any sale or restructuring.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Obtained my 10-year Golden Visa in 4 business days based on my Dubai Marina title deed. The direct PRO filing bypassed every counter and queue.",
    name: "Alexander V.",
    role: "Tech Entrepreneur",
    detail: "Golden Visa · Dubai Marina",
    initials: "AV",
    when: "2 weeks ago",
  },
  {
    quote:
      "We relocated our entire family and domestic staff to Palm Jumeirah. The team handled the MOFA attestations, VIP medicals and Emirates IDs seamlessly.",
    name: "Elena Rostova",
    role: "Family Office Principal",
    detail: "Family Visa · Palm Jumeirah",
    initials: "ER",
    when: "1 month ago",
  },
  {
    quote:
      "Completely transparent government fees with official receipts and no undisclosed charges. Their 24-hour fast-track turnaround is the gold standard.",
    name: "Marc & Sophie Dubois",
    role: "Executive Directors",
    detail: "Fast-track visa · Dubai",
    initials: "MD",
    when: "3 weeks ago",
  },
  {
    quote:
      "From our newborn’s visa to a DLD property revaluation, they handle every family requirement with real professionalism. Truly first-class.",
    name: "Dr. Tariq Al-Hashimi",
    role: "Consultant Surgeon",
    detail: "Newborn Visa · Dubai",
    initials: "TA",
    when: "1 month ago",
  },
  {
    quote:
      "Our DLD title deed valuation was completed without visiting the land department, and the VIP Emirates ID appointment took under 20 minutes.",
    name: "James Pemberton",
    role: "Investment Principal",
    detail: "Property revaluation · Dubai",
    initials: "JP",
    when: "2 months ago",
  },
  {
    quote:
      "Superb Tadbeer and domestic helper sponsorship. Contract, insurance and medical were coordinated end to end with total transparency.",
    name: "Sarah Jenkins",
    role: "Corporate Manager",
    detail: "Maid Visa · Dubai",
    initials: "SJ",
    when: "3 weeks ago",
  },
] as const;

export const INSIGHTS = [
  {
    slug: "golden-visa-property-threshold-2026",
    title: "Golden Visa property threshold in 2026: what actually counts",
    excerpt:
      "Purchase price, paid-up value, joint ownership and Oqood registration — we break down how the AED 2M threshold is assessed in practice.",
    category: "Golden Visa",
    date: "12 Feb 2026",
    read: "7 min read",
    image: "/images/properties/skyline-dusk.svg",
  },
  {
    slug: "property-visa-750k-explained",
    title: "The AED 750,000 property visa, explained without the jargon",
    excerpt:
      "Who qualifies, what the two-year residence covers, how off-plan and mortgages are treated, and what it really costs to file.",
    category: "Residency",
    date: "28 Jan 2026",
    read: "5 min read",
    image: "/images/properties/marina-water.svg",
  },
  {
    slug: "dubai-yield-guide-2026",
    title: "Where the yield is in Dubai in 2026 — and where it is not",
    excerpt:
      "Marina, JVC, Business Bay and Palm Jumeirah compared on gross yield, service charge and realistic occupancy.",
    category: "Investment",
    date: "09 Jan 2026",
    read: "9 min read",
    image: "/images/properties/marina-reflections.svg",
  },
  {
    slug: "family-visa-through-property-2026",
    title: "Bringing your family on a property visa: who you can sponsor",
    excerpt:
      "Spouse, children and parents — what each route allows, which documents you need and where attestation fits into the timeline.",
    category: "Family",
    date: "18 Dec 2025",
    read: "6 min read",
    image: "/images/properties/coastal-living.svg",
  },
  {
    slug: "off-plan-golden-visa-payment-plans",
    title: "Off-plan property and the Golden Visa: how payment plans fit in",
    excerpt:
      "Which off-plan purchases can qualify, what the developer needs to provide and how to time your application around the payment schedule.",
    category: "Golden Visa",
    date: "02 Dec 2025",
    read: "6 min read",
    image: "/images/properties/dining.svg",
  },
  {
    slug: "property-visa-document-checklist",
    title: "Your property visa document checklist, step by step",
    excerpt:
      "Everything to prepare for you, your property and your family before you apply — so nothing holds the application up.",
    category: "Residency",
    date: "18 Nov 2025",
    read: "4 min read",
    image: "/images/properties/kitchen.svg",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "What is the minimum property value for a UAE residence visa?",
    answer:
      "Freehold property from AED 750,000 qualifies for a renewable two-year property owner residence visa. At AED 2,000,000 of qualifying value you move into the 10-year Golden Visa bracket. Qualifying value is assessed on your ownership share and, for mortgaged property, the paid-up amount. Final approval rests with the ICP and Dubai Land Department.",
  },
  {
    question: "Can I apply for the visa with an off-plan purchase?",
    answer:
      "Yes. Off-plan property registered with the DLD under an Oqood contract can be submitted, using the purchase price and the amount paid to date. Many clients cross the AED 2M threshold through a payment plan before handover — we model the dates so the visa application lines up.",
  },
  {
    question: "Who can I sponsor on a property or Golden Visa?",
    answer:
      "A property owner residence visa lets you sponsor your spouse and children. The Golden Visa extends to your spouse, children and domestic staff with no local sponsor required. Parents and newborn children can be added through separate routes our PRO team also handles.",
  },
  {
    question: "Do I have to live in Dubai to keep the visa?",
    answer:
      "No. The Golden Visa has no minimum stay condition, and a property visa stays valid while you hold the qualifying asset — it simply needs renewing every two years. Many clients use residence for banking, schooling and a base in the city.",
  },
  {
    question: "Can non-residents get a mortgage in Dubai?",
    answer:
      "Yes. Non-residents can typically borrow 50–65% depending on the lender and property, and the paid-up portion counts toward the visa threshold. We introduce regulated banks and coordinate the valuation the application needs.",
  },
  {
    question: "What does the whole process cost?",
    answer:
      "Budget 4% DLD transfer fee, 2% agency commission plus VAT, AED 4,200 in trustee and admin fees plus the visa government fees, which our calculator itemises for your whole family. Our written cost sheet itemises every government fee before you reserve a property.",
  },
  {
    question: "How long does the residence visa take once I own the property?",
    answer:
      "For a straightforward ready-property file, five to ten working days from medical to digital visa. Off-plan and family additions can take longer depending on document attestation. We share a dated checklist and track each step in writing.",
  },
];

export const SERVICE_FAQS = [
  {
    question: "Can I start the process from outside the UAE?",
    answer:
      "Yes. Eligibility, shortlisting, reservation and the Oqood or title deed work can all be done remotely with digital signatures and a power of attorney where needed. Most clients make one visit for medical and biometrics, although entry permits can be arranged in advance.",
  },
  {
    question: "Do you charge for the initial eligibility check?",
    answer:
      "No. The first eligibility review — property thresholds, family criteria, document gaps and a written fee estimate — is free. We only invoice once a scope of work is agreed in writing.",
  },
  {
    question: "Are your fees separate from government fees?",
    answer:
      "Always. Government charges (DLD, ICP, GDRFA, medical, Emirates ID) are itemised separately from our advisory and PRO fees, and are payable at cost. You see the full breakdown before you commit.",
  },
  {
    question: "What happens if my application is rejected?",
    answer:
      "It is rare when the file is prepared correctly, but if the ICP raises an objection we address it at no additional advisory fee — re-filing, requesting a valuation review, or restructuring the qualifying asset. Where a route is genuinely unavailable we tell you before filing.",
  },
];

export type InsightBody = {
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  takeaways: string[];
};

export const INSIGHT_BODIES: Record<string, InsightBody> = {
  "golden-visa-property-threshold-2026": {
    intro:
      "The AED 2,000,000 figure is the number everyone quotes, but it is not always the number the ICP assesses. What counts is your qualifying property interest — adjusted for ownership share and, on a mortgage, the amount actually paid. Here is how we model it before a client commits to anything.",
    sections: [
      {
        heading: "What the threshold actually measures",
        paragraphs: [
          "The Golden Visa property route is built around a qualifying freehold investment of AED 2,000,000 or more in Dubai. In practice, the assessment looks at your share of the asset and the value you have actually settled. A AED 4M villa owned 50/50 with a spouse supports an AED 2M assessment for that share, and a AED 4M apartment that is 50% paid supports an AED 2M assessment on paid-up value.",
          "This matters because buyers often assume the headline price is sufficient on its own. It is not. We prepare a short qualifying-value schedule for every client before a reservation is placed, so the visa position is never a surprise after transfer.",
        ],
      },
      {
        heading: "Off-plan purchases and Oqood registration",
        paragraphs: [
          "Off-plan property can support a Golden Visa application, provided the unit is registered with the Dubai Land Department under an Oqood contract. The purchase price and the amount paid to date are both relevant.",
          "This creates a planning opportunity: a payment plan can be sequenced so the paid-up value crosses AED 2M before handover. We map those dates against your intended application window and, where necessary, advise on a shorter payment schedule.",
        ],
      },
      {
        heading: "What does not affect eligibility",
        paragraphs: [
          "Rental income, service charges, whether the property is tenanted, and whether you run it as a licensed holiday home do not change the qualifying assessment. Nor does your country of residence, provided the documentary requirements can be met.",
        ],
        bullets: [
          "Freehold or qualifying usufruct interest only",
          "Ready (title deed) or off-plan (Oqood) both accepted",
          "Joint ownership assessed on the applicant's share",
          "Mortgage-financed purchases assessed on the paid-up amount",
        ],
      },
    ],
    takeaways: [
      "Model qualifying value, not just the asking price.",
      "Joint ownership and mortgages change the arithmetic.",
      "Off-plan timing can be structured to reach the threshold sooner.",
      "Reconfirm current guidance in writing before you commit.",
    ],
  },
  "property-visa-750k-explained": {
    intro:
      "The property owner visa is the most misunderstood residence route in Dubai — partly because it is often described as a 'two-year visa' as though it were temporary. It is renewable for as long as you hold the asset, and it is available to off-plan buyers and mortgage holders. This is how it works in 2026.",
    sections: [
      {
        heading: "Who it is for",
        paragraphs: [
          "Anyone who owns qualifying freehold property in Dubai with a value of AED 750,000 or more can apply for a renewable two-year residence visa. It is the most accessible property-led route for families who are not yet at the AED 2M Golden Visa threshold, and it is frequently used by buyers of a first Dubai apartment.",
          "The visa is issued to the owner. A spouse and children can then be sponsored on the same file, subject to the usual medical and documentation requirements.",
        ],
      },
      {
        heading: "What you need",
        paragraphs: [
          "A title deed for ready property, or an Oqood registration for off-plan. Your passport must be valid for at least six months, and you need either a valid Emirates ID or a status change inside the UAE. Medical screening and biometrics are completed in Dubai and can be booked around your travel.",
        ],
        bullets: [
          "Title deed or Oqood registration",
          "Passport copy and photograph",
          "Proof of UAE entry or current residence",
          "Medical screening and Emirates ID biometrics",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Government visa fees for a single applicant start at around AED 6,300, covering the DLD file, entry permit, medical, Emirates ID, typing and issuance, with additional fees per dependant. Property acquisition costs sit separately: 4% DLD transfer, 2% agency commission plus VAT, and around AED 4,200 in trustee and administrative fees.",
          "Our written cost sheet separates every government charge from advisory fees so you can see what is paid to whom.",
        ],
      },
    ],
    takeaways: [
      "AED 750,000 of property is the entry point for a renewable two-year visa.",
      "Off-plan and mortgaged property can qualify.",
      "Spouse and children can be sponsored on the same file.",
      "Budget government fees separately from acquisition costs.",
    ],
  },
  "dubai-yield-guide-2026": {
    intro:
      "Gross yield is a useful starting point and a poor finishing point. Service charges, vacancy, furnishing and licence costs can move a headline 8% to a net 5% — or keep it above 7%. Here is how the main Dubai districts compare when you look properly.",
    sections: [
      {
        heading: "Waterfront apartments: highest gross, highest volatility",
        paragraphs: [
          "Dubai Marina, JBR and Bluewaters commonly show gross yields between 6.5% and 8.5%, particularly for one-bedroom units that perform well in the short-stay market. Service charges are also at the top of the range, and a building's own rules on holiday-home licensing can materially change your net position.",
          "For investors who want income from day one, a tenanted unit with an existing licence is often a better entry than an empty unit with a higher theoretical yield.",
        ],
      },
      {
        heading: "Business Bay and Downtown: capital-led",
        paragraphs: [
          "Business Bay offers canal-front inventory with flexible off-plan payment plans and gross yields in the 6–8% region. Downtown Dubai yields are typically lower but resale liquidity is the deepest in the city — a consideration if you may exit within five years.",
        ],
      },
      {
        heading: "Villas and family communities",
        paragraphs: [
          "Dubai Hills, Arabian Ranches and Palm Jumeirah villas generally show lower gross yields (4–6%) but stronger capital appreciation, larger plots and much lower short-let churn. If the property is also your family home, yield is the wrong single measure — the visa and use value dominate the decision.",
        ],
        bullets: [
          "Compare gross yield net of service charge per sqft",
          "Check holiday-home licensing rules for the building",
          "Model vacancy at 1–2 months, not zero",
          "Weigh resale liquidity against headline return",
        ],
      },
    ],
    takeaways: [
      "Net yield, not gross, should drive the comparison.",
      "Service charges vary more than most buyers expect.",
      "Tenanted units can be a stronger day-one investment.",
      "If the property is your home, use value outweighs yield.",
    ],
  },
  "family-visa-through-property-2026": {
    intro:
      "Most owners apply for their own residence first and add their family straight after. Whether you hold the 2-year Property Visa or the 10-year Golden Visa decides who can join you and for how long. Here is how it works in practice.",
    sections: [
      {
        heading: "Who can join a Property Visa holder",
        paragraphs: [
          "A 2-year Property Visa lets you sponsor your spouse and your children. Their visas run alongside yours and renew on the same cycle, so the whole family stays in step.",
          "Sons can usually stay on a parent’s file until 25, and unmarried daughters can remain sponsored at any age. Children under 18 don’t take the medical test.",
        ],
      },
      {
        heading: "What changes with a Golden Visa",
        paragraphs: [
          "Golden Visa holders can also add their parents, and every family member receives the same 10-year validity as the main applicant. No salary certificate is needed, because the qualifying property takes its place.",
        ],
        bullets: [
          "Spouse and children on the same 10-year file",
          "Parents can be sponsored",
          "Domestic staff can be added separately",
          "No limit on time spent outside the UAE",
        ],
      },
      {
        heading: "Start with attestation",
        paragraphs: [
          "Marriage and birth certificates issued abroad must be attested before they’re accepted — usually by a notary, the foreign ministry and the UAE embassy in the country of issue, then by UAE MOFA. This step often takes longer than the visa itself, so we start it while your own application is in progress.",
        ],
      },
    ],
    takeaways: [
      "Your visa route decides who can join you and for how long.",
      "Golden Visa families share the same 10-year validity.",
      "Children under 18 skip the medical test.",
      "Start certificate attestation early — it’s usually the slowest step.",
    ],
  },
  "off-plan-golden-visa-payment-plans": {
    intro:
      "Buying off-plan is one of the most popular ways to reach the Golden Visa threshold, because developers spread the price over a payment plan. The two questions that matter are which purchases qualify and when you can apply.",
    sections: [
      {
        heading: "Which off-plan purchases can qualify",
        paragraphs: [
          "The unit must be bought from an approved developer and registered with the Dubai Land Department, which issues an Oqood certificate for off-plan sales. Once it’s registered, the purchase can be assessed for residency.",
          "For the 10-year Golden Visa the property value must reach AED 2,000,000. For the 2-year Property Visa, off-plan units are reviewed case by case.",
        ],
      },
      {
        heading: "What the developer needs to provide",
        paragraphs: [
          "Requirements depend on the developer and on current DLD guidance, so we confirm the position for your specific unit before you apply. Properties held in your name can also be combined to reach the threshold.",
        ],
        bullets: [
          "Oqood registration in your name",
          "A payment statement from the developer",
          "A no-objection letter where the developer requires one",
          "A valuation if it’s requested",
        ],
      },
      {
        heading: "Timing your application",
        paragraphs: [
          "Payment plans can be sequenced so your application lines up with the milestone that makes you eligible. We map the payment dates against your plans to move, so the visa is ready when you need it.",
        ],
      },
    ],
    takeaways: [
      "Off-plan property must be registered with DLD (Oqood).",
      "The Golden Visa needs AED 2M in qualifying value.",
      "Developer requirements vary — confirm your unit before applying.",
      "Sequence payments so eligibility lines up with your move.",
    ],
  },
  "property-visa-document-checklist": {
    intro:
      "Most delays come from a missing or unclear document rather than from the application itself. Use this checklist to get everything ready before we file.",
    sections: [
      {
        heading: "For you",
        paragraphs: [
          "Your passport should be valid for at least six months. You’ll also need a recent passport-style photo on a white background, and your current visa or entry stamp if you’re already in the UAE.",
        ],
        bullets: [
          "Passport with 6+ months’ validity",
          "Passport-style photo",
          "Current visa or entry stamp",
          "Emirates ID if you already have one",
        ],
      },
      {
        heading: "For your property",
        paragraphs: [
          "For a ready home, the title deed must be in your name. For an off-plan purchase, you need the Oqood certificate and the developer’s payment statement. If the property is mortgaged, your bank provides a letter confirming the amount paid.",
        ],
        bullets: [
          "Title deed or Oqood certificate",
          "Developer payment statement (off-plan)",
          "Bank letter for a mortgaged property",
        ],
      },
      {
        heading: "For your family",
        paragraphs: [
          "Each family member needs a passport copy and photo. Marriage and birth certificates issued outside the UAE must be attested and, if they aren’t in Arabic or English, legally translated.",
        ],
      },
    ],
    takeaways: [
      "Check passport validity first.",
      "The property must be registered in your name.",
      "Mortgaged? Ask your bank for a paid-amount letter early.",
      "Attest family certificates before filing.",
    ],
  },
};
