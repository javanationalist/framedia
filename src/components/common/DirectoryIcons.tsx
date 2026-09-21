import React from 'react';

/**
 * 3D Glossy Green Blob Icon Set for Framedia Creative Directory
 * Faithfully matches the custom icon sheet provided in design reference:
 * - Organic glossy green pebble / blob base with rich radial & linear gradients
 * - Specular reflection highlight on top-left and top edge
 * - 3D embossed white glyphs with subtle depth and shadow
 * - Surrounding floating playful green micro-droplets and ambient accent marks
 */

interface IconProps {
  className?: string;
  size?: number;
}

// 1. CLAPPERBOARD (PROYEK)
export const ClapperboardBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-1" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-1" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-1" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="glyph-grad-1" x1="58" y1="52" x2="102" y2="108" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E9F7EF" />
      </linearGradient>
      <filter id="glyph-shadow-1" x="42" y="44" width="76" height="72" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Surrounding floating droplets & specks */}
    <ellipse cx="28" cy="85" rx="3.5" ry="5.5" transform="rotate(-25 28 85)" fill="#68C792" opacity="0.85" />
    <circle cx="21" cy="99" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="126" y1="36" x2="131" y2="43" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <line x1="138" y1="56" x2="145" y2="60" stroke="#56BC82" strokeWidth="2.4" strokeLinecap="round" opacity="0.75" />
    <circle cx="140" cy="74" r="2" fill="#4FB97B" opacity="0.6" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-1)">
      <path
        d="M 46 36 C 72 23, 114 27, 126 52 C 136 73, 134 110, 115 125 C 93 140, 48 138, 33 118 C 17 96, 22 50, 46 36 Z"
        fill="url(#blob-grad-1)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 48 38 C 70 26, 108 30, 118 50 C 124 64, 112 78, 92 84 C 64 92, 38 78, 34 62 C 30 48, 36 42, 48 38 Z"
        fill="url(#blob-specular-1)"
      />
      {/* Subtle edge bevel reflection */}
      <path
        d="M 52 32 C 78 22, 106 25, 120 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Clapperboard Glyph */}
    <g filter="url(#glyph-shadow-1)">
      {/* Top Clapper Stick */}
      <path
        d="M 53 58 C 53 54.5, 55.5 52, 59 52 L 101 52 C 104.5 52, 107 54.5, 107 58 L 107 67 L 53 67 Z"
        fill="url(#glyph-grad-1)"
      />
      {/* Diagonal Clapper Stripes (Negative/cutout grooves) */}
      <line x1="64" y1="52" x2="60" y2="67" stroke="#36945F" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="77" y1="52" x2="73" y2="67" stroke="#36945F" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="90" y1="52" x2="86" y2="67" stroke="#36945F" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="102" y1="52" x2="98" y2="67" stroke="#36945F" strokeWidth="2.8" strokeLinecap="round" />

      {/* Lower Clapper Body */}
      <path
        d="M 53 71 L 107 71 L 107 98 C 107 102, 104 105, 100 105 L 60 105 C 56 105, 53 102, 53 98 Z"
        fill="url(#glyph-grad-1)"
      />
      {/* Centered Play Triangle inside clapper */}
      <path
        d="M 76 80.5 L 86 87.5 L 76 94.5 Z"
        fill="#36945F"
      />
    </g>
  </svg>
);

// 2. STACKED LAYERS (PORTOFOLIO)
export const LayersBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-2" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-2" x1="44" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-2" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-2" x="42" y="44" width="76" height="76" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="27" cy="88" rx="3.5" ry="5.5" transform="rotate(-20 27 88)" fill="#68C792" opacity="0.85" />
    <circle cx="19" cy="103" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="126" y1="46" x2="133" y2="52" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <circle cx="136" cy="68" r="2.2" fill="#4FB97B" opacity="0.7" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-2)">
      <path
        d="M 44 38 C 68 24, 112 28, 126 50 C 138 72, 133 112, 114 127 C 92 142, 46 138, 32 117 C 17 94, 22 52, 44 38 Z"
        fill="url(#blob-grad-2)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 46 40 C 68 28, 106 32, 116 52 C 122 66, 110 80, 90 85 C 62 92, 36 78, 33 63 C 30 50, 36 44, 46 40 Z"
        fill="url(#blob-specular-2)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 50 34 C 76 24, 104 27, 118 46"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Isometric 3-Layer Rhombus Glyphs */}
    <g filter="url(#glyph-shadow-2)">
      {/* Top Diamond Layer (Complete Loop) */}
      <path
        d="M 80 50 L 105 63 L 80 76 L 55 63 Z"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Middle Chevron Layer */}
      <path
        d="M 55 77 L 80 90 L 105 77"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bottom Chevron Layer */}
      <path
        d="M 55 91 L 80 104 L 105 91"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

// 3. LIGHTBULB (10 BEING CREATIVE)
export const LightbulbBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-3" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-3" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-3" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-3" x="38" y="38" width="84" height="84" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="28" cy="86" rx="3.5" ry="5.5" transform="rotate(-25 28 86)" fill="#68C792" opacity="0.85" />
    <circle cx="20" cy="100" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="130" y1="42" x2="136" y2="48" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <circle cx="140" cy="65" r="2.2" fill="#4FB97B" opacity="0.7" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-3)">
      <path
        d="M 45 36 C 70 23, 114 27, 126 50 C 138 72, 133 111, 114 126 C 92 141, 46 138, 32 117 C 17 95, 22 51, 45 36 Z"
        fill="url(#blob-grad-3)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 47 38 C 69 26, 107 30, 117 50 C 123 64, 111 78, 91 84 C 63 91, 37 77, 34 62 C 31 49, 37 43, 47 38 Z"
        fill="url(#blob-specular-3)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 51 32 C 77 22, 105 25, 119 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Lightbulb Glyph with Radiant Dashes */}
    <g filter="url(#glyph-shadow-3)">
      {/* Radiant Rays */}
      <line x1="56" y1="52" x2="50" y2="46" stroke="#FFFFFF" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="80" y1="44" x2="80" y2="36" stroke="#FFFFFF" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="104" y1="52" x2="110" y2="46" stroke="#FFFFFF" strokeWidth="3.8" strokeLinecap="round" />

      {/* Lightbulb Dome Contour */}
      <path
        d="M 68 83 C 64 78, 62 72, 62 66 C 62 56, 70 48, 80 48 C 90 48, 98 56, 98 66 C 98 72, 96 78, 92 83 C 90 86, 89 89, 89 92 L 71 92 C 71 89, 70 86, 68 83 Z"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bulb Screw Base Coils */}
      <line x1="74" y1="99" x2="86" y2="99" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <line x1="77" y1="106" x2="83" y2="106" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" />
    </g>
  </svg>
);

// 4. TEAM AVATAR (TIM FRAMETIVE)
export const TeamBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-4" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-4" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-4" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-4" x="40" y="44" width="80" height="76" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="28" cy="87" rx="3.5" ry="5.5" transform="rotate(-25 28 87)" fill="#68C792" opacity="0.85" />
    <circle cx="20" cy="101" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="126" y1="46" x2="133" y2="53" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <line x1="138" y1="67" x2="145" y2="71" stroke="#56BC82" strokeWidth="2.4" strokeLinecap="round" opacity="0.75" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-4)">
      <path
        d="M 45 36 C 70 23, 114 27, 126 50 C 138 72, 133 111, 114 126 C 92 141, 46 138, 32 117 C 17 95, 22 51, 45 36 Z"
        fill="url(#blob-grad-4)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 47 38 C 69 26, 107 30, 117 50 C 123 64, 111 78, 91 84 C 63 91, 37 77, 34 62 C 31 49, 37 43, 47 38 Z"
        fill="url(#blob-specular-4)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 51 32 C 77 22, 105 25, 119 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Team Avatar Glyph */}
    <g filter="url(#glyph-shadow-4)">
      {/* Primary Person (Left) */}
      <circle cx="70" cy="62" r="10" stroke="#FFFFFF" strokeWidth="4.2" fill="none" />
      <path
        d="M 54 99 C 54 88, 62 81, 70 81 C 78 81, 86 88, 86 99"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Secondary Person Arc (Right / Behind) */}
      <path
        d="M 92 56 C 96 59, 98 64, 97 69 C 96 73, 93 76, 89 78"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 94 85 C 99 87, 103 92, 104 99"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

// 5. SCALES OF JUSTICE (AI ETHICS)
export const ScaleBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-5" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-5" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-5" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-5" x="40" y="44" width="80" height="76" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="28" cy="87" rx="3.5" ry="5.5" transform="rotate(-25 28 87)" fill="#68C792" opacity="0.85" />
    <circle cx="20" cy="101" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="128" y1="44" x2="134" y2="50" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <circle cx="138" cy="68" r="2.2" fill="#4FB97B" opacity="0.7" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-5)">
      <path
        d="M 45 36 C 70 23, 114 27, 126 50 C 138 72, 133 111, 114 126 C 92 141, 46 138, 32 117 C 17 95, 22 51, 45 36 Z"
        fill="url(#blob-grad-5)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 47 38 C 69 26, 107 30, 117 50 C 123 64, 111 78, 91 84 C 63 91, 37 77, 34 62 C 31 49, 37 43, 47 38 Z"
        fill="url(#blob-specular-5)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 51 32 C 77 22, 105 25, 119 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Scale of Justice Glyph */}
    <g filter="url(#glyph-shadow-5)">
      {/* Center Pillar & Base */}
      <line x1="80" y1="52" x2="80" y2="98" stroke="#FFFFFF" strokeWidth="4.2" strokeLinecap="round" />
      <path d="M 72 105 L 80 98 L 88 105 Z" stroke="#FFFFFF" strokeWidth="3.6" strokeLinejoin="round" fill="none" />
      <line x1="68" y1="106" x2="92" y2="106" stroke="#FFFFFF" strokeWidth="3.8" strokeLinecap="round" />

      {/* Horizontal Top Balance Beam */}
      <line x1="56" y1="58" x2="104" y2="58" stroke="#FFFFFF" strokeWidth="4.2" strokeLinecap="round" />

      {/* Left Hanging Pan */}
      <path d="M 56 58 L 48 80 L 64 80 Z" stroke="#FFFFFF" strokeWidth="3.2" strokeLinejoin="round" fill="none" />
      <path d="M 46 80 Q 56 86 66 80" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" fill="none" />

      {/* Right Hanging Pan */}
      <path d="M 104 58 L 96 80 L 112 80 Z" stroke="#FFFFFF" strokeWidth="3.2" strokeLinejoin="round" fill="none" />
      <path d="M 94 80 Q 104 86 114 80" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// 6. HEART WITH PULSE (INKLUSIVITAS)
export const HeartPulseBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-6" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-6" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-6" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-6" x="40" y="44" width="80" height="76" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="28" cy="87" rx="3.5" ry="5.5" transform="rotate(-25 28 87)" fill="#68C792" opacity="0.85" />
    <circle cx="20" cy="101" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="127" y1="44" x2="134" y2="51" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <circle cx="140" cy="72" r="2.2" fill="#4FB97B" opacity="0.7" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-6)">
      <path
        d="M 45 36 C 70 23, 114 27, 126 50 C 138 72, 133 111, 114 126 C 92 141, 46 138, 32 117 C 17 95, 22 51, 45 36 Z"
        fill="url(#blob-grad-6)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 47 38 C 69 26, 107 30, 117 50 C 123 64, 111 78, 91 84 C 63 91, 37 77, 34 62 C 31 49, 37 43, 47 38 Z"
        fill="url(#blob-specular-6)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 51 32 C 77 22, 105 25, 119 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Heart with Pulse Wave Glyph */}
    <g filter="url(#glyph-shadow-6)">
      {/* Heart Outline */}
      <path
        d="M 80 106 C 54 88, 52 68, 63 56 C 72 47, 80 54, 80 54 C 80 54, 88 47, 97 56 C 108 68, 106 88, 80 106 Z"
        stroke="#FFFFFF"
        strokeWidth="4.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Centered ECG / Pulse Wave inside heart */}
      <path
        d="M 64 78 L 74 78 L 77 71 L 82 86 L 86 75 L 89 78 L 96 78"
        stroke="#FFFFFF"
        strokeWidth="3.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

// 7. INFO CIRCLE (TENTANG KAMI)
export const InfoBlobIcon: React.FC<IconProps> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <defs>
      <filter id="blob-shadow-7" x="10" y="14" width="140" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#276742" floodOpacity="0.32" />
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1a462c" floodOpacity="0.22" />
      </filter>
      <linearGradient id="blob-grad-7" x1="45" y1="26" x2="118" y2="134" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7CDAA4" />
        <stop offset="28%" stopColor="#4FB97B" />
        <stop offset="72%" stopColor="#36945F" />
        <stop offset="100%" stopColor="#256B43" />
      </linearGradient>
      <radialGradient id="blob-specular-7" cx="62" cy="46" r="48" fx="56" fy="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#9DE6BC" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#4FB97B" stopOpacity="0" />
      </radialGradient>
      <filter id="glyph-shadow-7" x="40" y="44" width="80" height="76" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#18492C" floodOpacity="0.32" />
      </filter>
    </defs>

    {/* Surrounding droplets & specks */}
    <ellipse cx="28" cy="87" rx="3.5" ry="5.5" transform="rotate(-25 28 87)" fill="#68C792" opacity="0.85" />
    <circle cx="20" cy="101" r="2.2" fill="#52B67E" opacity="0.7" />
    <line x1="128" y1="44" x2="135" y2="51" stroke="#63C68E" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    <circle cx="140" cy="69" r="2.2" fill="#4FB97B" opacity="0.7" />

    {/* Main 3D Glossy Blob Base */}
    <g filter="url(#blob-shadow-7)">
      <path
        d="M 45 36 C 70 23, 114 27, 126 50 C 138 72, 133 111, 114 126 C 92 141, 46 138, 32 117 C 17 95, 22 51, 45 36 Z"
        fill="url(#blob-grad-7)"
      />
      {/* Specular gloss highlight */}
      <path
        d="M 47 38 C 69 26, 107 30, 117 50 C 123 64, 111 78, 91 84 C 63 91, 37 77, 34 62 C 31 49, 37 43, 47 38 Z"
        fill="url(#blob-specular-7)"
      />
      {/* Edge bevel reflection */}
      <path
        d="M 51 32 C 77 22, 105 25, 119 44"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    </g>

    {/* Info Badge Glyph: Circular Outline + 'i' */}
    <g filter="url(#glyph-shadow-7)">
      {/* Outer Circle */}
      <circle cx="80" cy="78" r="27" stroke="#FFFFFF" strokeWidth="4.4" fill="none" />
      {/* Top Dot of 'i' */}
      <circle cx="80" cy="67" r="2.8" fill="#FFFFFF" />
      {/* Stem of 'i' */}
      <line x1="80" y1="74" x2="80" y2="91" stroke="#FFFFFF" strokeWidth="4.4" strokeLinecap="round" />
    </g>
  </svg>
);
