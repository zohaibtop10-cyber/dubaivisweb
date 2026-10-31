/**
 * Central brand & contact settings — taken from the PropertyVisa Dubai site data.
 * Every page, button and WhatsApp link on the site reads from this file.
 */
export const BRAND = {
  name: "PropertyVisa Dubai",
  wordmark: ["PropertyVisa", "Dubai"],
  tagline: "Operated by Brightlink & 800 DOCS",
  operator: "Brightlink Management Consultancy LLC & 800 DOCS LLC SOC",
  legalName: "Brightlink Management Consultancy LLC",
  headline: "Your UAE property visa & family residency — handled 100% online.",
  subtagline:
    "Skip typing-centre queues. Get your exact government fees in 30 seconds, send documents over WhatsApp, and have Emirates IDs delivered to your door.",
  phone: "+971 56 655 6645",
  phoneHref: "tel:+971566556645",
  tollFree: "800 DOCS (3627)",
  tollFreeHref: "tel:8003627",
  whatsapp: "https://wa.me/971566556645",
  email: "info@propertyvisadubai.com",
  address: "Suite 402, Block B, Business Village, Deira",
  city: "Dubai, UAE",
  hours: "Mon – Sat · 8:00 AM – 8:00 PM GST",
  licence: "DLD & ICP accredited real estate residency partner",
  rating: "4.9",
  reviews: "1,240",
  visas: "15,000+",
  stamped: "5,500+",
  approvalRate: "99.8%",
  pros: "15+",
  emirates: "7",
  replyTime: "Minutes",
  maps: "https://maps.google.com/?q=Business+Village+Deira+Dubai",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
} as const;

export function whatsappLink(message?: string): string {
  return message ? `${BRAND.whatsapp}?text=${encodeURIComponent(message)}` : BRAND.whatsapp;
}
