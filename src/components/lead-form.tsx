"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { BRAND } from "@/lib/brand";
import { BUDGETS, COUNTRIES } from "@/lib/format";
import { ArrowRight, CheckCircle, Clock, Globe, Mail, Phone, Send, Shield, Users, WhatsApp } from "@/components/icons";

type LeadFormProps = {
  source?: string;
  propertySlug?: string;
  defaultInterest?: string;
  defaultBudget?: string;
  dark?: boolean;
  compact?: boolean;
  title?: string;
  description?: string;
  submitLabel?: string;
  showHeader?: boolean;
};

const INTERESTS = [
  "Property owner visa (AED 750K+)",
  "Golden Visa (AED 2M+)",
  "Family sponsorship",
  "Property search",
  "Investment & yield advice",
  "Referral partnership",
];

const CHIP_LABEL: Record<string, string> = {
  "Property owner visa (AED 750K+)": "Property Visa",
  "Golden Visa (AED 2M+)": "Golden Visa",
  "Family sponsorship": "Family visa",
  "Property search": "Find a property",
  "Investment & yield advice": "Investment advice",
  "Referral partnership": "Referral partner",
};

const TRUST = [
  { icon: Shield, label: "Free eligibility check" },
  { icon: Clock, label: "Replies in minutes" },
  { icon: CheckCircle, label: "No spam, ever" },
];

const EMPTY = { name: "", email: "", phone: "", country: "", budget: "", interest: "", message: "" };
type FormState = typeof EMPTY;
type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({
  id,
  label,
  icon,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  icon?: ReactNode;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-charcoal">
        {label}
      </label>
      <div className="relative">
        {icon && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">{icon}</span>}
        {children}
      </div>
      {error && <p className="mt-1.5 text-[12.5px] font-medium text-rose-600">{error}</p>}
    </div>
  );
}

export function LeadForm({
  source = "consultation",
  propertySlug,
  defaultInterest = "",
  defaultBudget = "",
  compact = false,
  title = "Get your free eligibility check",
  description = "Tell us about your property and family. A senior case officer replies with your visa route and an itemised fee sheet — usually within minutes.",
  submitLabel = "Check my eligibility",
  showHeader = true,
}: LeadFormProps) {
  const uid = useId();
  const careers = source === "careers";
  const [form, setForm] = useState<FormState>({ ...EMPTY, interest: defaultInterest, budget: defaultBudget });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const interests = defaultInterest && !INTERESTS.includes(defaultInterest) ? [defaultInterest, ...INTERESTS] : INTERESTS;

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const local: Errors = {};
    if (form.name.trim().length < 2) local.name = "Please add your full name.";
    if (!EMAIL_RE.test(form.email.trim())) local.email = "Please add a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) local.phone = "Please add a number we can reach you on.";
    if (Object.keys(local).length) {
      setErrors(local);
      return;
    }

    setStatus("sending");
    setServerError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source, propertySlug }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: Record<string, string>;
        error?: string;
      };
      if (!response.ok || !data.ok) {
        setErrors((data.errors ?? {}) as Errors);
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setServerError("We couldn’t send your message. Please try again or message us on WhatsApp.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    const first = form.name.trim().split(/\s+/)[0];
    return (
      <div className="relative overflow-hidden rounded-[28px] bg-white p-7 text-center shadow-[0_30px_70px_-40px_rgba(15,30,90,0.45)] ring-1 ring-line sm:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#22c55e]/10 blur-3xl" />
        <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8f7ef] text-[#16a34a]">
          <CheckCircle className="h-8 w-8" />
        </span>
        <h3 className="relative mt-5 font-display text-[24px] font-semibold text-ink">Thank you{first ? `, ${first}` : ""}!</h3>
        <p className="relative mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-muted">
          {careers
            ? "We’ve received your application and reply to every candidate within a few working days."
            : `A senior case officer will contact you on WhatsApp shortly — usually within minutes during working hours (${BRAND.hours}).`}
        </p>
        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green">
            <WhatsApp className="h-4 w-4" /> Chat now
          </a>
          <button
            type="button"
            onClick={() => {
              setForm({ ...EMPTY, interest: defaultInterest, budget: defaultBudget });
              setStatus("idle");
            }}
            className="btn-outline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(15,30,90,0.45)] ring-1 ring-line sm:p-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

      {showHeader && (
        <div className="relative">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-[0_12px_24px_-12px_rgba(37,84,242,0.8)]">
              <Send className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-[21px] font-semibold leading-snug text-ink">{title}</h3>
              {description && <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{description}</p>}
            </div>
          </div>
          {!careers && (
            <div className="mt-5 flex flex-wrap gap-2">
              {TRUST.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-[12.5px] font-medium text-body"
                >
                  <item.icon className="h-3.5 w-3.5 text-primary" /> {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={`relative grid gap-4 sm:grid-cols-2 ${showHeader ? "mt-6" : ""}`}>
        <Field id={`${uid}-name`} label="Full name" icon={<Users className="h-4 w-4" />} error={errors.name}>
          <input
            id={`${uid}-name`}
            className="field !rounded-2xl !pl-11"
            placeholder="Your full name"
            autoComplete="name"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field id={`${uid}-phone`} label="WhatsApp / phone" icon={<Phone className="h-4 w-4" />} error={errors.phone}>
          <input
            id={`${uid}-phone`}
            className="field !rounded-2xl !pl-11"
            placeholder="+971 50 000 0000"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field
          id={`${uid}-email`}
          label="Email"
          icon={<Mail className="h-4 w-4" />}
          error={errors.email}
          className={compact || careers ? "sm:col-span-2" : ""}
        >
          <input
            id={`${uid}-email`}
            type="email"
            className="field !rounded-2xl !pl-11"
            placeholder="you@example.com"
            autoComplete="email"
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        {!compact && !careers && (
          <Field id={`${uid}-country`} label="Country of residence" icon={<Globe className="h-4 w-4" />}>
            <select
              id={`${uid}-country`}
              className="field !rounded-2xl !pl-11"
              value={form.country}
              onChange={(event) => update("country", event.target.value)}
            >
              <option value="">Select a country</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </Field>
        )}
      </div>

      {!careers && (
        <fieldset className="relative mt-5">
          <legend className="mb-2 text-[13px] font-semibold text-charcoal">What can we help with?</legend>
          <div role="radiogroup" aria-label="What can we help with?" className="flex flex-wrap gap-2">
            {interests.map((option) => {
              const on = form.interest === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => update("interest", on ? "" : option)}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all ${
                    on
                      ? "bg-primary text-white shadow-[0_8px_18px_-8px_rgba(37,84,242,0.8)]"
                      : "bg-mist text-body hover:bg-primary-soft hover:text-primary"
                  }`}
                >
                  {CHIP_LABEL[option] ?? option}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {!compact && !careers && (
        <div className="relative mt-5">
          <label htmlFor={`${uid}-budget`} className="mb-1.5 block text-[13px] font-semibold text-charcoal">
            Property budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id={`${uid}-budget`}
            className="field !rounded-2xl"
            value={form.budget}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="">Select a budget</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      )}

      {(!compact || careers) && (
        <div className="relative mt-5">
          <label htmlFor={`${uid}-message`} className="mb-1.5 block text-[13px] font-semibold text-charcoal">
            {careers ? "Role and a line about you" : "Anything else we should know?"}
          </label>
          <textarea
            id={`${uid}-message`}
            rows={3}
            className="field !rounded-2xl resize-none"
            placeholder={
              careers ? "Which role, and what you’ve worked on in the last 12 months" : "Timeline, family members, preferred areas…"
            }
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
          />
        </div>
      )}

      {serverError && <p className="relative mt-4 text-[13px] font-medium text-rose-600">{serverError}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-gold relative mt-6 w-full !py-4 !text-[15px]">
        {status === "sending" ? "Sending…" : submitLabel} <ArrowRight className="h-4 w-4" />
      </button>

      <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5" /> Your details stay private.
        </span>
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#16a34a] hover:underline"
        >
          <WhatsApp className="h-4 w-4" /> Prefer WhatsApp?
        </a>
      </div>
    </form>
  );
}
