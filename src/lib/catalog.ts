export type ServiceCategory = "visa" | "other";

export type CatalogService = {
  slug: string;
  title: string;
  short: string;
  category: ServiceCategory;
  image: string;
  href: string;
  tag: string;
  from: string;
  blurb: string;
  points: string[];
  includes: string[];
  timeline: string;
  docs: string[];
  faqs: { question: string; answer: string }[];
};

export const CATALOG: CatalogService[] = [
  {
    slug: "family-visa",
    title: "Family Visa",
    short: "Sponsor your spouse, children or parents",
    category: "visa",
    image: "/images/services/family-visa.svg",
    href: "/services/family-visa",
    tag: "Spouse · children · parents",
    from: "Govt. fees from AED 1,103 / person",
    blurb:
      "Sponsor your spouse, children and parents on your UAE residence. We check salary and housing rules first, then handle typing, medical, Emirates ID and GDRFA follow-up until the IDs are in your hand.",
    points: ["Salary & housing eligibility check", "Attestation of marriage & birth certificates", "Medical, Emirates ID and delivery"],
    includes: [
      "Free eligibility check against current GDRFA rules",
      "Document checklist and attestation coordination",
      "Application typing and government fee payment",
      "Medical and Emirates ID appointments",
      "Status updates on WhatsApp until delivery",
    ],
    timeline: "7 – 14 working days once documents are attested",
    docs: [
      "Sponsor passport, visa and Emirates ID",
      "Attested marriage certificate (spouse)",
      "Attested birth certificates (children)",
      "Salary certificate or MOHRE contract",
      "Tenancy contract / Ejari where required",
    ],
    faqs: [
      {
        question: "What salary do I need to sponsor my family in Dubai?",
        answer:
          "In Dubai the typical threshold is AED 4,000 a month, or AED 3,000 when the employer provides housing. Parents generally require AED 10,000 and a refundable deposit. We confirm the current rule against your MOHRE contract before filing.",
      },
      {
        question: "Can I apply from outside the UAE?",
        answer:
          "Yes. We can file an entry permit so your family travels on the visa. Medical and Emirates ID are completed after they arrive.",
      },
    ],
  },
  {
    slug: "golden-visa",
    title: "Golden Visa",
    short: "10-year residence via property or investment",
    category: "visa",
    image: "/images/services/golden-visa.svg",
    href: "/golden-visa",
    tag: "10 years · renewable",
    from: "From AED 2,000,000 property",
    blurb:
      "The UAE’s long-term investor visa. Qualifying freehold property of AED 2,000,000 or more, with no local sponsor and no minimum stay. We model qualifying value, acquire or evidence the asset, and file the ICP application.",
    points: ["Property, investor and talent routes", "Family & domestic staff sponsored", "No minimum stay requirement"],
    includes: [
      "Qualifying-value assessment (share and paid-up amount)",
      "Property shortlist or existing-asset review",
      "ICP Golden Visa filing",
      "Medical, Emirates ID and dependants",
      "10-year renewal diary",
    ],
    timeline: "4 – 6 weeks from document readiness",
    docs: ["Passport", "Title deed or Oqood", "Property valuation where mortgaged", "Photograph", "Medical after approval"],
    faqs: [
      {
        question: "Does off-plan property qualify?",
        answer:
          "Yes, when registered with the DLD under an Oqood contract. Paid-up value is assessed for mortgaged and off-plan purchases.",
      },
    ],
  },
  {
    slug: "property-visa",
    title: "Property Visa",
    short: "2-year residence from AED 750,000 freehold",
    category: "visa",
    image: "/images/services/property-visa.svg",
    href: "/services/property-visa",
    tag: "2 years · renewable",
    from: "From AED 750,000 property",
    blurb:
      "Residence in your own name through freehold property from AED 750,000 — ready or off-plan, cash or mortgaged. Renewable for as long as you hold the asset.",
    points: ["Freehold and Oqood accepted", "Sponsor spouse & children", "Renewable while you hold the asset"],
    includes: [
      "Threshold check on purchase price, share and paid-up value",
      "Acquisition support or existing-title review",
      "Residence application through ICP",
      "Medical, Emirates ID and biometrics",
      "Family sponsorship on the same file",
    ],
    timeline: "5 – 10 working days after title / Oqood is in place",
    docs: ["Passport", "Title deed or Oqood", "Entry stamp or current visa", "Photograph", "Medical"],
    faqs: [
      {
        question: "Can I use a mortgaged property?",
        answer:
          "Yes. The paid-up portion counts toward the AED 750,000 threshold. We coordinate the valuation the application needs.",
      },
    ],
  },
  {
    slug: "newborn-visa",
    title: "Newborn Visa",
    short: "Add a baby to your UAE residence file",
    category: "visa",
    image: "/images/services/newborn-visa.svg",
    href: "/services/newborn-visa",
    tag: "Within 120 days of birth",
    from: "Govt. fees from AED 1,029",
    blurb:
      "Register a baby born in the UAE — or bring a newborn in from abroad — on the parent’s residence file. Birth notification, visa, medical exemption and Emirates ID handled as one pack.",
    points: ["UAE-born and overseas births", "No medical under 18", "Emirates ID included"],
    includes: [
      "Birth notification / attestation review",
      "Visa application on the sponsor’s file",
      "Emirates ID typing and biometrics (no medical under 18)",
      "Passport endorsement / digital visa",
      "WhatsApp tracking until delivery",
    ],
    timeline: "5 – 8 working days once the birth certificate is ready",
    docs: ["Child’s passport or travel document", "Birth certificate", "Parents’ passports, visas and Emirates IDs", "Marriage certificate if requested"],
    faqs: [
      {
        question: "How soon must I apply after birth in the UAE?",
        answer:
          "Apply within 120 days of birth to avoid fines. We can start on a hospital birth notification while the passport is being issued.",
      },
    ],
  },
  {
    slug: "maid-visa",
    title: "Maid Visa",
    short: "Domestic worker residence and labour card",
    category: "visa",
    image: "/images/services/maid-visa.svg",
    href: "/services/maid-visa",
    tag: "New hire · transfer · renewal",
    from: "Govt. fees from AED 1,650",
    blurb:
      "Domestic worker visas for a maid, nanny, cook or driver. We handle the labour card, Tawafuq / Tawjeeh, medical, Emirates ID, insurance and the residency file.",
    points: ["New hire, transfer and renewal", "Tawafuq / Tawjeeh booked", "ILOE insurance arranged"],
    includes: [
      "Quota and eligibility check on the sponsor",
      "Offer letter, labour contract and Tawafuq",
      "Entry permit or status change",
      "Medical, Emirates ID and ILOE insurance",
      "Visa stamping and labour card delivery",
    ],
    timeline: "10 – 18 working days depending on entry vs transfer",
    docs: ["Sponsor passport, visa, Emirates ID", "Tenancy contract", "Worker passport", "Photographs", "Deposit / bank guarantee where required"],
    faqs: [
      {
        question: "Can a Golden Visa holder sponsor a maid?",
        answer:
          "Yes. Golden Visa holders can typically sponsor domestic staff. We confirm quota and deposit rules against your file before starting.",
      },
    ],
  },
  {
    slug: "emirates-id",
    title: "Emirates ID",
    short: "New, renewal and replacement",
    category: "visa",
    image: "/images/services/emirates-id.svg",
    href: "/services/emirates-id",
    tag: "5 – 7 working days",
    from: "Govt. fees from AED 354",
    blurb:
      "Emirates ID typing, biometrics appointment and delivery — for a new card, a renewal or a replacement. We book the slot around your schedule.",
    points: ["New, renewal, replacement", "Biometrics slot booked", "Home collection available"],
    includes: [
      "Application typing on the ICP portal",
      "Fee payment at cost",
      "Biometrics appointment scheduling",
      "Card tracking and delivery",
      "Linking to your residence file",
    ],
    timeline: "5 – 7 working days after biometrics",
    docs: ["Passport", "Current visa or entry stamp", "Photograph", "Old Emirates ID for renewals"],
    faqs: [
      {
        question: "Do children need biometrics?",
        answer:
          "Children under 15 generally do not attend biometrics. We confirm the current age rule when we book.",
      },
    ],
  },
  {
    slug: "pro-services",
    title: "PRO Services",
    short: "Government typing, follow-up and submissions",
    category: "other",
    image: "/images/services/pro-services.svg",
    href: "/services/pro-services",
    tag: "ICP · GDRFA · MOHRE · DLD",
    from: "From AED 350 / transaction",
    blurb:
      "In-house PRO team for ICP, GDRFA, MOHRE, DLD and Amer submissions. One advisor owns the file; you receive WhatsApp updates rather than counter tickets.",
    points: ["Licensed in-house PROs", "Same-day typing on most files", "No outsourcing to typing centres"],
    includes: [
      "Document review before submission",
      "Portal typing and fee payment",
      "Counter submissions where required",
      "Application tracking",
      "Collection and delivery",
    ],
    timeline: "Same day to 3 working days depending on authority",
    docs: ["Depends on the transaction — we send a checklist after the first message"],
    faqs: [
      {
        question: "Do I need to visit an Amer centre?",
        answer:
          "Usually no. We submit digitally or attend on your behalf with a simple authorisation.",
      },
    ],
  },
  {
    slug: "amer-center",
    title: "Amer Center",
    short: "GDRFA typing without the queue",
    category: "other",
    image: "/images/services/pro-services.svg",
    href: "/services/amer-center",
    tag: "Visa · ID · sponsorship",
    from: "From AED 250",
    blurb:
      "Amer-centre transactions filed by our PRO desk: visa applications, deposits, cancellations, absconding reports and establishment cards — without you standing in a queue.",
    points: ["Visa and establishment typing", "Deposit and cancellation", "Authorised submissions"],
    includes: ["Form review", "Amer typing", "Fee payment at cost", "Collection of receipts", "Follow-up until completion"],
    timeline: "Same day for most standard transactions",
    docs: ["Passport, visa, Emirates ID of the sponsor and applicant"],
    faqs: [
      {
        question: "Can you attend Amer on my behalf?",
        answer: "Yes, with a signed authorisation and copies of the passports involved.",
      },
    ],
  },
  {
    slug: "attestation",
    title: "Attestation",
    short: "Marriage, birth and degree certificates",
    category: "other",
    image: "/images/services/attestation.svg",
    href: "/services/attestation",
    tag: "4-stage legalisation",
    from: "From AED 1,200 / document",
    blurb:
      "Certificates legalised through notary, foreign ministry, UAE embassy and MOFA. Doorstep collection, Arabic translation and rider delivery.",
    points: ["Notary → MFA → Embassy → MOFA", "Doorstep collection", "Arabic translation included"],
    includes: [
      "Document assessment before you send originals",
      "Home-country notary and foreign ministry",
      "UAE embassy legalisation",
      "MOFA attestation in the UAE",
      "Arabic translation where required",
    ],
    timeline: "5 – 12 working days depending on the issuing country",
    docs: ["Original certificate", "Passport copy", "Authorisation if we collect"],
    faqs: [
      {
        question: "Do I need attestation for a Dubai family visa?",
        answer:
          "Yes. Marriage and birth certificates issued abroad need the full chain before GDRFA will accept them. Degree certificates are attested when a qualification is part of the file.",
      },
    ],
  },
  {
    slug: "translation",
    title: "Translation",
    short: "Legal Arabic–English translations",
    category: "other",
    image: "/images/services/attestation.svg",
    href: "/services/translation",
    tag: "MOJ-certified",
    from: "From AED 180 / page",
    blurb:
      "Ministry of Justice certified translations for visas, courts, banks and the DLD. Marriage certificates, contracts, degrees and court papers.",
    points: ["MOJ-certified translators", "Visa and DLD accepted", "Same-day on standard documents"],
    includes: ["Certified translation", "Notarisation where required", "Digital and hard copies", "Pickup and delivery"],
    timeline: "Same day to 48 hours",
    docs: ["Clear scan or original of the document"],
    faqs: [
      {
        question: "Will GDRFA accept the translation?",
        answer: "We use MOJ-certified legal translators. GDRFA, ICP and DLD accept this format.",
      },
    ],
  },
  {
    slug: "power-of-attorney",
    title: "Power of Attorney",
    short: "Notarised POA for property, visa and court",
    category: "other",
    image: "/images/services/attestation.svg",
    href: "/services/power-of-attorney",
    tag: "Notary · court · DLD",
    from: "Govt. fees from AED 1,135",
    blurb:
      "Drafting and notarisation of a UAE power of attorney so we — or a relative — can complete a property transfer, visa filing or court matter in your absence.",
    points: ["Bilingual drafting", "Notary and court attestation", "DLD-ready property POA"],
    includes: ["Bilingual draft", "Notary appointment", "Court attestation if required", "DLD acceptance check", "Courier of originals"],
    timeline: "1 – 4 working days",
    docs: ["Passport and Emirates ID of the grantor", "Details of the attorney", "Scope of authority"],
    faqs: [
      {
        question: "Can I sign a POA from abroad?",
        answer:
          "Yes. It can be signed at a UAE embassy and then MOFA-attested, or signed in Dubai at a notary on a short visit. We advise which route is faster for your case.",
      },
    ],
  },
  {
    slug: "wills-testament",
    title: "Wills & Testament",
    short: "DIFC and Abu Dhabi registered wills",
    category: "other",
    image: "/images/services/attestation.svg",
    href: "/services/wills-testament",
    tag: "DIFC · ADGM · local",
    from: "From AED 8,500",
    blurb:
      "Non-Muslim wills covering UAE property, bank accounts and guardianship of children, registered with the DIFC Wills Service Centre or the Abu Dhabi register.",
    points: ["Guardianship of children", "UAE property and accounts", "DIFC / ADGM registration"],
    includes: [
      "Advisory call on domicile and guardianship",
      "Draft will in the required register format",
      "Witnessed execution appointment",
      "Registration fees at cost",
      "Certified copies for your records",
    ],
    timeline: "2 – 3 weeks including the execution appointment",
    docs: ["Passports of testator and guardians", "Property title deeds", "Family details", "Existing foreign will if any"],
    faqs: [
      {
        question: "Do I need a UAE will if I already have one at home?",
        answer:
          "A foreign will is often slower to enforce against Dubai property. A DIFC or local registered will is the practical route for UAE assets and for guardianship of children living here.",
      },
    ],
  },
  {
    slug: "medical-eid",
    title: "Medical & EID",
    short: "Fitness test plus Emirates ID in one visit",
    category: "other",
    image: "/images/services/medical.svg",
    href: "/services/medical-eid",
    tag: "Centre or at home",
    from: "From AED 650",
    blurb:
      "Medical fitness test and Emirates ID biometrics booked together — at a centre or, where available, at home. Results followed through to the visa file.",
    points: ["Centre or home visit", "Children under 18 skip medical", "Linked to your visa file"],
    includes: ["Appointment booking", "Medical fee at cost", "Emirates ID biometrics", "Result follow-up", "Resubmission if a test is repeated"],
    timeline: "Medical same day; ID 5 – 7 working days",
    docs: ["Passport", "Entry permit or visa", "Photograph"],
    faqs: [
      {
        question: "What if the medical is delayed?",
        answer: "We rebook and, where a test must be repeated, handle the resubmission at government cost only.",
      },
    ],
  },
  {
    slug: "iloe-insurance",
    title: "ILOE Insurance",
    short: "Mandatory domestic worker insurance",
    category: "other",
    image: "/images/services/medical.svg",
    href: "/services/iloe-insurance",
    tag: "MOHRE compliant",
    from: "From AED 1,200 / year",
    blurb:
      "In-lieu-of-end-of-service and worker insurance policies required to issue or renew a maid, nanny or driver visa. We place the policy and attach it to the labour file.",
    points: ["MOHRE-accepted insurers", "Issued before labour card", "Renewed with the visa"],
    includes: ["Quote comparison", "Policy issuance", "Labour-file attachment", "Renewal reminder"],
    timeline: "Same day once passport copies are in",
    docs: ["Sponsor Emirates ID", "Worker passport", "Labour contract draft"],
    faqs: [
      {
        question: "Is ILOE insurance mandatory?",
        answer: "Yes for most new domestic worker contracts. The labour card will not issue without a compliant policy.",
      },
    ],
  },
  {
    slug: "dld-trustee",
    title: "DLD Trustee Services",
    short: "Property transfer at a trustee office",
    category: "other",
    image: "/images/services/dld-trustee.svg",
    href: "/services/dld-trustee",
    tag: "Ready · off-plan · Oqood",
    from: "From AED 4,200 admin",
    blurb:
      "Dubai Land Department trustee office for title transfers, Oqood registration, mortgage registration and NOC follow-up. We book the slot and attend with you.",
    points: ["Title and Oqood", "Mortgage registration", "4% DLD fee paid at cost"],
    includes: [
      "NOC and clearance follow-up",
      "Trustee appointment",
      "DLD 4% payment at cost",
      "Title deed / Oqood collection",
      "Visa-file handover after transfer",
    ],
    timeline: "Ready transfer typically 1 – 3 working days once NOC is issued",
    docs: ["Passports of buyer and seller", "Title deed", "NOC", "Payment proof", "POA if signing in absence"],
    faqs: [
      {
        question: "Can you complete a transfer with a power of attorney?",
        answer: "Yes, with a DLD-accepted POA. We check the wording before the appointment so the trustee does not reject it.",
      },
    ],
  },
  {
    slug: "revaluation",
    title: "Revaluation",
    short: "DLD valuation for visa and mortgage files",
    category: "other",
    image: "/images/services/dld-trustee.svg",
    href: "/services/revaluation",
    tag: "Visa · mortgage · court",
    from: "From AED 2,500",
    blurb:
      "Independent DLD-accepted property valuation when the title value, a mortgage or a Golden Visa file needs a current figure rather than the original purchase price.",
    points: ["DLD-panel valuers", "Used for Golden Visa files", "Mortgage and court accepted"],
    includes: ["Valuer instruction", "Site inspection coordination", "Written report", "ICP / bank submission copy"],
    timeline: "3 – 7 working days",
    docs: ["Title deed or Oqood", "Floor plans if available", "Owner passport"],
    faqs: [
      {
        question: "When do I need a revaluation?",
        answer:
          "When the purchase price is below the visa threshold but current market value may clear it, or when a bank or the ICP asks for an independent figure on a mortgaged asset.",
      },
    ],
  },
];

export const VISA_SERVICES = CATALOG.filter((item) => item.category === "visa");
export const OTHER_SERVICES = CATALOG.filter((item) => item.category === "other");

export const COMPANY_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "Guides", href: "/insights" },
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export function getService(slug: string) {
  return CATALOG.find((item) => item.slug === slug) ?? null;
}
