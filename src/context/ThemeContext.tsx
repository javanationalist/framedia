import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'framedia-theme';

// Helper to get initial theme
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    // Ignore localStorage failures (e.g. private browsing)
  }

  // Respect system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  // Default to Dark Mode as the primary visual identity
  return 'dark';
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const applyTheme = (newTheme: Theme, animate = true) => {
    const root = document.documentElement;
    const body = document.body;

    if (animate) {
      root.classList.add('theme-transition');
      setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 350);
    }

    root.setAttribute('data-theme', newTheme);
    root.classList.remove('dark', 'light');
    root.classList.add(newTheme);
    root.style.colorScheme = newTheme;

    if (body) {
      body.classList.remove('dark', 'light');
      body.classList.add(newTheme);
    }
  };

  useEffect(() => {
    // Apply theme on initial mount
    applyTheme(theme, false);
  }, []);

  useEffect(() => {
    // Listen to OS color scheme changes only if user hasn't explicitly saved a choice
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
          const systemTheme: Theme = e.matches ? 'dark' : 'light';
          setThemeState(systemTheme);
          applyTheme(systemTheme, true);
        }
      } catch {
        // Ignore
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Ignore
    }
    applyTheme(newTheme, true);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
