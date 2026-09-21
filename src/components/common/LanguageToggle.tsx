import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  compact?: boolean;
}

// Crisp vector SVG for Flag of Indonesia
export const IndonesiaFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 16"
    className={`${className} rounded-[2px] overflow-hidden shrink-0 border border-black/15 dark:border-white/20 shadow-2xs`}
    aria-hidden="true"
  >
    <rect width="24" height="8" fill="#E01B22" />
    <rect y="8" width="24" height="8" fill="#FFFFFF" />
  </svg>
);

// Crisp vector SVG for Flag of United Kingdom (Union Jack)
export const UKFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 60 40"
    className={`${className} rounded-[2px] overflow-hidden shrink-0 border border-black/15 dark:border-white/20 shadow-2xs`}
    aria-hidden="true"
  >
    <clipPath id="uk-flag-clip">
      <rect width="60" height="40" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      {/* Blue background */}
      <rect width="60" height="40" fill="#012169" />
      {/* White saltire */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
      {/* Red saltire */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      {/* White cross */}
      <path d="M30,0 v40 M0,20 h60" stroke="#FFFFFF" strokeWidth="12" />
      {/* Red cross */}
      <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', compact = false }) => {
  const { language, setLanguage, buildPath, currentBasePath, t } = useLanguage();

  const indonesianHref = buildPath(currentBasePath, 'id');
  const englishHref = buildPath(currentBasePath, 'en');

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-0.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-medium)] transition-colors ${className}`}
    >
      {/* Indonesia Option */}
      <a
        href={indonesianHref}
        onClick={(e) => {
          e.preventDefault();
          if (language !== 'id') {
            setLanguage('id');
          }
        }}
        aria-current={language === 'id' ? 'true' : undefined}
        aria-label={t('lang.switch_to_id', 'Beralih ke Bahasa Indonesia (/id)')}
        title="Bahasa Indonesia (/id)"
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-mono transition-all no-underline cursor-pointer select-none ${
          language === 'id'
            ? 'bg-[var(--bg-card)] text-[var(--text-heading)] font-bold shadow-2xs border border-[var(--border-strong)] opacity-100 ring-1 ring-[var(--border-medium)]/40'
            : 'text-[var(--text-muted)] hover:text-[var(--text-heading)] opacity-60 hover:opacity-100 border border-transparent'
        }`}
      >
        <IndonesiaFlag className="w-4 h-3 sm:w-4.5 sm:h-3.5" />
        {!compact && (
          <span className="text-[11px] uppercase tracking-wider font-semibold">
            ID
          </span>
        )}
      </a>

      {/* English Option */}
      <a
        href={englishHref}
        onClick={(e) => {
          e.preventDefault();
          if (language !== 'en') {
            setLanguage('en');
          }
        }}
        aria-current={language === 'en' ? 'true' : undefined}
        aria-label={t('lang.switch_to_en', 'Switch to English (/)')}
        title="English (/)"
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-mono transition-all no-underline cursor-pointer select-none ${
          language === 'en'
            ? 'bg-[var(--bg-card)] text-[var(--text-heading)] font-bold shadow-2xs border border-[var(--border-strong)] opacity-100 ring-1 ring-[var(--border-medium)]/40'
            : 'text-[var(--text-muted)] hover:text-[var(--text-heading)] opacity-60 hover:opacity-100 border border-transparent'
        }`}
      >
        <UKFlag className="w-4 h-3 sm:w-4.5 sm:h-3.5" />
        {!compact && (
          <span className="text-[11px] uppercase tracking-wider font-semibold">
            EN
          </span>
        )}
      </a>
    </div>
  );
};
