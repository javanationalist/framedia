import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  LogOut,
  FolderKanban,
  FileText,
  Users,
  HeartHandshake,
  Image as ImageIcon,
  Plus,
  Trash2,
  Edit2,
  Check,
  Eye,
  EyeOff,
  Copy,
  Upload,
  Database,
  RefreshCw,
  Save,
  CheckCircle2,
  AlertTriangle,
  X,
  Scale,
  Compass,
  LayoutDashboard,
  Menu,
  ArrowUpRight,
  Globe,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from '../components/common/ThemeToggle';
import { LanguageToggle } from '../components/common/LanguageToggle';
import { contentService } from '../services/contentService';
import { storageService } from '../services/storageService';
import { SUPABASE_SQL_SCHEMA } from '../services/sqlSchema';
import {
  PortfolioItem,
  Project,
  CreativePrinciple,
  Profile,
  AIEthicsItem,
  InclusivityItem,
  MediaItem,
} from '../types';

interface AdminPageProps {
  onNavigate: (path: string) => void;
  onOpenInfra: () => void;
}

type TabType =
  | 'overview'
  | 'portfolio'
  | 'project'
  | 'principles'
  | 'team'
  | 'ethics'
  | 'inclusivity'
  | 'content'
  | 'media'
  | 'supabase-sql';

interface DeleteModalState {
  title: string;
  itemName: string;
  onConfirm: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const { user, signOut, isSupabaseConnected } = useAuth();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // State collections
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [principles, setPrinciples] = useState<CreativePrinciple[]>([]);
  const [team, setTeam] = useState<Profile[]>([]);
  const [ethics, setEthics] = useState<AIEthicsItem[]>([]);
  const [inclusivity, setInclusivity] = useState<InclusivityItem[]>([]);
  const [siteContent, setSiteContent] = useState<Record<string, string>>({});
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [copiedSql, setCopiedSql] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Modal states for Create & Edit operations
  const [editingPortfolio, setEditingPortfolio] = useState<Partial<PortfolioItem> | null>(null);
  const [editingPrinciple, setEditingPrinciple] = useState<Partial<CreativePrinciple> | null>(null);
  const [editingTeam, setEditingTeam] = useState<Partial<Profile> | null>(null);
  const [editingEthics, setEditingEthics] = useState<Partial<AIEthicsItem> | null>(null);
  const [editingInclusivity, setEditingInclusivity] = useState<Partial<InclusivityItem> | null>(null);
  const [uploading, setUploading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dedicated Delete Confirmation Modal state
  const [deleteModal, setDeleteModal] = useState<DeleteModalState | null>(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    contentService.getPortfolio().then(setPortfolio);
    contentService.getProject().then(setProject);
    contentService.getPrinciples().then(setPrinciples);
    contentService.getTeam().then(setTeam);
    contentService.getAIEthics().then(setEthics);
    contentService.getInclusivity().then(setInclusivity);
    contentService.getSiteContent().then(setSiteContent);
    contentService.getMedia().then(setMedia);
  };

  const showNotification = (msg: string) => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3500);
  };

  // Portfolio Handlers
  const handleSavePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPortfolio || !editingPortfolio.title) return;
    await contentService.savePortfolioItem(editingPortfolio);
    setEditingPortfolio(null);
    showNotification('Portfolio item saved successfully');
    loadAllData();
  };

  const confirmDeletePortfolio = (item: PortfolioItem) => {
    setDeleteModal({
      title: 'Delete Portfolio Project',
      itemName: item.title,
      onConfirm: async () => {
        await contentService.deletePortfolioItem(item.id);
        setDeleteModal(null);
        showNotification('Portfolio item deleted');
        loadAllData();
      },
    });
  };

  const handleTogglePortfolioPublished = async (item: PortfolioItem) => {
    await contentService.savePortfolioItem({ ...item, published: !item.published });
    loadAllData();
  };

  // Flagship Project Handler
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;
    await contentService.saveProject(project);
    showNotification('Frametive Project updated successfully');
    loadAllData();
  };

  // Principle Handlers
  const handleSavePrinciple = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPrinciple) return;
    await contentService.savePrinciple(editingPrinciple);
    setEditingPrinciple(null);
    showNotification('Creative Principle saved');
    loadAllData();
  };

  const confirmDeletePrinciple = (pr: CreativePrinciple) => {
    setDeleteModal({
      title: 'Delete Creative Principle',
      itemName: `${String(pr.number).padStart(2, '0')} - ${pr.title}`,
      onConfirm: async () => {
        await contentService.deletePrinciple(pr.id);
        setDeleteModal(null);
        showNotification('Principle removed');
        loadAllData();
      },
    });
  };

  // Team Handlers
  const handleSaveTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTeam) return;
    await contentService.saveTeamMember(editingTeam);
    setEditingTeam(null);
    showNotification('Team profile saved');
    loadAllData();
  };

  const confirmDeleteTeam = (member: Profile) => {
    setDeleteModal({
      title: 'Delete Team Profile',
      itemName: member.name,
      onConfirm: async () => {
        await contentService.deleteTeamMember(member.id);
        setDeleteModal(null);
        showNotification('Team member removed');
        loadAllData();
      },
    });
  };

  // Ethics Handlers
  const handleSaveEthics = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEthics) return;
    await contentService.saveAIEthicsItem(editingEthics);
    setEditingEthics(null);
    showNotification('AI Ethics item saved');
    loadAllData();
  };

  const confirmDeleteEthics = (item: AIEthicsItem) => {
    setDeleteModal({
      title: 'Delete AI Ethics Standard',
      itemName: item.title,
      onConfirm: async () => {
        await contentService.deleteAIEthicsItem(item.id);
        setDeleteModal(null);
        showNotification('AI Ethics standard removed');
        loadAllData();
      },
    });
  };

  // Inclusivity Handlers
  const handleSaveInclusivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInclusivity) return;
    await contentService.saveInclusivityItem(editingInclusivity);
    setEditingInclusivity(null);
    showNotification('Inclusivity pillar saved');
    loadAllData();
  };

  const confirmDeleteInclusivity = (item: InclusivityItem) => {
    setDeleteModal({
      title: 'Delete Inclusivity Pillar',
      itemName: item.title,
      onConfirm: async () => {
        await contentService.deleteInclusivityItem(item.id);
        setDeleteModal(null);
        showNotification('Inclusivity pillar removed');
        loadAllData();
      },
    });
  };

  // Site Copy Update
  const handleUpdateSiteCopy = async (keyPath: string, value: string) => {
    await contentService.updateSiteContent(keyPath, value);
    setSiteContent((prev) => ({ ...prev, [keyPath]: value }));
    showNotification(`Updated ${keyPath}`);
  };

  // Media Upload Handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      await storageService.uploadFile(file);
      showNotification(`File "${file.name}" uploaded successfully`);
      loadAllData();
    } catch (err) {
      showNotification('Upload failed: ' + String(err));
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const confirmDeleteMedia = (med: MediaItem) => {
    setDeleteModal({
      title: 'Delete Media Asset',
      itemName: med.name,
      onConfirm: async () => {
        await contentService.deleteMediaItem(med.id);
        setDeleteModal(null);
        showNotification('Media asset deleted');
        loadAllData();
      },
    });
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  // Guard: if not authenticated
  if (!user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-[var(--bg-main)] text-[var(--text-primary)]">
        <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] text-center space-y-4 max-w-sm shadow-xl">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
          <h2 className="font-display text-xl font-bold text-[var(--text-heading)]">Access Restricted</h2>
          <p className="text-xs text-[var(--text-muted)]">
            Authentication required to access the Framedia Editorial CMS.
          </p>
          <button
            onClick={() => onNavigate('/login')}
            className="w-full py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  interface NavItem {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count?: number;
    badge?: string;
  }

  interface NavGroup {
    title: string;
    items: NavItem[];
  }

  const navGroups: NavGroup[] = [
    {
      title: 'Core Management',
      items: [
        { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'project', label: 'Flagship Project', icon: FileText },
        { id: 'portfolio', label: 'Portfolio Archive', icon: FolderKanban, count: portfolio.length },
        { id: 'team', label: 'Studio Team', icon: Users, count: team.length },
      ],
    },
    {
      title: 'Editorial Charters',
      items: [
        { id: 'principles', label: '10 Being Creative', icon: Compass, count: principles.length },
        { id: 'ethics', label: 'AI Ethics Charter', icon: Scale, count: ethics.length },
        { id: 'inclusivity', label: 'Inclusivity Policy', icon: HeartHandshake, count: inclusivity.length },
        { id: 'content', label: 'Site Copy & Localization', icon: FileText },
      ],
    },
    {
      title: 'Infrastructure & Assets',
      items: [
        { id: 'media', label: 'Media Library', icon: ImageIcon, count: media.length },
        { id: 'supabase-sql', label: 'Database Setup', icon: Database, badge: isSupabaseConnected ? 'Live' : 'Local' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors flex flex-col">
      <SEO title="Framedia Admin — Studio CMS" description="Editorial Content Management Dashboard" />

      {/* Global Top Notification */}
      {saveStatus && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-xl bg-emerald-600 text-white shadow-xl flex items-center gap-3 animate-slide-in text-xs font-mono font-medium">
          <CheckCircle2 className="w-4 h-4" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* -------------------------------------------------------------------------
          SINGLE PRIMARY ADMIN HEADER
          Clean, modern, spacious, professional. No duplication, no overlapping.
          ------------------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 w-full bg-[var(--bg-main)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Left: Mobile Menu Toggle + Admin Brand Identifier */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-heading)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              id="admin-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Brand Logo & CMS Badge */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/')}
                className="group flex flex-col text-left focus:outline-none cursor-pointer"
                id="admin-brand-home"
              >
                <span className="font-display text-base sm:text-lg font-black tracking-tight leading-none text-[var(--text-heading)]">
                  FRAMEDIA
                </span>
                <span className="font-display text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  CREATIVE
                </span>
              </button>

              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--bg-tag)] border border-[var(--border-medium)] text-[10px] font-mono font-medium text-[var(--text-muted)]">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>STUDIO CMS</span>
              </div>
            </div>
          </div>

          {/* Right: Actions, Sync Status, Toggles, User Profile & Sign Out */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Database Sync Status Pill */}
            <div
              className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                isSupabaseConnected
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
              }`}
              title={isSupabaseConnected ? 'Connected to live Supabase PostgreSQL database' : 'Local storage state (browser)'}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isSupabaseConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="font-medium text-[11px]">{isSupabaseConnected ? 'Supabase Connected' : 'Local Storage'}</span>
            </div>

            {/* View Live Website Button */}
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-heading)] transition-all cursor-pointer shadow-xs"
              id="admin-view-site-btn"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span className="hidden sm:inline">{t('admin.view_live')}</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </button>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <ThemeToggle variant="pill" showLabel={false} />

            {/* User Badge */}
            <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-[var(--border-subtle)]">
              <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-mono text-[11px] font-bold">
                {user.email ? user.email.charAt(0).toUpperCase() : 'A'}
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] truncate max-w-[130px]">
                {user.email}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={signOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-tag)] hover:bg-red-500/10 text-red-600 dark:text-red-400 border border-[var(--border-subtle)] hover:border-red-500/30 text-xs font-mono transition-colors cursor-pointer"
              title={t('admin.logout')}
              id="admin-logout-btn"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('admin.logout')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Mobile Navigation Backdrop */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />
        )}

        {/* Sidebar Navigation (Desktop Static + Mobile Drawer) */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-72 bg-[var(--bg-card)] border-r border-[var(--border-subtle)] p-5 space-y-6 shrink-0 transition-transform duration-300 md:static md:w-64 md:translate-x-0 md:bg-transparent md:border-r md:p-6 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0 top-18 shadow-2xl' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Mobile Drawer Header */}
          <div className="flex md:hidden items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Admin Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {navGroups.map((group, gIdx) => (
            <div key={`nav-group-${gIdx}`} className="space-y-1.5">
              <div className="px-3 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                {group.title}
              </div>
              <div className="space-y-0.5">
                {group.items.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id as TabType);
                        setIsMobileMenuOpen(false);
                      }}
                      id={`admin-tab-${tab.id}`}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold shadow-xs'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-card)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{tab.label}</span>
                      </div>
                      {tab.count !== undefined && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                            isActive
                              ? 'bg-[var(--btn-primary-fg)] text-[var(--btn-primary-bg)] font-bold'
                              : 'bg-[var(--bg-tag)] text-[var(--text-muted)]'
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                      {tab.badge && (
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold ${
                            isActive
                              ? 'bg-[var(--btn-primary-fg)] text-[var(--btn-primary-bg)]'
                              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          }`}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Support / Version Info */}
          <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2">
            <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] font-mono space-y-1">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span>CMS Core</span>
                <span className="text-[var(--text-heading)] font-semibold">v2.4.0</span>
              </div>
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span>Storage Engine</span>
                <span className={isSupabaseConnected ? 'text-emerald-500 font-medium' : 'text-amber-500 font-medium'}>
                  {isSupabaseConnected ? 'Supabase PG' : 'Local State'}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Tab Content Canvas */}
        <main className="flex-1 min-w-0 p-4 sm:p-8 lg:p-10 overflow-y-auto">
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--text-heading)]">
                  Control Center
                </h2>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Manage studio copy, visual archives, team profiles, and philosophical charters.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="p-5 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Database className={`w-5 h-5 ${isSupabaseConnected ? 'text-emerald-500' : 'text-amber-500'}`} />
                  <div>
                    <h3 className="font-display font-bold text-sm text-[var(--text-heading)]">
                      {isSupabaseConnected ? 'Live Supabase Database Connected' : 'Local Storage Mode'}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {isSupabaseConnected
                        ? 'Changes synchronize directly with your Supabase PostgreSQL tables.'
                        : 'Operating in preview mode. Data is stored locally in browser state.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={loadAllData}
                  className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
                  title="Reload all records"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-1">
                  <span className="text-xs font-mono text-[var(--text-muted)]">Portfolio</span>
                  <p className="text-2xl font-display font-bold text-[var(--text-heading)]">{portfolio.length}</p>
                </div>
                <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-1">
                  <span className="text-xs font-mono text-[var(--text-muted)]">Principles</span>
                  <p className="text-2xl font-display font-bold text-[var(--text-heading)]">{principles.length}</p>
                </div>
                <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-1">
                  <span className="text-xs font-mono text-[var(--text-muted)]">Team Members</span>
                  <p className="text-2xl font-display font-bold text-[var(--text-heading)]">{team.length}</p>
                </div>
                <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-1">
                  <span className="text-xs font-mono text-[var(--text-muted)]">Media Assets</span>
                  <p className="text-2xl font-display font-bold text-[var(--text-heading)]">{media.length}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-4">
                <h3 className="font-display font-bold text-sm text-[var(--text-heading)]">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('portfolio');
                      setEditingPortfolio({
                        title: '',
                        category: 'Branding',
                        description: '',
                        year: '2025',
                        thumbnail_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
                        published: true,
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Portfolio Work</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('project')}
                    className="px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit Flagship Project</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('media')}
                    className="px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-primary)] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Media File</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    Portfolio Works
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {portfolio.length} total projects in studio archive
                  </p>
                </div>

                <button
                  onClick={() =>
                    setEditingPortfolio({
                      title: '',
                      category: 'Branding',
                      description: '',
                      year: '2025',
                      thumbnail_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
                      published: true,
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Project</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {portfolio.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        className="w-16 h-12 rounded-lg object-cover shrink-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-[var(--text-heading)] text-sm">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-tag)] text-[var(--text-muted)]">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                          {item.year} • {item.client || 'Framedia'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleTogglePortfolioPublished(item)}
                        className={`p-2 rounded-lg border text-xs cursor-pointer ${
                          item.published
                            ? 'border-emerald-600/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-subtle)]'
                        }`}
                        title={item.published ? 'Published (Click to unpublish)' : 'Unpublished (Click to publish)'}
                      >
                        {item.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => setEditingPortfolio(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)] cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => confirmDeletePortfolio(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-red-500/10 text-red-500 border border-[var(--border-subtle)] cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FRAMETIVE FLAGSHIP PROJECT */}
          {activeTab === 'project' && project && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                  Flagship Project: Frametive
                </h2>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Update narrative copy, objectives, and cover imagery for /project.
                </p>
              </div>

              <form
                onSubmit={handleSaveProject}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Initiative Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => setProject({ ...project, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Subtitle / Tagline</label>
                    <input
                      type="text"
                      value={project.subtitle || ''}
                      onChange={(e) => setProject({ ...project, subtitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Hero Cover Image URL</label>
                    <input
                      type="url"
                      value={project.cover_image}
                      onChange={(e) => setProject({ ...project, cover_image: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Project Overview</label>
                    <textarea
                      rows={4}
                      value={project.description}
                      onChange={(e) => setProject({ ...project, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">The Concept</label>
                    <textarea
                      rows={3}
                      value={project.concept}
                      onChange={(e) => setProject({ ...project, concept: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Creative Process</label>
                    <textarea
                      rows={3}
                      value={project.process}
                      onChange={(e) => setProject({ ...project, process: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-muted)]">Technical Production</label>
                    <textarea
                      rows={3}
                      value={project.production}
                      onChange={(e) => setProject({ ...project, production: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-[var(--border-subtle)]">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Project Updates</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: 10 BEING CREATIVE */}
          {activeTab === 'principles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    10 Being Creative Principles
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {principles.length} core creative principles
                  </p>
                </div>

                <button
                  onClick={() =>
                    setEditingPrinciple({
                      number: principles.length + 1,
                      title: 'Be Visionary',
                      description: 'Formulate stories that endure beyond contemporary algorithmic noise.',
                      quote: 'To create is to bear witness.',
                      published: true,
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Principle</span>
                </button>
              </div>

              <div className="space-y-3">
                {principles.map((pr) => (
                  <div
                    key={pr.id}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display font-black text-xl text-emerald-600 dark:text-emerald-400">
                        {String(pr.number).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-[var(--text-heading)] text-sm">{pr.title}</h4>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-1">{pr.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingPrinciple(pr)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] cursor-pointer"
                        title="Edit Principle"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => confirmDeletePrinciple(pr)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-red-500 hover:bg-red-500/10 border border-[var(--border-subtle)] cursor-pointer"
                        title="Delete Principle"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TEAM */}
          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    Team Profiles
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {team.length} studio creative directors & specialists
                  </p>
                </div>

                <button
                  onClick={() =>
                    setEditingTeam({
                      name: '',
                      email: 'collaborator@framedia.creative',
                      role: 'Creative Technologist',
                      bio: '',
                      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
                      skills: ['Design Systems', 'Audio'],
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Member</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar_url}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0 border border-[var(--border-subtle)]"
                      />
                      <div>
                        <h4 className="font-display font-bold text-[var(--text-heading)] text-sm">{member.name}</h4>
                        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{member.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingTeam(member)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] cursor-pointer"
                        title="Edit Member"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => confirmDeleteTeam(member)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-red-500 hover:bg-red-500/10 border border-[var(--border-subtle)] cursor-pointer"
                        title="Delete Member"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: AI ETHICS */}
          {activeTab === 'ethics' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    AI Ethics Charter
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {ethics.length} ethical standards
                  </p>
                </div>

                <button
                  onClick={() =>
                    setEditingEthics({
                      title: 'Living Creator Royalties',
                      content: 'Ensuring financial restitution and ongoing attribution for human authors whose work informs creative models.',
                      key_points: ['Fair compensation', 'Contractual guarantees'],
                      sort_order: ethics.length + 1,
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Standard</span>
                </button>
              </div>

              <div className="space-y-3">
                {ethics.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-display font-bold text-[var(--text-heading)] text-sm">{item.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-1">{item.content}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingEthics(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] cursor-pointer"
                        title="Edit Standard"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => confirmDeleteEthics(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-red-500 hover:bg-red-500/10 border border-[var(--border-subtle)] cursor-pointer"
                        title="Delete Standard"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: INCLUSIVITY */}
          {activeTab === 'inclusivity' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    Inclusivity Framework
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {inclusivity.length} inclusivity & accessibility pillars
                  </p>
                </div>

                <button
                  onClick={() =>
                    setEditingInclusivity({
                      title: 'Neurodivergent Affordances',
                      content: 'Engineering calm visual sensory environments with reduced cognitive overload.',
                      pillars: ['Predictable navigation', 'Custom motion toggles'],
                      sort_order: inclusivity.length + 1,
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Pillar</span>
                </button>
              </div>

              <div className="space-y-3">
                {inclusivity.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-display font-bold text-[var(--text-heading)] text-sm">{item.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-1">{item.content}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingInclusivity(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] cursor-pointer"
                        title="Edit Pillar"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => confirmDeleteInclusivity(item)}
                        className="p-2 rounded-lg bg-[var(--bg-surface)] text-red-500 hover:bg-red-500/10 border border-[var(--border-subtle)] cursor-pointer"
                        title="Delete Pillar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SITE CONTENT */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                  Site Copy Settings
                </h2>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Modify dynamic global headings, hero texts, and contact details.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] space-y-6">
                {[
                  {
                    key: 'hero.description',
                    label: 'Hero Main Tagline',
                    type: 'textarea',
                  },
                  {
                    key: 'agency.email',
                    label: 'Contact Email',
                    type: 'text',
                  },
                  {
                    key: 'agency.locations',
                    label: 'Studio Locations',
                    type: 'text',
                  },
                ].map((field) => (
                  <div key={field.key} className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
                      {field.label} ({field.key})
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows={3}
                        value={siteContent[field.key] || ''}
                        onChange={(e) => handleUpdateSiteCopy(field.key, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                      />
                    ) : (
                      <input
                        type="text"
                        value={siteContent[field.key] || ''}
                        onChange={(e) => handleUpdateSiteCopy(field.key, e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: MEDIA LIBRARY */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                    Media Storage Library
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    {media.length} files in media storage
                  </p>
                </div>

                <label className="px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer self-start shadow-xs">
                  <Upload className="w-4 h-4" />
                  <span>{uploading ? 'Uploading...' : 'Upload File'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {media.map((med) => (
                  <div
                    key={med.id}
                    className="group relative rounded-xl overflow-hidden border border-[var(--border-medium)] bg-[var(--bg-card)] aspect-square flex flex-col justify-between"
                  >
                    <img
                      src={med.url}
                      alt={med.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <button
                          onClick={() => confirmDeleteMedia(med)}
                          className="p-1.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white cursor-pointer"
                          title="Delete media"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <p className="text-[10px] font-mono text-zinc-200 truncate">{med.name}</p>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(med.url);
                            showNotification('Image URL copied to clipboard');
                          }}
                          className="text-[10px] font-mono text-emerald-400 hover:underline mt-0.5 block cursor-pointer"
                        >
                          Copy URL
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: DATABASE SETUP */}
          {activeTab === 'supabase-sql' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase text-[var(--text-heading)]">
                  Supabase SQL Setup
                </h2>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Schema, tables, and Row Level Security rules
                </p>
              </div>

              {/* Database Schema Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-[var(--text-primary)] leading-relaxed space-y-1">
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400 block uppercase tracking-wider text-[11px]">
                  {language === 'id' ? 'Kepatuhan & Penafian Skema Basis Data' : 'Database Schema Compliance Disclaimer'}
                </span>
                <p className="font-light italic text-[var(--text-muted)]">
                  {t('admin.database_schema_disclaimer')}
                </p>
              </div>

              {/* SQL Code View */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)]">
                    SQL Schema
                  </span>
                  <button
                    onClick={handleCopySql}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-xs"
                  >
                    {copiedSql ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Schema</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-medium)] overflow-x-auto max-h-[500px]">
                  <pre className="text-[11px] font-mono text-[var(--text-primary)] leading-relaxed">
                    {SUPABASE_SQL_SCHEMA}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* =========================================================================
          MODALS FOR CRUD OPERATIONS (PORTFOLIO, PRINCIPLES, TEAM, ETHICS, INCLUSIVITY)
          ========================================================================= */}

      {/* 1. PORTFOLIO MODAL */}
      {editingPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-2xl my-8 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-6 animate-scale-in">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-display font-bold text-lg text-[var(--text-heading)]">
                {editingPortfolio.id ? 'Edit Portfolio Project' : 'New Portfolio Project'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingPortfolio(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePortfolio} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={editingPortfolio.title || ''}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Category *</label>
                  <input
                    type="text"
                    required
                    value={editingPortfolio.category || 'Branding'}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Year</label>
                  <input
                    type="text"
                    value={editingPortfolio.year || '2025'}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Client / Institution</label>
                  <input
                    type="text"
                    value={editingPortfolio.client || ''}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, client: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Thumbnail Image URL *</label>
                  <input
                    type="url"
                    required
                    value={editingPortfolio.thumbnail_url || ''}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, thumbnail_url: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Description</label>
                  <textarea
                    rows={3}
                    value={editingPortfolio.description || ''}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="portfolio-pub-check"
                    checked={editingPortfolio.published ?? true}
                    onChange={(e) => setEditingPortfolio({ ...editingPortfolio, published: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="portfolio-pub-check" className="text-xs font-mono text-[var(--text-primary)] cursor-pointer">
                    Publish immediately to public portfolio
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingPortfolio(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase cursor-pointer hover:opacity-90 transition-all shadow-xs"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. PRINCIPLE MODAL */}
      {editingPrinciple && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-lg my-8 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-6 animate-scale-in">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-display font-bold text-lg text-[var(--text-heading)]">
                {editingPrinciple.id ? 'Edit Creative Principle' : 'New Creative Principle'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingPrinciple(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePrinciple} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Number</label>
                  <input
                    type="number"
                    value={editingPrinciple.number || 1}
                    onChange={(e) => setEditingPrinciple({ ...editingPrinciple, number: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingPrinciple.title || ''}
                    onChange={(e) => setEditingPrinciple({ ...editingPrinciple, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Description</label>
                  <textarea
                    rows={3}
                    value={editingPrinciple.description || ''}
                    onChange={(e) => setEditingPrinciple({ ...editingPrinciple, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Manifesto Quote</label>
                  <input
                    type="text"
                    value={editingPrinciple.quote || ''}
                    onChange={(e) => setEditingPrinciple({ ...editingPrinciple, quote: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingPrinciple(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase cursor-pointer hover:opacity-90 transition-all shadow-xs"
                >
                  Save Principle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. TEAM MODAL */}
      {editingTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-lg my-8 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-6 animate-scale-in">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-display font-bold text-lg text-[var(--text-heading)]">
                {editingTeam.id ? 'Edit Team Profile' : 'New Team Profile'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingTeam(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTeam} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={editingTeam.name || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Role Title *</label>
                  <input
                    type="text"
                    required
                    value={editingTeam.role || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Email</label>
                  <input
                    type="email"
                    value={editingTeam.email || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Avatar URL</label>
                  <input
                    type="url"
                    value={editingTeam.avatar_url || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, avatar_url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-mono text-[var(--text-muted)]">Bio</label>
                  <textarea
                    rows={3}
                    value={editingTeam.bio || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase cursor-pointer hover:opacity-90 transition-all shadow-xs"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. ETHICS MODAL */}
      {editingEthics && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-lg my-8 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-6 animate-scale-in">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-display font-bold text-lg text-[var(--text-heading)]">
                {editingEthics.id ? 'Edit Ethics Standard' : 'New Ethics Standard'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingEthics(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEthics} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Standard Title *</label>
                  <input
                    type="text"
                    required
                    value={editingEthics.title || ''}
                    onChange={(e) => setEditingEthics({ ...editingEthics, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Content</label>
                  <textarea
                    rows={4}
                    value={editingEthics.content || ''}
                    onChange={(e) => setEditingEthics({ ...editingEthics, content: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingEthics(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase cursor-pointer hover:opacity-90 transition-all shadow-xs"
                >
                  Save Standard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. INCLUSIVITY MODAL */}
      {editingInclusivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-lg my-8 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-6 animate-scale-in">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-display font-bold text-lg text-[var(--text-heading)]">
                {editingInclusivity.id ? 'Edit Inclusivity Pillar' : 'New Inclusivity Pillar'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingInclusivity(null)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveInclusivity} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Pillar Title *</label>
                  <input
                    type="text"
                    required
                    value={editingInclusivity.title || ''}
                    onChange={(e) => setEditingInclusivity({ ...editingInclusivity, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)]">Content</label>
                  <textarea
                    rows={4}
                    value={editingInclusivity.content || ''}
                    onChange={(e) => setEditingInclusivity({ ...editingInclusivity, content: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setEditingInclusivity(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-semibold text-xs font-mono uppercase cursor-pointer hover:opacity-90 transition-all shadow-xs"
                >
                  Save Pillar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. GLOBAL DELETE CONFIRMATION MODAL */}
      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="w-full max-w-md p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-2xl space-y-5 animate-scale-in">
            <div className="flex items-center gap-3 text-red-500">
              <div className="p-2 rounded-full bg-red-500/10">
                <AlertTriangle className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-heading)]">
                {deleteModal.title}
              </h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Are you sure you want to permanently delete <span className="font-semibold text-[var(--text-heading)] font-mono">"{deleteModal.itemName}"</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteModal(null)}
                className="px-4 py-2 rounded-xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] text-xs font-mono uppercase cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={deleteModal.onConfirm}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs font-mono uppercase cursor-pointer transition-colors shadow-xs"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
