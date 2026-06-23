import { APP_NAME } from '../lib/constants';

interface HeaderProps {
  dark: boolean;
  onToggleTheme: () => void;
}

export function Header({ dark, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100">{APP_NAME}</h1>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {dark ? '☀️ Claro' : '🌙 Escuro'}
        </button>
      </div>
    </header>
  );
}
