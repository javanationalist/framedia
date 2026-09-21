import React from 'react';

/**
 * PortfolioDecoration
 * 
 * Unique decorative SVG system for Portfolio (/portfolio).
 * Concept: Visual showcase, gallery layout, camera frame viewfinder, editorial crop marks.
 * Elements: Crop marks (+), camera aspect ratio indicators, gallery grid fragments,
 * optical focal rings, and precision layout lines.
 */
export const PortfolioDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="port-line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
            <stop offset="40%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Viewfinder Horizon & Crop Marks
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85">
          {/* Top-left viewfinder bracket */}
          <path
            d="M 50 70 L 50 40 L 80 40"
            stroke="currentColor"
            strokeWidth="1.2"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-45"
          />
          {/* Viewfinder crosshair */}
          <path
            d="M 40 40 L 30 40 M 50 30 L 50 20"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-40"
          />

          {/* Optical & Gallery specs */}
          <text
            x="96"
            y="48"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            OPTICAL ARCHIVE // FORMAT: 16:10 / 16:9
          </text>
          <text
            x="96"
            y="64"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.16em"
            className="font-mono uppercase fill-[var(--text-subtle)] opacity-40"
          >
            INDEX: MULTIDISCIPLINARY_CURATED
          </text>

          {/* Top-right crop bracket & crosshair */}
          <path
            d="M 1390 70 L 1390 40 L 1360 40"
            stroke="currentColor"
            strokeWidth="1.2"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-45"
          />
          <text
            x="1295"
            y="48"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.18em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ CROP 100% ]
          </text>

          {/* Center alignment tick marks */}
          <line
            x1="720"
            y1="30"
            x2="720"
            y2="46"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-muted)] opacity-35"
          />
        </g>

        {/* -------------------------------------------------------------------
            LATERAL EDITORIAL RECTILINEAR GUIDES & CARD INTERACTION MARKS
            Subtly aligns with the 3-column card grid in the margins
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          {/* Left margin editorial line */}
          <line
            x1="50"
            y1="180"
            x2="50"
            y2="2050"
            stroke="url(#port-line-grad)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />

          {/* Left margin card crop nodes at staggered vertical levels */}
          {[420, 920, 1420, 1920].map((y, idx) => (
            <g key={`port-left-crop-${idx}`}>
              <path
                d={`M 40 ${y} L 60 ${y} M 50 ${y - 10} L 50 ${y + 10}`}
                stroke="currentColor"
                strokeWidth="0.8"
                className="stroke-[var(--border-strong)] opacity-45"
              />
              <text
                x="65"
                y={y + 3}
                fill="currentColor"
                fontSize="7.5"
                className="font-mono fill-[var(--text-subtle)] opacity-40"
              >
                SEC_0{idx + 1}
              </text>
            </g>
          ))}

          {/* Right margin editorial line */}
          <line
            x1="1390"
            y1="180"
            x2="1390"
            y2="2050"
            stroke="url(#port-line-grad)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />

          {/* Right margin camera aperture & focus ring fragments */}
          <circle
            cx="1390"
            cy="680"
            r="44"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
          />
          <circle
            cx="1390"
            cy="680"
            r="20"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-medium)] opacity-45 dark:opacity-35"
          />
          <circle cx="1390" cy="680" r="2" fill="#10b981" className="opacity-70" />

          {/* Secondary optical arc lower down right flank */}
          <circle
            cx="1390"
            cy="1540"
            r="60"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="4 8"
            className="stroke-[var(--border-subtle)] opacity-35"
          />
          <circle
            cx="1390"
            cy="1540"
            r="16"
            stroke="currentColor"
            strokeWidth="0.9"
            className="stroke-[var(--border-medium)] opacity-40"
          />
          <circle cx="1390" cy="1540" r="2" fill="#10b981" className="opacity-60" />
        </g>

        {/* -------------------------------------------------------------------
            SUBTLE DOT MATRIX RHYTHM IN OUTER FLANKS
            ------------------------------------------------------------------- */}
        <g className="opacity-45 dark:opacity-60">
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3, 4].map((row) => (
              <circle
                key={`port-dot-${col}-${row}`}
                cx={20 + col * 12}
                cy={1100 + row * 16}
                r="1"
                fill="currentColor"
                className="fill-[var(--text-muted)] opacity-30 dark:opacity-20"
              />
            ))
          )}
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM GALLERY REGISTER MARK
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="50"
            y1="2100"
            x2="1390"
            y2="2100"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="stroke-[var(--border-subtle)] opacity-35"
          />
          <path
            d="M 50 2090 L 50 2100 L 60 2100"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50"
          />
          <path
            d="M 1390 2090 L 1390 2100 L 1380 2100"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50"
          />
          <text
            x="50"
            y="2122"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.2em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            END_GALLERY // TOTAL_CURATION_VERIFIED
          </text>
        </g>
      </svg>
    </div>
  );
};
