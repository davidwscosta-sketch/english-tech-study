import { scoreLabel, scoreMessage, scorePercent } from '../lib/session';

interface SessionSummaryProps {
  knownCount: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}

export function SessionSummary({ knownCount, total, onRestart, onExit }: SessionSummaryProps) {
  const percent = scorePercent(knownCount, total);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Baralho concluído! 🎉
      </h2>

      <p className="mt-6 text-5xl font-extrabold text-sky-600 dark:text-sky-400">{percent}%</p>
      <p className="mt-1 text-lg font-semibold text-slate-800 dark:text-slate-100">
        {scoreLabel(percent)}
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Você acertou {knownCount} de {total} cartas.
      </p>
      <p className="mx-auto mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-300">
        {scoreMessage(percent)}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-xl bg-sky-600 px-5 py-2.5 font-semibold text-white transition hover:bg-sky-700"
        >
          Estudar de novo
        </button>
        <button
          type="button"
          onClick={onExit}
          className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Voltar aos baralhos
        </button>
      </div>
    </section>
  );
}
