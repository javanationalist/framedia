import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'pill' | 'icon' | 'compact';
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'pill',
  showLabel = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  const label = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        id="nav-theme-toggle-icon"
        className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
          isDark
            ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
            : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80'
        } ${className}`}
      >
        <span className="sr-only">{label}</span>
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      id="global-theme-toggle"
      className={`group relative inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer ${
        isDark
          ? 'bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white shadow-sm'
          : 'bg-[#edeae3] hover:bg-[#e4e1d9] border border-zinc-300 text-zinc-800 hover:text-black shadow-sm'
      } ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-45 transition-transform duration-300 shrink-0" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-zinc-700 group-hover:-rotate-12 transition-transform duration-300 shrink-0" />
        )}
      </div>

      {showLabel && (
        <span className="text-[11px] uppercase tracking-wider font-semibold font-mono select-none">
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </span>
      )}
    </button>
  );
};
