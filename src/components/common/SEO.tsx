import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath }) => {
  const { language, buildPath, currentBasePath } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title
    const formattedTitle = title.includes('Framedia Creative')
      ? title
      : `${title} — Framedia Creative`;
    document.title = formattedTitle;

    // 2. OpenGraph & Meta Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', formattedTitle);

    // 3. Meta & OpenGraph Description
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);
    }

    // 4. OpenGraph Locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', language === 'id' ? 'id_ID' : 'en_US');

    // 5. HTML lang attribute
    document.documentElement.lang = language;

    // 6. Hreflang Tags for Search Engine Localization
    const targetBase = canonicalPath || currentBasePath;
    const enUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${buildPath(targetBase, 'en')}`
      : buildPath(targetBase, 'en');
    const idUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${buildPath(targetBase, 'id')}`
      : buildPath(targetBase, 'id');

    let linkHreflangEn = document.querySelector('link[hreflang="en"]') as HTMLLinkElement;
    if (!linkHreflangEn) {
      linkHreflangEn = document.createElement('link');
      linkHreflangEn.rel = 'alternate';
      linkHreflangEn.hreflang = 'en';
      document.head.appendChild(linkHreflangEn);
    }
    linkHreflangEn.href = enUrl;

    let linkHreflangId = document.querySelector('link[hreflang="id"]') as HTMLLinkElement;
    if (!linkHreflangId) {
      linkHreflangId = document.createElement('link');
      linkHreflangId.rel = 'alternate';
      linkHreflangId.hreflang = 'id';
      document.head.appendChild(linkHreflangId);
    }
    linkHreflangId.href = idUrl;

    let linkHreflangDefault = document.querySelector('link[hreflang="x-default"]') as HTMLLinkElement;
    if (!linkHreflangDefault) {
      linkHreflangDefault = document.createElement('link');
      linkHreflangDefault.rel = 'alternate';
      linkHreflangDefault.hreflang = 'x-default';
      document.head.appendChild(linkHreflangDefault);
    }
    linkHreflangDefault.href = enUrl; // English on root is default per specification

  }, [title, description, canonicalPath, language, buildPath, currentBasePath]);

  return null;
};
