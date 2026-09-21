export type Language = 'id' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultVal?: string) => string;
  buildPath: (pathOrBase: string, targetLanguage?: Language) => string;
  currentBasePath: string;
}
