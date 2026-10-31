import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, FloatingActions } from "@/components/site-footer";
import { OverlayProvider } from "@/components/overlay-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Dubai Property Visa & Golden Visa Services`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "UAE residence through Dubai property — a renewable 2-year visa from AED 750,000 or the 10-year Golden Visa from AED 2 million. Free eligibility check, itemised government fees and end-to-end processing.",
  keywords: [
    "Dubai property visa",
    "UAE Golden Visa property",
    "property owner visa Dubai",
    "Golden Visa AED 2 million",
    "Dubai family visa",
    "UAE visa fee calculator",
  ],
  openGraph: {
    title: `${BRAND.name} | Dubai Property Visa & Golden Visa Services`,
    description:
      "Turn your Dubai property into a UAE residence visa. Eligibility check, itemised fees and full processing — mostly online.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased text-slate-100 bg-[#050314] selection:bg-blue-600 selection:text-white">
        <OverlayProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingActions />
        </OverlayProvider>
      </body>
    </html>
  );
}
