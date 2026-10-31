"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { useOverlay } from "@/components/overlay-provider";
import { BrandMark, CalculatorIcon } from "@/components/brand-mark";
import { ChevronDown, Menu, WhatsApp } from "@/components/icons";


const NAV = [
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/properties", label: "Properties" },
  { href: "/insights", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_PATHS = ["/services", "/attestation", "/new-born", "/calculator"];

export function SiteHeader() {
  const pathname = usePathname();
  const { openMenu, openCalc, menuOpen } = useOverlay();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = pathname === "/" && !scrolled;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = menuOpen || SERVICE_PATHS.some((path) => isActive(path));

  const pillClass = (active: boolean) =>
    `relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 font-display text-[13px] font-semibold transition-all duration-200 ${
      active
        ? isDark
          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/20"
          : "bg-blue-600 text-white shadow-md shadow-blue-600/20"
        : isDark
        ? "text-white/85 hover:text-white hover:bg-white/10"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-transparent py-2.5 sm:py-3 pointer-events-none transition-all duration-300"
    >
      <div className="shell pointer-events-auto">
        <div
          className={`flex min-h-[58px] items-center justify-between gap-3 rounded-full px-3.5 backdrop-blur-2xl transition-all duration-300 sm:px-5 ${
            isDark
              ? "border border-white/20 bg-[#020617]/75 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.65)] text-white"
              : "border border-slate-200/90 bg-white/95 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] text-slate-900"
          }`}
        >
          {/* Logo brand */}
          <Link href="/" aria-label={`${BRAND.name} — home`} className="shrink-0 transition-opacity hover:opacity-90">
            <BrandMark light={isDark} size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="site-nav-desktop min-w-0 rounded-full p-0.5">
            <Link href="/" className={pillClass(isActive("/"))}>
              Home
            </Link>

            {/* Services Dropdown Trigger */}
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={menuOpen}
              className={pillClass(servicesActive)}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-200 ${
                  menuOpen ? "rotate-180" : ""
                } ${isDark ? "text-white/70" : "text-slate-400"}`}
              />
            </button>

            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={pillClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Visa Calculator Button */}
            <button
              type="button"
              onClick={() => openCalc()}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-[12.5px] sm:text-[13px] font-bold text-white shadow-md transition-all hover:shadow-lg cursor-pointer ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-blue-500/25"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/25"
              }`}
            >
              <CalculatorIcon className="h-4 w-4" />
              <span>Visa Calculator</span>
            </button>

            {/* WhatsApp Quick Link */}
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="relative grid h-9 w-9 place-items-center rounded-full bg-[#25d366] text-white shadow-md shadow-emerald-500/25 transition-transform hover:scale-105"
            >
              <WhatsApp className="h-4 w-4" />
            </a>

            {/* Mobile / Compact Menu Button */}
            <button
              type="button"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className={`site-menu-mobile h-9 items-center gap-1.5 rounded-full px-3 font-display text-[12px] font-semibold transition-colors ${
                isDark
                  ? "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
