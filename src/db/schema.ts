import {
  bigint,
  boolean,
  doublePrecision,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  area: text("area").notNull(),
  developer: text("developer").notNull(),
  propertyType: text("property_type").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  sizeSqft: integer("size_sqft").notNull(),
  priceAed: bigint("price_aed", { mode: "number" }).notNull(),
  status: text("status").notNull(),
  handover: text("handover"),
  rentalYield: doublePrecision("rental_yield"),
  description: text("description").notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull().default([]),
  imageUrl: text("image_url").notNull(),
  gallery: jsonb("gallery").$type<string[]>().notNull().default([]),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  country: text("country"),
  budget: text("budget"),
  interest: text("interest"),
  message: text("message"),
  source: text("source").notNull().default("consultation"),
  propertySlug: text("property_slug"),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type PropertyRow = typeof properties.$inferSelect;
export type LeadRow = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
