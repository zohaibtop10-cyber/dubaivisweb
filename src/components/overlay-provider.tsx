"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { WizardAnswers, WizardVisa } from "@/lib/calculator";
import { MegaMenu } from "@/components/mega-menu";
import { VisaWizard } from "@/components/visa-wizard";

export type CalcPreset = Partial<Omit<WizardAnswers, "visa">>;

type OverlayContextValue = {
  menuOpen: boolean;
  calcOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  openCalc: (visa?: WizardVisa, preset?: CalcPreset) => void;
  closeCalc: () => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) {
    throw new Error("useOverlay must be used within OverlayProvider");
  }
  return ctx;
}

export function OpenCalcButton({
  className,
  children,
  visa,
  preset,
  type = "button",
  ariaLabel,
}: {
  className?: string;
  children: ReactNode;
  visa?: WizardVisa;
  preset?: CalcPreset;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const { openCalc } = useOverlay();
  return (
    <button type={type} aria-label={ariaLabel} onClick={() => openCalc(visa, preset)} className={className}>
      {children}
    </button>
  );
}

export function OpenMenuButton({ className, children }: { className?: string; children: ReactNode }) {
  const { openMenu } = useOverlay();
  return (
    <button type="button" onClick={openMenu} className={className}>
      {children}
    </button>
  );
}

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [calcVisa, setCalcVisa] = useState<WizardVisa | null>(null);
  const [calcPreset, setCalcPreset] = useState<CalcPreset | null>(null);

  const openMenu = useCallback(() => {
    setCalcOpen(false);
    setMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);
  const openCalc = useCallback((visa?: WizardVisa, preset?: CalcPreset) => {
    setMenuOpen(false);
    setCalcVisa(visa ?? null);
    setCalcPreset(preset ?? null);
    setCalcOpen(true);
  }, []);
  const closeCalc = useCallback(() => setCalcOpen(false), []);

  useEffect(() => {
    if (!menuOpen && !calcOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCalcOpen(false);
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, calcOpen]);

  const value = useMemo(
    () => ({ menuOpen, calcOpen, openMenu, closeMenu, toggleMenu, openCalc, closeCalc }),
    [menuOpen, calcOpen, openMenu, closeMenu, toggleMenu, openCalc, closeCalc],
  );

  return (
    <OverlayContext.Provider value={value}>
      {children}
      <MegaMenu open={menuOpen} onClose={closeMenu} onOpenCalc={() => openCalc()} />
      <VisaWizard open={calcOpen} onClose={closeCalc} initialVisa={calcVisa} preset={calcPreset} />
    </OverlayContext.Provider>
  );
}
