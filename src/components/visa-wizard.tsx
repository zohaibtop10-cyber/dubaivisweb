"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { BRAND, whatsappLink } from "@/lib/brand";
import {
  FEES,
  PROPERTY_MIN,
  GOLDEN_MIN,
  SERVICE_FEES,
  formatAed,
  type WizardVisa,
} from "@/lib/calculator";
import { BrandMark, CalculatorIcon } from "@/components/brand-mark";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronRight,
  Close,
  Shield,
  WhatsApp,
} from "@/components/icons";
import {
  Icon3DPropertyVisa,
  Icon3DGoldenVisa,
  Icon3DFamilyVisa,
  Icon3DNewbornVisa,
  Icon3DCalculator,
} from "@/components/icons-3d";

type StepId = "visa" | "details" | "estimate";

const VISA_OPTIONS: {
  id: WizardVisa;
  title: string;
  badge: string;
  validity: string;
  subtitle: string;
  startingFee: number;
  icon: typeof Icon3DPropertyVisa;
}[] = [
  {
    id: "property",
    title: "Property Visa",
    badge: "AED 750K+ Property",
    validity: "2-Year Renewable",
    subtitle: "Turn ready or mortgaged Dubai real estate into a renewable investor residency.",
    startingFee: 6311,
    icon: Icon3DPropertyVisa,
  },
  {
    id: "golden",
    title: "Golden Visa",
    badge: "AED 2M+ Property",
    validity: "10-Year Self-Sponsored",
    subtitle: "Long-term self-sponsored residence with 100% ownership & family sponsorship.",
    startingFee: 9421,
    icon: Icon3DGoldenVisa,
  },
  {
    id: "family",
    title: "Family Visa",
    badge: "Dependents",
    validity: "Matches Sponsor Visa",
    subtitle: "Sponsor spouse, sons (up to 25) & daughters (any age) on your residency file.",
    startingFee: 1100,
    icon: Icon3DFamilyVisa,
  },
  {
    id: "newborn",
    title: "Newborn Visa",
    badge: "120-Day Window",
    validity: "2-Year Residence",
    subtitle: "Complete hospital birth certificate to Emirates ID courier without leaving home.",
    startingFee: 3500,
    icon: Icon3DNewbornVisa,
  },
];

type VisaWizardProps = {
  open: boolean;
  onClose?: () => void;
  initialVisa?: WizardVisa | null;
  preset?: any;
  embedded?: boolean;
};

export function VisaWizard({
  open,
  onClose = () => {},
  initialVisa = null,
  preset,
  embedded = false,
}: VisaWizardProps) {
  const [selectedVisa, setSelectedVisa] = useState<WizardVisa>(initialVisa ?? "property");
  const [step, setStep] = useState<StepId>(initialVisa ? "details" : "visa");

  // Sync state when initialVisa changes
  const [prevInitialVisa, setPrevInitialVisa] = useState(initialVisa);
  if (initialVisa !== prevInitialVisa) {
    setPrevInitialVisa(initialVisa);
    if (initialVisa) {
      setSelectedVisa(initialVisa);
      setStep("details");
    }
  }

  // Step 2 Form Details
  const [propertyPrice, setPropertyPrice] = useState<number>(preset?.priceAed ?? 2_200_000);
  const [inUae, setInUae] = useState(true);
  const [isRenewal, setIsRenewal] = useState(false);
  const [dependents, setDependents] = useState(1);

  // Step 3 Lead Capture
  const [countryCode, setCountryCode] = useState("+971");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Fee Calculation
  const calculation = useMemo(() => {
    let govtFee = 0;
    let serviceFee = 0;
    const items: { label: string; amount: number; dept: string }[] = [];

    if (selectedVisa === "golden") {
      govtFee = FEES.dldGoldenFile + FEES.goldenIssuance + FEES.medical + FEES.eid10y;
      serviceFee = SERVICE_FEES.golden;
      items.push(
        { label: "DLD Golden Nomination & Property Verification", amount: FEES.dldGoldenFile, dept: "Dubai Land Dept" },
        { label: "ICP 10-Year Golden Visa Issuance", amount: FEES.goldenIssuance, dept: "ICP Federal Authority" },
        { label: "Executive VIP Medical Fitness Test", amount: FEES.medical, dept: "Dubai Health (DHA)" },
        { label: "10-Year Biometric Emirates ID", amount: FEES.eid10y, dept: "ICP" },
      );
    } else if (selectedVisa === "property") {
      govtFee = FEES.dldPropertyFile + FEES.residence2y + FEES.medical + FEES.eid2y;
      serviceFee = SERVICE_FEES.property;
      items.push(
        { label: "DLD Property File Opening & Title Clearance", amount: FEES.dldPropertyFile, dept: "Dubai Land Dept" },
        { label: "GDRFA 2-Year Residence Visa Stamping", amount: FEES.residence2y, dept: "GDRFA Dubai" },
        { label: "VIP Medical Fitness Test", amount: FEES.medical, dept: "Dubai Health (DHA)" },
        { label: "2-Year Emirates ID Card", amount: FEES.eid2y, dept: "ICP" },
      );
    } else if (selectedVisa === "family") {
      const perPerson = FEES.residence2y + FEES.medical + FEES.eid2y + FEES.entryPermit;
      const count = Math.max(1, dependents);
      govtFee = perPerson * count + FEES.sponsorFile;
      serviceFee = SERVICE_FEES.family + Math.max(0, count - 1) * SERVICE_FEES.perExtraPerson;
      items.push(
        { label: `GDRFA Entry Permits & Stamping (${count} dependent${count > 1 ? "s" : ""})`, amount: FEES.residence2y * count, dept: "GDRFA" },
        { label: `VIP Medical & Emirates ID Biometrics (${count} person${count > 1 ? "s" : ""})`, amount: (FEES.medical + FEES.eid2y) * count, dept: "DHA / ICP" },
        { label: "Sponsor Relationship Audit & File Registration", amount: FEES.sponsorFile, dept: "GDRFA" },
      );
    } else {
      // Newborn
      govtFee = FEES.birthCertificate + FEES.mofaAttestation + FEES.residence2y + FEES.eid2y + FEES.certificateDelivery;
      serviceFee = SERVICE_FEES.newborn;
      items.push(
        { label: "MOHAP Official Arabic Birth Certificate", amount: FEES.birthCertificate, dept: "Ministry of Health" },
        { label: "MOFA UAE Attestation & Smart Courier Delivery", amount: FEES.mofaAttestation + FEES.certificateDelivery, dept: "MOFA" },
        { label: "GDRFA Newborn Residence & Emirates ID Card", amount: FEES.residence2y + FEES.eid2y, dept: "GDRFA" },
      );
    }

    if (inUae && !isRenewal) {
      govtFee += FEES.statusChange;
      items.push({ label: "Internal Status Change (In-Country)", amount: FEES.statusChange, dept: "Immigration" });
    }

    return {
      govtFee,
      serviceFee,
      totalFee: govtFee + serviceFee,
      items,
    };
  }, [selectedVisa, inUae, isRenewal, dependents]);

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientName,
          phone: `${countryCode} ${clientPhone}`,
          email: "calculator@lead.local",
          interest: `${selectedVisa.toUpperCase()} Visa Calculator Inquiry`,
          budget: `AED ${formatAed(propertyPrice)}`,
          source: "calculator-wizard",
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open && !embedded) return null;

  const currentOption = VISA_OPTIONS.find((v) => v.id === selectedVisa) ?? VISA_OPTIONS[0];

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visa Fee Calculator"
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-[620px] overflow-hidden rounded-[32px] bg-white shadow-[0_40px_100px_-25px_rgba(7,15,40,0.6)] ring-1 ring-slate-900/10 text-slate-900"
    >
      {/* ───────────────────────────────────────────────────────────────────
          1. HEADER WITH BRAND, STEP PILL & CLOSE BUTTON
          ─────────────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="shrink-0 flex items-center justify-center">
            <Icon3DCalculator size={38} />
          </div>
          <div>
            <p className="font-display text-[15px] font-extrabold leading-tight text-slate-900">
              Visa Fee Calculator
            </p>
            <p className="text-[12px] text-slate-500 font-medium">Official 2026 Government Fees</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-display text-[11.5px] font-bold text-blue-700 ring-1 ring-blue-200">
            Step {step === "visa" ? "1" : step === "details" ? "2" : "3"} of 3
          </span>
          {!embedded && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close calculator"
              className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Close className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          2. STEP PROGRESS TABS
          ─────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 border-b border-slate-100 bg-white text-center text-[12.5px] font-semibold">
        <button
          type="button"
          onClick={() => setStep("visa")}
          className={`py-3 transition-colors cursor-pointer border-b-2 ${
            step === "visa"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/30"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          1. Select Visa
        </button>

        <button
          type="button"
          onClick={() => setStep("details")}
          className={`py-3 transition-colors cursor-pointer border-b-2 ${
            step === "details"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/30"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          2. Your Details
        </button>

        <button
          type="button"
          onClick={() => setStep("estimate")}
          className={`py-3 transition-colors cursor-pointer border-b-2 ${
            step === "estimate"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/30"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          3. Exact Quote
        </button>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          3. STEP CONTENT
          ─────────────────────────────────────────────────────────────────── */}
      <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
        {/* STEP 1: CHOOSE VISA */}
        {step === "visa" && (
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Which visa do you need?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Select your pathway to view itemised government fees in 30 seconds.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {VISA_OPTIONS.map((opt) => {
                const IconComp = opt.icon;
                const isSelected = selectedVisa === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedVisa(opt.id);
                      setStep("details");
                    }}
                    className={`group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/40 shadow-md ring-2 ring-blue-600/20"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/80 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-slate-100 group-hover:scale-105 transition-transform">
                        <IconComp size={48} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-[15.5px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {opt.title}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-semibold text-slate-700">
                            {opt.validity}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                          {opt.subtitle}
                        </p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                            from {formatAed(opt.startingFee)}
                          </span>
                          <span className="text-[11px] font-medium text-slate-400">
                            {opt.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors ml-2">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: DETAILS & SIMULATOR */}
        {step === "details" && (
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    {currentOption.title} Details
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
                    Answer two quick questions to calculate your official fees.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("visa")}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  Change Visa
                </button>
              </div>
            </div>

            {/* Property Value Slider for Property and Golden Visas */}
            {(selectedVisa === "property" || selectedVisa === "golden") && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Property Purchase Value
                  </label>
                  <span className="font-display text-base sm:text-lg font-bold text-blue-700">
                    AED {formatAed(propertyPrice)}
                  </span>
                </div>

                <input
                  type="range"
                  min={500000}
                  max={6000000}
                  step={50000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="mt-3 w-full accent-blue-600 cursor-pointer"
                />

                {/* Preset quick buttons */}
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {[750000, 1200000, 2000000, 3500000, 5000000].map((presetVal) => (
                    <button
                      key={presetVal}
                      type="button"
                      onClick={() => setPropertyPrice(presetVal)}
                      className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                        propertyPrice === presetVal
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
                      }`}
                    >
                      {presetVal >= 1000000 ? `${presetVal / 1000000}M` : `${presetVal / 1000}K`} AED
                    </button>
                  ))}
                </div>

                {/* Eligibility Tag */}
                <div className="mt-3.5 pt-3 border-t border-slate-200 flex items-center gap-2">
                  {propertyPrice >= GOLDEN_MIN ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 w-full">
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Qualifies for the 10-Year UAE Golden Visa (AED 2M+)</span>
                    </div>
                  ) : propertyPrice >= PROPERTY_MIN ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 w-full">
                      <CheckCircle className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>Qualifies for the 2-Year Renewable Property Investor Visa</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 w-full">
                      <span>⚠ Below minimum requirement (AED 750K required for residency)</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Family Members Selector */}
            {selectedVisa === "family" && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Number of family members to sponsor
                </label>
                <div className="mt-3 flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setDependents(num)}
                      className={`h-11 flex-1 rounded-xl font-display text-sm font-bold transition-all cursor-pointer ${
                        dependents === num
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Includes spouse, sons up to 25 years old, unmarried daughters of any age, and parents.
                </p>
              </div>
            )}

            {/* Location & Stage Options */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 p-3.5">
                <span className="text-[11px] font-bold uppercase text-slate-500">Applicant Location</span>
                <div className="mt-2 flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setInUae(true)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      inUae ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    Inside UAE
                  </button>
                  <button
                    type="button"
                    onClick={() => setInUae(false)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      !inUae ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    Outside UAE
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-3.5">
                <span className="text-[11px] font-bold uppercase text-slate-500">Application Type</span>
                <div className="mt-2 flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsRenewal(false)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      !isRenewal ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    New Visa
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRenewal(true)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isRenewal ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    Renewal
                  </button>
                </div>
              </div>
            </div>

            {/* Live Fee Preview Bar & Next Button */}
            <div className="pt-2">
              <div className="flex items-center justify-between rounded-2xl bg-blue-50/80 px-4 py-3 border border-blue-100 mb-3">
                <span className="text-xs font-semibold text-blue-900">Estimated Total Fees</span>
                <span className="font-display text-lg font-bold text-blue-700">
                  AED {formatAed(calculation.totalFee)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setStep("estimate")}
                className="w-full rounded-full bg-blue-600 hover:bg-blue-700 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Itemised Receipt</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: ITEMIZED RECEIPT & LEAD CAPTURE */}
        {step === "estimate" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                  <CheckCircle className="h-3.5 w-3.5" /> Official Fee Sheet
                </span>
                <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Itemised Fee Estimate
                </h2>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold uppercase text-slate-400">Total All-In</p>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-blue-600">
                  AED {formatAed(calculation.totalFee)}
                </p>
              </div>
            </div>

            {/* Itemized Table */}
            <div className="max-h-[190px] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 text-xs space-y-2">
              {calculation.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-200/70 pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <span className="text-[10px] text-slate-500 font-medium">{item.dept}</span>
                  </div>
                  <span className="font-bold text-slate-900">AED {formatAed(item.amount)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t-2 border-slate-200 pt-2 font-bold text-blue-700">
                <span>Brightlink & 800 DOCS End-to-End PRO Concierge</span>
                <span>AED {formatAed(calculation.serviceFee)}</span>
              </div>
            </div>

            {/* Lead Capture Flow */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmitLead} className="space-y-3 pt-1">
                <p className="text-xs font-semibold text-slate-700">
                  Send this quote to your phone for instant reference:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                  />
                  <div className="flex rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:border-blue-600">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-slate-50 px-2 text-xs font-bold text-slate-700 border-r border-slate-200 focus:outline-none"
                    >
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? "Generating…" : "Get Official Fee Sheet"}
                  </button>

                  <a
                    href={whatsappLink(
                      `Hi! I used your calculator for ${selectedVisa} visa (Total AED ${formatAed(calculation.totalFee)}). Please send the official pre-approval checklist.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                  >
                    <WhatsApp className="h-4 w-4" /> Message on WhatsApp
                  </a>
                </div>
              </form>
            ) : (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
                <span className="text-2xl">🎉</span>
                <p className="mt-1 font-display text-sm font-bold text-emerald-900">
                  Quote Sent! A Senior PRO Officer is assigned to your file.
                </p>
                <p className="mt-0.5 text-xs text-emerald-700">
                  Check your WhatsApp for your official PDF fee breakdown and pre-approval checklist.
                </p>
                <div className="mt-3">
                  <a
                    href={whatsappLink(
                      `Hi! I just requested my fee quote for ${selectedVisa} visa (AED ${formatAed(calculation.totalFee)}). Connecting here!`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-xs font-bold text-white shadow-sm"
                  >
                    <WhatsApp className="h-3.5 w-3.5" /> Continue to WhatsApp Chat
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────────────
            4. TRUST & GUARANTEE FOOTNOTE
            ─────────────────────────────────────────────────────────────────── */}
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-600 border border-slate-200">
          <Shield className="h-4 w-4 shrink-0 text-blue-600" />
          <span>
            Government fees are billed at actual cost with official receipts. 100% price guarantee.
          </span>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      {content}
    </div>
  );
}
