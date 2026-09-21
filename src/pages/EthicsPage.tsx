import React, { useState, useEffect } from 'react';
import { Bot, Lock, Cpu, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizeAIEthics } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { EthicsDecoration } from '../components/decorations/EthicsDecoration';
import { AIEthicsItem } from '../types';

interface EthicsPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const EthicsPage: React.FC<EthicsPageProps> = ({ onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [ethicsItems, setEthicsItems] = useState<AIEthicsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getAIEthics().then((data) => {
      setEthicsItems(data);
      setLoading(false);
    });
  }, []);

  const displayedEthics = localizeAIEthics(ethicsItems, language);

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('ethics.seo_title')}
        description={t('ethics.seo_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <EthicsDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              AI ETHICS
            </h1>

            <p className="font-editorial text-2xl sm:text-3xl text-[var(--text-primary)] italic font-light leading-relaxed">
              {t('ethics.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Statutory AI Governance Preamble */}
      <section className="py-10 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-emerald-500/30 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{language === 'id' ? 'Piagam Statuter Tata Kelola AI' : 'Statutory AI Governance Preamble'}</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed italic font-light">
              "{t('ethics.charter_statutory_preamble')}"
            </p>
          </div>
        </div>
      </section>

      {/* Core Charter Items */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {loading ? (
            <div className="py-24 text-center font-mono text-xs uppercase text-[var(--text-muted)]">
              {t('ethics.loading')}
            </div>
          ) : (
            <div className="space-y-12">
              {displayedEthics.map((item) => (
                <div
                  key={item.id}
                  className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] transition-all space-y-6 shadow-sm"
                >
                  <div className="border-b border-[var(--border-subtle)] pb-6 flex items-center justify-between">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[var(--text-heading)]">
                      {item.title}
                    </h2>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Principle 0{item.sort_order}
                    </span>
                  </div>

                  <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-light">
                    {item.content}
                  </p>

                  {/* Principle 3 Special Clause: Indigenous Data Sovereignty */}
                  {item.id === 'eth-3' && (
                    <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-emerald-500/30 space-y-2 mt-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>{language === 'id' ? 'Klausul Kedaulatan Data Adat & FPIC' : 'Indigenous Data Sovereignty & FPIC Clause'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed italic font-light">
                        "{t('ethics.indigenous_data_sovereignty_clause')}"
                      </p>
                    </div>
                  )}

                  {/* Principle 5 Special Clause: Labor Dignity & Fair Compensation */}
                  {item.id === 'eth-5' && (
                    <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-emerald-500/30 space-y-2 mt-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>{language === 'id' ? 'Standar Martabat & Remunerasi Pekerja Kreatif' : 'Labor Dignity & Remuneration Standard'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed italic font-light">
                        "{t('ethics.labor_dignity_remuneration_standard')}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* inFra AI Alignment Protocol */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-8 relative overflow-hidden shadow-sm">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[var(--text-heading)]">
                {t('ethics.infra_title')}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                {t('ethics.infra_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
                <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display font-bold text-[var(--text-heading)] text-base">
                  {t('ethics.zero_data_title')}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t('ethics.zero_data_desc')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
                <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display font-bold text-[var(--text-heading)] text-base">
                  {t('ethics.grounded_title')}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t('ethics.grounded_desc')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
                <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display font-bold text-[var(--text-heading)] text-base">
                  {t('ethics.model_indep_title')}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t('ethics.model_indep_desc')}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenInfra}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{t('ethics.audit_btn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default EthicsPage;
