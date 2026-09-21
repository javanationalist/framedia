import { getSupabase, isSupabaseConfigured } from './supabase';
import {
  PortfolioItem,
  Project,
  Profile,
  CreativePrinciple,
  AIEthicsItem,
  InclusivityItem,
  SiteContentItem,
  MediaItem,
} from '../types';
import {
  INITIAL_PORTFOLIO,
  INITIAL_PROJECT,
  INITIAL_PRINCIPLES,
  INITIAL_TEAM,
  INITIAL_AI_ETHICS,
  INITIAL_INCLUSIVITY,
  INITIAL_SITE_CONTENT,
  INITIAL_MEDIA,
} from '../data/initialData';

// Local storage keys for offline/demo persistence
const STORAGE_KEYS = {
  PORTFOLIO: 'framedia_demo_portfolio',
  PROJECT: 'framedia_demo_project',
  PRINCIPLES: 'framedia_demo_principles',
  TEAM: 'framedia_demo_team',
  ETHICS: 'framedia_demo_ethics',
  INCLUSIVITY: 'framedia_demo_inclusivity',
  SITE_CONTENT: 'framedia_demo_site_content',
  MEDIA: 'framedia_demo_media',
};

function getLocalData<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setLocalData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save to local storage', err);
  }
}

export const contentService = {
  // ----------------------------------------------------
  // PORTFOLIO
  // ----------------------------------------------------
  async getPortfolio(includeUnpublished = false): Promise<PortfolioItem[]> {
    const supabase = getSupabase();
    if (supabase) {
      let query = supabase.from('portfolio').select('*').order('created_at', { ascending: false });
      if (!includeUnpublished) {
        query = query.eq('published', true);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as PortfolioItem[];
      }
    }
    const local = getLocalData<PortfolioItem[]>(STORAGE_KEYS.PORTFOLIO, INITIAL_PORTFOLIO);
    return includeUnpublished ? local : local.filter((item) => item.published);
  },

  async savePortfolioItem(item: Partial<PortfolioItem>): Promise<PortfolioItem> {
    const supabase = getSupabase();
    const id = item.id || `port-${Date.now()}`;
    const newItem: PortfolioItem = {
      id,
      title: item.title || 'Untitled Project',
      slug: item.slug || `project-${Date.now()}`,
      category: item.category || 'Design',
      description: item.description || '',
      year: item.year || new Date().getFullYear().toString(),
      thumbnail_url: item.thumbnail_url || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      project_url: item.project_url || '',
      client: item.client || '',
      award: item.award || '',
      published: item.published ?? true,
      gallery_images: item.gallery_images || [],
      updated_at: new Date().toISOString(),
    };

    if (supabase) {
      const { data, error } = await supabase.from('portfolio').upsert(newItem).select().single();
      if (!error && data) return data as PortfolioItem;
    }

    // Local fallback
    const all = getLocalData<PortfolioItem[]>(STORAGE_KEYS.PORTFOLIO, INITIAL_PORTFOLIO);
    const existingIndex = all.findIndex((p) => p.id === newItem.id);
    let updated: PortfolioItem[];
    if (existingIndex >= 0) {
      updated = [...all];
      updated[existingIndex] = { ...updated[existingIndex], ...newItem };
    } else {
      updated = [newItem, ...all];
    }
    setLocalData(STORAGE_KEYS.PORTFOLIO, updated);
    return newItem;
  },

  async deletePortfolioItem(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('portfolio').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<PortfolioItem[]>(STORAGE_KEYS.PORTFOLIO, INITIAL_PORTFOLIO);
    const filtered = all.filter((p) => p.id !== id);
    setLocalData(STORAGE_KEYS.PORTFOLIO, filtered);
    return true;
  },

  // ----------------------------------------------------
  // FLAGSHIP PROJECT (/project)
  // ----------------------------------------------------
  async getProject(): Promise<Project> {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase.from('projects').select('*').limit(1).single();
      if (!error && data) return data as Project;
    }
    return getLocalData<Project>(STORAGE_KEYS.PROJECT, INITIAL_PROJECT);
  },

  async saveProject(project: Partial<Project>): Promise<Project> {
    const supabase = getSupabase();
    const current = await this.getProject();
    const updatedProject: Project = {
      ...current,
      ...project,
      updated_at: new Date().toISOString(),
    };

    if (supabase) {
      const { data, error } = await supabase.from('projects').upsert(updatedProject).select().single();
      if (!error && data) return data as Project;
    }

    setLocalData(STORAGE_KEYS.PROJECT, updatedProject);
    return updatedProject;
  },

  // ----------------------------------------------------
  // 10 BEING CREATIVE PRINCIPLES (/10beingcreative)
  // ----------------------------------------------------
  async getPrinciples(includeUnpublished = false): Promise<CreativePrinciple[]> {
    const supabase = getSupabase();
    if (supabase) {
      let query = supabase.from('creative_principles').select('*').order('sort_order', { ascending: true });
      if (!includeUnpublished) {
        query = query.eq('published', true);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) return data as CreativePrinciple[];
    }
    const local = getLocalData<CreativePrinciple[]>(STORAGE_KEYS.PRINCIPLES, INITIAL_PRINCIPLES);
    return includeUnpublished ? local : local.filter((p) => p.published);
  },

  async savePrinciple(principle: Partial<CreativePrinciple>): Promise<CreativePrinciple> {
    const supabase = getSupabase();
    const id = principle.id || `principle-${Date.now()}`;
    const newPrinciple: CreativePrinciple = {
      id,
      number: principle.number || 1,
      title: principle.title || 'Be Creative',
      description: principle.description || '',
      quote: principle.quote || '',
      image_url: principle.image_url || '',
      published: principle.published ?? true,
      sort_order: principle.sort_order ?? principle.number ?? 1,
    };

    if (supabase) {
      const { data, error } = await supabase.from('creative_principles').upsert(newPrinciple).select().single();
      if (!error && data) return data as CreativePrinciple;
    }

    const all = getLocalData<CreativePrinciple[]>(STORAGE_KEYS.PRINCIPLES, INITIAL_PRINCIPLES);
    const index = all.findIndex((p) => p.id === newPrinciple.id);
    let updated: CreativePrinciple[];
    if (index >= 0) {
      updated = [...all];
      updated[index] = { ...updated[index], ...newPrinciple };
    } else {
      updated = [...all, newPrinciple];
    }
    updated.sort((a, b) => a.sort_order - b.sort_order);
    setLocalData(STORAGE_KEYS.PRINCIPLES, updated);
    return newPrinciple;
  },

  async deletePrinciple(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('creative_principles').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<CreativePrinciple[]>(STORAGE_KEYS.PRINCIPLES, INITIAL_PRINCIPLES);
    setLocalData(STORAGE_KEYS.PRINCIPLES, all.filter((p) => p.id !== id));
    return true;
  },

  // ----------------------------------------------------
  // TEAM PROFILES (/team)
  // ----------------------------------------------------
  async getTeam(): Promise<Profile[]> {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: true });
      if (!error && data && data.length > 0) return data as Profile[];
    }
    return getLocalData<Profile[]>(STORAGE_KEYS.TEAM, INITIAL_TEAM);
  },

  async saveTeamMember(member: Partial<Profile>): Promise<Profile> {
    const supabase = getSupabase();
    const id = member.id || `team-${Date.now()}`;
    const newMember: Profile = {
      id,
      name: member.name || 'Creative Member',
      email: member.email || 'team@framedia.creative',
      role: member.role || 'Creative Practitioner',
      bio: member.bio || '',
      skills: member.skills || [],
      avatar_url: member.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      social_links: member.social_links || {},
      updated_at: new Date().toISOString(),
    };

    if (supabase) {
      const { data, error } = await supabase.from('profiles').upsert(newMember).select().single();
      if (!error && data) return data as Profile;
    }

    const all = getLocalData<Profile[]>(STORAGE_KEYS.TEAM, INITIAL_TEAM);
    const idx = all.findIndex((m) => m.id === newMember.id);
    let updated: Profile[];
    if (idx >= 0) {
      updated = [...all];
      updated[idx] = { ...updated[idx], ...newMember };
    } else {
      updated = [...all, newMember];
    }
    setLocalData(STORAGE_KEYS.TEAM, updated);
    return newMember;
  },

  async deleteTeamMember(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('profiles').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<Profile[]>(STORAGE_KEYS.TEAM, INITIAL_TEAM);
    setLocalData(STORAGE_KEYS.TEAM, all.filter((m) => m.id !== id));
    return true;
  },

  // ----------------------------------------------------
  // AI ETHICS (/aiethics)
  // ----------------------------------------------------
  async getAIEthics(): Promise<AIEthicsItem[]> {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase.from('ai_ethics').select('*').order('sort_order', { ascending: true });
      if (!error && data && data.length > 0) return data as AIEthicsItem[];
    }
    return getLocalData<AIEthicsItem[]>(STORAGE_KEYS.ETHICS, INITIAL_AI_ETHICS);
  },

  async saveAIEthicsItem(item: Partial<AIEthicsItem>): Promise<AIEthicsItem> {
    const supabase = getSupabase();
    const id = item.id || `eth-${Date.now()}`;
    const newItem: AIEthicsItem = {
      id,
      title: item.title || 'Ethical Standard',
      content: item.content || '',
      key_points: item.key_points || [],
      sort_order: item.sort_order ?? 1,
    };

    if (supabase) {
      const { data, error } = await supabase.from('ai_ethics').upsert(newItem).select().single();
      if (!error && data) return data as AIEthicsItem;
    }

    const all = getLocalData<AIEthicsItem[]>(STORAGE_KEYS.ETHICS, INITIAL_AI_ETHICS);
    const idx = all.findIndex((e) => e.id === newItem.id);
    let updated: AIEthicsItem[];
    if (idx >= 0) {
      updated = [...all];
      updated[idx] = { ...updated[idx], ...newItem };
    } else {
      updated = [...all, newItem];
    }
    updated.sort((a, b) => a.sort_order - b.sort_order);
    setLocalData(STORAGE_KEYS.ETHICS, updated);
    return newItem;
  },

  async deleteAIEthicsItem(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('ai_ethics').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<AIEthicsItem[]>(STORAGE_KEYS.ETHICS, INITIAL_AI_ETHICS);
    setLocalData(STORAGE_KEYS.ETHICS, all.filter((e) => e.id !== id));
    return true;
  },

  // ----------------------------------------------------
  // INCLUSIVITY (/inclusivity)
  // ----------------------------------------------------
  async getInclusivity(): Promise<InclusivityItem[]> {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase.from('inclusivity').select('*').order('sort_order', { ascending: true });
      if (!error && data && data.length > 0) return data as InclusivityItem[];
    }
    return getLocalData<InclusivityItem[]>(STORAGE_KEYS.INCLUSIVITY, INITIAL_INCLUSIVITY);
  },

  async saveInclusivityItem(item: Partial<InclusivityItem>): Promise<InclusivityItem> {
    const supabase = getSupabase();
    const id = item.id || `inc-${Date.now()}`;
    const newItem: InclusivityItem = {
      id,
      title: item.title || 'Inclusivity Pillar',
      content: item.content || '',
      pillars: item.pillars || [],
      sort_order: item.sort_order ?? 1,
    };

    if (supabase) {
      const { data, error } = await supabase.from('inclusivity').upsert(newItem).select().single();
      if (!error && data) return data as InclusivityItem;
    }

    const all = getLocalData<InclusivityItem[]>(STORAGE_KEYS.INCLUSIVITY, INITIAL_INCLUSIVITY);
    const idx = all.findIndex((i) => i.id === newItem.id);
    let updated: InclusivityItem[];
    if (idx >= 0) {
      updated = [...all];
      updated[idx] = { ...updated[idx], ...newItem };
    } else {
      updated = [...all, newItem];
    }
    updated.sort((a, b) => a.sort_order - b.sort_order);
    setLocalData(STORAGE_KEYS.INCLUSIVITY, updated);
    return newItem;
  },

  async deleteInclusivityItem(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('inclusivity').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<InclusivityItem[]>(STORAGE_KEYS.INCLUSIVITY, INITIAL_INCLUSIVITY);
    setLocalData(STORAGE_KEYS.INCLUSIVITY, all.filter((i) => i.id !== id));
    return true;
  },

  // ----------------------------------------------------
  // SITE CONTENT
  // ----------------------------------------------------
  async getSiteContent(): Promise<Record<string, string>> {
    const supabase = getSupabase();
    const defaults: Record<string, string> = {};
    INITIAL_SITE_CONTENT.forEach((item) => {
      defaults[`${item.section}.${item.key}`] = item.value;
    });

    if (supabase) {
      const { data, error } = await supabase.from('site_content').select('*');
      if (!error && data && data.length > 0) {
        data.forEach((row: SiteContentItem) => {
          defaults[`${row.section}.${row.key}`] = row.value;
        });
        return defaults;
      }
    }

    const local = getLocalData<Record<string, string>>(STORAGE_KEYS.SITE_CONTENT, defaults);
    return local;
  },

  async updateSiteContent(keyPath: string, value: string): Promise<void> {
    const [section, key] = keyPath.split('.');
    const supabase = getSupabase();
    if (supabase && section && key) {
      await supabase.from('site_content').upsert({
        section,
        key,
        value,
        updated_at: new Date().toISOString(),
      });
    }

    const local = await this.getSiteContent();
    local[keyPath] = value;
    setLocalData(STORAGE_KEYS.SITE_CONTENT, local);
  },

  // ----------------------------------------------------
  // MEDIA
  // ----------------------------------------------------
  async getMedia(): Promise<MediaItem[]> {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase.from('media_items').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data as MediaItem[];
    }
    return getLocalData<MediaItem[]>(STORAGE_KEYS.MEDIA, INITIAL_MEDIA);
  },

  async addMediaItem(item: Omit<MediaItem, 'id'>): Promise<MediaItem> {
    const supabase = getSupabase();
    const newItem: MediaItem = {
      ...item,
      id: `med-${Date.now()}`,
    };

    if (supabase) {
      const { data, error } = await supabase.from('media_items').insert(newItem).select().single();
      if (!error && data) return data as MediaItem;
    }

    const all = getLocalData<MediaItem[]>(STORAGE_KEYS.MEDIA, INITIAL_MEDIA);
    const updated = [newItem, ...all];
    setLocalData(STORAGE_KEYS.MEDIA, updated);
    return newItem;
  },

  async deleteMediaItem(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('media_items').delete().eq('id', id);
      if (!error) return true;
    }
    const all = getLocalData<MediaItem[]>(STORAGE_KEYS.MEDIA, INITIAL_MEDIA);
    setLocalData(STORAGE_KEYS.MEDIA, all.filter((m) => m.id !== id));
    return true;
  },

  // Reset to initial demo data
  resetToDefaults(): void {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  },
};
