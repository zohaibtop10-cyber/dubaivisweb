import { BRAND } from "@/lib/brand";
import { TESTIMONIALS } from "@/lib/content";
import { CheckCircle, Google, Shield, Star, WhatsApp } from "@/components/icons";

function Stars({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <span className="flex gap-1 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }, (_, star) => (
        <Star key={star} className={`${size} fill-current`} />
      ))}
    </span>
  );
}

const AVATAR_COLORS = [
  "bg-blue-600 text-white",
  "bg-indigo-600 text-white",
  "bg-blue-700 text-white",
  "bg-sky-600 text-white",
];

export function ReviewsShowcase({
  eyebrow = "Client Reviews & Verification",
  title = "Loved By Property Owners & Families",
  lead = "Feedback from international property investors and families who secured their UAE residence with zero typing-centre visits.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden bg-white border-t border-b border-slate-200/90 py-20 lg:py-28 text-slate-900">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-indigo-50/50 blur-[100px]"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.05em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" /> {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,1.5rem+2vw,3rem)] font-extrabold leading-tight tracking-tight text-slate-900">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-600 mx-auto max-w-2xl">{lead}</p>

          {/* Google 5.0 Trust Badge */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-md">
            <div className="flex items-center gap-2">
              <Google className="h-5 w-5 text-blue-600" />
              <span className="font-display text-[17px] font-bold text-slate-900">{BRAND.rating}</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <Stars size="h-4.5 w-4.5" />
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-[13.5px] font-semibold text-slate-600">
              {BRAND.reviews}+ Verified UAE Google Reviews
            </span>
          </div>
        </div>

        {/* 2x2 Grid of Review Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {TESTIMONIALS.map((item, index) => {
            const [service, area] = item.detail.split(" · ");
            const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];

            return (
              <article
                key={item.name}
                className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200/90 bg-[#f8fafc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-white hover:shadow-xl sm:p-8"
              >
                {/* Top Row: User Avatar, Name, and Verified Tag */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-[16px] font-bold shadow-sm ${avatarColor}`}
                      >
                        {item.name.charAt(0)}
                      </span>
                      <div>
                        <h3 className="font-display text-[17px] font-bold text-slate-900">
                          {item.name}
                        </h3>
                        <p className="text-[12.5px] font-medium text-slate-500">
                          {item.role} {area ? `· ${area}` : ""}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600" /> Verified File
                    </span>
                  </div>

                  {/* Route & Star Rating */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-y border-slate-200 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-[12px] font-semibold text-blue-700">
                      <Shield className="h-3.5 w-3.5 text-blue-600" />
                      {service}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Stars size="h-3.5 w-3.5" />
                      <span className="text-[12.5px] font-bold text-slate-800">5.0</span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mt-4 text-[15.5px] leading-relaxed text-slate-700">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom Card Footer with official process guarantee */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-[12px] text-slate-500">
                  <span>{item.when} · Official GDRFA Receipt Issued</span>
                  <span className="font-semibold text-blue-600 group-hover:underline">DLD Approved</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Trust Action Strip */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-center shadow-sm sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shrink-0">
              <Shield className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-[14px] font-bold text-slate-900">
                100% Official Ministry Receipts Provided
              </p>
              <p className="text-[12.5px] text-slate-600">
                Zero typing fees, zero hidden markups. Government fees billed at exact cost.
              </p>
            </div>
          </div>

          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 sm:mt-0 shrink-0"
          >
            <WhatsApp className="h-4 w-4" /> Ask a Client Reference
          </a>
        </div>
      </div>
    </section>
  );
}
