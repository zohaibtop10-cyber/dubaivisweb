export function formatAed(value: number, opts: { compact?: boolean } = {}): string {
  if (!Number.isFinite(value)) return "AED —";
  if (opts.compact) {
    if (value >= 1_000_000) {
      const millions = value / 1_000_000;
      const formatted = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
      return `AED ${formatted}M`;
    }
    if (value >= 1_000) {
      const thousands = Math.round(value / 1_000);
      return `AED ${thousands}K`;
    }
  }
  return `AED ${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)}`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

export function formatDate(value: Date | string | null | undefined): string {
  if (!value) return "—";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const AREAS = [
  "Downtown Dubai",
  "Palm Jumeirah",
  "Dubai Marina",
  "Business Bay",
  "Jumeirah Beach Residence",
  "Dubai Hills Estate",
  "Bluewaters Island",
  "Emirates Hills",
] as const;

export const BUDGETS = [
  "Under AED 1M",
  "AED 1M – 2M",
  "AED 2M – 5M",
  "AED 5M – 15M",
  "AED 15M+",
] as const;

export const PROPERTY_TYPES = ["Apartment", "Penthouse", "Villa", "Townhouse"] as const;

export const COUNTRIES = [
  "United Kingdom",
  "India",
  "United States",
  "Saudi Arabia",
  "Russia",
  "France",
  "Germany",
  "Nigeria",
  "China",
  "Pakistan",
  "Egypt",
  "Canada",
  "Australia",
  "Other",
] as const;
