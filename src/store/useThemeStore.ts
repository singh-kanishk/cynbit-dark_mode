import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Helper function to update the <html> DOM element class list
const applyThemeToDOM = (theme: Theme) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => {
          const nextTheme: Theme = state.theme === 'light' ? 'dark' : 'light';
          applyThemeToDOM(nextTheme);
          return { theme: nextTheme };
        }),
      setTheme: (theme: Theme) => {
        applyThemeToDOM(theme);
        set({ theme });
      },
    }),
    {
      name: 'theme', // localStorage key
      onRehydrateStorage: () => (state) => {
        // When state rehydrates from localStorage on mount, sync DOM
        if (state) {
          applyThemeToDOM(state.theme);
        }
      },
    }
  )
);
