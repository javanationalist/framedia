import React from 'react';

/**
 * PrinciplesDecoration
 * 
 * Unique decorative SVG system for 10 Being Creative (/10beingcreative).
 * Concept: Ideas, experimentation, organic creative flow, dynamic thinking.
 * Elements: Subtle undulating wave curves (subtly inspired by Mega Mendung fluidity),
 * creative constellation dot clusters, connecting idea trajectories, open geometric circles.
 */
export const PrinciplesDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 2800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="princ-curve-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Creative Spark Constellation & Wave Horizon
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85">
          {/* Subtle Mega-Mendung inspired layered wave horizon behind title */}
          <path
            d="M 60 90 Q 240 60 420 90 T 780 90 T 1140 90 T 1380 70"
            stroke="url(#princ-curve-fade)"
            strokeWidth="1.2"
            fill="none"
            className="opacity-70"
          />
          <path
            d="M 120 110 Q 300 85 480 110 T 840 110 T 1200 110 T 1360 95"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="3 6"
            className="stroke-[var(--border-subtle)] opacity-40 dark:opacity-30"
          />

          {/* Micro idea flow label */}
          <text
            x="60"
            y="42"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            THE_DISCIPLINE // 10 AXIOMS OF EXPERIMENTAL PRACTICE
          </text>
          <text
            x="1260"
            y="42"
            fill="currentColor"
            fontSize="9"
            letterSpacing="0.18em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-50 dark:opacity-40"
          >
            [ ITERATIVE_FLOW ]
          </text>
        </g>

        {/* -------------------------------------------------------------------
            WEAVING CREATIVE IDEA FLOW
            Gentle undulating S-curves running vertically between alternating principles
            ------------------------------------------------------------------- */}
        <g className="opacity-45 dark:opacity-60">
          {/* Wave connecting Principle 01 -> 02 -> 03 */}
          <path
            d="M 40 400 C 140 500, 200 650, 80 800 C -40 950, 100 1100, 200 1200"
            stroke="url(#princ-curve-fade)"
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
          />

          {/* Right flank counter-wave connecting Principle 04 -> 05 -> 06 */}
          <path
            d="M 1400 1150 C 1300 1300, 1260 1450, 1360 1600 C 1460 1750, 1340 1900, 1260 2050"
            stroke="url(#princ-curve-fade)"
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
          />

          {/* Connecting trajectory Principle 07 -> 08 -> 09 -> 10 */}
          <path
            d="M 80 1950 C 180 2100, 120 2300, 220 2450 C 320 2600, 500 2680, 720 2720"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="stroke-[var(--border-medium)] opacity-35"
            fill="none"
          />
        </g>

        {/* -------------------------------------------------------------------
            CONSTELLATION NODES & EXPERIMENTAL GEOMETRIC SPARK CLUSTERS
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          {/* Node cluster at Principle 02 area */}
          <circle cx="1380" cy="560" r="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" className="stroke-[var(--border-subtle)]" />
          <circle cx="1380" cy="560" r="12" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-medium)]" />
          <circle cx="1380" cy="560" r="2" fill="#10b981" />
          <text x="1310" y="563" fill="currentColor" fontSize="7.5" className="font-mono fill-[var(--text-subtle)] opacity-40">AXIOM_RECURSION</text>

          {/* Spark cluster at Principle 05 area */}
          <g transform="translate(40, 1420)">
            <circle cx="10" cy="10" r="1.5" fill="#10b981" />
            <circle cx="28" cy="2" r="1" fill="currentColor" className="fill-[var(--text-muted)] opacity-50" />
            <circle cx="22" cy="24" r="1.2" fill="#10b981" />
            <circle cx="42" cy="18" r="1" fill="currentColor" className="fill-[var(--text-muted)] opacity-40" />
            <line x1="10" y1="10" x2="28" y2="2" stroke="currentColor" strokeWidth="0.6" className="stroke-[var(--border-subtle)]" />
            <line x1="10" y1="10" x2="22" y2="24" stroke="currentColor" strokeWidth="0.6" className="stroke-[var(--border-subtle)]" />
            <line x1="22" y1="24" x2="42" y2="18" stroke="currentColor" strokeWidth="0.6" className="stroke-[var(--border-subtle)]" />
          </g>

          {/* Experimental ring cluster at Principle 08 area */}
          <circle cx="1400" cy="2180" r="36" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-subtle)]" />
          <circle cx="1380" cy="2195" r="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" className="stroke-[var(--border-medium)]" />
          <circle cx="1380" cy="2195" r="1.8" fill="#10b981" />
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM HARMONIC CLOSING ARC
            ------------------------------------------------------------------- */}
        <g className="opacity-55 dark:opacity-70">
          <line
            x1="80"
            y1="2750"
            x2="1360"
            y2="2750"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            className="stroke-[var(--border-subtle)]"
          />
          <text
            x="80"
            y="2775"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            END_MANIFESTO // PRINCIPLE_SYNTHESIS_COMPLETE (10/10)
          </text>
        </g>
      </svg>
    </div>
  );
};
