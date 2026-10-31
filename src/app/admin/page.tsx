import type { Metadata } from "next";
import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { AdminLeadTable, type AdminLead } from "@/components/admin-lead-table";
import { ArrowRight, Shield } from "@/components/icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Advisor portal",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  let rows: AdminLead[] = [];
  let unavailable = false;

  try {
    const data = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(200);
    rows = data.map((lead) => ({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      country: lead.country,
      budget: lead.budget,
      interest: lead.interest,
      message: lead.message,
      source: lead.source,
      propertySlug: lead.propertySlug,
      status: lead.status,
      createdAt: lead.createdAt.toISOString(),
    }));
  } catch {
    unavailable = true;
  }

  return (
    <section className="min-h-[70vh] bg-mist py-10 lg:py-14">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
          <div>
            <p className="eyebrow">Internal · advisor portal</p>
            <h1 className="mt-2 font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold text-ink">
              Enquiry desk
            </h1>
            <p className="mt-1.5 max-w-xl text-[12px] leading-relaxed text-muted">
              Every form submission on the site lands here. Work each enquiry from new through to
              qualified; changes persist to PostgreSQL.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link href="/" className="btn-outline !px-4 !py-2.5 !text-[11px]">
              View site
            </Link>
            <Link href="/contact" className="btn-navy !px-4 !py-2.5 !text-[11px]">
              New enquiry <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {unavailable ? (
          <div className="mt-6 rounded-xl border border-dashed border-line bg-white px-6 py-16 text-center">
            <Shield className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-3 font-display text-xl font-semibold text-ink">Database unavailable.</p>
            <p className="mx-auto mt-2 max-w-md text-[12px] leading-relaxed text-muted">
              The enquiry store could not be reached. Check the database connection, then reload this
              page.
            </p>
          </div>
        ) : (
          <div className="mt-5">
            <AdminLeadTable initialLeads={rows} />
          </div>
        )}
      </div>
    </section>
  );
}
