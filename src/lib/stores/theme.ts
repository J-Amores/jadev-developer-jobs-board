import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const { subscribe, set, update } = writable<Theme>('light');

function toggleTheme() {
  update(current => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    if (browser) {
      // For Tailwind v4, we only need to manage the 'dark' class
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newTheme);
    }
    return newTheme;
  });
}

function init() {
  if (browser) {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'light';

    // Initialize the dark class based on theme
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    set(initialTheme);
  }
}

export const theme = {
  subscribe,
  toggle: toggleTheme,
  init,
};
