import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCES = new Set([
  "consultation",
  "property",
  "eligibility",
  "newsletter",
  "footer",
  "calculator",
  "careers",
]);

function text(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const source = SOURCES.has(text(payload.source, 32)) ? text(payload.source, 32) : "consultation";
  const email = text(payload.email, 180).toLowerCase();
  const errors: Record<string, string> = {};

  if (source === "newsletter") {
    if (!EMAIL_RE.test(email)) errors.email = "Please add a valid email.";
  } else {
    const name = text(payload.name, 120);
    const phone = text(payload.phone, 40);
    if (name.length < 2) errors.name = "Please add your full name.";
    if (!(source === "calculator" && email === "") && !EMAIL_RE.test(email)) errors.email = "Please add a valid email.";
    if (phone.replace(/\D/g, "").length < 7) errors.phone = "Please add a reachable phone number.";
  }

  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const record = {
    name: text(payload.name, 120) || "Newsletter subscriber",
    email: email || "not provided",
    phone: text(payload.phone, 40) || "—",
    country: text(payload.country, 80) || null,
    budget: text(payload.budget, 80) || null,
    interest: text(payload.interest, 120) || null,
    message: text(payload.message, 1600) || null,
    source,
    propertySlug: text(payload.propertySlug, 160) || null,
    status: "new" as const,
  };

  try {
    const [created] = await db.insert(leads).values(record).returning({ id: leads.id });
    return Response.json({ ok: true, id: created?.id ?? null }, { status: 201 });
  } catch {
    return Response.json(
      { ok: false, error: "The advisory desk is unavailable right now. Please email advisory@sanad.ae." },
      { status: 503 },
    );
  }
}

export async function GET() {
  try {
    const rows = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(100);
    return Response.json({ ok: true, leads: rows });
  } catch {
    return Response.json({ ok: false, error: "Unable to load enquiries." }, { status: 503 });
  }
}
