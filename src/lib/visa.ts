export const VISA_THRESHOLDS = {
  propertyVisa: 750_000,
  goldenVisa: 2_000_000,
  goldenVisaOffPlan: 2_000_000,
} as const;

export type VisaTier = "golden" | "property" | "below";

export type Assessment = {
  tier: VisaTier;
  label: string;
  years: number | null;
  headline: string;
  summary: string;
  perks: string[];
  shortfallToProperty: number;
  shortfallToGolden: number;
  progressToGolden: number;
  estimatedFees: number;
};

export function getVisaTier(priceAed: number): VisaTier {
  if (priceAed >= VISA_THRESHOLDS.goldenVisa) return "golden";
  if (priceAed >= VISA_THRESHOLDS.propertyVisa) return "property";
  return "below";
}

export function visaBadge(priceAed: number): { short: string; full: string } {
  const tier = getVisaTier(priceAed);
  if (tier === "golden") {
    return { short: "10-year Golden Visa", full: "Golden Visa eligible · AED 2M+" };
  }
  if (tier === "property") {
    return { short: "2-year property visa", full: "Property residence visa eligible" };
  }
  return { short: "Residency route review", full: "Below property visa threshold" };
}

/**
 * Core eligibility engine. Mirrors current UAE guidance used by our advisory desk:
 * AED 750,000+ owned property -> renewable property-owner residence visa (2 years)
 * AED 2,000,000+ owned property -> 10-year Golden Visa
 * Joint ownership is counted by the applicant's share; financed property by paid-up value.
 */
export function assessEligibility(input: {
  priceAed: number;
  ownershipShare?: number;
  paidUpPercent?: number;
  status?: "Ready" | "Off-plan";
}): Assessment {
  const price = Math.max(0, Math.round(input.priceAed || 0));
  const share = Math.min(100, Math.max(1, input.ownershipShare ?? 100)) / 100;
  const paidUp = Math.min(100, Math.max(1, input.paidUpPercent ?? 100)) / 100;
  const qualifying = price * share * paidUp;

  const round = (n: number) => Math.round(n / 1000) * 1000;
  const shortfallToProperty = Math.max(0, round(VISA_THRESHOLDS.propertyVisa - qualifying));
  const shortfallToGolden = Math.max(0, round(VISA_THRESHOLDS.goldenVisa - qualifying));
  const progressToGolden = Math.max(4, Math.min(100, Math.round((qualifying / VISA_THRESHOLDS.goldenVisa) * 100)));

  const estimatedFees = Math.round(price * 0.04 + price * 0.02 + 4_200 + 12_000);

  if (qualifying >= VISA_THRESHOLDS.goldenVisa) {
    return {
      tier: "golden",
      label: "10-year Golden Visa",
      years: 10,
      headline: "You qualify for the UAE Golden Visa.",
      summary:
        "Your property investment clears the AED 2M Golden Visa threshold. The visa is renewable every 10 years and covers your spouse, children and domestic staff.",
      perks: [
        "10-year renewable residence visa",
        "Sponsor spouse, children and domestic workers",
        "No minimum stay requirement to keep the visa",
        "Property can be mortgage-financed (paid-up value counts)",
        "Re-entry and travel freedom without sponsor approvals",
      ],
      shortfallToProperty: 0,
      shortfallToGolden: 0,
      progressToGolden: 100,
      estimatedFees,
    };
  }

  if (qualifying >= VISA_THRESHOLDS.propertyVisa) {
    return {
      tier: "property",
      label: "2-year property residence visa",
      years: 2,
      headline: "You qualify for a property-owner residence visa.",
      summary:
        "Your qualifying property value clears the AED 750,000 property residence threshold. The visa is issued for two years and can be renewed for as long as you hold the asset.",
      perks: [
        "2-year renewable residence visa",
        "Sponsor spouse and children under 18",
        "Emirates ID, banking and utilities in your own name",
        "Off-plan and ready property both considered",
        "Bridge route into the AED 2M Golden Visa bracket",
      ],
      shortfallToProperty: 0,
      shortfallToGolden,
      progressToGolden,
      estimatedFees,
    };
  }

  return {
    tier: "below",
    label: "Below property threshold",
    years: null,
    headline: "This value is below the property residence threshold.",
    summary:
      "You are currently short of the AED 750,000 qualifying threshold. Alternative routing is often possible through an off-plan payment plan, joint ownership with a relative, or an existing freehold asset.",
    perks: [
      "We can model off-plan payment plans that bridge the threshold",
      "Joint ownership routes for spouses and relatives",
      "Combined property valuation review with a DLD advisor",
      "Alternative routes: freelance, employer or investor visa",
      "Advisory session includes a written eligibility opinion",
    ],
    shortfallToProperty,
    shortfallToGolden,
    progressToGolden,
    estimatedFees,
  };
}

export const VISA_TIERS = [
  {
    key: "property",
    eyebrow: "Route 01",
    name: "Property Owner Residence",
    duration: "2 years · renewable",
    threshold: "AED 750,000+",
    blurb:
      "For owners of ready or off-plan freehold property. Residence in your name, renewable for as long as you hold the asset.",
    points: [
      "Freehold or usufruct ownership",
      "Off-plan purchases accepted",
      "Mortgage-financed property accepted",
    ],
  },
  {
    key: "golden",
    eyebrow: "Route 02",
    name: "Golden Visa",
    duration: "10 years · renewable",
    threshold: "AED 2,000,000+",
    blurb:
      "The UAE's long-term investor visa. Stability without the need for a local sponsor or employer — designed for families.",
    points: [
      "Spouse, children and domestic staff sponsored",
      "No minimum stay required",
      "Landlord, investor and business banking access",
    ],
  },
] as const;

export const DOCUMENTS = [
  { title: "Passport copy", detail: "Valid for at least 6 months, plus one colour photo" },
  { title: "Title deed or Oqood", detail: "DLD-issued for ready, Oqood for off-plan" },
  { title: "Property valuation", detail: "For mortgage-financed or jointly held assets" },
  { title: "Emirates ID / entry stamp", detail: "Or a status change inside the UAE" },
  { title: "Proof of financial standing", detail: "Bank statements where requested by ICP" },
  { title: "Medical & biometrics", detail: "Completed inside Dubai, we book the slots" },
];
