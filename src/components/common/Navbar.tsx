import React, { useState } from 'react';
import { Bot, Menu, X, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { getBasePath } from '../../utils/languageRouting';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenInfra }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const currentBase = getBasePath(currentPath);

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.project'), path: '/project' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.principles'), path: '/10beingcreative' },
    { label: t('nav.team'), path: '/team' },
    { label: t('nav.ethics'), path: '/aiethics' },
    { label: t('nav.inclusivity'), path: '/inclusivity' },
    { label: t('nav.about'), path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg-main)]/90 border-b border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Text Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="group flex flex-col text-left focus:outline-none cursor-pointer"
          id="nav-brand-logo"
        >
          <span className="font-display text-lg sm:text-xl font-extrabold tracking-[-0.03em] leading-none text-[var(--text-heading)] transition-colors">
            FRAMEDIA
          </span>
          <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.28em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
            CREATIVE
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentBase === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[var(--text-heading)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                }`}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--text-heading)] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions for Desktop Only (Theme Toggle + Admin Status + Language Toggle at far right) */}
        <div className="hidden xl:flex items-center space-x-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle variant="pill" showLabel={false} />

          {/* Admin shortcut button */}
          {user ? (
            <button
              onClick={() => handleNavClick('/admin')}
              id="nav-admin-active-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase rounded-full bg-[var(--bg-tag)] border border-[var(--border-medium)] text-[var(--text-primary)] hover:text-[var(--text-heading)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
              title={t('nav.admin')}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t('nav.admin')}</span>
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('/login')}
              id="nav-login-btn"
              className="p-2 text-[var(--text-subtle)] hover:text-[var(--text-heading)] transition-colors rounded-full cursor-pointer"
              title={t('nav.admin_access')}
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Language Toggle: Aligned to the far right of the header */}
          <div className="pl-1 border-l border-[var(--border-subtle)]">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile menu trigger button only (all controls are inside the menu drawer) */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-heading)] rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[var(--text-heading)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b border-[var(--border-medium)] bg-[var(--bg-main)] px-4 pt-2 pb-6 space-y-3 overflow-hidden shadow-lg"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentBase === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full text-left px-3 py-2.5 text-sm uppercase tracking-wider font-medium flex items-center justify-between rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[var(--bg-tag)] text-[var(--text-heading)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface-hover)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}
            </div>

            {/* Mobile inFra AI Assistant Button */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInfra();
                }}
                id="mobile-nav-infra-trigger"
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] hover:bg-[var(--btn-secondary-hover)] transition-all cursor-pointer shadow-2xs active:scale-[0.99]"
              >
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-500" />
                  <span>{t('nav.meet_infra')}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                  inFra AI
                </span>
              </button>
            </div>

            {/* Mobile Utilities (Admin Portal + Language Toggle + Theme Toggle) */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between px-1">
              <button
                onClick={() => handleNavClick(user ? '/admin' : '/login')}
                className="text-xs font-mono uppercase text-[var(--text-muted)] hover:text-[var(--text-heading)] flex items-center gap-1.5 cursor-pointer py-1.5"
              >
                {user ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{language === 'id' ? 'Menuju Admin' : 'Go to Admin'}</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>{language === 'id' ? 'Portal Admin' : 'Admin Portal'}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle variant="pill" showLabel={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
