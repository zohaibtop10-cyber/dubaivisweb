import { eq } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

const STATUSES = new Set(["new", "contacted", "qualified", "archived"]);

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId) || leadId <= 0) {
    return Response.json({ ok: false, error: "Invalid enquiry id." }, { status: 400 });
  }

  let status = "";
  try {
    const body = (await request.json()) as { status?: unknown };
    status = typeof body.status === "string" ? body.status : "";
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!STATUSES.has(status)) {
    return Response.json({ ok: false, error: "Unknown status." }, { status: 400 });
  }

  try {
    const [updated] = await db
      .update(leads)
      .set({ status })
      .where(eq(leads.id, leadId))
      .returning({ id: leads.id, status: leads.status });
    if (!updated) {
      return Response.json({ ok: false, error: "Enquiry not found." }, { status: 404 });
    }
    return Response.json({ ok: true, lead: updated });
  } catch {
    return Response.json({ ok: false, error: "Unable to update enquiry." }, { status: 503 });
  }
}
