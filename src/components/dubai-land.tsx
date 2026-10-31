import * as React from "react";

/**
 * Desert Sand Dunes Background (Sleepiest Reference Style):
 * Rolling layered desert dunes in rich golden desert sand colors,
 * sitting BEHIND the buildings so the buildings stand proudly IN FRONT of the sand!
 */
export function DubaiDuneBackground({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`pointer-events-none relative h-full w-full overflow-hidden select-none ${className}`} style={style}>
      <svg
        viewBox="0 0 1600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          {/* Deep distant dune gradient */}
          <linearGradient id="bg-dune-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b46428" />
            <stop offset="45%" stopColor="#8d4314" />
            <stop offset="100%" stopColor="#451e06" />
          </linearGradient>

          {/* Mid dune foundation gradient (sand behind the buildings) */}
          <linearGradient id="bg-dune-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d98236" />
            <stop offset="30%" stopColor="#b45d1f" />
            <stop offset="70%" stopColor="#7a370e" />
            <stop offset="100%" stopColor="#3d1804" />
          </linearGradient>

          {/* Golden crest rim stroke */}
          <linearGradient id="bg-dune-rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="70%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.75" />
          </linearGradient>

          {/* Persian Gulf coastal water at corner */}
          <linearGradient id="bg-dune-water" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#0284c7" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#0369a1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* Far rolling desert dune */}
        <path
          d="M-40,240 C220,180 500,215 780,190 C1080,160 1340,195 1640,160 V480 H-40 Z"
          fill="url(#bg-dune-far)"
          opacity="0.85"
        />

        {/* Mid rolling desert dune — sitting directly behind the buildings! */}
        <path
          d="M-50,285 C180,240 440,185 720,210 C1020,250 1280,195 1650,220 V480 H-50 Z"
          fill="url(#bg-dune-mid)"
        />
        <path
          d="M-50,285 C180,240 440,185 720,210 C1020,250 1280,195 1650,220"
          stroke="url(#bg-dune-rim)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Persian Gulf coastal water at bottom-left corner */}
        <path
          d="M0,320 C90,320 190,345 270,375 C340,402 390,430 460,480 H0 Z"
          fill="url(#bg-dune-water)"
        />
        <path
          d="M0,320 C90,320 190,345 270,375 C340,402 390,430 460,480"
          stroke="#7dd3fc"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Exact Dubai Buildings (IN FRONT OF THE SAND!):
 * The exact 3D buildings from the user's reference image:
 * - Museum of the Future with Arabic calligraphy oval ring in the center
 * - Tall skyscraper on the left
 * - Blue glass curved towers on the right
 * - Positioned firmly IN FRONT OF THE SAND dunes, fully visible from base to top!
 */
export function DubaiRealBuildings({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`relative h-full w-full select-none ${className}`} style={style}>
      {/* Exact 3D Dubai Buildings Cutout standing firmly IN FRONT OF THE SAND */}
      <div className="absolute bottom-20 sm:bottom-24 lg:bottom-28 inset-x-0 flex items-end justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/exact-dubai-buildings-clean.png"
          alt="Exact 3D Dubai Buildings — Museum of the Future, Towers and Blue Glass Skyscraper"
          className="w-full max-w-[1260px] h-auto max-h-[400px] sm:max-h-[460px] lg:max-h-[510px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
          loading="eager"
        />
      </div>

      {/* Atmospheric blue/golden rim lighting behind the buildings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-28 left-1/2 -translate-x-1/2 h-36 w-3/4 rounded-full bg-blue-400/15 blur-3xl"
      />
    </div>
  );
}

/**
 * Foreground Sand Dune Layer (In Front of Calculator Screen):
 * Rises specifically on the right side to cover the bottom of the calculator phone screen,
 * leaving the buildings on the left and center completely in front of the sand!
 * "make sure that the calculator screen must be under the sand"
 */
export function DubaiForegroundSand({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative h-full w-full overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          {/* Foreground Desert Sand Gradient */}
          <linearGradient id="fg-sand-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e59e54" />
            <stop offset="25%" stopColor="#d27d2c" />
            <stop offset="60%" stopColor="#9a4e15" />
            <stop offset="90%" stopColor="#542306" />
            <stop offset="100%" stopColor="#1a0902" />
          </linearGradient>

          {/* Luminous golden rim stroke along the foreground crest */}
          <linearGradient id="fg-sand-rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="70%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Foreground Dune: Swells specifically on the right side to nestle the calculator screen under the sand */}
        <path
          d="M640,300 C740,240 860,170 1000,120 C1140,70 1280,60 1420,90 C1510,110 1570,140 1620,170 V300 H640 Z"
          fill="url(#fg-sand-grad)"
        />

        {/* Golden crest rim stroke along the dune edge */}
        <path
          d="M640,300 C740,240 860,170 1000,120 C1140,70 1280,60 1420,90 C1510,110 1570,140 1620,170"
          stroke="url(#fg-sand-rim)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function DubaiCitySandBackdrop(props: any) {
  return <DubaiRealBuildings {...props} />;
}

export function DubaiForegroundSand3D(props: any) {
  return <DubaiForegroundSand {...props} />;
}

export function DubaiLandBack(props: any) {
  return <DubaiDuneBackground {...props} />;
}

export function DubaiLandFront(props: any) {
  return <DubaiForegroundSand {...props} />;
}

export function DubaiLandSkylineFallback(props: any) {
  return <DubaiRealBuildings {...props} />;
}