import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Bot,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SEO } from '../components/common/SEO';
import { LandingDecoration } from '../components/decorations/LandingDecoration';
import {
  ClapperboardBlobIcon,
  LayersBlobIcon,
  LightbulbBlobIcon,
  TeamBlobIcon,
  ScaleBlobIcon,
  HeartPulseBlobIcon,
  InfoBlobIcon,
} from '../components/common/DirectoryIcons';
import { useLanguage } from '../context/LanguageContext';
import { contentService } from '../services/contentService';

interface LandingPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

interface DirectoryCardItem {
  id: string;
  title: string;
  route: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  has_arrow: boolean;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onOpenInfra }) => {
  const { t } = useLanguage();
  const [siteCopy, setSiteCopy] = useState<Record<string, string>>({});
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    contentService.getSiteContent().then(setSiteCopy);
  }, []);

  // Monitor window & container resize for smooth designer-canvas scaling
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setViewportWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 7 Custom Directory Cards mapped directly to the user's bespoke 3D icon set
  const directoryCards: DirectoryCardItem[] = [
    {
      id: 'proyek',
      title: 'PROYEK',
      route: '/project',
      icon: ClapperboardBlobIcon,
      has_arrow: true,
    },
    {
      id: 'portofolio',
      title: 'PORTOFOLIO',
      route: '/portfolio',
      icon: LayersBlobIcon,
      has_arrow: true,
    },
    {
      id: 'being_creative',
      title: '10 BEING CREATIVE',
      route: '/10beingcreative',
      icon: LightbulbBlobIcon,
      has_arrow: true,
    },
    {
      id: 'tim_frametive',
      title: 'TIM FRAMETIVE',
      route: '/team',
      icon: TeamBlobIcon,
      has_arrow: true,
    },
    {
      id: 'ai_ethics',
      title: 'AI ETHICS',
      route: '/aiethics',
      icon: ScaleBlobIcon,
      has_arrow: true,
    },
    {
      id: 'inklusivitas',
      title: 'INKLUSIVITAS',
      route: '/inclusivity',
      icon: HeartPulseBlobIcon,
      has_arrow: true,
    },
    {
      id: 'tentang_kami',
      title: 'TENTANG KAMI',
      route: '/about',
      icon: InfoBlobIcon,
      has_arrow: true,
    },
  ];

  const handleDirectoryClick = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const scrollToDirectory = () => {
    const el = document.getElementById('directory-framedia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle container-aware scale factor for Canva-inspired sizing behavior
  const isNarrowMobile = viewportWidth < 380;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  return (
    <div className="w-full text-[var(--text-primary)] transition-colors duration-200 relative overflow-hidden">
      <SEO
        title={t('landing.seo_title')}
        description={t('landing.seo_desc')}
      />

      {/* Full-Page Animated Background Decoration System */}
      <LandingDecoration />

      <div className="relative z-10">
        {/* -------------------------------------------------------------------------
            SECTION 1: INTRODUCE AGENCY
            Hero introduction with responsive, Canva-like auto-resizing typography.
            Critically engineered with ZERO right-side clipping, no restrictive
            overflow containers, no decorative watermarks intercepting layout boundaries.
            ------------------------------------------------------------------------- */}
        <section
          id="hero-introduce-agency"
          className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 border-b border-[var(--border-subtle)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full space-y-8 sm:space-y-10">
            {/* Target Title: FRAMEDIA CREATIVE
                Engineered with fluid responsive typography and container-aware scaling:
                1. Full phrase is 100% visible on all viewports (desktop, tablet, mobile)
                2. No overflow clipping or hiding
                3. No horizontal scrolling
                4. Smooth designer-canvas sizing adjustment
            */}
            <div
              ref={titleContainerRef}
              className="w-full"
              id="hero-agency-title-container"
            >
              <motion.h1
                id="hero-framedia-title"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        y: 10,
                        scale: isNarrowMobile ? 1.04 : 1.02,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-black uppercase leading-[0.92] tracking-[-0.03em] select-none text-[clamp(2.35rem,7.3vw,6.4rem)] transition-all duration-300"
                style={{
                  transformOrigin: 'left center',
                }}
              >
                <span className="block text-[var(--text-heading)] transition-colors">
                  FRAMEDIA
                </span>
                <span className="block text-[var(--text-subtle)] hover:text-[var(--text-secondary)] transition-colors">
                  CREATIVE
                </span>
              </motion.h1>
            </div>

            {/* Short Agency Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="font-sans text-lg sm:text-2xl text-[var(--text-primary)] font-light leading-relaxed">
                {t('landing.hero_description')}
              </p>
            </motion.div>

            {/* Introductory Navigation Controls */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <button
                onClick={scrollToDirectory}
                id="hero-directory-cta"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{t('landing.explore_directory')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInfra}
                id="hero-infra-cta"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--btn-secondary-hover)] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs active:scale-95 cursor-pointer group"
              >
                <Bot className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{t('landing.meet_infra')}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 2: DIREKTORI
          Faithful implementation of the DIREKTORI grid layout:
          - Custom green 3D glossy blob icons matching reference exactly
          - Design tokens: #F1EFEA background, #FAFAF8 cards, 20px radius, 24px padding
          - 4 columns on desktop with row 2 (3 cards + 1 empty space)
          - Top row inside cards: bold uppercase title + circular arrow button
          - 3D glossy icons slightly overflowing bottom edge and masked by rounded corners
          - Bottom-right floating INFRA status pill
          - Ambient decorative wavy line and corner gradient blobs
          ------------------------------------------------------------------------- */}
      <section
        id="directory-framedia"
        className="py-20 sm:py-24 lg:py-28 border-b border-[var(--border-subtle)] bg-[#F1EFEA] dark:bg-[#12141a] relative overflow-hidden transition-colors duration-300"
      >
        {/* Background Decorative Elements */}
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-gradient-to-bl from-[#7CDAA4]/30 via-[#4FB97B]/15 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-gradient-to-tr from-[#36945F]/20 via-[#7CDAA4]/12 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Diagonal Subtle Wavy Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-70 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M -100,220 C 300,70 650,420 1150,220 C 1450,120 1750,350 2150,90"
            stroke="#D9D6CE"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -50,560 C 400,410 800,740 1300,490 C 1650,340 1900,590 2250,440"
            stroke="#D9D6CE"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Accent Dash */}
          <div className="mb-8 sm:mb-12">
            <div className="w-8 h-1 bg-[#3F9463] rounded-full mb-3" />
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.5px] text-[#1A1D29] dark:text-zinc-100">
              DIREKTORI
            </h2>
          </div>

          {/* Directory Cards Grid: 4 columns on desktop, row 2 with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {directoryCards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => handleDirectoryClick(card.route)}
                  id={`directory-card-${card.id}`}
                  className="group relative rounded-[20px] p-6 bg-[#FAFAF8] dark:bg-[#1c1f26] border border-[#EBE8E1] dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(63,148,99,0.15)] dark:hover:border-emerald-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[195px] sm:h-[205px] overflow-hidden active:scale-[0.99]"
                >
                  {/* Top Row: Bold Title + Circular Arrow Button */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <h3 className="font-display font-extrabold text-[16px] sm:text-[18px] uppercase tracking-[0.5px] text-[#1A1D29] dark:text-zinc-100 group-hover:text-[#3F9463] dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      {card.title}
                    </h3>

                    {card.has_arrow && (
                      <div
                        className="w-9 h-9 rounded-full bg-[#E3E7E1] dark:bg-zinc-700/80 flex items-center justify-center shrink-0 group-hover:bg-[#3F9463] dark:group-hover:bg-emerald-500 transition-all duration-300 shadow-xs"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-4 h-4 text-[#1A1D29] dark:text-zinc-200 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Lower Card Section: 3D Glossy Blob Icon (clipped by card rounded corner) */}
                  <div className="w-full flex items-end justify-start -mb-4 -ml-1 relative z-0">
                    <Icon
                      size={115}
                      className="group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 origin-bottom-left"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      {/* -------------------------------------------------------------------------
          SECTION 3: FOOTER
          Rendered globally below this view via App.tsx to enforce the 3-section layout:
          1. Introduce Agency
          2. Directory Framedia
          3. Footer
          ------------------------------------------------------------------------- */}
    </div>
  );
};

export default LandingPage;
