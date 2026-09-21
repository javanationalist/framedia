import React from 'react';

/**
 * AboutDecoration
 * 
 * Unique decorative SVG system for About Creative (/about).
 * Concept: Identity, studio philosophy, cultural provenance, modern Indonesian visual DNA.
 * Elements: Modernized geometric Kawung rosettes, subtle diagonal Parang cadence lines,
 * studio geographic coordinates (7.2575° S, 112.7521° E), editorial craft registration marks.
 */
export const AboutDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="abt-kawung-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Geographic Studio Provenance & Modern Kawung Rosette
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85">
          {/* Top perimeter guide */}
          <line
            x1="50"
            y1="36"
            x2="1390"
            y2="36"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />

          {/* Abstract modernized geometric Kawung rosette (4 overlapping ellipses) */}
          <g transform="translate(60, 24)">
            {/* North petal */}
            <ellipse cx="20" cy="12" rx="6" ry="10" stroke="url(#abt-kawung-fade)" strokeWidth="1" />
            {/* South petal */}
            <ellipse cx="20" cy="28" rx="6" ry="10" stroke="url(#abt-kawung-fade)" strokeWidth="1" />
            {/* West petal */}
            <ellipse cx="12" cy="20" rx="10" ry="6" stroke="url(#abt-kawung-fade)" strokeWidth="1" />
            {/* East petal */}
            <ellipse cx="28" cy="20" rx="10" ry="6" stroke="url(#abt-kawung-fade)" strokeWidth="1" />
            {/* Center nexus */}
            <circle cx="20" cy="20" r="2" fill="#10b981" />
          </g>

          <text
            x="115"
            y="42"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.2em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            PROVENANCE // NUSANTARA 07°15'S 112°45'E
          </text>

          <text
            x="1260"
            y="42"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.16em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ ESTABLISHED 2024 ]
          </text>
        </g>

        {/* -------------------------------------------------------------------
            LATERAL PARANG CADENCE & EDITORIAL CRAFT MARKS
            Contemporary geometric interpretation of dynamic diagonal rhythms
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          {/* Left margin Parang diagonal rhythm lines */}
          <g transform="translate(30, 460)">
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={`abt-parang-l-${i}`}>
                <line
                  x1="0"
                  y1={i * 24}
                  x2="28"
                  y2={i * 24 + 28}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="stroke-[var(--border-medium)] opacity-40"
                />
                <circle cx="28" cy={i * 24 + 28} r="1.5" fill="#10b981" className="opacity-60" />
              </g>
            ))}
            <text x="0" y="165" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">
              CADENCE // 45°
            </text>
          </g>

          {/* Left margin vertical axis line */}
          <line
            x1="45"
            y1="680"
            x2="45"
            y2="2150"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="3 7"
            className="stroke-[var(--border-subtle)] opacity-40"
          />

          {/* Right margin modern Kawung motif & studio disciplines */}
          <g transform="translate(1380, 820)">
            <ellipse cx="0" cy="-14" rx="8" ry="14" stroke="currentColor" strokeWidth="0.9" className="stroke-[var(--border-medium)] opacity-50" />
            <ellipse cx="0" cy="14" rx="8" ry="14" stroke="currentColor" strokeWidth="0.9" className="stroke-[var(--border-medium)] opacity-50" />
            <ellipse cx="-14" cy="0" rx="14" ry="8" stroke="currentColor" strokeWidth="0.9" className="stroke-[var(--border-medium)] opacity-50" />
            <ellipse cx="14" cy="0" rx="14" ry="8" stroke="currentColor" strokeWidth="0.9" className="stroke-[var(--border-medium)] opacity-50" />
            <circle cx="0" cy="0" r="2.2" fill="#10b981" />
            <text x="-95" y="42" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">
              KAWUNG // HARMONY
            </text>
          </g>

          {/* Right margin Parang rhythm lower section */}
          <g transform="translate(1380, 1500)">
            {[0, 1, 2, 3].map((i) => (
              <line
                key={`abt-parang-r-${i}`}
                x1={-i * 12}
                y1={i * 20}
                x2={-i * 12 - 24}
                y2={i * 20 + 24}
                stroke="currentColor"
                strokeWidth="1"
                className="stroke-[var(--border-medium)] opacity-35"
              />
            ))}
          </g>
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM STUDIO FOOTPRINT & ARCHIVE SPEC
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="50"
            y1="2220"
            x2="1390"
            y2="2220"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />
          <text
            x="50"
            y="2245"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            STUDIO_MANIFESTO // ROOTED IN IDENTITY, COMMITTED TO EXCELLENCE
          </text>
        </g>
      </svg>
    </div>
  );
};
