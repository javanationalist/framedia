export const SUPABASE_SQL_SCHEMA = `-- ==============================================================================
-- FRAMEDIA CREATIVE — SUPABASE SCHEMA & SECURITY POLICIES
-- ==============================================================================
-- Run this script in your Supabase SQL Editor (Dashboard > SQL Editor) to provision
-- all tables, Row Level Security (RLS) policies, indexes, and initial content.

-- 1. PROFILES TABLE (Team Members & Staff)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  skills TEXT[] DEFAULT '{}',
  social_links JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PORTFOLIO TABLE
CREATE TABLE IF NOT EXISTS public.portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Branding', 'Film', 'Photography', 'Design', 'Digital', 'Campaign', 'Creative Technology')),
  description TEXT NOT NULL,
  year TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  project_url TEXT,
  client TEXT,
  award TEXT,
  published BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PORTFOLIO IMAGES TABLE
CREATE TABLE IF NOT EXISTS public.portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_id UUID REFERENCES public.portfolio(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. PROJECTS TABLE (Flagship Initiatives)
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  objectives TEXT[] DEFAULT '{}',
  concept TEXT NOT NULL,
  process TEXT NOT NULL,
  production TEXT NOT NULL,
  outcomes TEXT[] DEFAULT '{}',
  cover_image TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  timeline JSONB DEFAULT '[]'::jsonb,
  team_credits JSONB DEFAULT '[]'::jsonb,
  published BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. 10 BEING CREATIVE PRINCIPLES TABLE
CREATE TABLE IF NOT EXISTS public.creative_principles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  quote TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT true NOT NULL,
  sort_order INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. AI ETHICS TABLE
CREATE TABLE IF NOT EXISTS public.ai_ethics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  key_points TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. INCLUSIVITY TABLE
CREATE TABLE IF NOT EXISTS public.inclusivity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  pillars TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. SITE CONTENT TABLE (Dynamic Site Copy)
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(section, key)
);

-- 9. MEDIA ASSETS TABLE
CREATE TABLE IF NOT EXISTS public.media_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL,
  size BIGINT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- INDEXES FOR FAST QUERYING
CREATE INDEX IF NOT EXISTS idx_portfolio_published ON public.portfolio(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON public.portfolio(category);
CREATE INDEX IF NOT EXISTS idx_principles_sort ON public.creative_principles(sort_order ASC);
CREATE INDEX IF NOT EXISTS idx_ethics_sort ON public.ai_ethics(sort_order ASC);
CREATE INDEX IF NOT EXISTS idx_inclusivity_sort ON public.inclusivity(sort_order ASC);
CREATE INDEX IF NOT EXISTS idx_site_content_section ON public.site_content(section);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.creative_principles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_ethics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inclusivity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ ACCESS FOR PUBLISHED/ACTIVE RECORDS:
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public can view published portfolio" ON public.portfolio FOR SELECT USING (published = true);
CREATE POLICY "Public can view portfolio images" ON public.portfolio_images FOR SELECT USING (true);
CREATE POLICY "Public can view published projects" ON public.projects FOR SELECT USING (published = true);
CREATE POLICY "Public can view published principles" ON public.creative_principles FOR SELECT USING (published = true);
CREATE POLICY "Public can view ai ethics" ON public.ai_ethics FOR SELECT USING (true);
CREATE POLICY "Public can view inclusivity" ON public.inclusivity FOR SELECT USING (true);
CREATE POLICY "Public can view site content" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Public can view media" ON public.media_items FOR SELECT USING (true);

-- AUTHENTICATED ADMIN FULL ACCESS (INSERT, UPDATE, DELETE):
CREATE POLICY "Authenticated users can manage profiles" ON public.profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage portfolio" ON public.portfolio FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage portfolio images" ON public.portfolio_images FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage projects" ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage principles" ON public.creative_principles FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage ethics" ON public.ai_ethics FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage inclusivity" ON public.inclusivity FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage site content" ON public.site_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can manage media" ON public.media_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- STORAGE BUCKET CONFIGURATION
-- ==============================================================================
-- In Supabase Storage, create a public bucket named 'media'.
-- Or execute:
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Public read access for the media bucket:
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'media');

-- Authenticated upload/edit access for media bucket:
CREATE POLICY "Authenticated users can upload media" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'media');

CREATE POLICY "Authenticated users can update media" 
ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'media');

CREATE POLICY "Authenticated users can delete media" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'media');
`;
