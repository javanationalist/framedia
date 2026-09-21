import { getSupabase, isSupabaseConfigured } from './supabase';
import { contentService } from './contentService';
import { MediaItem } from '../types';

export const storageService = {
  async uploadFile(file: File): Promise<{ url: string; item: MediaItem }> {
    const supabase = getSupabase();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${Date.now()}_${sanitizedName}`;

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase.storage
          .from('media')
          .upload(`uploads/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (!error && data) {
          const { data: publicUrlData } = supabase.storage
            .from('media')
            .getPublicUrl(`uploads/${fileName}`);

          const url = publicUrlData.publicUrl;
          const mediaItem = await contentService.addMediaItem({
            name: file.name,
            url,
            type: file.type,
            size: file.size,
            created_at: new Date().toISOString(),
          });

          return { url, item: mediaItem };
        } else {
          console.warn('Supabase storage upload error, falling back to local file reader:', error);
        }
      } catch (err) {
        console.warn('Storage exception, falling back to local reader:', err);
      }
    }

    // Fallback: Read as Data URL for immediate visual preview and persistence
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        const mediaItem = await contentService.addMediaItem({
          name: file.name,
          url: dataUrl,
          type: file.type,
          size: file.size,
          created_at: new Date().toISOString(),
        });
        resolve({ url: dataUrl, item: mediaItem });
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  },
};
