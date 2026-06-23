import { APP_NAME, APP_TAGLINE } from './lib/constants';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 p-6 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <h1 className="text-3xl font-bold sm:text-4xl">{APP_NAME}</h1>
      <p className="max-w-md text-slate-600 dark:text-slate-300">{APP_TAGLINE}</p>
      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
        Etapa 1 — Fundação ✅
      </span>
    </main>
  );
}

export default App;
