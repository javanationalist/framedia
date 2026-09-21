import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter, X, ArrowUpRight, Award, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizePortfolio } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { PortfolioDecoration } from '../components/decorations/PortfolioDecoration';
import { PortfolioItem } from '../types';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

const CATEGORY_KEYS = [
  'All',
  'Branding',
  'Film',
  'Photography',
  'Design',
  'Digital',
  'Campaign',
  'Creative Technology',
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getPortfolio().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const localizedItems = localizePortfolio(items, language);

  const filteredItems =
    selectedCategory === 'All'
      ? localizedItems
      : localizedItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full text-[var(--text-primary)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('portfolio.seo_title')}
        description={t('portfolio.seo_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <PortfolioDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-16 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-medium">
              {t('portfolio.eyebrow')}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              PORTFOLIO
            </h1>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-light">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-mono uppercase text-[var(--text-muted)] mr-2 flex items-center gap-1.5 font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span>{t('portfolio.category_label')}:</span>
            </span>
            {CATEGORY_KEYS.map((cat) => {
              const isActive = selectedCategory === cat;
              const label = cat === 'All' ? t('portfolio.cat_all') : cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold shadow-xs'
                      : 'bg-[var(--bg-card)] border border-[var(--border-medium)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-24 text-center font-mono text-xs uppercase text-[var(--text-subtle)]">
              {t('portfolio.loading')}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <p className="font-mono text-sm text-[var(--text-muted)] uppercase">
                {t('portfolio.no_items')} "{selectedCategory === 'All' ? t('portfolio.cat_all') : selectedCategory}"
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 underline cursor-pointer"
              >
                {t('portfolio.reset_filter')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveItem(item)}
                  className="group cursor-pointer flex flex-col bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--text-heading)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-[var(--bg-card-muted)]">
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-zinc-200">
                      {item.category}
                    </div>
                    {item.year && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 text-[10px] font-mono text-zinc-300">
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-xl font-bold text-[var(--text-heading)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-[var(--text-subtle)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                      {item.client ? (
                        <span>{t('portfolio.client')}: {item.client}</span>
                      ) : (
                        <span>{t('portfolio.studio')}</span>
                      )}
                      {item.award && (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <Award className="w-3.5 h-3.5" />
                          <span>{item.award}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-modal)] border border-[var(--border-medium)] text-[var(--text-primary)] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-tag)] text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border border-[var(--border-subtle)] font-medium">
                      {activeItem.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">• {activeItem.year}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
                    {activeItem.title}
                  </h2>
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-heading)] rounded-lg hover:bg-[var(--bg-tag)] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-xl aspect-[16/9] border border-[var(--border-subtle)] bg-[var(--bg-card-muted)]">
                <img
                  src={activeItem.thumbnail_url}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-heading)] font-semibold">
                  {t('portfolio.narrative')}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono">
                  <div>
                    <span className="text-[var(--text-subtle)] block mb-1">{t('portfolio.client')}:</span>
                    <span className="text-[var(--text-heading)] font-semibold">{activeItem.client || 'Commissioned / Framedia'}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-subtle)] block mb-1">{t('portfolio.year')}:</span>
                    <span className="text-[var(--text-heading)] font-semibold">{activeItem.year}</span>
                  </div>
                  {activeItem.award && (
                    <div>
                      <span className="text-[var(--text-subtle)] block mb-1">{t('portfolio.recognition')}:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeItem.award}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery if present */}
              {activeItem.gallery_images && activeItem.gallery_images.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-heading)] font-semibold">
                    {t('portfolio.plates')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeItem.gallery_images.map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-lg border border-[var(--border-subtle)] aspect-[4/3] bg-[var(--bg-card-muted)]">
                        <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between border-t border-[var(--border-subtle)]">
                <button
                  onClick={onOpenInfra}
                  className="text-xs font-mono text-[var(--text-muted)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('portfolio.ask_infra')}
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2 rounded-lg bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] text-[var(--btn-secondary-fg)] border border-[var(--btn-secondary-border)] text-xs font-mono uppercase transition-colors cursor-pointer"
                >
                  {t('portfolio.close')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
