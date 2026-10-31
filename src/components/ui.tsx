import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "@/components/icons";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs, center = false }: { crumbs: Crumb[]; center?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={center ? "flex justify-center" : "flex"}>
      <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-[13px] font-medium text-muted shadow-sm ring-1 ring-line backdrop-blur">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.label} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-[#b3bbd6]" />
            {crumb.href ? (
              <Link href={crumb.href} className="transition-colors hover:text-primary">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="max-w-[18rem] truncate text-ink">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  action,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  action?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  const eyebrowClass = light ? "eyebrow eyebrow-light" : "eyebrow";
  const titleClass = light ? "section-title mt-4 !text-white" : "section-title mt-4";
  const leadClass = light ? "section-lead mt-4 !text-white/75" : "section-lead mt-4";

  if (align === "left") {
    return (
      <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}>
        <div className="max-w-2xl">
          {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
          <h2 className={titleClass}>{title}</h2>
          {lead && <p className={leadClass}>{lead}</p>}
        </div>
        {action && <div className="flex shrink-0 flex-wrap gap-3">{action}</div>}
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <h2 className={titleClass}>{title}</h2>
      {lead && <p className={leadClass}>{lead}</p>}
      {action && <div className="mt-7 flex flex-wrap justify-center gap-3">{action}</div>}
    </div>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  imageFit = "cover",
  aside,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const split = Boolean(image);

  return (
    <section className="relative px-3 pt-2 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e4ebff] via-[#f2f5ff] to-[#fdfdff]">
        <div
          aria-hidden="true"
          className="dots pointer-events-none absolute right-0 top-0 h-56 w-80 opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="dots pointer-events-none absolute bottom-0 left-0 h-48 w-72 opacity-60 [mask-image:linear-gradient(to_top_right,black,transparent_70%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div
          className={
            split
              ? "shell relative grid items-center gap-12 py-12 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16"
              : "shell relative py-14 text-center sm:py-20 lg:py-24"
          }
        >
          <div className={split ? "animate-rise" : "animate-rise mx-auto max-w-3xl"}>
            <Breadcrumbs crumbs={crumbs} center={!split} />
            {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
            <h1
              className={`${eyebrow ? "mt-4" : "mt-6"} font-display text-[clamp(2.1rem,1.35rem+2.9vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink`}
            >
              {title}
            </h1>
            {lead && (
              <p className={`mt-5 text-[16.5px] leading-[1.75] text-body ${split ? "max-w-xl" : "mx-auto max-w-2xl"}`}>
                {lead}
              </p>
            )}
            {children && (
              <div className={`mt-8 flex flex-wrap items-center gap-3 ${split ? "" : "justify-center"}`}>{children}</div>
            )}
          </div>

          {image && (
            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div
                className={`overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(15,30,90,0.55)] ${
                  imageFit === "contain" ? "bg-white" : "bg-primary-soft"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={imageAlt}
                  fetchPriority="high"
                  className={`aspect-[4/3] w-full ${imageFit === "contain" ? "object-contain p-8" : "object-cover"}`}
                />
              </div>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function FloatCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`absolute z-10 rounded-2xl bg-white p-3.5 shadow-[0_24px_48px_-22px_rgba(15,30,90,0.5)] ring-1 ring-line ${className}`}
    >
      {children}
    </div>
  );
}
