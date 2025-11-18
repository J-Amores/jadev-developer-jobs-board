import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const createThemeStore = () => {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    set,
    update,
    init: () => {
      if (browser) {
        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
          set(storedTheme);
        }

        subscribe(value => {
          localStorage.setItem('theme', value);
          if (value === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        });
      }
    }
  };
};

export const theme = createThemeStore();
