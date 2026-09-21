import React, { useState } from 'react';
import { Mail, MapPin, Bot, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { AboutDecoration } from '../components/decorations/AboutDecoration';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Creative Production',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const capabilities = language === 'id' ? [
    {
      title: 'Produksi Kreatif',
      services: ['Sinematografi 16mm & Format Besar', 'Tata Suara Spasial & Ambisonik', 'Fabrikasi & Tata Pameran', 'Pengarsipan Budaya Multi-Kamera'],
    },
    {
      title: 'Komunikasi Visual',
      services: ['Sistem Tipografi Kustom', 'Desain Monograf Editorial', 'Identitas Visual Institusional', 'Pengarahan Seni & Cetak Grafis'],
    },
    {
      title: 'Pengalaman Digital',
      services: ['Sistem WebGL & WebGPU Taktil', 'Arsitektur Universal WCAG AA/AAA', 'Arsip Interaktif & Portal Budaya', 'Platform Konten Editorial Headless'],
    },
    {
      title: 'Strategi Media',
      services: ['Pemosisian Narasi & Arsitektur Nada', 'Kerangka Kerja Mendengarkan Budaya', 'Sindikasi Institusional Selektif', 'Audit Resonansi Audiens'],
    },
    {
      title: 'AI & Praktik Kreatif',
      services: ['Small Language Models Kustom', 'Perangkat Keras Edge Zero-Telemetry', 'Restorasi Audio Generatif Etis', 'Tata Kelola Etika AI Institusional'],
    },
  ] : [
    {
      title: 'Creative Production',
      services: ['16mm & Large Format Cinematography', 'Spatial & Ambisonic Sound Design', 'Exhibition Staging & Fabrication', 'Multi-Camera Cultural Archiving'],
    },
    {
      title: 'Visual Communication',
      services: ['Bespoke Typographic Systems', 'Editorial Monograph Design', 'Institutional Visual Identity', 'Art Direction & Printmaking'],
    },
    {
      title: 'Digital Experiences',
      services: ['Tactile WebGL & WebGPU Systems', 'WCAG AA/AAA Universal Architectures', 'Interactive Archives & Cultural Portals', 'Headless Editorial Content Platforms'],
    },
    {
      title: 'Media Strategy',
      services: ['Narrative Positioning & Tone Architecture', 'Cultural Listening Frameworks', 'Selective Institutional Syndication', 'Audience Resonance Auditing'],
    },
    {
      title: 'AI & Creative Practice',
      services: ['Bespoke Small Language Models', 'Zero-Telemetry Edge Hardware', 'Ethical Generative Audio Restorations', 'Institutional AI Ethics Governance'],
    },
  ];

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('seo.about_title')}
        description={t('seo.about_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <AboutDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              {t('about.title')}
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[var(--text-primary)] italic font-light leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                {t('about.mission_title')}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[var(--text-heading)]">
                {t('about.mission_heading')}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                {t('about.mission_body')}
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                {t('about.vision_title')}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[var(--text-heading)]">
                {t('about.vision_heading')}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                {t('about.vision_body')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Capabilities */}
      <section className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
              {t('about.services_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-[var(--text-heading)]">
                    {cap.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-muted)]">0{idx + 1}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-[var(--text-primary)]">
                  {cap.services.map((srv, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Contact Section */}
      <section className="py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  {t('about.contact_heading')}
                </h2>
              </div>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">
                {t('about.contact_desc')}
              </p>

              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)] text-sm">
                <div className="flex items-center gap-3 text-[var(--text-primary)]">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-mono">hello@framedia.creative</span>
                </div>
                <div className="flex items-start gap-3 text-[var(--text-primary)]">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <span className="leading-relaxed whitespace-pre-line">
                    {t('about.locations')}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                  <Bot className="w-4 h-4" />
                  <span>{t('about.scoping_title')}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t('about.scoping_desc')}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenInfra}
                    className="text-xs font-mono uppercase text-[var(--text-heading)] hover:text-emerald-600 dark:hover:text-emerald-400 underline cursor-pointer"
                  >
                    {t('about.scoping_btn')}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h3 className="font-display text-2xl font-bold text-[var(--text-heading)]">
                      {t('about.form_success_title')}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto leading-relaxed">
                      {t('about.form_success_desc')}
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 underline mt-4 cursor-pointer"
                    >
                      {t('about.form_reset')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
                          {t('about.form_name')}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('about.form_name_placeholder')}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
                          {t('about.form_email')}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('about.form_email_placeholder')}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
                        {t('about.form_discipline')}
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                      >
                        <option value="Creative Production">{t('about.form_discipline_opt1')}</option>
                        <option value="Visual Communication">{t('about.form_discipline_opt2')}</option>
                        <option value="Digital Experiences">{t('about.form_discipline_opt3')}</option>
                        <option value="Media Strategy">{t('about.form_discipline_opt4')}</option>
                        <option value="AI & Creative Practice">{t('about.form_discipline_opt5')}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
                        {t('about.form_message')}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('about.form_message_placeholder')}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] focus:border-[var(--text-heading)] text-sm text-[var(--text-primary)] focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t('about.form_submit')}</span>
                    </button>

                    <div className="pt-2 text-[11px] text-[var(--text-muted)] flex items-start gap-2.5 leading-relaxed bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t('contact.custom_nda_clause')}</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;
