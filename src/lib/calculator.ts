export type WizardVisa = "property" | "golden" | "family" | "newborn";

export const PROPERTY_MIN = 750_000;
export const GOLDEN_MIN = 2_000_000;

/**
 * Indicative UAE government fees (AED), used by every fee table and the calculator.
 * Update these numbers to match your current fee sheet — the whole site follows.
 */
export const FEES = {
  entryPermit: 339,
  statusChange: 750,
  residence2y: 410,
  medical: 273,
  eid2y: 354,
  eid10y: 1154,
  typing: 0,
  sponsorFile: 203,
  goldenIssuance: 2710,
  goldenFamilyFile: 283,
  dldPropertyFile: 4185,
  dldGoldenFile: 5284,
  birthCertificate: 70,
  mofaAttestation: 150,
  certificateDelivery: 45,
} as const;

/** Service fees (AED), always shown separately from government fees. */
export const SERVICE_FEES = {
  property: 2500,
  golden: 3500,
  family: 1200,
  newborn: 900,
  perExtraPerson: 600,
} as const;

export const WIZARD_VISAS: { id: WizardVisa; title: string; subtitle: string; image: string }[] = [
  {
    id: "property",
    title: "Property Visa",
    subtitle: "2-year residence for owners of AED 750K+ property",
    image: "/images/services/property-visa.svg",
  },
  {
    id: "golden",
    title: "Golden Visa",
    subtitle: "10-year residence through AED 2M+ property",
    image: "/images/services/golden-visa.svg",
  },
  {
    id: "family",
    title: "Family Visa",
    subtitle: "Sponsor your spouse, children or parents",
    image: "/images/services/family-visa.svg",
  },
  {
    id: "newborn",
    title: "Newborn Visa",
    subtitle: "Add your baby to your residence file",
    image: "/images/services/newborn-visa.svg",
  },
];

export type WizardAnswers = {
  visa: WizardVisa | null;
  stage: "new" | "renewal";
  location: "inside" | "outside";
  propertyValue: number;
  propertyStatus: "ready" | "offplan";
  goldenRoute: "property" | "other";
  sponsorType: "employee" | "investor" | "property" | "golden";
  adults: number;
  children: number;
  babies: number;
  birthPlace: "uae" | "abroad";
};

export const EMPTY_ANSWERS: WizardAnswers = {
  visa: null,
  stage: "new",
  location: "inside",
  propertyValue: 2_000_000,
  propertyStatus: "ready",
  goldenRoute: "property",
  sponsorType: "employee",
  adults: 0,
  children: 0,
  babies: 1,
  birthPlace: "uae",
};

export type FeeLine = { label: string; detail?: string; amount: number };
export type QuoteStatus = "eligible" | "check" | "below";

export type Quote = {
  visa: WizardVisa;
  title: string;
  headline: string;
  summary: string;
  status: QuoteStatus;
  people: number;
  lines: FeeLine[];
  government: number;
  service: number;
  total: number;
  notes: string[];
};

export function formatAed(value: number): string {
  return `AED ${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value))}`;
}

export function compactAed(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `AED ${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`;
  }
  return `AED ${Math.round(value / 1000)}K`;
}

/** Government fees for one person on a 2-year residence or a Golden Visa. */
export function personFee(
  kind: "residence" | "golden",
  opts: { adult: boolean; inside?: boolean; renewal?: boolean },
): number {
  const medical = opts.adult ? FEES.medical : 0;
  if (kind === "golden") {
    return FEES.goldenIssuance + medical + FEES.eid10y + FEES.typing;
  }
  const entry = opts.renewal ? 0 : FEES.entryPermit + (opts.inside ? FEES.statusChange : 0);
  return entry + FEES.residence2y + medical + FEES.eid2y + FEES.typing;
}

/** Government fees for the property owner alone, including the DLD file. */
export function mainApplicantFee(visa: "property" | "golden"): number {
  return visa === "golden"
    ? FEES.dldGoldenFile + personFee("golden", { adult: true })
    : FEES.dldPropertyFile + personFee("residence", { adult: true, inside: true });
}

const people = (n: number) => `${n} ${n === 1 ? "person" : "people"}`;

function line(label: string, unit: number, qty: number, note?: string): FeeLine | null {
  if (qty <= 0 || unit <= 0) return null;
  const detail = [qty > 1 ? `${qty} × ${formatAed(unit)}` : null, note ?? null].filter(Boolean).join(" · ");
  return { label, amount: unit * qty, detail: detail || undefined };
}

function compact(items: Array<FeeLine | null>): FeeLine[] {
  return items.filter((item): item is FeeLine => item !== null);
}

function residenceLines(persons: number, adults18: number, opts: { inside: boolean; renewal: boolean }) {
  return [
    opts.renewal ? null : line("Entry permit", FEES.entryPermit, persons),
    opts.renewal || !opts.inside ? null : line("Change of status", FEES.statusChange, persons, "Applying inside the UAE"),
    line(opts.renewal ? "Residence renewal (2 years)" : "Residence visa (2 years)", FEES.residence2y, persons),
    line("Medical fitness test", FEES.medical, adults18, "Ages 18+"),
    line("Emirates ID (2 years)", FEES.eid2y, persons),
    line("Typing & submission", FEES.typing, persons),
  ];
}

function goldenLines(persons: number, adults18: number) {
  return [
    line("Golden Visa issuance", FEES.goldenIssuance, persons),
    line("Medical fitness test", FEES.medical, adults18, "Ages 18+"),
    line("Emirates ID (10 years)", FEES.eid10y, persons),
    line("Typing & submission", FEES.typing, persons),
  ];
}

function finish(q: Omit<Quote, "government" | "service" | "total">, service: number): Quote {
  const government = q.lines.reduce((sum, item) => sum + item.amount, 0);
  return { ...q, government, service, total: government + service };
}

export function buildQuote(a: WizardAnswers): Quote | null {
  if (!a.visa) return null;
  const value = Math.max(0, a.propertyValue || 0);
  const renewal = a.stage === "renewal";
  const inside = a.location === "inside";

  if (a.visa === "property") {
    const persons = 1 + a.adults + a.children;
    const status: QuoteStatus = value >= PROPERTY_MIN ? "eligible" : "below";
    const lines = compact([
      line("DLD property residency file", FEES.dldPropertyFile, 1),
      ...residenceLines(persons, 1 + a.adults, { inside, renewal }),
      !renewal && persons > 1 ? line("Sponsor file", FEES.sponsorFile, 1, "First dependant only") : null,
    ]);
    return finish(
      {
        visa: "property",
        title: renewal ? "Property Visa renewal" : "Property Visa",
        headline:
          value >= GOLDEN_MIN
            ? "Your property also qualifies for the 10-year Golden Visa"
            : status === "eligible"
              ? "Your property qualifies for the 2-year Property Visa"
              : "This value is below the AED 750,000 minimum",
        summary: `${people(persons)} on the file · property value ${formatAed(value)}`,
        status,
        people: persons,
        lines,
        notes: [
          "Joint owners: only your share counts. Mortgaged property: the amount you have paid counts.",
          a.propertyStatus === "offplan"
            ? "Off-plan property is reviewed case by case — we confirm it with DLD before you apply."
            : "The title deed must be in your name before the application starts.",
          value >= GOLDEN_MIN
            ? "At this value the 10-year Golden Visa is usually the better choice — you can switch in step 1."
            : "DLD transfer fees and agency commission belong to the purchase and are not included here.",
        ],
      },
      SERVICE_FEES.property + SERVICE_FEES.perExtraPerson * (persons - 1),
    );
  }

  if (a.visa === "golden") {
    const persons = 1 + a.adults + a.children;
    const propertyRoute = a.goldenRoute === "property";
    const status: QuoteStatus = !propertyRoute ? "check" : value >= GOLDEN_MIN ? "eligible" : "below";
    const lines = compact([
      propertyRoute ? line("DLD property file", FEES.dldGoldenFile, 1) : null,
      ...goldenLines(persons, 1 + a.adults),
      !renewal && persons > 1 ? line("Family file", FEES.goldenFamilyFile, 1, "First dependant only") : null,
    ]);
    return finish(
      {
        visa: "golden",
        title: renewal ? "Golden Visa renewal" : "Golden Visa",
        headline:
          status === "eligible"
            ? "You qualify for the 10-year Golden Visa"
            : status === "check"
              ? "We’ll confirm your route before you apply"
              : "This value is below the AED 2,000,000 minimum",
        summary: propertyRoute
          ? `${people(persons)} on the file · property value ${formatAed(value)}`
          : `${people(persons)} on the file · company, salary or talent route`,
        status,
        people: persons,
        lines,
        notes: [
          propertyRoute
            ? "Several properties in your name can be added together to reach AED 2,000,000."
            : "Company, salary and talent routes each have their own document checklist — we’ll send yours.",
          "Your spouse, children and parents can join the same 10-year file.",
          "There is no limit on how long Golden Visa holders can stay outside the UAE.",
        ],
      },
      SERVICE_FEES.golden + SERVICE_FEES.perExtraPerson * (persons - 1),
    );
  }

  if (a.visa === "family") {
    const persons = Math.max(1, a.adults + a.children);
    const golden = a.sponsorType === "golden";
    const lines = compact([
      ...(golden ? goldenLines(persons, a.adults) : residenceLines(persons, a.adults, { inside, renewal })),
      renewal
        ? null
        : golden
          ? line("Family file", FEES.goldenFamilyFile, 1, "First time only")
          : line("Sponsor file", FEES.sponsorFile, 1, "First time only"),
    ]);
    return finish(
      {
        visa: "family",
        title: renewal ? "Family Visa renewal" : "Family Visa",
        headline: `${persons} family ${persons === 1 ? "member" : "members"} · ${
          renewal ? "renewal" : golden || inside ? "applying inside the UAE" : "applying from abroad"
        }`,
        summary: golden ? "Sponsored on your Golden Visa, with the same 10-year validity." : "2-year residence linked to your own visa.",
        status: "check",
        people: persons,
        lines,
        notes: [
          golden
            ? "Golden Visa holders don’t need a salary certificate to sponsor family."
            : "Sponsors usually need a monthly salary of AED 4,000, or AED 3,000 plus company housing.",
          "Marriage and birth certificates issued abroad must be attested before filing.",
          "Children under 18 don’t take the medical test.",
        ],
      },
      SERVICE_FEES.family + SERVICE_FEES.perExtraPerson * (persons - 1),
    );
  }

  const babies = Math.max(1, a.babies || 1);
  const abroad = a.birthPlace === "abroad";
  const lines = compact([
    abroad ? null : line("Birth certificate (Arabic)", FEES.birthCertificate, babies),
    line("MOFA attestation", FEES.mofaAttestation, babies, "Birth certificate"),
    abroad ? line("Entry permit", FEES.entryPermit, babies) : null,
    line("Residence visa (2 years)", FEES.residence2y, babies),
    line("Emirates ID (2 years)", FEES.eid2y, babies),
    line("Typing & submission", FEES.typing, babies),
    line("Certificate delivery", FEES.certificateDelivery, babies, "Birth certificate & MOFA courier"),
  ]);
  return finish(
    {
      visa: "newborn",
      title: "Newborn Visa",
      headline: abroad ? "Baby born abroad — entry permit route" : "Baby born in the UAE",
      summary: `${babies} ${babies === 1 ? "baby" : "babies"} · added to a parent’s residence`,
      status: "eligible",
      people: babies,
      lines,
      notes: [
        abroad
          ? "The birth certificate must be attested in the country of birth and by UAE MOFA."
          : "Apply within 120 days of birth to avoid late fees.",
        "Babies and children under 18 don’t need a medical test.",
        "Both parents’ passports, visas and Emirates IDs are usually requested.",
      ],
    },
    SERVICE_FEES.newborn + SERVICE_FEES.perExtraPerson * (babies - 1),
  );
}
