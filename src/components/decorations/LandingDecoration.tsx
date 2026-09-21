import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * LandingDecoration
 * 
 * Full-page, subtle, elegant animated SVG background decoration for Framedia Creative Landing Page.
 * Spans both Hero (Section 1) and Directory Framedia (Section 2) with smooth, slow, lightweight animations:
 * - Slowly moving thin lines (dash flow & trajectory waves)
 * - Gently drifting & pulsing coordinate dots & emerald beacons
 * - Subtle animated geometric shapes (slowly rotating Kawung focal ring & alignment crosshairs)
 * - Slowly changing technical metadata: coordinates, binary pulses, frame index, X/Y axes
 * 
 * Strict performance: CSS-driven hardware-accelerated animations, zero heavy particle systems,
 * low contrast in light mode, subtle luminescence in dark mode, no layout shifts.
 */

const COORDINATES = [
  '−7.2575° 112.7521° // SURABAYA [HQ]',
  '−6.2088° 106.8456° // JAKARTA [NODE]',
  '−6.9175° 107.6191° // BANDUNG [LAB]',
  '−7.7956° 110.3695° // YOGYA [STUDIO]',
];

const BINARY_STRINGS = [
  '0010 1101 0101 0011',
  '0100 0001 0100 1001',
  '1101 0010 1010 0110',
  '0011 0110 1100 1001',
];

const TECHNICAL_METRICS = [
  { x: 'X: 024', y: 'Y: 118', frame: 'FRAME_01', media: 'MEDIA_026', index: '01 / 10' },
  { x: 'X: 072', y: 'Y: 340', frame: 'FRAME_04', media: 'MEDIA_088', index: '04 / 10' },
  { x: 'X: 112', y: 'Y: 890', frame: 'FRAME_07', media: 'MEDIA_142', index: '07 / 10' },
  { x: 'X: 148', y: 'Y: 1240', frame: 'FRAME_10', media: 'MEDIA_250', index: '10 / 10' },
];

export const LandingDecoration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [metricIndex, setMetricIndex] = useState(0);

  // Slowly cycle through technical parameters every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentCoord = COORDINATES[metricIndex];
  const currentBinary = BINARY_STRINGS[metricIndex];
  const currentMetric = TECHNICAL_METRICS[metricIndex];

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Embedded scoped lightweight keyframes for smooth, slow CSS animation */}
      <style>{`
        @keyframes slowDashFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }
        @keyframes slowDashFlowReverse {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes slowSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slowSpinReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.2); }
        }
        @keyframes gentleFloatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gentleFloatX {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(6px); }
        }
        @keyframes subtleBeacon {
          0%, 100% { r: 2; opacity: 0.5; }
          50% { r: 3.2; opacity: 0.95; }
        }
        .anim-dash-flow {
          animation: slowDashFlow ${shouldReduceMotion ? '0s' : '32s'} linear infinite;
        }
        .anim-dash-flow-rev {
          animation: slowDashFlowReverse ${shouldReduceMotion ? '0s' : '40s'} linear infinite;
        }
        .anim-slow-spin {
          animation: slowSpin ${shouldReduceMotion ? '0s' : '90s'} linear infinite;
          transform-origin: 1160px 290px;
        }
        .anim-slow-spin-sec {
          animation: slowSpinReverse ${shouldReduceMotion ? '0s' : '110s'} linear infinite;
          transform-origin: 1330px 1250px;
        }
        .anim-gentle-pulse {
          animation: gentlePulse ${shouldReduceMotion ? '0s' : '6s'} ease-in-out infinite;
        }
        .anim-float-y {
          animation: gentleFloatY ${shouldReduceMotion ? '0s' : '8s'} ease-in-out infinite;
        }
        .anim-float-x {
          animation: gentleFloatX ${shouldReduceMotion ? '0s' : '10s'} ease-in-out infinite;
        }
        .anim-beacon {
          animation: subtleBeacon ${shouldReduceMotion ? '0s' : '4s'} ease-in-out infinite;
        }
        .tech-text-transition {
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
      `}</style>

      <svg
        viewBox="0 0 1440 2200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="lnd-line-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.02" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.16" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
          </linearGradient>

          <linearGradient id="lnd-emerald-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>

          <linearGradient id="lnd-vert-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.14" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            SECTION 1: HERO AREA (0 - 800px)
            =================================================================== */}
        
        {/* Top Framing Brackets & Registration Crosshairs */}
        <g className="opacity-70 dark:opacity-85">
          {/* Top-left framing bracket */}
          <path
            d="M 44 80 L 44 48 L 76 48"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />
          {/* Top-left editorial registration crosshair (+) with gentle floating */}
          <g className="anim-float-y">
            <path
              d="M 44 114 L 44 126 M 38 120 L 50 120"
              stroke="currentColor"
              strokeWidth="1"
              className="stroke-[var(--text-muted)] opacity-50 dark:opacity-35"
            />
          </g>

          {/* Changing Geographic Coordinate Stamp */}
          <g className="tech-text-transition">
            <text
              x="58"
              y="123"
              fill="currentColor"
              fontSize="8"
              letterSpacing="0.22em"
              className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
            >
              FC // {currentCoord}
            </text>
          </g>

          {/* Upper horizontal alignment guideline with animated dash flow */}
          <line
            x1="180"
            y1="48"
            x2="920"
            y2="48"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 10"
            className="stroke-[var(--border-subtle)] opacity-50 dark:opacity-35 anim-dash-flow"
          />

          {/* Top-right framing bracket */}
          <path
            d="M 1396 80 L 1396 48 L 1364 48"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-60 dark:opacity-40"
          />

          {/* Dynamic binary text display in top right */}
          <text
            x="1210"
            y="48"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.2em"
            className="font-mono fill-[var(--text-muted)] opacity-45 dark:opacity-35 tech-text-transition"
          >
            BIN [ {currentBinary} ]
          </text>
        </g>

        {/* Hero Dot Matrix Rhythms & Emerald Beacons */}
        <g className="opacity-60 dark:opacity-75">
          {/* Upper-mid dot matrix */}
          {[0, 1, 2, 3, 4, 5].map((col) =>
            [0, 1, 2, 3, 4].map((row) => (
              <circle
                key={`hero-dot-1-${col}-${row}`}
                cx={880 + col * 20}
                cy={110 + row * 20}
                r="1.1"
                fill="currentColor"
                className="fill-[var(--text-subtle)] opacity-35 dark:opacity-25"
              />
            ))
          )}

          {/* Far-right auxiliary micro dot matrix */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <circle
                key={`hero-dot-2-${col}-${row}`}
                cx={1340 + col * 16}
                cy={250 + row * 16}
                r="1"
                fill="currentColor"
                className="fill-[var(--text-muted)] opacity-30 dark:opacity-20"
              />
            ))
          )}

          {/* Slowly pulsing emerald focal beacons */}
          <circle cx="1000" cy="190" r="2" fill="#10b981" className="anim-beacon" />
          <circle cx="1160" cy="290" r="2.5" fill="#10b981" className="anim-beacon" />
          <circle cx="1330" cy="510" r="2" fill="#10b981" className="anim-beacon" />
        </g>

        {/* Hero Parang Diagonal Cadence in Right Flank */}
        <g className="opacity-50 dark:opacity-65 anim-float-x">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`hero-parang-${i}`}
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
          {/* Coordinate stamp next to Parang lines */}
          <text
            x="1220"
            y="172"
            fill="currentColor"
            fontSize="7.5"
            letterSpacing="0.15em"
            className="font-mono uppercase fill-[var(--text-subtle)] opacity-40 tech-text-transition"
          >
            CADENCE_01 // {currentMetric.x} {currentMetric.y}
          </text>
        </g>

        {/* Hero Abstract Modernized Kawung Geometry (Slowly Rotating Outer Orbit) */}
        <g id="hero-kawung-group">
          {/* Static focal center at (1160, 290) */}
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

          {/* Rotating outer concentric ring system */}
          <g className="anim-slow-spin">
            <circle
              cx="1160"
              cy="290"
              r="130"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="16 8 4 8"
              className="stroke-[var(--border-medium)] opacity-50 dark:opacity-40"
            />
            <circle
              cx="1160"
              cy="290"
              r="190"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="6 14"
              className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
            />
            <circle
              cx="1160"
              cy="290"
              r="250"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="2 10"
              className="stroke-[var(--border-subtle)] opacity-30 dark:opacity-20"
            />
            {/* Orbital markers on the rotating ring */}
            <circle cx="1290" cy="290" r="2.5" fill="#10b981" className="opacity-70" />
            <circle cx="1160" cy="480" r="2" fill="currentColor" className="fill-[var(--text-muted)] opacity-60" />
            <circle cx="1030" cy="290" r="2" fill="#10b981" className="opacity-60" />
          </g>

          {/* Static Kawung 4-fold intersecting arcs */}
          <path
            d="M 1030 290 A 130 130 0 0 1 1290 290"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
          />
          <path
            d="M 1030 290 A 130 130 0 0 0 1290 290"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
          />
          <path
            d="M 1160 160 A 130 130 0 0 0 1160 420"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
          />
          <path
            d="M 1160 160 A 130 130 0 0 1 1160 420"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-55 dark:opacity-45"
          />

          {/* Crosshair at center */}
          <path
            d="M 1160 272 L 1160 308 M 1142 290 L 1178 290"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--text-heading)] opacity-60 dark:opacity-45"
          />
          <circle cx="1160" cy="290" r="2" fill="#10b981" />
        </g>

        {/* ===================================================================
            SECTION TRANSITION (800px - 1000px): Hero -> Directory Wave Bridge
            =================================================================== */}
        <g className="opacity-60 dark:opacity-75">
          {/* Animated flowing wave trajectory inspired by Mega Mendung fluidity */}
          <path
            d="M 880 720 C 1020 660, 1140 560, 1160 480 C 1175 420, 1260 380, 1340 370"
            stroke="url(#lnd-emerald-fade)"
            strokeWidth="1.2"
            fill="none"
            className="anim-dash-flow"
            strokeDasharray="6 8"
          />
          <path
            d="M 940 740 C 1060 690, 1170 600, 1190 520 C 1205 460, 1280 420, 1370 410"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30 anim-dash-flow-rev"
            fill="none"
          />

          {/* Inter-section anchor node with technical tag */}
          <circle cx="880" cy="720" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="880" cy="720" r="1.2" fill="#10b981" />
          <text
            x="896"
            y="723"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.18em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 tech-text-transition"
          >
            GATEWAY // {currentMetric.frame} [{currentMetric.index}]
          </text>

          {/* Transition divider hairline */}
          <line
            x1="44"
            y1="820"
            x2="1396"
            y2="820"
            stroke="url(#lnd-line-fade)"
            strokeWidth="1"
            strokeDasharray="4 12"
            className="anim-dash-flow"
          />
        </g>

        {/* ===================================================================
            SECTION 2: DIRECTORY FRAMEDIA & LOWER PAGE (1000px - 2200px)
            =================================================================== */}

        {/* Left Gutter: Vertical Guide Axis with Drifting Nodes */}
        <g className="opacity-55 dark:opacity-70">
          {/* Continuous vertical guideline */}
          <line
            x1="44"
            y1="840"
            x2="44"
            y2="2100"
            stroke="url(#lnd-vert-fade)"
            strokeWidth="1"
            strokeDasharray="3 7"
            className="anim-dash-flow"
          />

          {/* Directory milestone registration nodes */}
          {[
            { y: 950, label: 'DIR_01 // ARCHIVE' },
            { y: 1250, label: 'DIR_02 // SYSTEM' },
            { y: 1550, label: 'DIR_03 // PRINCIPLES' },
            { y: 1850, label: 'DIR_04 // COLLECTIVE' },
          ].map((node, idx) => (
            <g key={`lnd-left-node-${idx}`} className="anim-float-y">
              <rect
                x="39"
                y={node.y - 5}
                width="10"
                height="10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="stroke-[var(--border-strong)]"
              />
              <circle cx="44" cy={node.y} r="1.5" fill="#10b981" />
              <text
                x="60"
                y={node.y + 3}
                fill="currentColor"
                fontSize="7.5"
                letterSpacing="0.14em"
                className="font-mono uppercase fill-[var(--text-subtle)] opacity-40"
              >
                {node.label}
              </text>
            </g>
          ))}
        </g>

        {/* Right Gutter: Secondary Rotating Kawung Cluster & Matrix */}
        <g id="directory-kawung-secondary" className="opacity-60 dark:opacity-75">
          {/* Secondary rotating cluster at (1330, 1250) */}
          <g className="anim-slow-spin-sec">
            <circle
              cx="1330"
              cy="1250"
              r="60"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              className="stroke-[var(--border-medium)] opacity-45 dark:opacity-35"
            />
            <circle
              cx="1330"
              cy="1250"
              r="110"
              stroke="currentColor"
              strokeWidth="0.7"
              strokeDasharray="2 6"
              className="stroke-[var(--border-subtle)] opacity-35 dark:opacity-25"
            />
            <circle cx="1390" cy="1250" r="2" fill="#10b981" />
            <circle cx="1270" cy="1250" r="1.5" fill="currentColor" className="fill-[var(--text-muted)] opacity-50" />
          </g>

          {/* Static concentric inner ring */}
          <circle
            cx="1330"
            cy="1250"
            r="20"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-40"
          />
          <circle cx="1330" cy="1250" r="2.2" fill="#10b981" className="anim-beacon" />

          {/* Micro crosshair */}
          <path
            d="M 1330 1238 L 1330 1262 M 1318 1250 L 1342 1250"
            stroke="currentColor"
            strokeWidth="0.8"
            className="stroke-[var(--border-strong)] opacity-50"
          />

          <text
            x="1235"
            y="1285"
            fill="currentColor"
            fontSize="7.5"
            letterSpacing="0.16em"
            className="font-mono uppercase fill-[var(--text-subtle)] opacity-40 tech-text-transition"
          >
            MATRIX // {currentMetric.media}
          </text>

          {/* Lower right dot matrix */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3].map((row) => (
              <circle
                key={`dir-dot-${col}-${row}`}
                cx={1340 + col * 14}
                cy={1680 + row * 14}
                r="1"
                fill="currentColor"
                className="fill-[var(--text-muted)] opacity-30 dark:opacity-20"
              />
            ))
          )}
        </g>

        {/* Lower Right Parang Cadence Lines */}
        <g className="opacity-45 dark:opacity-60 anim-float-x">
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`dir-parang-${i}`}
              x1={1380 - i * 16}
              y1={1940 + i * 12}
              x2={1340 - i * 16}
              y2={1980 + i * 12}
              stroke="currentColor"
              strokeWidth="0.9"
              className="stroke-[var(--border-medium)] opacity-35"
            />
          ))}
        </g>

        {/* Bottom Baseline Seal & Closing Verification Stamp */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="44"
            y1="2140"
            x2="1396"
            y2="2140"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            className="stroke-[var(--border-subtle)] opacity-40 anim-dash-flow"
          />
          <path
            d="M 44 2120 L 44 2140 L 64 2140"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50"
          />
          <path
            d="M 1396 2120 L 1396 2140 L 1376 2140"
            stroke="currentColor"
            strokeWidth="1"
            className="stroke-[var(--border-strong)] opacity-50"
          />
          <text
            x="44"
            y="2165"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45 tech-text-transition"
          >
            END_DIRECTORY // {currentCoord.split('//')[0].trim()} // RECEPTIVITY_ACTIVE
          </text>
        </g>
      </svg>
    </div>
  );
};

export default LandingDecoration;
