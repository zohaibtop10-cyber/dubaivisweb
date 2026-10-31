"use client";

import { useMemo, useState } from "react";
import { formatDate } from "@/lib/format";
import { ArrowUpRight, Check } from "@/components/icons";

export type AdminLead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string | null;
  budget: string | null;
  interest: string | null;
  message: string | null;
  source: string;
  propertySlug: string | null;
  status: string;
  createdAt: string;
};

const STATUSES = ["new", "contacted", "qualified", "archived"] as const;

const statusStyles: Record<string, string> = {
  new: "bg-goldpale text-gold border-gold/40",
  contacted: "bg-blue-50 text-blue-700 border-blue-200",
  qualified: "bg-[#e9f9ef] text-success border-success/30",
  archived: "bg-mist text-muted border-line",
};

export function AdminLeadTable({ initialLeads }: { initialLeads: AdminLead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const counts = useMemo(() => {
    return {
      all: leads.length,
      new: leads.filter((lead) => lead.status === "new").length,
      contacted: leads.filter((lead) => lead.status === "contacted").length,
      qualified: leads.filter((lead) => lead.status === "qualified").length,
      archived: leads.filter((lead) => lead.status === "archived").length,
    };
  }, [leads]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = filter === "all" || lead.status === filter;
      const matchesQuery =
        !term ||
        [lead.name, lead.email, lead.phone, lead.interest, lead.budget, lead.propertySlug, lead.country]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesStatus && matchesQuery;
    });
  }, [leads, filter, query]);

  const updateStatus = async (id: number, status: string) => {
    setPendingId(id);
    setError("");
    const previous = leads;
    setLeads((rows) => rows.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error("failed");
    } catch {
      setLeads(previous);
      setError("Could not save that change. Please try again.");
    } finally {
      setPendingId(null);
    }
  };

  const exportCsv = () => {
    const header = ["id", "name", "email", "phone", "country", "budget", "interest", "source", "property", "status", "received"];
    const rows = visible.map((lead) => [
      lead.id,
      lead.name,
      lead.email,
      lead.phone,
      lead.country ?? "",
      lead.budget ?? "",
      lead.interest ?? "",
      lead.source,
      lead.propertySlug ?? "",
      lead.status,
      lead.createdAt,
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sanad-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: "Total enquiries", value: counts.all },
          { label: "Awaiting first contact", value: counts.new },
          { label: "Qualified", value: counts.qualified },
          { label: "Newsletter only", value: leads.filter((lead) => lead.source === "newsletter").length },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-line bg-white p-4">
            <p className="font-display text-[28px] leading-none">{stat.value}</p>
            <p className="mt-2 text-[9.5px] uppercase tracking-[0.14em] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {(["all", ...STATUSES] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                  filter === status
                    ? "border-navy bg-navy text-white"
                    : "border-line text-muted hover:border-gold hover:text-gold"
                }`}
              >
                {status} · {counts[status as keyof typeof counts]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search enquiries"
              aria-label="Search enquiries"
              className="field !w-auto !flex-1 !py-2 !text-[12px] lg:!w-56"
            />
            <button type="button" onClick={exportCsv} className="btn-outline !px-4 !py-2 !text-[10px]">
              Export CSV
            </button>
          </div>
        </div>

        {error && <p className="px-5 pt-3 text-[11.5px] text-red-600">{error}</p>}

        {visible.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-display text-2xl">Nothing here yet.</p>
            <p className="mx-auto mt-2 max-w-sm text-[12.5px] leading-relaxed text-muted">
              {leads.length === 0
                ? "Enquiries submitted through the site will appear here in real time, stored in PostgreSQL."
                : "No enquiries match the current filter or search."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-line text-[9.5px] uppercase tracking-[0.14em] text-muted">
                  <th className="px-5 py-3 font-medium">Client</th>
                  <th className="px-5 py-3 font-medium">Brief</th>
                  <th className="px-5 py-3 font-medium">Source</th>
                  <th className="px-5 py-3 font-medium">Received</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {visible.map((lead) => (
                  <tr key={lead.id} className="align-top transition-colors hover:bg-mist/60">
                    <td className="px-5 py-4">
                      <p className="text-[12.5px] font-medium">{lead.name}</p>
                      <a href={`mailto:${lead.email}`} className="mt-0.5 block text-[11.5px] text-muted hover:text-gold">
                        {lead.email}
                      </a>
                      <p className="mt-0.5 text-[11.5px] text-muted">{lead.phone}</p>
                      {lead.country && (
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-muted/70">
                          {lead.country}
                        </p>
                      )}
                    </td>
                    <td className="max-w-[280px] px-5 py-4">
                      <p className="text-[12px] text-body">{lead.interest ?? "—"}</p>
                      <p className="mt-0.5 text-[11px] text-muted">{lead.budget ?? "Budget not set"}</p>
                      {lead.propertySlug && (
                        <a
                          href={`/properties/${lead.propertySlug}`}
                          className="mt-1 inline-flex items-center gap-1 text-[10.5px] uppercase tracking-[0.08em] text-gold"
                        >
                          Property <ArrowUpRight className="h-2.5 w-2.5" />
                        </a>
                      )}
                      {lead.message && (
                        <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted/80">
                          {lead.message}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-line px-2.5 py-1 text-[9.5px] uppercase tracking-[0.1em] text-muted">
                        {lead.source}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-[11.5px] text-muted">
                      {formatDate(lead.createdAt)}
                      <span className="mt-0.5 block text-[10px] text-muted/60">
                        {new Date(lead.createdAt).toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <select
                        value={lead.status}
                        onChange={(event) => updateStatus(lead.id, event.target.value)}
                        disabled={pendingId === lead.id}
                        aria-label={`Status for ${lead.name}`}
                        className={`w-[130px] rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] ${statusStyles[lead.status] ?? "border-line"} disabled:opacity-60`}
                      >
                        {STATUSES.map((status) => (
                          <option key={status} value={status} className="text-navy">
                            {status}
                          </option>
                        ))}
                      </select>
                      {pendingId === lead.id && (
                        <span className="mt-1.5 flex items-center gap-1 text-[9.5px] uppercase tracking-[0.1em] text-muted">
                          <Check className="h-2.5 w-2.5" /> saving
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <p className="mt-4 text-[10.5px] uppercase tracking-[0.14em] text-muted/70">
        Internal demonstration view · statuses persist in PostgreSQL
      </p>
    </div>
  );
}
