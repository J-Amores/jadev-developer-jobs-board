import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const { subscribe, set, update } = writable<Theme>('light');

function toggleTheme() {
  update(current => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    if (browser) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }
    return newTheme;
  });
}

function init() {
  if (browser) {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'light';
    document.documentElement.classList.add(initialTheme);
    set(initialTheme);
  }
}

export const theme = {
  subscribe,
  toggle: toggleTheme,
  init,
};
