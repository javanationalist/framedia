import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, AlertCircle, KeyRound } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { LoginDecoration } from '../components/decorations/LoginDecoration';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

interface LoginPageProps {
  onNavigate: (path: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const { signIn, signInAsDemoAdmin, isSupabaseConnected, user } = useAuth();
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('admin@framedia.creative');
  const [password, setPassword] = useState('framedia2025');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // If already authenticated, allow immediate redirect
  if (user) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4 bg-[var(--bg-main)] relative overflow-hidden">
        <LoginDecoration />
        <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] text-center space-y-4 max-w-sm shadow-xl relative z-10">
          <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto" />
          <h2 className="font-display text-xl font-bold text-[var(--text-heading)]">
            {t('login.auth_success')}
          </h2>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            {t('login.auth_as')} {user.email}
          </p>
          <button
            onClick={() => onNavigate('/admin')}
            className="w-full py-3 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-xs"
          >
            {t('login.enter_dashboard')}
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn(email, password);
    setLoading(false);

    if (res.success) {
      onNavigate('/admin');
    } else {
      setError(
        res.error ||
          (language === 'id'
            ? 'Otentikasi gagal. Silakan periksa kredensial Anda.'
            : 'Authentication failed. Please verify credentials.')
      );
    }
  };

  const handleDemoLogin = () => {
    signInAsDemoAdmin();
    onNavigate('/admin');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors relative overflow-hidden">
      <SEO
        title="Admin Gateway — Framedia Creative"
        description="Secure authenticated portal for Framedia Creative editorial content management."
      />

      <LoginDecoration />

      <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-medium)] flex items-center justify-center text-emerald-500 mx-auto shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
            {t('login.title')}
          </h1>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            {isSupabaseConnected
              ? (language === 'id' ? 'Terhubung ke Autentikasi Supabase' : 'Connected to Supabase Authentication')
              : (language === 'id' ? 'Mode Demo: Gateway Autentikasi Lokal' : 'Demo Mode: Local Authentication Gateway')}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
              {t('login.email')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@framedia.creative"
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-xs font-mono text-[var(--text-primary)] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
              {t('login.password')}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-xs font-mono text-[var(--text-primary)] focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <span>{loading ? t('login.authenticating') : t('login.enter_dashboard')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Access Button */}
        <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            <span>{language === 'id' ? 'Pratinjau Instan' : 'Instant Preview Mode'}</span>
            <span>{language === 'id' ? 'Pra-konfigurasi' : 'Pre-configured'}</span>
          </div>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2.5 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <KeyRound className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t('login.demo_btn')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
