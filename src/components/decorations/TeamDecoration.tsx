import React from 'react';

/**
 * TeamDecoration
 * 
 * Unique decorative SVG system for Frametive Team (/team).
 * Concept: People, collaboration, interconnected collective, network topology.
 * Elements: Constellation node networks, thin inter-card vector links, studio coordinate markers,
 * collaboration relationship matrices.
 */
export const TeamDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        <defs>
          <linearGradient id="team-net-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------------
            TOP HEADER AREA: Collective Mesh & Studio Nodes
            ------------------------------------------------------------------- */}
        <g className="opacity-70 dark:opacity-85">
          {/* Header network link */}
          <line
            x1="50"
            y1="40"
            x2="1390"
            y2="40"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />

          {/* Studio hub nodes across the header */}
          <circle cx="50" cy="40" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="50" cy="40" r="1.2" fill="#10b981" />
          <text x="62" y="43" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-50">NODE_01 // SURABAYA [HQ]</text>

          <circle cx="520" cy="40" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="520" cy="40" r="1.2" fill="#10b981" />
          <text x="532" y="43" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-50">NODE_02 // JAKARTA</text>

          <circle cx="980" cy="40" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="980" cy="40" r="1.2" fill="#10b981" />
          <text x="992" y="43" fill="currentColor" fontSize="8" className="font-mono fill-[var(--text-muted)] opacity-50">NODE_03 // BANDUNG</text>

          <circle cx="1390" cy="40" r="3" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-strong)] fill-[var(--bg-main)]" />
          <circle cx="1390" cy="40" r="1.2" fill="#10b981" />
        </g>

        {/* -------------------------------------------------------------------
            TEAM GRID BACKGROUND: Interconnecting Network Vectors
            Visual links representing collaboration and shared collective vision
            ------------------------------------------------------------------- */}
        <g className="opacity-50 dark:opacity-65">
          {/* Left margin constellation lines */}
          <line x1="40" y1="200" x2="40" y2="1650" stroke="url(#team-net-grad)" strokeWidth="1" strokeDasharray="3 7" />

          {/* Triangular network web in left gutter */}
          <line x1="40" y1="360" x2="100" y2="440" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <line x1="100" y1="440" x2="40" y2="520" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <circle cx="100" cy="440" r="2" fill="#10b981" />

          <line x1="40" y1="880" x2="90" y2="960" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <line x1="90" y1="960" x2="40" y2="1040" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <circle cx="90" cy="960" r="2" fill="#10b981" />

          {/* Right margin constellation lines */}
          <line x1="1400" y1="200" x2="1400" y2="1650" stroke="url(#team-net-grad)" strokeWidth="1" strokeDasharray="3 7" />

          {/* Triangular network web in right gutter */}
          <line x1="1400" y1="500" x2="1340" y2="580" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <line x1="1340" y1="580" x2="1400" y2="660" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <circle cx="1340" cy="580" r="2" fill="#10b981" />

          <line x1="1400" y1="1100" x2="1350" y2="1180" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <line x1="1350" y1="1180" x2="1400" y2="1260" stroke="currentColor" strokeWidth="0.8" className="stroke-[var(--border-medium)] opacity-40" />
          <circle cx="1350" cy="1180" r="2" fill="#10b981" />

          {/* Collaboration matrix concentric indicator */}
          <circle cx="1370" cy="850" r="32" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" className="stroke-[var(--border-subtle)]" />
          <circle cx="1370" cy="850" r="14" stroke="currentColor" strokeWidth="1" className="stroke-[var(--border-medium)]" />
          <circle cx="1370" cy="850" r="2" fill="#10b981" />
          <text x="1300" y="895" fill="currentColor" fontSize="7.5" className="font-mono uppercase fill-[var(--text-subtle)] opacity-40">
            SYNC // ACTIVE
          </text>
        </g>

        {/* -------------------------------------------------------------------
            BOTTOM COLLECTIVE BANDWIDTH MARKER
            ------------------------------------------------------------------- */}
        <g className="opacity-60 dark:opacity-75">
          <line
            x1="50"
            y1="1720"
            x2="1390"
            y2="1720"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="stroke-[var(--border-subtle)]"
          />
          <text
            x="50"
            y="1745"
            fill="currentColor"
            fontSize="8"
            letterSpacing="0.22em"
            className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
          >
            ENSEMBLE_BANDWIDTH // 100% COLLABORATIVE CAPACITY ALLOCATED
          </text>
        </g>
      </svg>
    </div>
  );
};
