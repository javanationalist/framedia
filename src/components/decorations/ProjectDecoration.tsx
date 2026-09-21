import React from 'react';

/**
 * ProjectDecoration
 * 
 * Unique decorative SVG system for Frametive Project (/project).
 * Concept: Creative process, production, movement, timeline progression.
 * Elements: Production frame brackets, timecode markers, directional vertical timeline guide,
 * registration crosshairs, and production-grid fragments.
 */
export const ProjectDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="proj-line-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="proj-emerald-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            HERO & BANNER AREA: Production Frame & Timecode
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85">
          {/* Top-left framing bracket */}
          <path
            d="M 40 60 L 40 32 L 68 32"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          {/* Timecode & Project Index Stamp */}
          <text
            x="40"
            y="95"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.2em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            TC [ 00:01:24:18 ] // 24 FPS
          </text>
          <text
            x="40"
            y="112"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.15em"
            className="font-mono uppercase fill-[var(--text-subtle)] opacity-40 dark:opacity-30"
          >
            STAGE // CONCEPT_TO_EXHIBITION
          </text>

          {/* Top-right production aspect ratio guide [ 2.39:1 SCOPE ] */}
          <path
            d="M 1400 60 L 1400 32 L 1372 32"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          <text
            x="1310"
            y="95"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.18em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ SCOPE 2.39:1 ]
          </text>

          {/* Horizon hairline with film tick marks */}
          <line
            x1="180"
            y1="32"
            x2="1280"
            y2="32"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 8"
            className="stroke-[var(--border-subtle)] opacity-45 dark:opacity-35"
          />
        </g>

        {/* -------------------------------------------------------------------
            VERTICAL PRODUCTION TIMELINE AXIS (Left Gutter)
            Guides the viewer's eye progressively down through the content
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          {/* Continuous vertical timeline guide line */}
          <line
            x1="40"
            y1="160"
            x2="40"
            y2="2250"
            stroke="url(#proj-line-fade)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Milestone registration nodes */}
          <circle cx="40" cy="240" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="40" cy="240" r="1.2" fill="#10b981" />
          <text x="52" y="243" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-45">01 // PRE-PROD</text>

          <circle cx="40" cy="720" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="40" cy="720" r="1.2" fill="#10b981" />
          <text x="52" y="723" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-45">02 // RESEARCH</text>

          <circle cx="40" cy="1200" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="40" cy="1200" r="1.2" fill="#10b981" />
          <text x="52" y="1203" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-45">03 // PRODUCTION</text>

          <circle cx="40" cy="1700" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="40" cy="1700" r="1.2" fill="#10b981" />
          <text x="52" y="1703" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-45">04 // EXHIBITION</text>
        </g>

        {/* -------------------------------------------------------------------
            RIGHT MARGIN: Production Grid Fragments & Parang Cadence
            ------------------------------------------------------------------- */}
        <g className="opacity-50 dark:opacity-65">
          {/* Subtle 45° diagonal Parang-inspired production cadence (Right Gutter) */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`proj-parang-${i}`}
              x1={1380 + i * 16}
              y1={500 + i * 8}
              x2={1320 + i * 16}
              y2={560 + i * 8}
              stroke="currentColor"
              strokeWidth="0.8"
              className="stroke-[var(--text-muted)] opacity-30 dark:opacity-20"
            />
          ))}

          {/* Registration crosshair (+) at mid-page */}
          <path
            d="M 1390 920 L 1410 920 M 1400 910 L 1400 930"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-muted)] opacity-40 dark:opacity-30"
          />
          <text
            x="1340"
            y="945"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.1em"
            className="font-mono uppercase fill-[var(--text-subtle)] opacity-40"
          >
            GRID // REF_04
          </text>

          {/* Micro dot matrix in lower section */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <circle
                key={`proj-dots-${col}-${row}`}
                cx={1360 + col * 14}
                cy={1460 + row * 14}
                r="1"
                fill="currentColor"
                className="fill-[var(--text-subtle)] opacity-30 dark:opacity-20"
              />
            ))
          )}
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM FLANK: Closing Frame & Deliverable Hash
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="40"
            y1="2300"
            x2="1400"
            y2="2300"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            className="stroke-[var(--border-subtle)] opacity-40"
          />
          <path
            d="M 1400 2280 L 1400 2300 L 1380 2300"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50"
          />
          <text
            x="40"
            y="2320"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.2em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            ARCHIVE // FRAMETIVE_DELIVERABLE_VERIFIED
          </text>
        </g>
      </svg>
    </div>
  );
};
