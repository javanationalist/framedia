import React, { useState, useEffect } from 'react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizeTeam } from '../data/localizedData';
import { contentService } from '../services/contentService';
import { TeamDecoration } from '../components/decorations/TeamDecoration';
import { Profile } from '../types';

interface TeamPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [team, setTeam] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getTeam().then((data) => {
      setTeam(data);
      setLoading(false);
    });
  }, []);

  const localizedTeam = localizeTeam(team, language);

  return (
    <div className="w-full text-[var(--text-primary)] bg-[var(--bg-main)] min-h-screen transition-colors relative overflow-hidden">
      <SEO
        title={t('seo.team_title')}
        description={t('seo.team_desc')}
      />

      {/* Unique Page-Specific SVG Background Decoration System */}
      <TeamDecoration />

      <div className="relative z-10">
        {/* Header */}
      <section className="pt-20 pb-20 border-b border-[var(--border-subtle)] bg-[var(--bg-main-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-tight">
              {t('team.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-24 text-center font-mono text-xs uppercase text-[var(--text-muted)]">
              {t('team.loading')}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {localizedTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Avatar / Portrait */}
                    <div className="overflow-hidden aspect-[4/5] bg-[var(--bg-surface)] relative">
                      <img
                        src={member.avatar_url}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                        {member.role}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[var(--text-heading)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                          {member.email}
                        </p>
                      </div>

                      <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                        {member.bio}
                      </p>

                      {/* Skills Tags */}
                      {member.skills && member.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {member.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leadership Inquiry Section */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
            {t('team.inquiry_title')}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {t('team.inquiry_desc')}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/about')}
              className="px-7 py-3.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {t('team.inquiry_btn')}
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default TeamPage;
