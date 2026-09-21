import React, { useState, useEffect } from 'react';
import { Bot, Quote } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizePrinciples } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { PrinciplesDecoration } from '../components/decorations/PrinciplesDecoration';
import { CreativePrinciple } from '../types';

interface PrinciplesPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const PrinciplesPage: React.FC<PrinciplesPageProps> = ({ onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [principles, setPrinciples] = useState<CreativePrinciple[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getPrinciples().then((data) => {
      setPrinciples(data);
      setLoading(false);
    });
  }, []);

  const displayedPrinciples = localizePrinciples(principles, language);

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('principles.seo_title')}
        description={t('principles.seo_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <PrinciplesDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              {t('principles.category')}
            </span>
            <h1 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              10 BEING CREATIVE
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[var(--text-primary)] italic font-light leading-relaxed">
              {t('principles.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Principles List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {loading ? (
            <div className="py-24 text-center font-mono text-xs uppercase text-[var(--text-muted)]">
              {t('principles.loading')}
            </div>
          ) : (
            displayedPrinciples.map((principle, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={principle.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Number & Text Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-6xl sm:text-8xl font-black text-emerald-600 dark:text-emerald-400 leading-none">
                        {String(principle.number).padStart(2, '0')}
                      </span>
                      <div className="h-[2px] flex-1 bg-[var(--border-medium)]" />
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                      {principle.title}
                    </h2>

                    <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-light">
                      {principle.description}
                    </p>

                    {principle.quote && (
                      <div className="p-6 rounded-2xl bg-[var(--bg-card)] border-l-2 border-emerald-500 space-y-2 border border-[var(--border-subtle)] shadow-sm">
                        <Quote className="w-5 h-5 text-emerald-500 opacity-80" />
                        <p className="font-editorial text-lg sm:text-xl text-[var(--text-heading)] italic leading-snug">
                          “{principle.quote}”
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Image Plate Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[var(--border-medium)] aspect-[4/3] bg-[var(--bg-surface)] shadow-md group">
                      <img
                        src={
                          principle.image_url ||
                          'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop'
                        }
                        alt={principle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* inFra Prompt Section */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            {t('principles.infra_eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
            {t('principles.infra_title')}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            {t('principles.infra_desc')}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInfra}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-emerald-500" />
              <span>{t('principles.infra_btn')}</span>
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default PrinciplesPage;
