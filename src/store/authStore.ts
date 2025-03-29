import { create } from 'zustand'; // for Zustand state management, to manage authentication state
import { createClient, User } from '@supabase/supabase-js'; // Import User type

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,  
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  }
);

interface AuthState {
  user: User | null; // Use the imported User type
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, isAuthenticated: true });
    
  },
  register: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`
      }
    });
    if (error) throw error;
    set({ user: data.user, isAuthenticated: true });
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false });
  },
}));