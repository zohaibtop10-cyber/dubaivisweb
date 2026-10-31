"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { formatAed, formatNumber } from "@/lib/format";
import type { Property } from "@/lib/properties";
import { Area, Bath, Bed, Building, Check, ChevronRight, Key, Shield, Sparkles } from "@/components/icons";

export function PropertyCard({ property }: { property: Property }) {
  const isGolden = property.priceAed >= 2_000_000;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-line/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.18)] hover:ring-primary/40">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.imageUrl}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-2">
          {isGolden ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
              <Sparkles className="h-3 w-3" /> 10-Yr Golden Visa
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
              <Shield className="h-3 w-3" /> 2-Yr Property Visa
            </span>
          )}

          <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur">
            {property.status}
          </span>
        </div>

        {property.rentalYield && (
          <div className="absolute bottom-3 right-3 rounded-full bg-navydeep/85 px-2.5 py-1 text-[11.5px] font-bold text-white shadow backdrop-blur">
            {property.rentalYield}% Gross Yield
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-primary">{property.developer}</p>
            <h3 className="font-display text-[18px] font-bold text-ink transition-colors group-hover:text-primary">
              <Link href={`/properties/${property.slug}`}>
                <span className="absolute inset-0" aria-hidden="true" />
                {property.title}
              </Link>
            </h3>
            <p className="mt-0.5 text-[13px] text-muted">{property.area}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-4 flex items-center gap-4 border-y border-line/70 py-3 text-[13px] text-body">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Bed className="h-4 w-4 text-primary" /> {property.bedrooms} Beds
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Bath className="h-4 w-4 text-primary" /> {property.bathrooms} Baths
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Area className="h-4 w-4 text-primary" /> {formatNumber(property.sizeSqft)} sqft
          </span>
        </div>

        {/* Footer with Price */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <span className="text-[11px] font-medium uppercase text-muted">Total Price</span>
            <p className="font-display text-[20px] font-bold text-ink">{formatAed(property.priceAed)}</p>
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary transition-all group-hover:bg-primary group-hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export function PropertyFilters({ total, shown }: { total: number; shown: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentArea = searchParams.get("area") || "";
  const currentType = searchParams.get("type") || "";
  const currentStatus = searchParams.get("status") || "";
  const currentSort = searchParams.get("sort") || "";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="rounded-[24px] bg-white p-4 shadow-[0_20px_50px_-20px_rgba(15,30,90,0.15)] ring-1 ring-line sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <h2 className="font-display text-[17px] font-bold text-ink">Filter Visa-Ready Homes</h2>
          <p className="text-[12.5px] text-muted">
            Showing <strong className="text-ink">{shown}</strong> of {total} properties qualifying for UAE residence
          </p>
        </div>
        {(currentArea || currentType || currentStatus || currentSort) && (
          <Link
            href="/properties"
            className="text-[12px] font-semibold text-primary transition-colors hover:text-primary-dark hover:underline"
          >
            Clear all filters
          </Link>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {/* Area */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Area</label>
          <select
            value={currentArea}
            onChange={(e) => updateParam("area", e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-mist/50 px-3 py-2 text-[13.5px] font-medium text-ink focus:border-primary focus:bg-white focus:outline-none"
          >
            <option value="">All Locations</option>
            <option value="Downtown Dubai">Downtown Dubai</option>
            <option value="Palm Jumeirah">Palm Jumeirah</option>
            <option value="Dubai Marina">Dubai Marina</option>
            <option value="Dubai Hills Estate">Dubai Hills Estate</option>
            <option value="Business Bay">Business Bay</option>
            <option value="Jumeirah Golf Estates">Jumeirah Golf Estates</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Type</label>
          <select
            value={currentType}
            onChange={(e) => updateParam("type", e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-mist/50 px-3 py-2 text-[13.5px] font-medium text-ink focus:border-primary focus:bg-white focus:outline-none"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Status</label>
          <select
            value={currentStatus}
            onChange={(e) => updateParam("status", e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-mist/50 px-3 py-2 text-[13.5px] font-medium text-ink focus:border-primary focus:bg-white focus:outline-none"
          >
            <option value="">Ready & Off-Plan</option>
            <option value="Ready">Ready (Immediate Title)</option>
            <option value="Off-plan">Off-Plan (Oqood/DLD)</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Sort By</label>
          <select
            value={currentSort}
            onChange={(e) => updateParam("sort", e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-mist/50 px-3 py-2 text-[13.5px] font-medium text-ink focus:border-primary focus:bg-white focus:outline-none"
          >
            <option value="">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="size-desc">Largest Size First</option>
          </select>
        </div>
      </div>
    </div>
  );
}
