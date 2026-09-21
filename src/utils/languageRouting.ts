import { Language } from '../types/language';

/**
 * Extracts language code from current URL pathname.
 * Root domain ('/') or any path without '/id' is English ('en').
 * Any path beginning with '/id' is Indonesian ('id').
 * Note: '/en' is explicitly forbidden per specification.
 */
export function getLanguageFromPath(pathname: string): Language {
  if (typeof pathname !== 'string') return 'en';
  const clean = pathname.trim();
  if (clean === '/id' || clean === '/id/' || clean.startsWith('/id/')) {
    return 'id';
  }
  return 'en';
}

/**
 * Extracts the base route (without the language prefix) from any path.
 * Examples:
 *   '/' -> '/'
 *   '/id' -> '/'
 *   '/id/' -> '/'
 *   '/id/project' -> '/project'
 *   '/project' -> '/project'
 *   '/id/portfolio' -> '/portfolio'
 *   '/portfolio' -> '/portfolio'
 */
export function getBasePath(pathname: string): string {
  if (!pathname || pathname === '' || pathname === '/') return '/';
  
  const clean = pathname.trim();
  if (clean === '/id' || clean === '/id/') {
    return '/';
  }

  if (clean.startsWith('/id/')) {
    const sub = clean.slice(3); // removes '/id'
    return sub.startsWith('/') ? sub : `/${sub}`;
  }

  return clean.startsWith('/') ? clean : `/${clean}`;
}

/**
 * Builds the localized URL path for a given base path and target language.
 * English uses the root domain without any language path.
 * Bahasa Indonesia prefixes the path with '/id'.
 *
 * Examples:
 *   buildLocalizedPath('/', 'en') -> '/'
 *   buildLocalizedPath('/', 'id') -> '/id'
 *   buildLocalizedPath('/project', 'en') -> '/project'
 *   buildLocalizedPath('/project', 'id') -> '/id/project'
 *   buildLocalizedPath('/id/project', 'en') -> '/project'
 *   buildLocalizedPath('/id/project', 'id') -> '/id/project'
 */
export function buildLocalizedPath(pathOrBase: string, targetLanguage: Language): string {
  const base = getBasePath(pathOrBase);
  
  if (targetLanguage === 'id') {
    return base === '/' ? '/id' : `/id${base}`;
  }

  // English: root domain without '/en'
  return base;
}
