import React from 'react';

/**
 * EthicsDecoration
 * 
 * Unique decorative SVG system for AI Ethics (/aiethics).
 * Concept: Technology, ethics, responsibility, transparent governance, data sovereignty.
 * Elements: Minimal data-grid fragments, binary-inspired sequences, governance crosshairs,
 * structured audit guidelines, zero-telemetry verification stamps.
 */
export const EthicsDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="eth-grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="40%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Statutory AI Governance Matrix
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

          {/* Binary sequence representing "AI" and "ETHICS" (01000001 01001001) */}
          <text
            x="50"
            y="54"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.25em"
            className="font-mono fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            01000001 01001001 // GOVERNANCE_MATRIX_v2.4
          </text>

          <text
            x="1220"
            y="54"
            fill="currentColor"
            fontSize="8.5"
            letterSpacing="0.18em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ ZERO_TELEMETRY: VERIFIED ]
          </text>
        </g>

        {/* -------------------------------------------------------------------
            AUDIT LINE & RECTILINEAR DATA GRIDS
            Editorial structured lines down the left and right margins
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          {/* Continuous vertical audit guideline */}
          <line
            x1="45"
            y1="160"
            x2="45"
            y2="1980"
            stroke="url(#eth-grid-fade)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* Audit checkpoints at key vertical levels */}
          {[340, 720, 1140, 1560].map((y, idx) => (
            <g key={`eth-chk-${idx}`}>
              <rect
                x="40"
                y={y - 5}
                width="10"
                height="10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="stroke-[var(--border-strong)]"
              />
              <circle cx="45" cy={y} r="1.5" fill="#10b981" />
              <text
                x="60"
                y={y + 3}
                fill="currentColor"
                fontSize="7.5"
                className="font-mono uppercase fill-[var(--text-subtle)] opacity-45"
              >
                RULE_0{idx + 1} // AUDITED
              </text>
            </g>
          ))}

          {/* Right margin data matrix fragment */}
          <g transform="translate(1360, 480)">
            {[0, 1, 2, 3].map((r) => (
              <line
                key={`eth-h-${r}`}
                x1="0"
                y1={r * 14}
                x2="32"
                y2={r * 14}
                stroke="currentColor"
                strokeWidth="0.8"
                className="stroke-[var(--border-subtle)] opacity-40"
              />
            ))}
            {[0, 1, 2].map((c) => (
              <line
                key={`eth-v-${c}`}
                x1={c * 16}
                y1="0"
                x2={c * 16}
                y2="42"
                stroke="currentColor"
                strokeWidth="0.8"
                className="stroke-[var(--border-subtle)] opacity-40"
              />
            ))}
            <text x="-48" y="24" fill="currentColor" fontSize="7" className="font-mono fill-[var(--text-subtle)] opacity-40">
              MATRIX // 4x3
            </text>
          </g>

          {/* Secondary data verification crosshair lower down */}
          <path
            d="M 1370 1250 L 1410 1250 M 1390 1230 L 1390 1270"
            stroke="currentColor"
            strokeWidth="0.8"
            className="stroke-[var(--border-medium)] opacity-40"
          />
          <circle cx="1390" cy="1250" r="14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" className="stroke-[var(--border-subtle)]" />
          <circle cx="1390" cy="1250" r="2" fill="#10b981" />
          <text x="1310" y="1285" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">
            SOVEREIGNTY // LOC
          </text>
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM GOVERNANCE SEAL MARK
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="45"
            y1="2020"
            x2="1390"
            y2="2020"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />
          <text
            x="45"
            y="2045"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            END_STATUTE // 100% TRANSPARENCY & ZERO ARBITRARY DECISION-MAKING
          </text>
        </g>
      </svg>
    </div>
  );
};
