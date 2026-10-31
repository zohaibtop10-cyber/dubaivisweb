import { Spark } from "@/components/icons";

const DEFAULT_ITEMS = [
  "Property Visa",
  "Golden Visa",
  "Family Visa",
  "Newborn Visa",
  "Emirates ID",
  "Attestation",
  "DLD Trustee",
  "PRO Services",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  tone = "navy",
  reverse = false,
}: {
  items?: string[];
  tone?: "navy" | "primary";
  reverse?: boolean;
}) {
  return (
    <div className={`group relative overflow-hidden py-4 text-white sm:py-5 ${tone === "navy" ? "bg-navy" : "bg-primary"}`}>
      <div
        className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-6 px-6 font-display text-[17px] font-semibold tracking-tight sm:gap-8 sm:px-8 sm:text-[20px]"
              >
                {item}
                <Spark className={`h-5 w-5 ${tone === "navy" ? "text-goldlight" : "text-white/70"}`} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
