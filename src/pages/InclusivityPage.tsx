import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizeInclusivity } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { InclusivityDecoration } from '../components/decorations/InclusivityDecoration';
import { InclusivityItem } from '../types';

interface InclusivityPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const InclusivityPage: React.FC<InclusivityPageProps> = ({ onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [items, setItems] = useState<InclusivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getInclusivity().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const displayedItems = localizeInclusivity(items, language);

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('inclusivity.seo_title')}
        description={t('inclusivity.seo_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <InclusivityDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              INCLUSIVITY
            </h1>

            <p className="font-editorial text-2xl sm:text-3xl text-[var(--text-primary)] italic font-light leading-relaxed">
              {t('inclusivity.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Inclusivity Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {loading ? (
            <div className="py-24 text-center font-mono text-xs uppercase text-[var(--text-muted)]">
              {t('inclusivity.loading')}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {displayedItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                        {t('inclusivity.pillar_prefix')} 0{idx + 1}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[var(--text-heading)]">
                      {item.title}
                    </h2>

                    <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                      {item.content}
                    </p>
                  </div>

                  {item.pillars && item.pillars.length > 0 && (
                    <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-semibold">
                        {t('inclusivity.benchmarks_label')}
                      </span>
                      {item.pillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pillar}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sensory & Co-Authorship Standards */}
      <section className="py-16 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{language === 'id' ? 'Protokol Sensorik Neurodivergen' : 'Neurodivergent Sensory Protocol'}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--text-heading)]">
                {language === 'id' ? 'Aksesibilitas Kognitif & Sensorik' : 'Cognitive & Sensory Accessibility'}
              </h3>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed italic font-light">
                "{t('inclusivity.neurodivergent_sensory_protocol')}"
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{language === 'id' ? 'Kovenan Rekognisi Co-Authorship' : 'Co-Authorship Covenant'}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--text-heading)]">
                {language === 'id' ? 'Penceritaan Non-Ekstraktif' : 'Non-Extractive Storytelling'}
              </h3>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed italic font-light">
                "{t('inclusivity.co_authorship_covenant')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WCAG & Universal Design Commitment */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
                {t('inclusivity.wcag_title')}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-light">
              <p>
                {t('inclusivity.wcag_p1')}
              </p>
              <p>
                {t('inclusivity.wcag_p2')}
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default InclusivityPage;
