import React from "react";

/**
 * FrontLandOverlay:
 * Implements the exact Front Land curve from the user's architectural diagram:
 * - Starts at bottom-left (y≈87%)
 * - Rises to gentle crest (y≈77%), flattens
 * - Rises to central plateau (y≈70%)
 * - Dips down into a distinct valley/scoop at x≈60% (y≈83%)
 * - Swells steeply upwards into a prominent rounded hill at x≈78% (y≈57%)
 * - Occludes the lower 25% of the mobile Screen
 * - Slopes gracefully down to the right edge (y≈73%)
 * - Has glowing top-rim edge stroke in bioluminescent cyan, lavender, and golden accent
 */
export function FrontLandOverlay({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-x-0 bottom-0 w-full overflow-hidden ${className}`}
      style={style}
    >
      <svg
        viewBox="0 0 1600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          {/* Deep nocturnal sapphire midground dune gradient */}
          <linearGradient id="front-land-mid-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a2052" />
            <stop offset="40%" stopColor="#061334" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Foreground Front Land gradient: deep oceanic sapphire & midnight navy */}
          <linearGradient id="front-land-main-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10327c" />
            <stop offset="22%" stopColor="#0b2256" />
            <stop offset="60%" stopColor="#061334" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Luminous crest rim gradient in electric starlight cyan, sky blue, and sapphire */}
          <linearGradient id="front-land-rim-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="72%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="88%" stopColor="#00f0ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>

          {/* Soft secondary rim glow */}
          <linearGradient id="front-land-mid-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.35" />
          </linearGradient>

          {/* Blur filter for the neon rim glow */}
          <filter id="neon-glow-exact" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. MIDGROUND DUNE (Subtle depth foundation behind front land) ── */}
        <path
          d="M -50,520 C 200,470 480,530 760,490 C 1040,460 1320,480 1650,450 V 600 H -50 Z"
          fill="url(#front-land-mid-grad)"
          opacity="0.65"
        />
        <path
          d="M -50,520 C 200,470 480,530 760,490 C 1040,460 1320,480 1650,450"
          stroke="url(#front-land-mid-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* ── 2. FOREGROUND "FRONT LAND" ──
            Peak sits at (1210, 375), touching ONLY the below border of the Newborn Visa component.
            Newborn Visa card remains 100% visible and unoccluded.
        */}
        <path
          d="M 0,490 C 120,490 200,465 280,465 C 360,465 440,475 520,475 C 620,475 720,440 800,440 C 880,440 940,480 990,480 C 1070,480 1140,375 1210,375 C 1280,375 1340,410 1390,430 C 1460,450 1530,465 1600,470 V 600 H 0 Z"
          fill="url(#front-land-main-grad)"
        />

        {/* Luminous glowing rim along the exact Front Land crest */}
        <path
          d="M 0,490 C 120,490 200,465 280,465 C 360,465 440,475 520,475 C 620,475 720,440 800,440 C 880,440 940,480 990,480 C 1070,480 1140,375 1210,375 C 1280,375 1340,410 1390,430 C 1460,450 1530,465 1600,470"
          stroke="url(#front-land-rim-stroke)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#neon-glow-exact)"
        />

        {/* Subtle decorative highway curve / starlight reflection at bottom */}
        <path
          d="M -30,570 C 260,545 580,565 920,540 C 1180,520 1420,540 1630,550"
          stroke="#818cf8"
          strokeWidth="0.8"
          strokeDasharray="6 14"
          opacity="0.3"
        />
      </svg>

      {/* Subtle bottom vignette to ensure seamless transition to the next section */}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#060318] to-transparent pointer-events-none" />
    </div>
  );
}
