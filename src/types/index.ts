export interface Profile {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar_url?: string;
  bio: string;
  skills: string[];
  social_links?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: 'Branding' | 'Film' | 'Photography' | 'Design' | 'Digital' | 'Campaign' | 'Creative Technology';
  description: string;
  year: string;
  thumbnail_url: string;
  project_url?: string;
  published: boolean;
  gallery_images?: string[];
  client?: string;
  award?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PortfolioImage {
  id: string;
  portfolio_id: string;
  image_url: string;
  sort_order: number;
  created_at?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  objectives: string[];
  concept: string;
  process: string;
  production: string;
  outcomes: string[];
  cover_image: string;
  gallery_images: string[];
  timeline: { phase: string; period: string; details: string }[];
  team_credits: { role: string; name: string }[];
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CreativePrinciple {
  id: string;
  number: number;
  title: string;
  description: string;
  quote?: string;
  image_url?: string;
  published: boolean;
  sort_order: number;
  created_at?: string;
}

export interface AIEthicsItem {
  id: string;
  title: string;
  content: string;
  key_points: string[];
  sort_order: number;
  icon?: string;
}

export interface InclusivityItem {
  id: string;
  title: string;
  content: string;
  pillars: string[];
  sort_order: number;
  icon?: string;
}

export interface SiteContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
  updated_at?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'inFra';
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
  isError?: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  role?: string;
  isDemo?: boolean;
}

export type ActiveRoute =
  | '/'
  | '/project'
  | '/portfolio'
  | '/10beingcreative'
  | '/team'
  | '/aiethics'
  | '/inclusivity'
  | '/about'
  | '/login'
  | '/admin';
