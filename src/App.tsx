import React, { useState, useEffect, useCallback } from 'react';
import { Bot } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { getBasePath, buildLocalizedPath } from './utils/languageRouting';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { InfraChatModal } from './components/infra/InfraChatModal';
import { LandingPage } from './pages/LandingPage';
import { ProjectPage } from './pages/ProjectPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PrinciplesPage } from './pages/PrinciplesPage';
import { TeamPage } from './pages/TeamPage';
import { EthicsPage } from './pages/EthicsPage';
import { InclusivityPage } from './pages/InclusivityPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';

function AppContent() {
  const { language } = useLanguage();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
  });
  const [isInfraOpen, setIsInfraOpen] = useState(false);

  // Synchronize path state on browser back/forward and language toggle popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route-aware automatic scroll restoration
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPath]);

  // Handle internal navigation while maintaining the currently selected language
  const handleNavigate = useCallback(
    (targetPath: string) => {
      const localized = buildLocalizedPath(targetPath, language);
      setCurrentPath(localized);
      window.history.pushState({}, '', localized);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    [language]
  );

  const baseRoute = getBasePath(currentPath);

  const renderCurrentPage = () => {
    switch (baseRoute) {
      case '/':
        return <LandingPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/project':
        return <ProjectPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/portfolio':
        return <PortfolioPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/10beingcreative':
      case '/principles':
        return <PrinciplesPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/team':
        return <TeamPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/aiethics':
      case '/ethics':
        return <EthicsPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/inclusivity':
        return <InclusivityPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      case '/login':
        return <LoginPage onNavigate={handleNavigate} />;
      case '/admin':
        return <AdminPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
      default:
        return <LandingPage onNavigate={handleNavigate} onOpenInfra={() => setIsInfraOpen(true)} />;
    }
  };

  const isAdminRoute = baseRoute === '/admin';

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      {/* Navigation Bar (shown on all public pages, hidden on admin to prevent duplicate headers) */}
      {!isAdminRoute && (
        <Navbar
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenInfra={() => setIsInfraOpen(true)}
        />
      )}

      {/* Main Routed Content */}
      <main className="flex-1 flex flex-col">
        {renderCurrentPage()}
      </main>

      {/* Footer (shown on public pages) */}
      {!isAdminRoute && (
        <Footer
          onNavigate={handleNavigate}
          onOpenInfra={() => setIsInfraOpen(true)}
        />
      )}

      {/* Global Floating inFra Assistant Button (accessible from every page) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsInfraOpen(true)}
          id="global-infra-floating-btn"
          className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-zinc-900 border border-zinc-700/90 hover:border-zinc-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          aria-label="Open inFra AI Assistant"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <Bot className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-display font-bold text-xs uppercase tracking-wider">
            inFra
          </span>
        </button>
      </div>

      {/* inFra Chat Modal Dialog */}
      <InfraChatModal
        isOpen={isInfraOpen}
        onClose={() => setIsInfraOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
