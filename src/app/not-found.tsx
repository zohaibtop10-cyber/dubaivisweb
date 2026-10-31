import Link from "next/link";
import { OpenCalcButton } from "@/components/overlay-provider";
import { CalculatorIcon } from "@/components/brand-mark";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative px-3 py-2 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e4ebff] via-[#f2f5ff] to-[#fdfdff]">
        <div
          aria-hidden="true"
          className="dots pointer-events-none absolute right-0 top-0 h-56 w-80 opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
        />
        <div className="shell relative py-20 text-center sm:py-28">
          <p className="font-display text-[clamp(5rem,3rem+10vw,10rem)] font-bold leading-none tracking-[-0.05em] text-primary/15">404</p>
          <h1 className="-mt-6 font-display text-[clamp(2rem,1.4rem+2.4vw,3rem)] font-bold tracking-[-0.03em] text-ink sm:-mt-10">
            This page has moved on
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-body">
            The page you’re looking for doesn’t exist or the property is no longer listed. Here are a few good places to
            continue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-gold">
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/properties" className="btn-outline">
              Browse properties
            </Link>
            <OpenCalcButton className="btn-outline">
              <CalculatorIcon className="h-4 w-4 text-primary" /> Visa calculator
            </OpenCalcButton>
          </div>
        </div>
      </div>
    </section>
  );
}
