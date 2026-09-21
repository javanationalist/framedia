import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { Language, LanguageContextType } from '../types/language';
import { TRANSLATIONS } from '../data/translations';
import { MANUAL_TRANSLATION_TEMPLATE } from '../data/manualTranslations';
import {
  getLanguageFromPath,
  getBasePath,
  buildLocalizedPath,
} from '../utils/languageRouting';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: ReactNode;
  initialPath?: string;
  onLanguageChange?: (newPath: string, newLang: Language) => void;
}> = ({ children, initialPath, onLanguageChange }) => {
  // Derive language directly from URL path. Root domain / -> 'en', /id -> 'id'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return getLanguageFromPath(window.location.pathname);
    }
    return initialPath ? getLanguageFromPath(initialPath) : 'en';
  });

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return initialPath || '/';
  });

  // Keep state in sync on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      const lang = getLanguageFromPath(path);
      setCurrentPath(path);
      setLanguageState(lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document.documentElement.lang
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  /**
   * Switches language and updates the browser URL to the equivalent page
   * without a full page reload.
   * e.g. /project -> /id/project, or /id/about -> /about
   */
  const setLanguage = useCallback(
    (targetLang: Language) => {
      const activePath = typeof window !== 'undefined' ? window.location.pathname : currentPath;
      const targetPath = buildLocalizedPath(activePath, targetLang);

      setLanguageState(targetLang);
      setCurrentPath(targetPath);

      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', targetPath);
        // Dispatch popstate so any listening routers update seamlessly
        window.dispatchEvent(new PopStateEvent('popstate'));
      }

      if (typeof document !== 'undefined') {
        document.documentElement.lang = targetLang;
      }

      if (onLanguageChange) {
        onLanguageChange(targetPath, targetLang);
      }
    },
    [currentPath, onLanguageChange]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'id' ? 'en' : 'id');
  }, [language, setLanguage]);

  const buildPath = useCallback(
    (pathOrBase: string, targetLang?: Language): string => {
      return buildLocalizedPath(pathOrBase, targetLang || language);
    },
    [language]
  );

  const currentBasePath = getBasePath(currentPath);

  /**
   * Translation resolution hierarchy:
   * 1. If Indonesian:
   *    a. Check MANUAL_TRANSLATION_TEMPLATE if customized by owner (does not contain placeholder)
   *    b. Check TRANSLATIONS.id
   *    c. Fallback to TRANSLATIONS.en
   * 2. If English:
   *    a. Check TRANSLATIONS.en
   *    b. Fallback to defaultVal or key
   */
  const t = useCallback(
    (key: string, defaultVal?: string): string => {
      if (language === 'id') {
        // 1a. Check manual translation if customized by website owner
        const manualVal = MANUAL_TRANSLATION_TEMPLATE[key];
        if (
          manualVal &&
          typeof manualVal === 'string' &&
          !manualVal.includes('{teks bahasa Indonesianya}') &&
          !manualVal.includes('{TERJEMAHKAN MANUAL}')
        ) {
          return manualVal;
        }

        // 1b. Check curated Indonesian translation
        if (TRANSLATIONS.id && key in TRANSLATIONS.id) {
          return TRANSLATIONS.id[key];
        }

        // 1c. Fallback to English
        if (TRANSLATIONS.en && key in TRANSLATIONS.en) {
          return TRANSLATIONS.en[key];
        }
      } else {
        // English
        if (TRANSLATIONS.en && key in TRANSLATIONS.en) {
          return TRANSLATIONS.en[key];
        }

        // Fallback to Indonesian if key exists only there
        if (TRANSLATIONS.id && key in TRANSLATIONS.id) {
          return TRANSLATIONS.id[key];
        }
      }

      return defaultVal || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        buildPath,
        currentBasePath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
