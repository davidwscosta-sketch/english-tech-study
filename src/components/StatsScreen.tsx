import type { Deck, ProgressState } from '../types';
import { currentStreak } from '../lib/stats';
import { dueCards, masteredInDeck, totalCards, totalMastered } from '../lib/progress';

interface StatsScreenProps {
  decks: Deck[];
  progress: ProgressState;
  onExit: () => void;
  onReset: () => void;
}

export function StatsScreen({ decks, progress, onExit, onReset }: StatsScreenProps) {
  const now = Date.now();
  const streak = currentStreak(progress.studyDates, now);
  const mastered = totalMastered(decks, progress);
  const total = totalCards(decks);
  const due = dueCards(decks, progress, now).length;
  const daysStudied = progress.studyDates.length;

  const handleReset = () => {
    const ok = window.confirm('Apagar todo o seu progresso? Esta ação não pode ser desfeita.');
    if (ok) onReset();
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onExit}
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          ← Início
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Estatísticas</h2>
      </div>

      <ul className="grid grid-cols-2 gap-3">
        <Metric emoji="🔥" value={`${streak}`} label="dias seguidos" />
        <Metric emoji="📅" value={`${daysStudied}`} label="dias estudados" />
        <Metric emoji="🏆" value={`${mastered}/${total}`} label="cartas dominadas" />
        <Metric emoji="🔁" value={`${due}`} label="para revisar agora" />
      </ul>

      <div>
        <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Por baralho</h3>
        <ul className="flex flex-col gap-3">
          {decks.map((deck) => {
            const deckMastered = masteredInDeck(deck, progress);
            const pct = Math.round((deckMastered / deck.cards.length) * 100);
            return (
              <li key={deck.id}>
                <div className="mb-1 flex justify-between text-sm text-slate-700 dark:text-slate-200">
                  <span>
                    {deck.emoji} {deck.title}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {deckMastered}/{deck.cards.length}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={handleReset}
        className="self-start text-sm font-medium text-rose-600 transition hover:text-rose-700 dark:text-rose-400"
      >
        Apagar progresso
      </button>
    </section>
  );
}

function Metric({ emoji, value, label }: { emoji: string; value: string; label: string }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <span className="block text-2xl">{emoji}</span>
      <span className="mt-1 block text-2xl font-bold text-slate-900 dark:text-slate-100">
        {value}
      </span>
      <span className="block text-xs text-slate-500 dark:text-slate-400">{label}</span>
    </li>
  );
}
