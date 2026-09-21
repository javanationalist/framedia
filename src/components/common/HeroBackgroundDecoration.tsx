import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * HeroBackgroundDecoration
 * 
 * Provides subtle, sophisticated SVG architectural and cultural geometry
 * for the Framedia Creative hero section in both Light Mode and Dark Mode.
 * 
 * Visual DNA:
 * - Indonesian Geometric Motifs: Modernized Kawung (intersecting circular balance)
 *   and Parang (45-degree rhythmic diagonal cadence) abstracted into minimalist architectural hairlines.
 * - Editorial Media Design: Precise alignment crosshairs (+), framing corner brackets,
 *   subtle coordinate index stamps, and intentional dot matrix rhythms.
 * - Responsive & Clean: Placed strictly behind hero content (z-0, pointer-events-none),
 *   maintaining generous negative space around title and CTAs, and zero horizontal scroll.
 */
export const HeroBackgroundDecoration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ---------------------------------------------------------------------
          PRIMARY EDITORIAL & CULTURAL VECTOR CANVAS
          Scales responsively across all viewports with zero layout shift.
          --------------------------------------------------------------------- */}
      <svg
        viewBox="0 0 1440 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          {/* Subtle linear gradient for connecting horizon lines */}
          <linearGradient id="fc-line-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.02" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
          </linearGradient>

          {/* Gentle emerald accent gradient for cultural focal resonance */}
          <linearGradient id="fc-emerald-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="70%" stopColor="#10b981" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            LAYER 1: EDITORIAL ALIGNMENT AXES & FRAMING GRID FRAGMENTS
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85 transition-opacity duration-300">
          {/* Top-left corner framing bracket [ */}
          <path
            d="M 44 80 L 44 48 L 76 48"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          {/* Top-left editorial registration crosshair (+) */}
          <path
            d="M 44 114 L 44 126 M 38 120 L 50 120"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-muted)] opacity-50 dark:opacity-35"
          />
          {/* Editorial studio identifier mark */}
          <text
            x="58"
            y="123"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.24em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-40 dark:opacity-30"
          >
            FC // 07°S 110°E
          </text>

          {/* Upper horizontal alignment guideline */}
          <line
            x1="180"
            y1="48"
            x2="920"
            y2="48"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 9"
            className="stroke-[var(--border-subtle)] opacity-50 dark:opacity-35"
          />

          {/* Top-right framing bracket ] */}
          <path
            d="M 1396 80 L 1396 48 L 1364 48"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          {/* Top-right coordinate crosshair */}
          <path
            d="M 1396 114 L 1396 126 M 1390 120 L 1402 120"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-muted)] opacity-50 dark:opacity-35"
          />

          {/* Left vertical framing rule fragment */}
          <line
            x1="44"
            y1="220"
            x2="44"
            y2="340"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 6"
            className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
          />
        </g>

        {/* -------------------------------------------------------------------
            LAYER 2: INTENTIONAL DOT MATRIX CLUSTERS
            Structured coordinate grids representing media mapping
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          {/* Upper-mid dot matrix (6 x 5 arrangement) */}
          {[0, 1, 2, 3, 4, 5].map((col) =>
            [0, 1, 2, 3, 4].map((row) => (
              <circle
                key={`dot-grid-1-${col}-${row}`}
                cx={880 + col * 20}
                cy={110 + row * 20}
                r="1.2"
                fill="currentColor"
                className="fill-[var(--text-subtle)] opacity-35 dark:opacity-30"
              />
            ))
          )}

          {/* Far-right auxiliary micro dot matrix (4 x 4) */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <circle
                key={`dot-grid-2-${col}-${row}`}
                cx={1340 + col * 16}
                cy={250 + row * 16}
                r="1.1"
                fill="currentColor"
                className="fill-[var(--text-muted)] opacity-30 dark:opacity-25"
              />
            ))
          )}

          {/* Accent emerald focal dots along primary axes */}
          <circle cx="1000" cy="190" r="2" fill="#10b981" className="opacity-60 dark:opacity-80" />
          <circle cx="1160" cy="290" r="2.5" fill="#10b981" className="opacity-70 dark:opacity-90" />
          <circle cx="1330" cy="510" r="2" fill="#10b981" className="opacity-60 dark:opacity-75" />
        </g>

        {/* -------------------------------------------------------------------
            LAYER 3: INDONESIAN CULTURAL VISUAL DNA — PARANG DIAGONAL RHYTHM
            Abstracted into modern 45-degree architectural cadence
            ------------------------------------------------------------------- */}
        <g className="opacity-50 dark:opacity-65">
          {/* Parallel diagonal hairline cadence in the upper right flank */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`parang-line-${i}`}
              x1={1210 + i * 22}
              y1={50}
              x2={1310 + i * 22}
              y2={150}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={i % 2 === 0 ? 'none' : '4 6'}
              className="stroke-[var(--text-muted)] opacity-30 dark:opacity-25"
            />
          ))}
          {/* Diagonal alignment guide cross marks */}
          <path
            d="M 1240 80 L 1248 80 M 1244 76 L 1244 84"
            stroke="currentColor"
            strokeWidth="0.8"
            className="stroke-[var(--text-muted)] opacity-40 dark:opacity-30"
          />
          <path
            d="M 1306 146 L 1314 146 M 1310 142 L 1310 150"
            stroke="currentColor"
            strokeWidth="0.8"
            className="stroke-[var(--text-muted)] opacity-40 dark:opacity-30"
          />
        </g>

        {/* -------------------------------------------------------------------
            LAYER 4: INDONESIAN CULTURAL VISUAL DNA — ABSTRACT KAWUNG GEOMETRY
            The timeless Kawung geometry of 4-fold intersecting circular arcs,
            symbolizing harmony, cosmic balance, and universal connectivity.
            Modernized with architectural precision hairlines.
            ------------------------------------------------------------------- */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="transition-transform duration-700"
        >
          {/* PRIMARY KAWUNG FOCAL CLUSTER: Center at (1160, 290) */}
          <g id="kawung-primary-cluster">
            {/* Concentric harmonic rings */}
            <circle
              cx="1160"
              cy="290"
              r="24"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
            />
            <circle
              cx="1160"
              cy="290"
              r="68"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2 6"
              className="stroke-[var(--text-subtle)] opacity-45 dark:opacity-35"
            />
            <circle
              cx="1160"
              cy="290"
              r="130"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-40"
            />
            <circle
              cx="1160"
              cy="290"
              r="190"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
            />
            <circle
              cx="1160"
              cy="290"
              r="250"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="1 7"
              className="stroke-[var(--border-subtle)] opacity-30 dark:opacity-25"
            />

            {/* Central registration crosshair */}
            <path
              d="M 1160 272 L 1160 308 M 1142 290 L 1178 290"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--text-heading)] opacity-60 dark:opacity-45"
            />

            {/* Kawung 4-fold intersecting arcs creating organic geometric petals */}
            {/* Top quadrant circular arc */}
            <path
              d="M 1030 290 A 130 130 0 0 1 1290 290"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
            />
            {/* Bottom quadrant circular arc */}
            <path
              d="M 1030 290 A 130 130 0 0 0 1290 290"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
            />
            {/* Left quadrant circular arc */}
            <path
              d="M 1160 160 A 130 130 0 0 0 1160 420"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
            />
            {/* Right quadrant circular arc */}
            <path
              d="M 1160 160 A 130 130 0 0 1 1160 420"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
            />

            {/* Diagonal petal intersections (45° Kawung symmetry) */}
            <path
              d="M 1068 198 A 130 130 0 0 1 1252 382"
              stroke="url(#fc-line-fade)"
              strokeWidth="0.9"
              className="opacity-70 dark:opacity-60"
            />
            <path
              d="M 1068 382 A 130 130 0 0 1 1252 198"
              stroke="url(#fc-line-fade)"
              strokeWidth="0.9"
              className="opacity-70 dark:opacity-60"
            />

            {/* Horizontal focal axis passing through Kawung center */}
            <line
              x1="760"
              y1="290"
              x2="1440"
              y2="290"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="6 12"
              className="stroke-[var(--border-subtle)] opacity-45 dark:opacity-35"
            />
            {/* Vertical focal axis */}
            <line
              x1="1160"
              y1="40"
              x2="1160"
              y2="540"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="6 12"
              className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
            />
          </g>

          {/* SECONDARY KAWUNG RESONANCE CLUSTER: Lower flank at (1330, 510) */}
          <g id="kawung-secondary-cluster" className="opacity-70 dark:opacity-80">
            <circle
              cx="1330"
              cy="510"
              r="16"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--border-strong)] opacity-40 dark:opacity-30"
            />
            <circle
              cx="1330"
              cy="510"
              r="75"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="3 6"
              className="stroke-[var(--border-medium)] opacity-45 dark:opacity-35"
            />
            <circle
              cx="1330"
              cy="510"
              r="120"
              stroke="currentColor"
              strokeWidth="0.6"
              className="stroke-[var(--border-subtle)] opacity-35 dark:opacity-25"
            />
            {/* 4-fold petal arcs */}
            <path
              d="M 1255 510 A 75 75 0 0 1 1405 510"
              stroke="currentColor"
              strokeWidth="0.8"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-35"
            />
            <path
              d="M 1255 510 A 75 75 0 0 0 1405 510"
              stroke="currentColor"
              strokeWidth="0.8"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-35"
            />
            <path
              d="M 1330 435 A 75 75 0 0 0 1330 585"
              stroke="currentColor"
              strokeWidth="0.8"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-35"
            />
            <path
              d="M 1330 435 A 75 75 0 0 1 1330 585"
              stroke="currentColor"
              strokeWidth="0.8"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-35"
            />
          </g>
        </motion.g>

        {/* -------------------------------------------------------------------
            LAYER 5: CONNECTING MEDIA TRAJECTORY & REFINED CURVED FLOWS
            Subtle aesthetic flow inspired by Mega Mendung undulating curves
            connecting the hero space downwards towards Directory Framedia
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          {/* Graceful connecting spline with subtle emerald gradient */}
          <path
            d="M 880 720 C 1020 660, 1140 560, 1160 480 C 1175 420, 1260 380, 1340 370"
            stroke="url(#fc-emerald-fade)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Subtle secondary parallel wave */}
          <path
            d="M 940 740 C 1060 690, 1170 600, 1190 520 C 1205 460, 1280 420, 1370 410"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="4 8"
            className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
            fill="none"
          />

          {/* Trajectory micro anchor node */}
          <circle
            cx="880"
            cy="720"
            r="3"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] fill-[var(--bg-main)] opacity-70"
          />
          <circle cx="880" cy="720" r="1.2" fill="#10b981" className="opacity-80" />
        </g>

        {/* -------------------------------------------------------------------
            LAYER 6: BOTTOM BASELINE FRAMING & VIEWPORT INTEGRATION
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          {/* Bottom-left baseline guide mark */}
          <line
            x1="44"
            y1="740"
            x2="110"
            y2="740"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
          />
          <circle
            cx="110"
            cy="740"
            r="1.5"
            fill="currentColor"
            className="fill-[var(--text-muted)] opacity-40 dark:opacity-30"
          />

          {/* Bottom-right framing bracket */}
          <path
            d="M 1396 708 L 1396 740 L 1364 740"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          <path
            d="M 1396 680 L 1396 668 M 1390 674 L 1402 674"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-muted)] opacity-50 dark:opacity-35"
          />
        </g>
      </svg>
    </div>
  );
};
