import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return Response.json(
        { ok: false, error: "DATABASE_URL is not configured" },
        { status: 503 }
      );
    }
    await db.execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Health check failed";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
