import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getSupabase, isSupabaseConfigured } from '../services/supabase';
import { AuthUser } from '../types';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isSupabaseConnected: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signInAsDemoAdmin: () => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_AUTH_KEY = 'framedia_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const isSupabaseConnected = isSupabaseConfigured();

  useEffect(() => {
    const supabase = getSupabase();

    if (isSupabaseConnected && supabase) {
      // 1. Check existing Supabase session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || 'admin@framedia.creative',
            name: session.user.user_metadata?.name || 'Framedia Admin',
            role: 'Admin',
            isDemo: false,
          });
        }
        setLoading(false);
      });

      // 2. Subscribe to auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || 'admin@framedia.creative',
            name: session.user.user_metadata?.name || 'Framedia Admin',
            role: 'Admin',
            isDemo: false,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => {
        subscription.unsubscribe();
      };
    } else {
      // Offline / Demo mode check from localStorage
      try {
        const stored = localStorage.getItem(LOCAL_AUTH_KEY);
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Failed to load local auth session', e);
      }
      setLoading(false);
    }
  }, [isSupabaseConnected]);

  const signIn = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const supabase = getSupabase();

    if (isSupabaseConnected && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || email,
          name: data.user.user_metadata?.name || 'Framedia Admin',
          role: 'Admin',
          isDemo: false,
        });
        return { success: true };
      }
    }

    // Demo authentication fallback
    // Accept valid demo credentials: admin@framedia.creative / framedia2025 (or any non-empty test input)
    if (email.trim() && password.trim()) {
      const demoUser: AuthUser = {
        id: 'demo-admin-id',
        email,
        name: 'Elena Rostova (Admin)',
        role: 'Administrator',
        isDemo: true,
      };
      setUser(demoUser);
      localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(demoUser));
      return { success: true };
    }

    return { success: false, error: 'Please provide valid credentials.' };
  };

  const signInAsDemoAdmin = () => {
    const demoUser: AuthUser = {
      id: 'demo-admin-id',
      email: 'admin@framedia.creative',
      name: 'Elena Rostova (Admin)',
      role: 'Administrator',
      isDemo: true,
    };
    setUser(demoUser);
    localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(demoUser));
  };

  const signOut = async () => {
    const supabase = getSupabase();
    if (isSupabaseConnected && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem(LOCAL_AUTH_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSupabaseConnected,
        signIn,
        signInAsDemoAdmin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
