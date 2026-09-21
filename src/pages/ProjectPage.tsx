import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bot, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizeProject } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { ProjectDecoration } from '../components/decorations/ProjectDecoration';
import { Project } from '../types';

interface ProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ onNavigate, onOpenInfra }) => {
  const { language, t } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    contentService.getProject().then(setProject);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--text-muted)] font-mono text-sm bg-[var(--bg-main)]">
        {t('project.loading')}
      </div>
    );
  }

  const localizedProject = localizeProject(project, language);

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('project.seo_title')}
        description={t('project.seo_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <ProjectDecoration />

      <div className="relative z-10">
        {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('project.back_home')}</span>
            </button>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              {localizedProject.title}
            </h1>

            {localizedProject.subtitle && (
              <p className="font-editorial text-2xl sm:text-3xl text-[var(--text-primary)] italic font-light">
                {localizedProject.subtitle}
              </p>
            )}

            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-3xl pt-2 font-light">
              {localizedProject.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Display */}
      <section className="w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="overflow-hidden rounded-2xl border border-[var(--border-medium)] shadow-md">
            <img
              src={localizedProject.cover_image}
              alt={localizedProject.title}
              className="w-full max-h-[640px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Objectives & Concept */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Objectives Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  {t('project.objectives')}
                </h2>
              </div>

              <div className="space-y-4">
                {localizedProject.objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-start gap-4 shadow-sm"
                  >
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Concept Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  {t('project.concept')}
                </h2>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-6 shadow-sm">
                <p className="text-base text-[var(--text-muted)] leading-relaxed font-light">
                  {localizedProject.concept}
                </p>
                <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">
                    {language === 'id' ? 'Pernyataan Kuratorial Pameran' : 'Exhibition Curatorial Note'}
                  </span>
                  <p className="font-editorial text-[var(--text-primary)] italic text-base leading-relaxed">
                    "{t('project.curatorial_statement_lead')}"
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{language === 'id' ? 'Protokol & Metodologi Frametive' : 'Frametive Adaptive Methodology'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-light">
                    {t('project.frametive_methodology_disclaimer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process & Production */}
      <section className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
              {t('project.process_prod')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                {t('project.phase1_tag')}
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-heading)]">
                {t('project.phase1_title')}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                {localizedProject.process}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                {t('project.phase2_tag')}
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-heading)]">
                {t('project.phase2_title')}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                {localizedProject.production}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
              {t('project.gallery_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedProject.gallery_images.map((imgUrl, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[var(--border-medium)] aspect-[4/3] group shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Frametive Documentation ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline & Outcomes */}
      <section className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Timeline Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  {t('project.timeline_title')}
                </h2>
              </div>

              <div className="space-y-6">
                {localizedProject.timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex flex-col space-y-2 relative shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-[var(--text-heading)] text-base">
                        {item.phase}
                      </h4>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  {t('project.outcomes_title')}
                </h2>
              </div>

              <div className="space-y-4">
                {localizedProject.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-start gap-3.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-primary)] leading-relaxed font-medium">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credits / Team */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
              {t('project.ensemble_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedProject.team_credits.map((credit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex flex-col justify-between shadow-sm"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-medium">
                  {credit.role}
                </span>
                <span className="font-display text-xl font-bold text-[var(--text-heading)] mt-2">
                  {credit.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA with inFra Prompt */}
      <section className="py-24 bg-[var(--bg-main-subtle)] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
            {t('project.cta_title')}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {t('project.cta_desc')}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInfra}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-emerald-500" />
              <span>{t('project.cta_btn')}</span>
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ProjectPage;
