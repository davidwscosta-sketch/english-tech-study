import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ets-theme';

function getInitialDark(): boolean {
  if (typeof window === 'undefined') return false;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/** Controla o tema claro/escuro, persistindo a escolha no localStorage. */
export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(getInitialDark);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    window.localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  }, [dark]);

  return { dark, toggle: () => setDark((value) => !value) };
}
