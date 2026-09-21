import React from 'react';

/**
 * InclusivityDecoration
 * 
 * Unique decorative SVG system for Inclusivity (/inclusivity).
 * Concept: Diversity, openness, universal access, intersecting circles, harmonic coexistence.
 * Elements: Interlocking geometric rings of varied diameters, balanced organic arcs,
 * universal contrast gauges, and inclusive relationship lines.
 */
export const InclusivityDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="inc-circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Intersecting Harmonic Rings & Open Embrace
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

          {/* Intersecting circles representing diversity & unity */}
          <g transform="translate(60, 20)">
            <circle cx="20" cy="20" r="16" stroke="url(#inc-circle-grad)" strokeWidth="1" />
            <circle cx="34" cy="20" r="16" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-strong)] opacity-40" />
            <circle cx="27" cy="20" r="1.5" fill="#10b981" />
          </g>

          <text
            x="120"
            y="42"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.2em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            UNIVERSAL_FRAMEWORK // DIVERSE_SPECTRUM: OPEN
          </text>

          <text
            x="1250"
            y="42"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.16em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ WCAG AAA COMPLIANT ]
          </text>
        </g>

        {/* -------------------------------------------------------------------
            LATERAL HARMONIC RINGS & DIVERSITY SCALES (Left & Right Flanks)
            Varied radiuses representing multiple viewpoints in graceful balance
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          {/* Left flank: Stack of varied diameter concentric & intersecting rings */}
          <g transform="translate(45, 420)">
            <circle cx="0" cy="0" r="48" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" className="stroke-[var(--border-subtle)]" />
            <circle cx="16" cy="12" r="32" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-medium)] opacity-50" />
            <circle cx="8" cy="6" r="14" stroke="url(#inc-circle-grad)" strokeWidth="1.2" />
            <circle cx="8" cy="6" r="2" fill="#10b981" />
            <text x="65" y="10" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">
              ORBIT_A // COEXISTENCE
            </text>
          </g>

          {/* Left margin connecting guideline */}
          <line
            x1="45"
            y1="520"
            x2="45"
            y2="1850"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="stroke-[var(--border-subtle)] opacity-40"
          />

          {/* Right flank: Balanced triple interlocking rings */}
          <g transform="translate(1380, 780)">
            <circle cx="0" cy="0" r="54" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" className="stroke-[var(--border-subtle)]" />
            <circle cx="-20" cy="-10" r="38" stroke="currentColor" strokeWidth="0.9" className="stroke-[var(--border-medium)] opacity-50" />
            <circle cx="-10" cy="18" r="26" stroke="url(#inc-circle-grad)" strokeWidth="1.2" />
            <circle cx="-10" cy="18" r="2" fill="#10b981" />
            <text x="-120" y="24" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">
              SPECTRUM // BALANCED
            </text>
          </g>

          {/* Lower right flank: Harmonic arc set */}
          <g transform="translate(1390, 1420)">
            <path
              d="M -40 -30 A 50 50 0 0 1 0 30"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="stroke-[var(--border-medium)] opacity-40"
            />
            <path
              d="M -25 -15 A 35 35 0 0 1 0 20"
              stroke="url(#inc-circle-grad)"
              strokeWidth="1.2"
            />
            <circle cx="-25" cy="-15" r="1.8" fill="#10b981" />
            <circle cx="0" cy="20" r="1.8" fill="#10b981" />
          </g>
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM INCLUSIVITY RATIO INDICATOR
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="50"
            y1="1920"
            x2="1390"
            y2="1920"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />
          <text
            x="50"
            y="1945"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            END_CHARTER // UNIVERSAL RECEPTIVITY & ACCESSIBILITY PLEDGE VERIFIED
          </text>
        </g>
      </svg>
    </div>
  );
};
