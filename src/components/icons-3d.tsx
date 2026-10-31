import type { SVGProps } from "react";

type Icon3DProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * 3D Property Visa Icon
 * Burj Khalifa + Dubai towers wrapped with UAE tricolor ribbon + golden residence key
 */
export function Icon3DPropertyVisa({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(30,58,138,0.22)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="pv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pv-burj" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="65%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="pv-tower1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="pv-goldkey" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#facc15" />
          <stop offset="70%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
        <linearGradient id="uae-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="uae-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>

      {/* Ambient pedestal glow */}
      <ellipse cx="60" cy="98" rx="46" ry="12" fill="url(#pv-glow)" />

      {/* Background towers */}
      <rect x="24" y="44" width="14" height="42" rx="2" fill="url(#pv-tower1)" />
      <rect x="42" y="32" width="16" height="54" rx="2" fill="url(#pv-tower1)" />
      <rect x="76" y="36" width="18" height="50" rx="2" fill="url(#pv-tower1)" />

      {/* Central Burj Khalifa spire */}
      <polygon points="60,8 65,30 63,82 57,82 55,30" fill="url(#pv-burj)" />
      <polygon points="60,8 63,82 60,82" fill="#ffffff" opacity="0.4" />
      <line x1="60" y1="4" x2="60" y2="10" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />

      {/* Window grid accents */}
      <path d="M44 40h12M44 48h12M44 56h12M78 44h14M78 52h14M78 60h14" stroke="#93c5fd" strokeWidth="1.2" opacity="0.8" />

      {/* 3D UAE Tricolor Ribbon wrapping around the base */}
      <path
        d="M16 80 C30 92, 50 94, 66 84 C80 75, 96 76, 104 84"
        stroke="url(#uae-green)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M18 84 C32 96, 52 98, 68 88 C82 79, 98 80, 106 88"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 88 C34 100, 54 102, 70 92 C84 83, 100 84, 108 92"
        stroke="#0f172a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* UAE Red ribbon tab */}
      <path d="M14 74 L24 72 L22 92 L12 90 Z" fill="url(#uae-red)" />

      {/* 3D Gleaming Gold Key */}
      <g transform="translate(18, 68) rotate(-18)">
        <ellipse cx="68" cy="18" rx="14" ry="14" fill="url(#pv-goldkey)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
        <ellipse cx="68" cy="18" rx="7" ry="7" fill="#ffffff" opacity="0.85" />
        <rect x="22" y="14" width="38" height="8" rx="2" fill="url(#pv-goldkey)" />
        <rect x="26" y="22" width="6" height="8" rx="1" fill="url(#pv-goldkey)" />
        <rect x="36" y="22" width="5" height="6" rx="1" fill="url(#pv-goldkey)" />
        {/* Specular highlight */}
        <circle cx="65" cy="14" r="3" fill="#ffffff" opacity="0.75" />
      </g>
    </svg>
  );
}

/**
 * 3D Golden Visa Icon
 * Stack of gold bullion bars, gold coins, and luxury lock
 */
export function Icon3DGoldenVisa({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_18px_rgba(202,138,4,0.3)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="gv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gold-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="gold-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
        <linearGradient id="gold-front" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>

      <ellipse cx="60" cy="100" rx="46" ry="12" fill="url(#gv-glow)" />

      {/* Gold Ingot 1 (Bottom Left) */}
      <g transform="translate(18, 62)">
        <polygon points="12,0 48,0 42,16 0,16" fill="url(#gold-top)" />
        <polygon points="0,16 42,16 42,32 0,32" fill="url(#gold-front)" />
        <polygon points="42,16 48,0 48,16 42,32" fill="url(#gold-side)" />
        <text x="12" y="26" fontSize="8" fontWeight="bold" fill="#713f12" letterSpacing="0.8">999.9</text>
      </g>

      {/* Gold Ingot 2 (Bottom Right) */}
      <g transform="translate(54, 62)">
        <polygon points="12,0 48,0 42,16 0,16" fill="url(#gold-top)" />
        <polygon points="0,16 42,16 42,32 0,32" fill="url(#gold-front)" />
        <polygon points="42,16 48,0 48,16 42,32" fill="url(#gold-side)" />
        <text x="12" y="26" fontSize="8" fontWeight="bold" fill="#713f12" letterSpacing="0.8">999.9</text>
      </g>

      {/* Gold Ingot 3 (Top Center) */}
      <g transform="translate(36, 36)">
        <polygon points="12,0 48,0 42,16 0,16" fill="url(#gold-top)" />
        <polygon points="0,16 42,16 42,32 0,32" fill="url(#gold-front)" />
        <polygon points="42,16 48,0 48,16 42,32" fill="url(#gold-side)" />
        <text x="12" y="26" fontSize="8" fontWeight="bold" fill="#713f12" letterSpacing="0.8">GOLD</text>
      </g>

      {/* Luxury Golden Padlock in Center */}
      <g transform="translate(48, 14)">
        <path d="M7 16 V8 A6 6 0 0 1 19 8 V16" stroke="url(#gold-top)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <rect x="2" y="14" width="22" height="18" rx="4" fill="url(#gold-front)" stroke="#ca8a04" strokeWidth="1" />
        <circle cx="13" cy="22" r="2.5" fill="#713f12" />
        <polygon points="12,23 14,23 14.5,27 11.5,27" fill="#713f12" />
      </g>

      {/* Scattered 3D Gold Coins */}
      <ellipse cx="26" cy="94" rx="9" ry="5" fill="url(#gold-top)" stroke="#ca8a04" strokeWidth="1.2" />
      <ellipse cx="94" cy="92" rx="10" ry="5.5" fill="url(#gold-top)" stroke="#ca8a04" strokeWidth="1.2" />
      <ellipse cx="44" cy="98" rx="8" ry="4.5" fill="url(#gold-top)" stroke="#ca8a04" strokeWidth="1" />
      <ellipse cx="78" cy="98" rx="8" ry="4.5" fill="url(#gold-top)" stroke="#ca8a04" strokeWidth="1" />
    </svg>
  );
}

/**
 * 3D Family Visa Icon
 * Circular gold laurel frame with happy 3D family characters
 */
export function Icon3DFamilyVisa({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(59,130,246,0.22)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="fam-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </radialGradient>
        <linearGradient id="fam-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Gold Ribbon / Laurel Circular Frame */}
      <circle cx="60" cy="60" r="48" fill="url(#fam-bg)" stroke="url(#fam-ring)" strokeWidth="4.5" />
      <circle cx="60" cy="60" r="44" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" fill="none" />

      {/* Father Figure (Left) */}
      <g transform="translate(32, 28)">
        <circle cx="14" cy="14" r="10" fill="#fed7aa" />
        {/* Hair */}
        <path d="M4 14 C4 6, 24 6, 24 14 Z" fill="#475569" />
        {/* Suit */}
        <path d="M0 48 C0 32, 28 32, 28 48 Z" fill="#1e40af" />
        <polygon points="12,32 16,32 14,40" fill="#dc2626" />
      </g>

      {/* Mother Figure (Right) */}
      <g transform="translate(62, 30)">
        <circle cx="14" cy="14" r="10" fill="#fed7aa" />
        {/* Hair */}
        <path d="M4 14 C3 4, 25 4, 24 14 C26 22, 2 22, 4 14" fill="#92400e" />
        {/* Dress */}
        <path d="M0 46 C0 30, 28 30, 28 46 Z" fill="#ec4899" />
      </g>

      {/* Children in front */}
      <g transform="translate(48, 52)">
        <circle cx="12" cy="10" r="7" fill="#fde68a" />
        <path d="M2 30 C2 18, 22 18, 22 30 Z" fill="#10b981" />
      </g>
    </svg>
  );
}

/**
 * 3D Newborn Visa Icon
 * Circular laurel frame with loving parents holding newborn baby
 */
export function Icon3DNewbornVisa({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(244,114,182,0.22)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="nb-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </radialGradient>
        <linearGradient id="nb-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#9d174d" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="48" fill="url(#nb-bg)" stroke="url(#nb-ring)" strokeWidth="4.5" />
      <circle cx="60" cy="60" r="44" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" fill="none" />

      {/* Parents silhouettes / stylized icons */}
      <circle cx="44" cy="38" r="9" fill="#fed7aa" />
      <path d="M30 68 C30 52, 58 52, 58 68 Z" fill="#3b82f6" />

      <circle cx="76" cy="40" r="8.5" fill="#fed7aa" />
      <path d="M62 68 C62 54, 90 54, 90 68 Z" fill="#f43f5e" />

      {/* Newborn wrapped in glowing swaddle blanket */}
      <g transform="translate(48, 56)">
        <ellipse cx="12" cy="18" rx="14" ry="10" fill="#ffffff" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))" />
        <ellipse cx="12" cy="18" rx="13" ry="9" fill="#bae6fd" />
        <circle cx="12" cy="14" r="6" fill="#fed7aa" />
        <ellipse cx="12" cy="12" rx="5" ry="3" fill="#fbcfe8" />
        {/* Pacifier / cute accent */}
        <circle cx="12" cy="16" r="1.5" fill="#f43f5e" />
      </g>
    </svg>
  );
}

/**
 * 3D Maid & Nanny Visa Icon
 */
export function Icon3DMaidVisa({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(20,184,166,0.22)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="maid-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </radialGradient>
        <linearGradient id="maid-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="48" fill="url(#maid-bg)" stroke="url(#maid-ring)" strokeWidth="4.5" />
      <circle cx="60" cy="60" r="44" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" fill="none" />

      {/* Smiling Helper */}
      <g transform="translate(45, 24)">
        <circle cx="15" cy="15" r="12" fill="#fed7aa" />
        <path d="M3 15 C3 4, 27 4, 27 15 C27 22, 3 22, 3 15" fill="#1e293b" />
        {/* Uniform & Apron */}
        <path d="M-6 56 C-6 36, 36 36, 36 56 Z" fill="#0d9488" />
        <path d="M2 56 C2 42, 28 42, 28 56 Z" fill="#ffffff" />
      </g>

      {/* ID Badge / Contract card */}
      <rect x="22" y="66" width="22" height="16" rx="3" fill="#ffffff" stroke="#0d9488" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
      <circle cx="28" cy="74" r="3" fill="#0d9488" />
      <line x1="34" y1="72" x2="40" y2="72" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="34" y1="76" x2="38" y2="76" stroke="#94a3b8" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * 3D Emirates ID Icon
 * Dark blue luxury biometric smart card with gold microchip & circular arrows
 */
export function Icon3DEmiratesId({ size = 56, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_18px_rgba(30,58,138,0.3)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="eid-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#172554" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="eid-chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Biometric Card angled */}
      <g transform="translate(18, 22) rotate(-6)">
        <rect x="0" y="0" width="76" height="48" rx="6" fill="url(#eid-card)" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Card shine */}
        <path d="M0 0 L32 0 L8 48 L0 48 Z" fill="#ffffff" opacity="0.12" />

        {/* Gold Chip */}
        <rect x="10" y="16" width="14" height="12" rx="2" fill="url(#eid-chip)" />
        <line x1="10" y1="22" x2="24" y2="22" stroke="#78350f" strokeWidth="0.8" />
        <line x1="17" y1="16" x2="17" y2="28" stroke="#78350f" strokeWidth="0.8" />

        {/* Embossed text lines */}
        <rect x="30" y="16" width="36" height="3" rx="1.5" fill="#93c5fd" opacity="0.8" />
        <rect x="30" y="23" width="24" height="3" rx="1.5" fill="#93c5fd" opacity="0.6" />
        <rect x="10" y="36" width="46" height="4" rx="2" fill="#facc15" opacity="0.9" />
      </g>

      {/* Passport / Folder behind */}
      <g transform="translate(36, 52)">
        <rect x="0" y="0" width="62" height="44" rx="4" fill="#0f172a" stroke="#d97706" strokeWidth="1.2" />
        <circle cx="31" cy="22" r="10" stroke="#facc15" strokeWidth="1.2" fill="none" />
        <polygon points="31,16 34,22 31,28 28,22" fill="#facc15" />
      </g>

      {/* Golden Circular Renewal Arrow */}
      <g transform="translate(80, 16)">
        <path
          d="M12 2 A12 12 0 1 1 2 12"
          stroke="#facc15"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="12, -2 18, 4 10, 6" fill="#facc15" />
      </g>
    </svg>
  );
}

/**
 * 3D Government Service Mini Icons (for right column of MegaMenu)
 */
export function Icon3DDocService({ type, size = 38 }: { type: string; size?: number }) {
  switch (type) {
    case "pro-services":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <circle cx="40" cy="40" r="26" fill="#dbeafe" />
          <rect x="26" y="24" width="28" height="36" rx="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
          <line x1="32" y1="32" x2="48" y2="32" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="38" x2="44" y2="38" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="48" r="4" fill="#f59e0b" />
        </svg>
      );
    case "amer-center":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <circle cx="40" cy="40" r="26" fill="#dbeafe" />
          <path d="M24 54h32v-6a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v6z" fill="#1e40af" />
          <circle cx="40" cy="30" r="8" fill="#fed7aa" />
          <circle cx="40" cy="30" r="8" stroke="#1e40af" strokeWidth="2" />
        </svg>
      );
    case "attestation":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#fefce8" />
          <rect x="24" y="20" width="32" height="42" rx="4" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
          <line x1="30" y1="28" x2="50" y2="28" stroke="#94a3b8" strokeWidth="2" />
          <line x1="30" y1="34" x2="46" y2="34" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="40" cy="46" r="7" fill="#dc2626" />
          <polygon points="40,42 42,46 46,47 43,49 44,53 40,51 36,53 37,49 34,47 38,46" fill="#facc15" />
        </svg>
      );
    case "translation":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <circle cx="40" cy="40" r="26" fill="#e0f2fe" />
          <rect x="22" y="24" width="36" height="32" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
          <text x="28" y="44" fontSize="14" fontWeight="bold" fill="#0284c7">A</text>
          <text x="42" y="46" fontSize="13" fontWeight="bold" fill="#d97706">ع</text>
        </svg>
      );
    case "poa":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#fefce8" />
          <rect x="24" y="20" width="32" height="42" rx="4" fill="#ffffff" stroke="#b45309" strokeWidth="2" />
          <line x1="42" y1="22" x2="56" y2="36" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="48" r="5" fill="#ca8a04" />
        </svg>
      );
    case "wills":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <rect x="24" y="22" width="32" height="40" rx="4" fill="#ffffff" stroke="#475569" strokeWidth="2" />
          <circle cx="40" cy="46" r="6" fill="#0284c7" />
          <line x1="30" y1="30" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      );
    case "medical":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f0fdf4" />
          <circle cx="40" cy="40" r="26" fill="#dcfce7" />
          <rect x="36" y="24" width="8" height="32" rx="2" fill="#16a34a" />
          <rect x="24" y="36" width="32" height="8" rx="2" fill="#16a34a" />
        </svg>
      );
    case "iloe":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#eff6ff" />
          <path d="M40 20 L58 28 V42 C58 53 40 62 40 62 C40 62 22 53 22 42 V28 Z" fill="#2563eb" />
          <path d="M34 40 L38 44 L48 34" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "dld-trustee":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <polygon points="40,20 60,36 20,36" fill="#f59e0b" />
          <rect x="26" y="36" width="28" height="24" rx="2" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
          <rect x="36" y="44" width="8" height="16" fill="#1e3a8a" />
        </svg>
      );
    case "revaluation":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <circle cx="36" cy="36" r="14" stroke="#0284c7" strokeWidth="3" fill="#ffffff" />
          <line x1="46" y1="46" x2="58" y2="58" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          <text x="31" y="41" fontSize="12" fontWeight="bold" fill="#f59e0b">%</text>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="18" fill="#f8fafc" />
          <circle cx="40" cy="40" r="16" fill="#dbeafe" />
        </svg>
      );
  }
}

/**
 * 3D Visa Calculator Icon
 * Royal blue & gold isometric calculator with glowing LCD and 3D buttons
 */
export function Icon3DCalculator({ size = 48, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_10px_20px_rgba(37,99,235,0.35)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="calc-body-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="calc-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="calc-screen-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="calc-gold-key" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Calculator Body - 3D Beveled Rounded Tile */}
      <rect x="14" y="10" width="72" height="80" rx="20" fill="url(#calc-bezel)" />
      <rect x="16" y="12" width="68" height="74" rx="18" fill="url(#calc-body-3d)" />

      {/* Top Glass Highlight */}
      <path d="M 22 14 Q 50 14 78 14 Q 82 14 82 18 L 80 40 Q 50 28 20 40 L 18 18 Q 18 14 22 14 Z" fill="#ffffff" opacity="0.25" />

      {/* LCD Screen with emerald glowing numbers */}
      <rect x="24" y="22" width="52" height="20" rx="8" fill="url(#calc-screen-3d)" stroke="#38bdf8" strokeWidth="1.2" />
      <rect x="28" y="27" width="22" height="4" rx="2" fill="#38bdf8" opacity="0.6" />
      <rect x="54" y="27" width="16" height="4" rx="2" fill="#4ade80" />
      <rect x="36" y="34" width="34" height="4.5" rx="2" fill="#38bdf8" />

      {/* 3D Button Grid */}
      {/* Row 1 */}
      <rect x="24" y="48" width="14" height="10" rx="4" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 2px 0 #93c5fd)" />
      <rect x="43" y="48" width="14" height="10" rx="4" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 2px 0 #93c5fd)" />
      <rect x="62" y="48" width="14" height="10" rx="4" fill="#60a5fa" filter="drop-shadow(0 2px 0 #1d4ed8)" />

      {/* Row 2 */}
      <rect x="24" y="62" width="14" height="10" rx="4" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 2px 0 #93c5fd)" />
      <rect x="43" y="62" width="14" height="10" rx="4" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 2px 0 #93c5fd)" />
      <rect x="62" y="62" width="14" height="10" rx="4" fill="#60a5fa" filter="drop-shadow(0 2px 0 #1d4ed8)" />

      {/* Row 3 - Big Gold '=' Button */}
      <rect x="24" y="75" width="33" height="10" rx="4" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 2px 0 #93c5fd)" />
      <rect x="62" y="75" width="14" height="10" rx="4" fill="url(#calc-gold-key)" filter="drop-shadow(0 2px 0 #78350f)" />
      <line x1="66" y1="78.5" x2="72" y2="78.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="66" y1="81.5" x2="72" y2="81.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating 3D Gold Coin with Dirham Symbol */}
      <g transform="translate(68, 6)">
        <circle cx="14" cy="14" r="14" fill="#ca8a04" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))" />
        <circle cx="14" cy="13" r="13" fill="url(#calc-gold-key)" />
        <circle cx="14" cy="13" r="10.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.7" />
        <text x="14" y="17" fontSize="10" fontWeight="900" fill="#713f12" textAnchor="middle" fontFamily="sans-serif">د.إ</text>
      </g>
    </svg>
  );
}

/**
 * 3D Property Visa Icon (Compact & HD)
 * 3D Glass Towers + Golden Residence Key + Emerald Lawn
 */
export function Icon3DPropertyCard({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(37,99,235,0.28)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="prop-bldg-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="prop-bldg-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id="prop-key-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>

      {/* Pedestal Base */}
      <ellipse cx="50" cy="86" rx="40" ry="10" fill="#dbeafe" opacity="0.8" />
      <ellipse cx="50" cy="85" rx="34" ry="7" fill="#10b981" opacity="0.85" />

      {/* Back Tower */}
      <rect x="22" y="32" width="22" height="48" rx="4" fill="url(#prop-bldg-side)" />
      <rect x="25" y="38" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x="33" y="38" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x="25" y="48" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x="33" y="48" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x="25" y="58" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x="33" y="58" width="4" height="5" rx="1" fill="#93c5fd" opacity="0.8" />

      {/* Main Glass Tower */}
      <rect x="40" y="16" width="32" height="64" rx="6" fill="url(#prop-bldg-front)" stroke="#93c5fd" strokeWidth="1.2" />
      <path d="M 42 18 L 56 18 L 44 78 L 42 78 Z" fill="#ffffff" opacity="0.25" />

      {/* Main Tower Windows */}
      <g opacity="0.95">
        <rect x="46" y="24" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="58" y="24" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="46" y="35" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="58" y="35" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="46" y="46" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="58" y="46" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="46" y="57" width="8" height="7" rx="2" fill="#ffffff" />
        <rect x="58" y="57" width="8" height="7" rx="2" fill="#ffffff" />
      </g>

      {/* Gleaming 3D Gold Residence Key angled in front */}
      <g transform="translate(14, 52) rotate(-22)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))">
        <circle cx="16" cy="16" r="14" fill="#854d0e" />
        <circle cx="16" cy="14" r="13" fill="url(#prop-key-gold)" />
        <circle cx="16" cy="14" r="6.5" fill="#1e3a8a" />
        <rect x="26" y="10" width="34" height="8" rx="2" fill="url(#prop-key-gold)" />
        <rect x="46" y="18" width="5" height="7" rx="1.5" fill="url(#prop-key-gold)" />
        <rect x="54" y="18" width="5" height="9" rx="1.5" fill="url(#prop-key-gold)" />
        <circle cx="13" cy="10" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>
    </svg>
  );
}

/**
 * 3D Golden Visa Icon (Compact & HD)
 * 3D Stack of Gold Bullion + 10-Year Starburst Crown + Diamond
 */
export function Icon3DGoldenCard({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_18px_rgba(245,158,11,0.38)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="gold-bar-top-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="45%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="gold-bar-front-3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="gold-bar-side-3d" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>

      {/* Golden Halo Pedestal */}
      <ellipse cx="50" cy="85" rx="38" ry="10" fill="#fef08a" opacity="0.6" />

      {/* Gold Bar Bottom Left */}
      <g transform="translate(12, 56)">
        <polygon points="10,0 42,0 36,14 0,14" fill="url(#gold-bar-top-3d)" />
        <polygon points="0,14 36,14 36,28 0,28" fill="url(#gold-bar-front-3d)" />
        <polygon points="36,14 42,0 42,14 36,28" fill="url(#gold-bar-side-3d)" />
        <text x="10" y="23" fontSize="7" fontWeight="900" fill="#78350f" letterSpacing="0.5">999.9</text>
      </g>

      {/* Gold Bar Bottom Right */}
      <g transform="translate(46, 56)">
        <polygon points="10,0 42,0 36,14 0,14" fill="url(#gold-bar-top-3d)" />
        <polygon points="0,14 36,14 36,28 0,28" fill="url(#gold-bar-front-3d)" />
        <polygon points="36,14 42,0 42,14 36,28" fill="url(#gold-bar-side-3d)" />
        <text x="10" y="23" fontSize="7" fontWeight="900" fill="#78350f" letterSpacing="0.5">999.9</text>
      </g>

      {/* Gold Bar Top Center */}
      <g transform="translate(29, 34)">
        <polygon points="10,0 42,0 36,14 0,14" fill="url(#gold-bar-top-3d)" />
        <polygon points="0,14 36,14 36,28 0,28" fill="url(#gold-bar-front-3d)" />
        <polygon points="36,14 42,0 42,14 36,28" fill="url(#gold-bar-side-3d)" />
        <text x="9" y="23" fontSize="7" fontWeight="900" fill="#78350f" letterSpacing="0.5">GOLD</text>
      </g>

      {/* 3D Sparkling Crown & 10-Year Star atop */}
      <g transform="translate(34, 10)">
        <circle cx="16" cy="16" r="14" fill="#b45309" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))" />
        <circle cx="16" cy="15" r="13" fill="url(#gold-bar-top-3d)" />
        <path d="M16 6 L18.5 12 L25 12.5 L20 17 L21.5 23 L16 19.5 L10.5 23 L12 17 L7 12.5 L13.5 12 Z" fill="#b45309" />
        <circle cx="16" cy="15" r="2.5" fill="#ffffff" />
      </g>

      {/* Sparkles */}
      <path d="M 82 28 L 84 34 L 90 36 L 84 38 L 82 44 L 80 38 L 74 36 L 80 34 Z" fill="#fde047" />
      <path d="M 18 24 L 19 28 L 23 29 L 19 30 L 18 34 L 17 30 L 13 29 L 17 28 Z" fill="#fde047" />
    </svg>
  );
}

/**
 * 3D Family Visa Icon (Compact & HD)
 * 3D Heart-Shield with Loving Family & Emerald UAE Laurel
 */
export function Icon3DFamilyCard({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(16,185,129,0.3)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="fam-glow-3d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ecfdf5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </radialGradient>
        <linearGradient id="fam-crest-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Shield Disc */}
      <circle cx="50" cy="50" r="42" fill="url(#fam-glow-3d)" stroke="url(#fam-crest-3d)" strokeWidth="4" />
      <circle cx="50" cy="50" r="37" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" fill="none" />

      {/* Father Figure (Left) */}
      <g transform="translate(26, 26)">
        <circle cx="12" cy="11" r="8.5" fill="#fed7aa" />
        <path d="M4 11 C4 4, 20 4, 20 11 Z" fill="#334155" />
        <path d="M0 42 C0 26, 24 26, 24 42 Z" fill="#1d4ed8" />
        <polygon points="10,26 14,26 12,34" fill="#ef4444" />
      </g>

      {/* Mother Figure (Right) */}
      <g transform="translate(50, 28)">
        <circle cx="12" cy="11" r="8.5" fill="#fed7aa" />
        <path d="M3 11 C2 3, 22 3, 21 11 C23 18, 1 18, 3 11" fill="#78350f" />
        <path d="M0 40 C0 25, 24 25, 24 40 Z" fill="#ec4899" />
      </g>

      {/* Child in Front Center */}
      <g transform="translate(38, 46)">
        <circle cx="12" cy="9" r="6.5" fill="#fde68a" />
        <path d="M2 28 C2 17, 22 17, 22 28 Z" fill="#10b981" />
      </g>

      {/* Golden UAE Heart of Protection in bottom corner */}
      <g transform="translate(68, 64)">
        <circle cx="12" cy="12" r="11" fill="#f59e0b" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))" />
        <path d="M12 7 C9 4 5 7 7 11 L12 16 L17 11 C19 7 15 4 12 7 Z" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * 3D Newborn Visa Icon (Compact & HD)
 * 3D Soft Cloud Cradle + Baby Angel + Golden Sparkles
 */
export function Icon3DNewbornCard({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(244,63,94,0.28)] ${className}`}
      {...props}
    >
      <defs>
        <radialGradient id="nb-glow-3d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#fecdd3" />
        </radialGradient>
        <linearGradient id="nb-ring-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="42" fill="url(#nb-glow-3d)" stroke="url(#nb-ring-3d)" strokeWidth="4" />
      <circle cx="50" cy="50" r="37" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" fill="none" />

      {/* Cloud Base */}
      <ellipse cx="50" cy="68" rx="28" ry="12" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />

      {/* Woven Bassinet / Cradle */}
      <path d="M 26 54 Q 50 48 74 54 Q 70 76 50 76 Q 30 76 26 54 Z" fill="#fda4af" />
      <path d="M 28 54 Q 50 50 72 54" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

      {/* Baby Head with Cute Bonnet */}
      <circle cx="50" cy="42" r="14" fill="#fed7aa" />
      <path d="M 36 42 Q 50 26 64 42 Q 62 46 50 45 Q 38 46 36 42 Z" fill="#f43f5e" />
      <circle cx="50" cy="27" r="3.5" fill="#ffffff" />

      {/* Sleeping Eyes & Cheeks */}
      <path d="M 43 42 Q 46 44 49 42" stroke="#78350f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M 51 42 Q 54 44 57 42" stroke="#78350f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="42" cy="45" r="2" fill="#f43f5e" opacity="0.6" />
      <circle cx="58" cy="45" r="2" fill="#f43f5e" opacity="0.6" />

      {/* Pacifier */}
      <circle cx="50" cy="48" r="3" fill="#38bdf8" />

      {/* Golden Star Sparkle */}
      <path d="M 72 20 L 74 26 L 80 28 L 74 30 L 72 36 L 70 30 L 64 28 L 70 26 Z" fill="#facc15" />
    </svg>
  );
}

/**
 * 3D Remote Work Visa Icon (Compact & HD)
 * 3D Luxury Purple Suitcase + Golden Locks + Passport Stamp
 */
export function Icon3DRemoteWorkVisa({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(147,51,234,0.32)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="rw-case-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="rw-gold-lock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
      </defs>

      {/* Pedestal Glow */}
      <ellipse cx="50" cy="85" rx="38" ry="9" fill="#f3e8ff" opacity="0.75" />

      {/* Suitcase Handle */}
      <path d="M38 28 V16 Q38 12 50 12 Q62 12 62 16 V28" stroke="url(#rw-gold-lock)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <rect x="42" y="10" width="16" height="5" rx="2" fill="#581c87" />

      {/* Suitcase Body */}
      <rect x="18" y="26" width="64" height="52" rx="12" fill="url(#rw-case-front)" stroke="#c084fc" strokeWidth="1.2" />

      {/* Front Gloss Highlight */}
      <path d="M 22 28 Q 50 32 78 28 L 74 44 Q 50 48 26 44 Z" fill="#ffffff" opacity="0.2" />

      {/* Two Leather Straps */}
      <rect x="32" y="26" width="7" height="52" fill="#3b0764" opacity="0.6" />
      <rect x="61" y="26" width="7" height="52" fill="#3b0764" opacity="0.6" />

      {/* Gold Latches */}
      <rect x="31" y="44" width="9" height="7" rx="1.5" fill="url(#rw-gold-lock)" />
      <rect x="60" y="44" width="9" height="7" rx="1.5" fill="url(#rw-gold-lock)" />

      {/* Luggage Tag / Passport */}
      <g transform="translate(48, 52) rotate(16)">
        <rect x="0" y="0" width="18" height="24" rx="2" fill="#ffffff" stroke="#eab308" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
        <circle cx="9" cy="8" r="4" fill="#3b82f6" />
        <rect x="4" y="15" width="10" height="2" fill="#94a3b8" />
        <rect x="4" y="19" width="7" height="2" fill="#94a3b8" />
      </g>

      {/* 4 Wheels */}
      <rect x="25" y="77" width="6" height="6" rx="2" fill="#1e1b4b" />
      <rect x="69" y="77" width="6" height="6" rx="2" fill="#1e1b4b" />
    </svg>
  );
}

/**
 * 3D Corporate & Investor Visa Icon (Compact & HD)
 */
export function Icon3DCorporateVisa({ size = 44, className = "", ...props }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_8px_16px_rgba(2,132,199,0.32)] ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="corp-tower-3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      <ellipse cx="50" cy="86" rx="38" ry="9" fill="#e0f2fe" />

      {/* Tall Corporate Spire */}
      <polygon points="50,12 66,36 62,82 38,82 34,36" fill="url(#corp-tower-3d)" />
      <polygon points="50,12 62,82 50,82" fill="#ffffff" opacity="0.3" />

      {/* Side wings */}
      <rect x="20" y="44" width="18" height="38" rx="3" fill="#0f172a" />
      <rect x="62" y="44" width="18" height="38" rx="3" fill="#0f172a" />

      {/* Golden Growth Chart & Shield */}
      <g transform="translate(56, 54)">
        <circle cx="16" cy="16" r="14" fill="#ca8a04" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
        <circle cx="16" cy="15" r="13" fill="#facc15" />
        <path d="M9 19 L14 14 L18 17 L23 10" stroke="#713f12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polygon points="21,10 24,9 24,13" fill="#713f12" />
      </g>
    </svg>
  );
}
