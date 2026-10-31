import { and, asc, desc, eq, gte, ilike, lte, or, sql } from "drizzle-orm";
import { db } from "@/db";
import { properties, type PropertyRow } from "@/db/schema";

export type Property = {
  id: number;
  slug: string;
  title: string;
  area: string;
  developer: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqft: number;
  priceAed: number;
  status: string;
  handover: string | null;
  rentalYield: number | null;
  description: string;
  highlights: string[];
  imageUrl: string;
  gallery: string[];
  featured: boolean;
  createdAt?: Date | string;
};

export type PropertyFilters = {
  q?: string;
  area?: string;
  type?: string;
  beds?: number;
  maxPrice?: number;
  status?: string;
  sort?: string;
  featured?: boolean;
  limit?: number;
};

export const IMAGES = {
  skylineDusk: "/images/properties/skyline-dusk.svg",
  skylineBlue: "/images/properties/skyline-blue.svg",
  marinaAerial: "/images/properties/marina-aerial.svg",
  marinaWater: "/images/properties/marina-water.svg",
  marinaReflections: "/images/properties/marina-reflections.svg",
  balconySkyline: "/images/properties/balcony-skyline.svg",
  balconyOcean: "/images/properties/balcony-ocean.svg",
  whiteTower: "/images/properties/white-tower.svg",
  coastalLiving: "/images/properties/coastal-living.svg",
  beachTerrace: "/images/properties/beach-terrace.svg",
  cityViewSuite: "/images/properties/city-view-suite.svg",
  seasideVilla: "/images/properties/seaside-villa.svg",
  kitchen: "/images/properties/kitchen.svg",
  minimalRoom: "/images/properties/minimal-room.svg",
  poolVilla: "/images/properties/pool-villa.svg",
  gardenLiving: "/images/properties/garden-living.svg",
  poolsideLiving: "/images/properties/poolside-living.svg",
  studio: "/images/properties/studio.svg",
  dining: "/images/properties/dining.svg",
  marinaSkyline: "/images/properties/marina-skyline.svg",
} as const;

export const SEED_PROPERTIES: Property[] = [
  {
    id: 1,
    slug: "burj-royale-sky-suite",
    title: "Burj Royale Sky Suite",
    area: "Downtown Dubai",
    developer: "Emaar",
    propertyType: "Penthouse",
    bedrooms: 3,
    bathrooms: 4,
    sizeSqft: 2540,
    priceAed: 8_900_000,
    status: "Ready",
    handover: null,
    rentalYield: 6.1,
    description:
      "A double-height penthouse on the 62nd floor with uninterrupted views of Burj Khalifa and the Dubai Fountain. Floor-to-ceiling glass, a private lift lobby and a wrap-around terrace make this one of Downtown's most collected addresses.",
    highlights: [
      "Direct Burj Khalifa & fountain views",
      "Private lift lobby and 3 parking bays",
      "Fully furnished by a Milanese studio",
      "Concierge, spa and residents' sky lounge",
      "Title deed ready for immediate transfer",
    ],
    imageUrl: IMAGES.cityViewSuite,
    gallery: [IMAGES.cityViewSuite, IMAGES.dining, IMAGES.minimalRoom],
    featured: true,
  },
  {
    id: 2,
    slug: "palm-crest-villa",
    title: "Palm Crest Villa",
    area: "Palm Jumeirah",
    developer: "Nakheel",
    propertyType: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    sizeSqft: 6800,
    priceAed: 24_500_000,
    status: "Ready",
    handover: null,
    rentalYield: 5.2,
    description:
      "A signature frond villa with 18 metres of private beach, a temperature-controlled infinity pool and a landscaped majlis garden. Renovated in 2024 with a soft, limestone-led palette and full smart-home integration.",
    highlights: [
      "18m private beach frontage",
      "Infinity pool, spa and summer kitchen",
      "Staff quarters with separate entrance",
      "Two-car garage plus golf-cart bay",
      "Golden Visa qualifying investment",
    ],
    imageUrl: IMAGES.seasideVilla,
    gallery: [IMAGES.seasideVilla, IMAGES.poolVilla, IMAGES.poolsideLiving],
    featured: true,
  },
  {
    id: 3,
    slug: "marina-gate-one",
    title: "Marina Gate One",
    area: "Dubai Marina",
    developer: "Select Group",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 3,
    sizeSqft: 1320,
    priceAed: 3_450_000,
    status: "Ready",
    handover: null,
    rentalYield: 7.4,
    description:
      "A corner two-bedroom on a high floor of Marina Gate One, looking down the full length of the yacht basin. Delivered turnkey and currently let at AED 215,000 per year — ideal for an investor who wants income from day one.",
    highlights: [
      "Full marina basin views",
      "Sold with existing tenancy",
      "7.4% gross rental yield",
      "Residents' pool, gym and padel court",
      "Walk to Marina Walk and JBR beach",
    ],
    imageUrl: IMAGES.marinaWater,
    gallery: [IMAGES.marinaWater, IMAGES.coastalLiving, IMAGES.kitchen],
    featured: true,
  },
  {
    id: 4,
    slug: "bluewaters-bay-penthouse",
    title: "Bluewaters Bay Penthouse",
    area: "Bluewaters Island",
    developer: "Meraas",
    propertyType: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    sizeSqft: 4150,
    priceAed: 16_750_000,
    status: "Ready",
    handover: null,
    rentalYield: 6.8,
    description:
      "A full-floor residence facing the open sea and Ain Dubai, with a 60-square-metre terrace designed for entertaining. A rare island address with direct beach access and no through traffic.",
    highlights: [
      "Full-floor penthouse with sea views",
      "60 sqm entertaining terrace",
      "Private beach club membership",
      "Ain Dubai and sunset orientation",
      "Zero-traffic island community",
    ],
    imageUrl: IMAGES.beachTerrace,
    gallery: [IMAGES.beachTerrace, IMAGES.balconyOcean, IMAGES.gardenLiving],
    featured: false,
  },
  {
    id: 5,
    slug: "jbr-shoreline-residence",
    title: "JBR Shoreline Residence",
    area: "Jumeirah Beach Residence",
    developer: "Dubai Properties",
    propertyType: "Apartment",
    bedrooms: 1,
    bathrooms: 2,
    sizeSqft: 860,
    priceAed: 2_150_000,
    status: "Ready",
    handover: null,
    rentalYield: 8.1,
    description:
      "A bright one-bedroom steps from The Walk, with a sea-facing balcony and an open-plan kitchen. A proven short-term rental performer with a furnished holiday-home licence in place.",
    highlights: [
      "Direct beach access from the building",
      "Holiday-home licence already issued",
      "8.1% gross short-stay yield",
      "Furnished and guest-ready",
      "Above the AED 2M Golden Visa threshold",
    ],
    imageUrl: IMAGES.coastalLiving,
    gallery: [IMAGES.coastalLiving, IMAGES.marinaSkyline, IMAGES.studio],
    featured: false,
  },
  {
    id: 6,
    slug: "peninsula-canal-loft",
    title: "Peninsula Canal Loft",
    area: "Business Bay",
    developer: "Select Group",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    sizeSqft: 1180,
    priceAed: 2_750_000,
    status: "Off-plan",
    handover: "Q4 2026",
    rentalYield: 7.0,
    description:
      "A canal-front loft in Peninsula Business Bay, delivered with a 60/40 payment plan and a projected 7% net yield on completion. Floor-to-ceiling glazing and a 14 sqm balcony facing the water.",
    highlights: [
      "60/40 payment plan, 20% on booking",
      "Handover Q4 2026",
      "Canal-front with skyline outlook",
      "Oqood issued — Golden Visa eligible",
      "Five minutes to Downtown Dubai",
    ],
    imageUrl: IMAGES.dining,
    gallery: [IMAGES.dining, IMAGES.minimalRoom, IMAGES.marinaAerial],
    featured: false,
  },
  {
    id: 7,
    slug: "hills-grove-townhouse",
    title: "Hills Grove Townhouse",
    area: "Dubai Hills Estate",
    developer: "Emaar",
    propertyType: "Townhouse",
    bedrooms: 4,
    bathrooms: 3,
    sizeSqft: 3300,
    priceAed: 5_200_000,
    status: "Ready",
    handover: null,
    rentalYield: 5.9,
    description:
      "A four-bedroom Grove townhouse backing onto the golf course, with a private garden and a light-filled double-height living room. A family-ready home inside a walkable, school-adjacent estate.",
    highlights: [
      "Golf-course backline plot",
      "Landscaped private garden",
      "Two assigned parking spaces",
      "Close to King's College Hospital",
      "Golden Visa qualifying investment",
    ],
    imageUrl: IMAGES.gardenLiving,
    gallery: [IMAGES.gardenLiving, IMAGES.kitchen, IMAGES.whiteTower],
    featured: false,
  },
  {
    id: 8,
    slug: "emirates-hills-pavilion",
    title: "Emirates Hills Pavilion",
    area: "Emirates Hills",
    developer: "Emaar",
    propertyType: "Villa",
    bedrooms: 6,
    bathrooms: 7,
    sizeSqft: 9500,
    priceAed: 38_000_000,
    status: "Ready",
    handover: null,
    rentalYield: 4.4,
    description:
      "A private pavilion estate on an 18,000 sqft plot overlooking the Montgomerie golf course. Six suites, a cinema, a wellness wing with hammam, and staff accommodation arranged around a central courtyard.",
    highlights: [
      "18,000 sqft landscaped plot",
      "Wellness wing with hammam and gym",
      "Six en-suite bedrooms",
      "Staff accommodation for four",
      "Gated 24-hour security",
    ],
    imageUrl: IMAGES.poolVilla,
    gallery: [IMAGES.poolVilla, IMAGES.poolsideLiving, IMAGES.seasideVilla],
    featured: false,
  },
  {
    id: 9,
    slug: "safa-one-residence",
    title: "Safa One Residence",
    area: "Downtown Dubai",
    developer: "DAMAC Properties",
    propertyType: "Apartment",
    bedrooms: 1,
    bathrooms: 2,
    sizeSqft: 780,
    priceAed: 1_950_000,
    status: "Off-plan",
    handover: "Q2 2027",
    rentalYield: 8.4,
    description:
      "A one-bedroom with a projected 8.4% short-stay yield, on a 70/30 plan with 1% monthly instalments. Book the Sheik Zayed skyline and step into the property-visa bracket at an attainable entry point.",
    highlights: [
      "70/30 plan with 1% monthly",
      "Projected 8.4% short-stay yield",
      "Property residence visa eligible",
      "Steps from the Dubai Canal promenade",
      "Handover Q2 2027",
    ],
    imageUrl: IMAGES.studio,
    gallery: [IMAGES.studio, IMAGES.minimalRoom, IMAGES.skylineBlue],
    featured: false,
  },
  {
    id: 10,
    slug: "marina-vista-duplex",
    title: "Marina Vista Duplex",
    area: "Dubai Marina",
    developer: "Emaar",
    propertyType: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    sizeSqft: 1860,
    priceAed: 4_600_000,
    status: "Ready",
    handover: null,
    rentalYield: 6.9,
    description:
      "A split-level duplex with a private internal staircase and two stacked balconies facing the marina. Ideal for a family who wants beach, schools and dining within a five-minute walk.",
    highlights: [
      "Two-level layout with private stair",
      "Two marina-facing balconies",
      "Community beach access",
      "Upgraded kitchen and flooring",
      "Vacant on transfer",
    ],
    imageUrl: IMAGES.marinaReflections,
    gallery: [IMAGES.marinaReflections, IMAGES.marinaAerial, IMAGES.poolsideLiving],
    featured: false,
  },
];

export const AREA_GUIDES = [
  {
    name: "Downtown Dubai",
    image: IMAGES.skylineBlue,
    from: 1_950_000,
    note: "Burj Khalifa district. The deepest resale liquidity in the city.",
  },
  {
    name: "Palm Jumeirah",
    image: IMAGES.seasideVilla,
    from: 6_500_000,
    note: "Beachfront villas and branded penthouses on the fronds.",
  },
  {
    name: "Dubai Marina",
    image: IMAGES.marinaWater,
    from: 1_900_000,
    note: "Highest yielding waterfront apartments in Dubai.",
  },
  {
    name: "Business Bay",
    image: IMAGES.dining,
    from: 1_400_000,
    note: "Canal-front off-plan with flexible payment plans.",
  },
  {
    name: "Jumeirah Beach Residence",
    image: IMAGES.coastalLiving,
    from: 2_150_000,
    note: "Beachfront living and the strongest short-stay market.",
  },
  {
    name: "Dubai Hills Estate",
    image: IMAGES.gardenLiving,
    from: 3_200_000,
    note: "Family townhouses around the championship golf course.",
  },
] as const;

function toProperty(row: PropertyRow): Property {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    area: row.area,
    developer: row.developer,
    propertyType: row.propertyType,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    sizeSqft: row.sizeSqft,
    priceAed: Number(row.priceAed),
    status: row.status,
    handover: row.handover,
    rentalYield: row.rentalYield,
    description: row.description,
    highlights: row.highlights ?? [],
    imageUrl: row.imageUrl,
    gallery: row.gallery?.length ? row.gallery : [row.imageUrl],
    featured: row.featured,
    createdAt: row.createdAt,
  };
}

let seedPromise: Promise<void> | null = null;

async function ensureSeeded(): Promise<void> {
  if (!seedPromise) {
    seedPromise = (async () => {
      const [{ count }] = await db
        .select({ count: sql<number>`count(*)::int` })
        .from(properties);
      if ((count ?? 0) > 0) return;
      await db
        .insert(properties)
        .values(
          SEED_PROPERTIES.map((property) => ({
            slug: property.slug,
            title: property.title,
            area: property.area,
            developer: property.developer,
            propertyType: property.propertyType,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            sizeSqft: property.sizeSqft,
            priceAed: property.priceAed,
            status: property.status,
            handover: property.handover,
            rentalYield: property.rentalYield,
            description: property.description,
            highlights: property.highlights,
            imageUrl: property.imageUrl,
            gallery: property.gallery,
            featured: property.featured,
          })),
        )
        .onConflictDoNothing();
    })().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }
  return seedPromise;
}

function filterSeed(filters: PropertyFilters): Property[] {
  let rows = [...SEED_PROPERTIES];
  if (filters.featured) rows = rows.filter((p) => p.featured);
  if (filters.area) rows = rows.filter((p) => p.area === filters.area);
  if (filters.type) rows = rows.filter((p) => p.propertyType === filters.type);
  if (filters.status) rows = rows.filter((p) => p.status === filters.status);
  if (filters.beds) rows = rows.filter((p) => p.bedrooms >= filters.beds!);
  if (filters.maxPrice) rows = rows.filter((p) => p.priceAed <= filters.maxPrice!);
  if (filters.q) {
    const q = filters.q.toLowerCase();
    rows = rows.filter((p) =>
      [p.title, p.area, p.developer, p.propertyType, p.description]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }
  rows = sortRows(rows, filters.sort);
  return filters.limit ? rows.slice(0, filters.limit) : rows;
}

function sortRows(rows: Property[], sort?: string): Property[] {
  switch (sort) {
    case "price-asc":
      return rows.sort((a, b) => a.priceAed - b.priceAed);
    case "price-desc":
      return rows.sort((a, b) => b.priceAed - a.priceAed);
    case "size-desc":
      return rows.sort((a, b) => b.sizeSqft - a.sizeSqft);
    default:
      return rows.sort(
        (a, b) => Number(b.featured) - Number(a.featured) || b.priceAed - a.priceAed,
      );
  }
}

export async function getProperties(filters: PropertyFilters = {}): Promise<Property[]> {
  try {
    await ensureSeeded();
    const conditions = [];
    if (filters.featured) conditions.push(eq(properties.featured, true));
    if (filters.area) conditions.push(eq(properties.area, filters.area));
    if (filters.type) conditions.push(eq(properties.propertyType, filters.type));
    if (filters.status) conditions.push(eq(properties.status, filters.status));
    if (filters.beds) conditions.push(gte(properties.bedrooms, filters.beds));
    if (filters.maxPrice) conditions.push(lte(properties.priceAed, filters.maxPrice));
    if (filters.q) {
      const term = `%${filters.q}%`;
      conditions.push(
        or(
          ilike(properties.title, term),
          ilike(properties.area, term),
          ilike(properties.developer, term),
          ilike(properties.propertyType, term),
        ),
      );
    }

    const order =
      filters.sort === "price-asc"
        ? [asc(properties.priceAed)]
        : filters.sort === "size-desc"
          ? [desc(properties.sizeSqft)]
          : [desc(properties.featured), desc(properties.priceAed)];

    const query = db
      .select()
      .from(properties)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(...order);

    const rows = filters.limit ? await query.limit(filters.limit) : await query;
    if (!rows.length && filters.q === undefined && Object.keys(filters).length === 0) {
      return SEED_PROPERTIES;
    }
    return rows.map(toProperty);
  } catch {
    return filterSeed(filters);
  }
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    await ensureSeeded();
    const rows = await db.select().from(properties).where(eq(properties.slug, slug)).limit(1);
    if (rows[0]) return toProperty(rows[0]);
  } catch {
    // fall through to static catalogue
  }
  return SEED_PROPERTIES.find((property) => property.slug === slug) ?? null;
}

export async function getRelatedProperties(property: Property, limit = 3): Promise<Property[]> {
  const all = await getProperties();
  return all
    .filter((item) => item.slug !== property.slug)
    .sort((a, b) => Number(b.area === property.area) - Number(a.area === property.area))
    .slice(0, limit);
}

export function parseFilters(params: Record<string, string | string[] | undefined>): PropertyFilters {
  const first = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };
  const beds = Number(first("beds"));
  const maxPrice = Number(first("maxPrice"));
  return {
    q: first("q")?.trim() || undefined,
    area: first("area") || undefined,
    type: first("type") || undefined,
    status: first("status") || undefined,
    beds: Number.isFinite(beds) && beds > 0 ? beds : undefined,
    maxPrice: Number.isFinite(maxPrice) && maxPrice > 0 ? maxPrice : undefined,
    sort: first("sort") || undefined,
  };
}
