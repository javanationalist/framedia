import React from 'react';
import { ArrowUpRight, Bot, Lock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfra }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="w-full bg-[var(--bg-footer)] border-t border-[var(--border-medium)] text-[var(--text-muted)] pt-16 pb-12 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Manifesto & inFra Prompt */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-[var(--text-heading)]">
                FRAMEDIA
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.28em] text-[var(--text-subtle)]">
                CREATIVE
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInfra}
                id="footer-infra-trigger"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:border-[var(--border-strong)] text-[var(--btn-secondary-fg)] transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t('footer.ask_infra')}</span>
              </button>
            </div>
          </div>

          {/* Public Routes */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-heading)] font-semibold mb-4">
              {t('footer.explore')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.home')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/project')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.project')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/portfolio')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.portfolio')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('footer.about_creative')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy & Practice */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-heading)] font-semibold mb-4">
              {t('footer.philosophy')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/10beingcreative')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.principles')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/aiethics')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.ethics')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/inclusivity')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('nav.inclusivity')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/team')}
                  className="text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>{t('footer.frametive_team')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Presence */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-heading)] font-semibold mb-4">
              {t('footer.presence')}
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <p className="text-[var(--text-secondary)] font-medium">{t('footer.studios')}</p>
              <p className="font-mono text-xs text-[var(--text-primary)]">hello@framedia.creative</p>
              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick('/login')}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-subtle)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
                >
                  <Lock className="w-3 h-3" />
                  <span>{t('footer.admin_gateway')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-subtle)]">
          <p>© {currentYear} Framedia Creative. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
