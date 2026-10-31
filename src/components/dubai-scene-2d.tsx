"use client";

import React from "react";

export function DubaiScene2D({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none bg-[#07051a] ${className}`}
      style={{ backgroundColor: "#07051a" }}
    >
      <svg
        viewBox="0 0 1600 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYBottom slice"
        className="w-full h-full"
      >
        <defs>
          {/* ─── Sky Background Gradient ─── */}
          <linearGradient id="sky-grad-860" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#040212" />
            <stop offset="22%" stopColor="#08041d" />
            <stop offset="48%" stopColor="#100732" />
            <stop offset="75%" stopColor="#170c40" />
            <stop offset="100%" stopColor="#09031c" />
          </linearGradient>

          {/* ─── Neon Skyline Blooms ─── */}
          <radialGradient id="bloom-burj" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bloom-skyline-left" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#4f46e5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bloom-violet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.38" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bloom-motf" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bloom-sail" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#9333ea" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bloom-marina" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          {/* ─── Titanium Shell Gradients for Museum of the Future ─── */}
          <linearGradient id="motf-titanium" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="motf-void" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#03010b" />
            <stop offset="50%" stopColor="#09041d" />
            <stop offset="100%" stopColor="#140938" />
          </linearGradient>

          {/* ─── Burj Khalifa Glass & Steel Gradients ─── */}
          <linearGradient id="burj-body" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0d1428" />
            <stop offset="25%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="75%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0d1428" />
          </linearGradient>

          <linearGradient id="burj-spire" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* ─── Burj Al Arab Sail & Exoskeleton ─── */}
          <linearGradient id="sail-membrane" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#e0f2fe" />
            <stop offset="75%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>

          <linearGradient id="sail-exo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>

          {/* ─── Velvet Purple Dunes Gradients (Matching Reference Image) ─── */}
          <linearGradient id="dune-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34136e" />
            <stop offset="40%" stopColor="#220b4d" />
            <stop offset="100%" stopColor="#0f0326" />
          </linearGradient>

          <linearGradient id="dune-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a1c9a" />
            <stop offset="35%" stopColor="#2e0f66" />
            <stop offset="100%" stopColor="#11032d" />
          </linearGradient>

          <linearGradient id="dune-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5922b8" />
            <stop offset="30%" stopColor="#38127d" />
            <stop offset="100%" stopColor="#0d0325" />
          </linearGradient>

          <linearGradient id="dune-crest-glow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#f472b6" stopOpacity="1" />
            <stop offset="65%" stopColor="#e879f9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.75" />
          </linearGradient>

          {/* Glowing purple right-wave dune gradient */}
          <linearGradient id="dune-wave-purple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#44138a" />
            <stop offset="40%" stopColor="#28095c" />
            <stop offset="100%" stopColor="#0a0219" />
          </linearGradient>

          {/* Museum of the Future Radiant Entrance Light Beam Gradient */}
          <linearGradient id="motf-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>

          {/* ─── Glow Filters ─── */}
          <filter id="glow-neon" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glow-intense" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* =====================================================================
            1. SKY BACKDROP & NEON ATMOSPHERIC BLOOMS
            ===================================================================== */}
        <rect width="1600" height="860" fill="url(#sky-grad-860)" />

        {/* Ambient Neon Skyline Blooms across horizon */}
        <circle cx="140" cy="380" r="260" fill="url(#bloom-burj)" />
        <circle cx="360" cy="450" r="220" fill="url(#bloom-skyline-left)" />
        <circle cx="560" cy="430" r="200" fill="url(#bloom-violet)" />
        <circle cx="780" cy="500" r="260" fill="url(#bloom-motf)" />
        <circle cx="1100" cy="450" r="220" fill="url(#bloom-skyline-left)" />
        <circle cx="1380" cy="400" r="270" fill="url(#bloom-sail)" />
        <circle cx="1520" cy="430" r="220" fill="url(#bloom-marina)" />

        {/* Dense Starfield across the nocturnal sky */}
        {[
          { x: 25, y: 40, r: 1.2, o: 0.8 },
          { x: 65, y: 110, r: 1.5, o: 0.9 },
          { x: 110, y: 35, r: 1.0, o: 0.7 },
          { x: 165, y: 140, r: 1.4, o: 0.85 },
          { x: 220, y: 55, r: 1.8, o: 1.0 },
          { x: 280, y: 105, r: 1.2, o: 0.75 },
          { x: 340, y: 35, r: 1.6, o: 0.9 },
          { x: 410, y: 85, r: 1.3, o: 0.8 },
          { x: 480, y: 125, r: 1.5, o: 0.9 },
          { x: 540, y: 45, r: 1.2, o: 0.7 },
          { x: 610, y: 105, r: 1.7, o: 0.95 },
          { x: 680, y: 45, r: 1.1, o: 0.7 },
          { x: 750, y: 90, r: 1.4, o: 0.85 },
          { x: 820, y: 35, r: 1.2, o: 0.75 },
          { x: 890, y: 80, r: 1.6, o: 0.9 },
          { x: 960, y: 50, r: 1.0, o: 0.65 },
          { x: 1030, y: 75, r: 1.5, o: 0.85 },
          { x: 1100, y: 40, r: 1.3, o: 0.8 },
          { x: 1170, y: 100, r: 1.7, o: 0.95 },
          { x: 1240, y: 55, r: 1.2, o: 0.75 },
          { x: 1310, y: 35, r: 1.5, o: 0.9 },
          { x: 1390, y: 90, r: 1.1, o: 0.7 },
          { x: 1460, y: 45, r: 1.8, o: 1.0 },
          { x: 1530, y: 110, r: 1.3, o: 0.8 },
          { x: 1580, y: 65, r: 1.4, o: 0.85 },
        ].map((star, idx) => (
          <circle key={idx} cx={star.x} cy={star.y} r={star.r} fill="#ffffff" opacity={star.o} />
        ))}

        {/* =====================================================================
            2. REFLECTIVE BAY WATER & NEON SPECULAR REFLECTIONS
            ===================================================================== */}
        <rect x="0" y="540" width="1600" height="120" fill="#0b0e26" />

        {/* Specular Left Bay Water Ripples (Burj Khalifa Reflections) */}
        <ellipse cx="140" cy="580" rx="110" ry="9" fill="#38bdf8" opacity="0.4" />
        <ellipse cx="140" cy="594" rx="75" ry="6" fill="#a855f7" opacity="0.45" />
        <line x1="60" y1="578" x2="220" y2="578" stroke="#38bdf8" strokeWidth="2.2" opacity="0.85" />
        <line x1="90" y1="585" x2="190" y2="585" stroke="#ffffff" strokeWidth="1.8" opacity="0.95" />
        <line x1="50" y1="592" x2="230" y2="592" stroke="#ec4899" strokeWidth="2" opacity="0.7" />

        {/* Specular Center-Left Water Ripples (Downtown Cluster) */}
        <ellipse cx="440" cy="585" rx="80" ry="6" fill="#818cf8" opacity="0.3" />
        <line x1="390" y1="588" x2="490" y2="588" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

        {/* Specular Right Bay Water Ripples (Burj Al Arab & Marina Reflections) */}
        <ellipse cx="1380" cy="580" rx="120" ry="10" fill="#38bdf8" opacity="0.4" />
        <ellipse cx="1380" cy="594" rx="85" ry="7" fill="#ffffff" opacity="0.45" />
        <line x1="1300" y1="578" x2="1460" y2="578" stroke="#38bdf8" strokeWidth="2.4" opacity="0.85" />
        <line x1="1330" y1="585" x2="1430" y2="585" stroke="#ffffff" strokeWidth="2" opacity="0.95" />
        <line x1="1290" y1="593" x2="1470" y2="593" stroke="#a855f7" strokeWidth="2.2" opacity="0.7" />

        {/* =====================================================================
            3. DEEP BACKGROUND SKYLINE HORIZON (Covering entire width, X: 0 to 1600)
            No more empty gaps! Layered nocturnal skyscrapers across all horizons.
            ===================================================================== */}
        {/* ── LEFT TOWERS CLUSTER (X: 0 to 180, Matching Reference Image) ── */}
        {/* Tower 1 (Far Left, X: 15 - 55) */}
        <rect x="15" y="340" width="42" height="210" fill="#090d24" stroke="#c084fc" strokeWidth="0.8" opacity="0.85" />
        <line x1="28" y1="355" x2="28" y2="540" stroke="#c084fc" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.7" />
        <line x1="44" y1="355" x2="44" y2="540" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.7" />

        {/* Tower 2 (Tapered Crystal High-Rise, X: 70 - 125) */}
        <path d="M70,550 L80,250 L115,250 L125,550 Z" fill="#10173b" stroke="#38bdf8" strokeWidth="1.1" />
        <line x1="97" y1="250" x2="97" y2="205" stroke="#38bdf8" strokeWidth="1.8" />
        <circle cx="97" cy="205" r="2.5" fill="#ffffff" filter="url(#glow-neon)" />
        {[270, 300, 330, 360, 390, 420, 450, 480, 510].map((y) => (
          <line key={y} x1="82" y1={y} x2="113" y2={y} stroke="#38bdf8" strokeWidth="1.6" opacity="0.85" />
        ))}

        {/* Tower 3 (Stepped Modern Tower, X: 138 - 188) */}
        <rect x="138" y="270" width="50" height="280" fill="#0d1334" stroke="#c084fc" strokeWidth="0.9" opacity="0.85" />
        <polygon points="138,270 163,230 188,270" fill="#1b244d" stroke="#c084fc" strokeWidth="1.2" />
        <line x1="163" y1="230" x2="163" y2="190" stroke="#ffffff" strokeWidth="2" />
        <circle cx="163" cy="190" r="3" fill="#ffffff" filter="url(#glow-neon)" />
        <line x1="152" y1="285" x2="152" y2="540" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.8" />
        <line x1="174" y1="285" x2="174" y2="540" stroke="#c084fc" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.8" />

        {/* ── BURJ KHALIFA 2D MASTERPIECE (Centered at X: 230, Matching Reference Image!) ──
            Towering needle with tiered setbacks, segmented spire, and radiant summit illumination! */}
        <g transform="translate(230, 550)">
          {/* Base tiers */}
          <path
            d="M-32,0 L-32,-55 L-26,-55 L-26,-120 L-20,-120 L-20,-200 L-15,-200 L-15,-290 L-9,-290 L-9,-375 L-4,-375 L0,-430 L4,-375 L9,-375 L9,-290 L15,-290 L15,-200 L20,-200 L20,-120 L26,-120 L26,-55 L32,-55 L32,0 Z"
            fill="url(#burj-body)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Central Spire Needle reaching all the way to Y: -510 (Y: 40 on canvas!) */}
          <line x1="0" y1="-430" x2="0" y2="-510" stroke="url(#burj-spire)" strokeWidth="3" />
          <circle cx="0" cy="-510" r="4.5" fill="#ffffff" filter="url(#glow-neon)" />
          <circle cx="0" cy="-510" r="2.2" fill="#ef4444" />

          {/* Vertical Laser Beam connecting from top offscreen down to Burj tip */}
          <line x1="0" y1="-510" x2="0" y2="-600" stroke="#38bdf8" strokeWidth="2.2" opacity="0.9" filter="url(#glow-neon)" />
          <circle cx="0" cy="-560" r="6" fill="#38bdf8" opacity="0.85" filter="url(#glow-neon)" />
          <circle cx="0" cy="-560" r="3" fill="#ffffff" />

          {/* Circular Node on Burj Khalifa shaft */}
          <circle cx="0" cy="-240" r="14" fill="#0d1434" stroke="#c084fc" strokeWidth="2.4" />
          <circle cx="0" cy="-240" r="5" fill="#ffffff" />

          {/* Vertical Neon Mullion Traces (Iconic Burj Khalifa Night Illumination) */}
          <line x1="0" y1="0" x2="0" y2="-430" stroke="#ffffff" strokeWidth="2.4" opacity="0.95" />
          <line x1="-6" y1="0" x2="-3" y2="-375" stroke="#38bdf8" strokeWidth="1.6" opacity="0.9" />
          <line x1="6" y1="0" x2="3" y2="-375" stroke="#38bdf8" strokeWidth="1.6" opacity="0.9" />
          <line x1="-12" y1="0" x2="-8" y2="-290" stroke="#38bdf8" strokeWidth="1.4" opacity="0.85" />
          <line x1="12" y1="0" x2="8" y2="-290" stroke="#38bdf8" strokeWidth="1.4" opacity="0.85" />
          <line x1="-18" y1="0" x2="-14" y2="-200" stroke="#c084fc" strokeWidth="1.4" opacity="0.8" />
          <line x1="18" y1="0" x2="14" y2="-200" stroke="#c084fc" strokeWidth="1.4" opacity="0.8" />

          {/* Horizontal setback collar light accents */}
          <rect x="-9" y="-293" width="18" height="3.5" fill="#f59e0b" rx="1.5" />
          <rect x="-15" y="-203" width="30" height="3.5" fill="#38bdf8" rx="1.5" />
          <rect x="-20" y="-123" width="40" height="4" fill="#ffffff" rx="1.5" />
          <rect x="-26" y="-58" width="52" height="4.5" fill="#a855f7" rx="2" />
        </g>

        {/* Skyscraper 3 (Flanking right of Burj Khalifa, X: 180 - 230) */}
        <rect x="180" y="250" width="50" height="300" fill="#11183c" stroke="#38bdf8" strokeWidth="1" />
        <line x1="195" y1="265" x2="195" y2="540" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.85" />
        <line x1="215" y1="265" x2="215" y2="540" stroke="#c084fc" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.85" />
        <rect x="188" y="225" width="34" height="25" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
        <line x1="205" y1="225" x2="205" y2="190" stroke="#38bdf8" strokeWidth="1.8" />
        <circle cx="205" cy="190" r="2.5" fill="#ef4444" />

        {/* Skyscraper 4 (Stepped Tower with neon diagonal bracing, X: 238 - 290) */}
        <path d="M238,550 L238,300 L275,260 L290,260 L290,550 Z" fill="#0e1536" stroke="#c084fc" strokeWidth="1" />
        <line x1="255" y1="285" x2="255" y2="540" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="3 4" opacity="0.8" />
        <line x1="275" y1="285" x2="275" y2="540" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.8" />

        {/* ── NEW CLUSTER 5: FILLING THE EMPTY SPACE (X: 295 - 420) ── */}
        {/* Tower 5A: Cylindrical Tower with glowing horizontal rings */}
        <path d="M296,550 L296,280 C310,265 330,265 344,280 L344,550 Z" fill="#0d122e" stroke="#38bdf8" strokeWidth="0.9" />
        {[300, 335, 370, 405, 440, 475, 510].map((y) => (
          <ellipse key={y} cx="320" cy={y} rx="24" ry="4" fill="none" stroke="#38bdf8" strokeWidth="1.4" opacity="0.75" />
        ))}
        <line x1="320" y1="268" x2="320" y2="230" stroke="#38bdf8" strokeWidth="1.8" />
        <circle cx="320" cy="230" r="2" fill="#38bdf8" />

        {/* Tower 5B: Modern High-Rise with Illuminated Apex Crown (X: 350 - 410) */}
        <rect x="350" y="270" width="55" height="280" fill="#10183e" stroke="#818cf8" strokeWidth="1" />
        <polygon points="350,270 377,225 405,270" fill="#1e2a4a" stroke="#c084fc" strokeWidth="1.2" />
        <line x1="377" y1="225" x2="377" y2="185" stroke="#ffffff" strokeWidth="2" />
        <circle cx="377" cy="185" r="3" fill="#ffffff" filter="url(#glow-neon)" />
        {/* Window grid */}
        {[290, 325, 360, 395, 430, 465, 500].map((y) => (
          <line key={y} x1="358" y1={y} x2="397" y2={y} stroke="#38bdf8" strokeWidth="1.6" opacity="0.8" />
        ))}

        {/* ── ADDRESS SKY VIEW / GATEWAY ARCH TOWERS (X: 415 - 530, Matching Reference Image!) ──
            Iconic twin curved towers connected at the apex by an illuminated skybridge with open archway window! */}
        <g id="address-sky-view">
          {/* Left Tower */}
          <path d="M420,550 L425,270 L458,270 L458,550 Z" fill="#0b102b" stroke="#38bdf8" strokeWidth="1" />
          {/* Right Tower */}
          <path d="M485,550 L485,270 L518,270 L522,550 Z" fill="#0d1334" stroke="#c084fc" strokeWidth="1" />
          {/* Skybridge linking apex */}
          <rect x="420" y="250" width="102" height="26" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
          <line x1="420" y1="262" x2="522" y2="262" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
          {/* Iconic Skybridge Arch Underneath creating the sky-window */}
          <path d="M458,350 Q471.5,275 485,350 L485,275 L458,275 Z" fill="#05081c" stroke="#38bdf8" strokeWidth="1" />
          {/* Vertical neon windows */}
          <line x1="435" y1="280" x2="435" y2="540" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
          <line x1="448" y1="280" x2="448" y2="540" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
          <line x1="495" y1="280" x2="495" y2="540" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
          <line x1="508" y1="280" x2="508" y2="540" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.8" />
          {/* Apex beacon */}
          <circle cx="471.5" cy="245" r="3" fill="#ffffff" filter="url(#glow-neon)" />
        </g>

        {/* Tower 6C: Angled Skyline Tower (X: 535 - 585) */}
        <path d="M535,550 L535,320 L570,290 L585,305 L585,550 Z" fill="#0f1638" stroke="#38bdf8" strokeWidth="0.9" opacity="0.85" />
        <line x1="560" y1="310" x2="560" y2="540" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.75" />

        {/* Tower 6D: Slender Spire Skyscraper (X: 595 - 645) */}
        <rect x="595" y="320" width="45" height="230" fill="#0b0f28" stroke="#818cf8" strokeWidth="0.8" opacity="0.8" />
        <line x1="617" y1="320" x2="617" y2="270" stroke="#818cf8" strokeWidth="1.8" />
        <circle cx="617" cy="270" r="2.5" fill="#ef4444" />
        <line x1="605" y1="340" x2="605" y2="540" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.65" />
        <line x1="629" y1="340" x2="629" y2="540" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.65" />

        {/* ── NEW CLUSTER 7: CENTER-RIGHT TOWERS (X: 890 - 1180) ──
            Rises behind the dunes to connect Museum of the Future with Burj Al Arab! */}
        {/* Tower 7A: Futuristic Gateway Arch silhouette (Dubai Frame homage) */}
        <g opacity="0.75">
          <rect x="910" y="320" width="14" height="230" fill="#0e1538" stroke="#f59e0b" strokeWidth="0.8" />
          <rect x="970" y="320" width="14" height="230" fill="#0e1538" stroke="#f59e0b" strokeWidth="0.8" />
          <rect x="910" y="320" width="74" height="14" fill="#1a2245" stroke="#f59e0b" strokeWidth="0.8" />
        </g>

        {/* Tower 7B: Stepped High-Rise (X: 1000 - 1055) */}
        <rect x="1000" y="310" width="50" height="240" fill="#0d1334" stroke="#38bdf8" strokeWidth="0.9" opacity="0.85" />
        <polygon points="1000,310 1025,275 1050,310" fill="#1a2245" stroke="#38bdf8" strokeWidth="1" />
        <line x1="1025" y1="275" x2="1025" y2="240" stroke="#38bdf8" strokeWidth="1.8" />
        <circle cx="1025" cy="240" r="2" fill="#38bdf8" />
        {[330, 365, 400, 435, 470, 505].map((y) => (
          <line key={y} x1="1010" y1={y} x2="1040" y2={y} stroke="#c084fc" strokeWidth="1.4" opacity="0.7" />
        ))}

        {/* Tower 7C: Crystalline Tower (X: 1065 - 1120) */}
        <path d="M1065,550 L1075,300 L1110,300 L1120,550 Z" fill="#0f163b" stroke="#c084fc" strokeWidth="0.9" opacity="0.85" />
        <line x1="1092" y1="300" x2="1092" y2="255" stroke="#c084fc" strokeWidth="1.8" />
        <circle cx="1092" cy="255" r="2.5" fill="#ffffff" />
        <line x1="1092" y1="315" x2="1092" y2="540" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.75" />

        {/* Tower 7D: Slender Marina Needle (X: 1130 - 1175) */}
        <rect x="1130" y="320" width="40" height="230" fill="#0d1230" stroke="#38bdf8" strokeWidth="0.8" opacity="0.85" />
        <line x1="1150" y1="335" x2="1150" y2="540" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.7" />

        {/* =====================================================================
            4. RIGHT SKYLINE: BURJ AL ARAB & DUBAI MARINA TOWERS (X: 1200 to 1600)
            ===================================================================== */}
        {/* Marina Tower Cluster behind & flanking Burj Al Arab */}
        <rect x="1220" y="290" width="46" height="260" fill="#0d1434" stroke="#c084fc" strokeWidth="0.9" opacity="0.85" />
        <line x1="1243" y1="305" x2="1243" y2="540" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.75" />

        <rect x="1280" y="260" width="52" height="290" fill="#11183c" stroke="#38bdf8" strokeWidth="1" opacity="0.9" />
        <polygon points="1280,260 1306,225 1332,260" fill="#1b244d" stroke="#38bdf8" strokeWidth="1.2" />
        <line x1="1306" y1="225" x2="1306" y2="185" stroke="#ffffff" strokeWidth="2" />
        <circle cx="1306" cy="185" r="3" fill="#ffffff" filter="url(#glow-neon)" />
        <line x1="1295" y1="275" x2="1295" y2="540" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.8" />
        <line x1="1317" y1="275" x2="1317" y2="540" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.8" />

        {/* ── BURJ AL ARAB 2D ARCHITECTURAL MASTERPIECE (Centered at X: 1365) ──
            Scaled up and positioned prominently to the right of the phone screen! */}
        <g transform="translate(1365, 550) scale(1.12)">
          {/* White PTFE Sail Membrane with graceful curve */}
          <path d="M-48,0 C-48,-130 -16,-280 32,-340 L32,0 Z" fill="url(#sail-membrane)" stroke="#38bdf8" strokeWidth="1.8" />

          {/* Horizontal floor decks */}
          {[ -45, -100, -155, -215, -275 ].map((y) => (
            <line key={y} x1={-48 - y * 0.22} y1={y} x2="32" y2={y} stroke="#0284c7" strokeWidth="1.8" opacity="0.8" />
          ))}

          {/* Diagonal Exoskeleton Truss Ribs (Iconic Ocean Blue Cross Bracing) */}
          <path d="M-46,0 L24,-100 L-28,-195 L30,-288" fill="none" stroke="#0284c7" strokeWidth="3.2" opacity="0.9" />
          <path d="M24,0 L-40,-100 L28,-195 L-14,-288" fill="none" stroke="#0284c7" strokeWidth="3.2" opacity="0.9" />

          {/* Curved Outer Steel Exoskeleton Bow */}
          <path d="M-55,0 C-55,-140 -22,-295 32,-360" fill="none" stroke="url(#sail-exo)" strokeWidth="5.5" />
          <path d="M-55,0 C-55,-140 -22,-295 32,-360" fill="none" stroke="#38bdf8" strokeWidth="1.8" filter="url(#glow-neon)" />

          {/* Central Mast Spire reaching Y: -385 (Y: 165 on canvas!) */}
          <line x1="32" y1="0" x2="32" y2="-385" stroke="#ffffff" strokeWidth="3.5" />
          <circle cx="32" cy="-385" r="3.8" fill="#ffffff" filter="url(#glow-neon)" />
          <circle cx="32" cy="-385" r="1.8" fill="#38bdf8" />

          {/* Glowing Cyan Halo Ring hovering on Burj Al Arab Mast (Matching Reference Image!) */}
          <ellipse cx="32" cy="-320" rx="42" ry="14" fill="none" stroke="#00f0ff" strokeWidth="3.2" filter="url(#glow-neon)" />
          <circle cx="65" cy="-320" r="5.5" fill="#38bdf8" filter="url(#glow-neon)" />
          <circle cx="65" cy="-320" r="2.8" fill="#ffffff" />

          {/* Circular Cantilevered Helipad */}
          <ellipse cx="46" cy="-285" rx="23" ry="7" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
          <line x1="32" y1="-285" x2="46" y2="-285" stroke="#ffffff" strokeWidth="2.4" />
        </g>

        {/* Far Right Marina Skyscrapers (X: 1460 to 1600) */}
        <rect x="1460" y="280" width="46" height="270" fill="#0d1434" stroke="#c084fc" strokeWidth="0.9" opacity="0.9" />
        <rect x="1515" y="240" width="52" height="310" fill="#11183c" stroke="#38bdf8" strokeWidth="1" opacity="0.95" />
        <rect x="1575" y="300" width="40" height="250" fill="#0d1434" stroke="#c084fc" strokeWidth="0.9" opacity="0.9" />
        <line x1="1483" y1="295" x2="1483" y2="540" stroke="#c084fc" strokeWidth="1.6" strokeDasharray="3 4" opacity="0.75" />
        <line x1="1538" y1="260" x2="1538" y2="540" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="3 4" opacity="0.85" />
        <line x1="1554" y1="260" x2="1554" y2="540" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="3 4" opacity="0.85" />
        <line x1="1541" y1="240" x2="1541" y2="195" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="1541" cy="195" r="2.5" fill="#38bdf8" />

        {/* Silhouetted Waterfront Date Palms (Left & Right) */}
        {[
          { x: 30, y: 552, s: 1.0 },
          { x: 80, y: 548, s: 1.15 },
          { x: 170, y: 546, s: 1.05 },
          { x: 230, y: 548, s: 0.9 },
          { x: 1320, y: 552, s: 1.0 },
          { x: 1450, y: 554, s: 1.1 },
          { x: 1500, y: 556, s: 0.9 },
        ].map((palm, idx) => (
          <g key={idx} transform={`translate(${palm.x}, ${palm.y}) scale(${palm.s})`}>
            <path d="M0,0 Q6,-30 14,-62" stroke="#040210" strokeWidth="4.4" strokeLinecap="round" fill="none" />
            <path d="M14,-62 Q28,-80 44,-72" stroke="#040210" strokeWidth="2.6" fill="none" />
            <path d="M14,-62 Q26,-88 30,-98" stroke="#040210" strokeWidth="2.6" fill="none" />
            <path d="M14,-62 Q4,-90 -10,-92" stroke="#040210" strokeWidth="2.6" fill="none" />
            <path d="M14,-62 Q-8,-80 -22,-70" stroke="#040210" strokeWidth="2.6" fill="none" />
            <path d="M14,-62 Q26,-70 38,-60" stroke="#040210" strokeWidth="2.6" fill="none" />
          </g>
        ))}

        {/* =====================================================================
            5. VELVET PURPLE DESERT SAND DUNES (FAR & MIDGROUND LAYERS)
            ===================================================================== */}
        {/* Far Dune Layer */}
        <path
          d="M-50,600 C200,530 460,580 730,530 C1040,480 1340,540 1650,490 L1650,860 L-50,860 Z"
          fill="url(#dune-far)"
        />

        {/* Mid Dune Layer with soft glowing crest */}
        <path
          d="M-50,640 C240,570 540,620 820,570 C1140,520 1380,580 1650,530 L1650,860 L-50,860 Z"
          fill="url(#dune-mid)"
        />
        <path
          d="M-50,640 C240,570 540,620 820,570 C1140,520 1380,580 1650,530"
          stroke="url(#dune-crest-glow)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* =====================================================================
            6. CENTER LANDMARK: MUSEUM OF THE FUTURE (HIGH-TECH UI MASTERPIECE)
            Enhanced with metallic titanium anisotropic shading, glowing Arabic
            calligraphic ribbons, inner void cyan halo, and holographic reticle!
            ===================================================================== */}
        <g transform="translate(740, 590) scale(1.18)">
          {/* Dark Landscaped Knoll Base with emerald rim & deep night shading */}
          <ellipse cx="0" cy="62" rx="240" ry="55" fill="#040914" />
          <ellipse cx="0" cy="60" rx="200" ry="32" fill="#061824" opacity="0.85" />
          <path d="M-220,65 Q0,40 220,65" stroke="#10b981" strokeWidth="2.2" opacity="0.6" fill="none" />

          {/* Silhouetted date palm trees flanking the hill base */}
          <g transform="translate(-170, 64) scale(0.65)">
            <path d="M0,0 Q5,-24 12,-50" stroke="#040210" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M12,-50 Q24,-65 36,-60" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M12,-50 Q22,-72 26,-80" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M12,-50 Q3,-72 -8,-74" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M12,-50 Q-6,-65 -18,-56" stroke="#040210" strokeWidth="2.2" fill="none" />
          </g>
          <g transform="translate(-205, 68) scale(0.55)">
            <path d="M0,0 Q4,-20 10,-42" stroke="#040210" strokeWidth="3.6" strokeLinecap="round" fill="none" />
            <path d="M10,-42 Q20,-55 30,-50" stroke="#040210" strokeWidth="2" fill="none" />
            <path d="M10,-42 Q18,-62 22,-68" stroke="#040210" strokeWidth="2" fill="none" />
            <path d="M10,-42 Q2,-62 -7,-63" stroke="#040210" strokeWidth="2" fill="none" />
          </g>
          <g transform="translate(170, 64) scale(0.65)">
            <path d="M0,0 Q-5,-24 -12,-50" stroke="#040210" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M-12,-50 Q-24,-65 -36,-60" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M-12,-50 Q-22,-72 -26,-80" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M-12,-50 Q-3,-72 8,-74" stroke="#040210" strokeWidth="2.2" fill="none" />
            <path d="M-12,-50 Q6,-65 18,-56" stroke="#040210" strokeWidth="2.2" fill="none" />
          </g>
          <g transform="translate(205, 68) scale(0.55)">
            <path d="M0,0 Q-4,-20 -10,-42" stroke="#040210" strokeWidth="3.6" strokeLinecap="round" fill="none" />
            <path d="M-10,-42 Q-20,-55 -30,-50" stroke="#040210" strokeWidth="2" fill="none" />
            <path d="M-10,-42 Q-18,-62 -22,-68" stroke="#040210" strokeWidth="2" fill="none" />
          </g>

          {/* Radiant Downward Light Beam Illuminating the Entrance Plaza (Matching Reference Image!) */}
          <polygon points="-16,42 16,42 62,98 -62,98" fill="url(#motf-beam)" filter="url(#glow-neon)" />

          {/* Curved Plaza Roadway leading to Entrance */}
          <path d="M-95,95 Q0,76 95,95" stroke="#38bdf8" strokeWidth="3.2" fill="none" opacity="0.85" />
          <path d="M-130,105 Q0,84 130,105" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="6 6" fill="none" opacity="0.65" />

          {/* Illuminated Triangular Architectural Entrance Pavilion */}
          <polygon points="0,18 -26,52 26,52" fill="#ffffff" filter="url(#glow-neon)" opacity="0.95" />
          <polygon points="0,21 -22,50 22,50" fill="#0284c7" />
          <line x1="0" y1="21" x2="0" y2="50" stroke="#ffffff" strokeWidth="2" />

          {/* Outer Asymmetrical Titanium Torus Ring Shell */}
          <path
            d="M-150,12 C-150,-62 -110,-106 -18,-106 C62,-106 140,-72 166,-32 C182,-6 172,28 138,50 C82,78 -40,78 -112,60 C-145,47 -150,28 -150,12 Z"
            fill="url(#motf-titanium)"
            stroke="#475569"
            strokeWidth="3.6"
          />

          {/* Torus Specular Rim Highlight (Upper Edge) */}
          <path
            d="M-140,0 C-135,-55 -95,-95 -15,-95 C55,-95 125,-65 152,-25"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            opacity="0.8"
          />

          {/* Inner Asymmetrical Teardrop Void Eye with Cyan Rim Glow */}
          <ellipse cx="60" cy="-18" rx="55" ry="32" fill="#00f0ff" opacity="0.25" filter="url(#glow-neon)" />
          <path
            d="M10,-22 C22,-56 74,-60 104,-44 C122,-28 123,-9 105,6 C84,24 40,22 14,5 C9,-1 7,-10 10,-22 Z"
            fill="url(#motf-void)"
            stroke="#00f0ff"
            strokeWidth="2.8"
            filter="url(#glow-neon)"
          />
          <path
            d="M10,-22 C22,-56 74,-60 104,-44 C122,-28 123,-9 105,6 C84,24 40,22 14,5 C9,-1 7,-10 10,-22 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
          />

          {/* Intricate Arabic Calligraphic Ribbon Windows (Illuminated in pure white/cyan neon) */}
          {/* Main Crown Calligraphy Ribbon */}
          <path d="M-130,-22 C-85,-72 -14,-86 75,-72 C122,-58 148,-36 155,-20" fill="none" stroke="#05070e" strokeWidth="7" strokeLinecap="round" />
          <path d="M-130,-22 C-85,-72 -14,-86 75,-72 C122,-58 148,-36 155,-20" fill="none" stroke="#00f0ff" strokeWidth="3.4" strokeLinecap="round" filter="url(#glow-neon)" />
          <path d="M-130,-22 C-85,-72 -14,-86 75,-72 C122,-58 148,-36 155,-20" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />

          {/* Mid Calligraphy Ribbon 1 */}
          <path d="M-140,5 C-106,-34 -40,-48 28,-36" fill="none" stroke="#05070e" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M-140,5 C-106,-34 -40,-48 28,-36" fill="none" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M-140,5 C-106,-34 -40,-48 28,-36" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />

          {/* Mid Calligraphy Ribbon 2 */}
          <path d="M-96,-54 C-62,-18 -25,-14 26,-22" fill="none" stroke="#05070e" strokeWidth="6" strokeLinecap="round" />
          <path d="M-96,-54 C-62,-18 -25,-14 26,-22" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" filter="url(#glow-neon)" />

          {/* Lower Calligraphy Ribbon 1 */}
          <path d="M-120,38 C-62,56 26,56 88,40 C125,28 145,12 152,-3" fill="none" stroke="#05070e" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M-120,38 C-62,56 26,56 88,40 C125,28 145,12 152,-3" fill="none" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" filter="url(#glow-neon)" />
          <path d="M-120,38 C-62,56 26,56 88,40 C125,28 145,12 152,-3" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

          {/* Lower Calligraphy Ribbon 2 */}
          <path d="M-68,58 C-26,64 40,60 78,50" fill="none" stroke="#05070e" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M-68,58 C-26,64 40,60 78,50" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

          {/* Fine Arabic script strokes */}
          <path d="M-40,10 Q-20,0 0,12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M-80,18 Q-60,8 -45,22" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M40,32 Q60,25 75,35" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>

        {/* =====================================================================
            7. FOREGROUND VELVET PURPLE DUNES & DRAMATIC RIGHT WAVE
            (Exactly matching the user's reference image!)
            ===================================================================== */}
        {/* Near rolling dune ridge across center-left */}
        <path
          d="M-50,700 C220,620 560,680 840,630 C1080,580 1340,650 1650,600 L1650,860 L-50,860 Z"
          fill="url(#dune-near)"
        />
        <path
          d="M-50,700 C220,620 560,680 840,630 C1080,580 1340,650 1650,600"
          stroke="url(#dune-crest-glow)"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── DRAMATIC FOREGROUND PURPLE WAVE (Bottom Right, under Phone & Downloads) ──
            Rising majestically from bottom-center to the far right, exactly matching the reference picture! */}
        <path
          d="M 920,860 C 1140,700 1360,640 1650,670 L 1650,860 Z"
          fill="url(#dune-wave-purple)"
        />
        <path
          d="M 920,860 C 1140,700 1360,640 1650,670"
          stroke="url(#dune-crest-glow)"
          strokeWidth="4.8"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow-neon)"
        />

        {/* Lowest Velvet Violet Deep Dune Sweep across very bottom */}
        <path
          d="M-50,780 C300,710 650,750 980,710 C1250,670 1450,730 1650,690 L1650,860 L-50,860 Z"
          fill="#080216"
        />
        <path
          d="M-50,780 C300,710 650,750 980,710 C1250,670 1450,730 1650,690"
          stroke="url(#dune-crest-glow)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
