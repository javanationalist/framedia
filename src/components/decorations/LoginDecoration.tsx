import React from 'react';

/**
 * LoginDecoration
 * 
 * Subtle, minimal geometric SVG background for the Authenticated Gateway.
 * Concept: Cryptographic verification, security framing, low-contrast registration marks.
 */
export const LoginDecoration: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full text-[var(--text-heading)] transition-colors duration-500"
      >
        {/* Top-left security framing bracket */}
        <path
          d="M 60 90 L 60 60 L 90 60"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
        />
        <text
          x="60"
          y="110"
          fill="currentColor"
          fontSize="8.5"
          letterSpacing="0.22em"
          className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
        >
          AUTH_GATEWAY // SEC_00:SESSION
        </text>

        {/* Top-right framing bracket */}
        <path
          d="M 1380 90 L 1380 60 L 1350 60"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
        />
        <text
          x="1260"
          y="110"
          fill="currentColor"
          fontSize="8.5"
          letterSpacing="0.18em"
          className="font-mono uppercase fill-[var(--text-muted)] opacity-45"
        >
          [ TLS_ENCRYPTED ]
        </text>

        {/* Diagonal corner alignment lines */}
        <line
          x1="60"
          y1="60"
          x2="120"
          y2="120"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          className="stroke-[var(--border-subtle)] opacity-35"
        />
        <line
          x1="1380"
          y1="60"
          x2="1320"
          y2="120"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          className="stroke-[var(--border-subtle)] opacity-35"
        />

        {/* Center concentric security watermark circle */}
        <circle
          cx="720"
          cy="450"
          r="320"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 12"
          className="stroke-[var(--border-subtle)] opacity-25 dark:opacity-15"
        />
        <circle
          cx="720"
          cy="450"
          r="420"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 10"
          className="stroke-[var(--border-subtle)] opacity-20 dark:opacity-10"
        />

        {/* Bottom-left bracket */}
        <path
          d="M 60 810 L 60 840 L 90 840"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
        />
        <text
          x="60"
          y="865"
          fill="currentColor"
          fontSize="8"
          letterSpacing="0.2em"
          className="font-mono uppercase fill-[var(--text-muted)] opacity-40"
        >
          ZERO_PERSISTENT_TRACKING // LOCAL_STORAGE_SAFE
        </text>

        {/* Bottom-right bracket */}
        <path
          d="M 1380 810 L 1380 840 L 1350 840"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-[var(--border-strong)] opacity-50 dark:opacity-35"
        />
      </svg>
    </div>
  );
};

export default LoginDecoration;
