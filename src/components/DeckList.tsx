import type { Deck, ProgressState } from '../types';
import { masteredInDeck } from '../lib/progress';

interface DeckListProps {
  decks: Deck[];
  progress: ProgressState;
  onStudy: (deckId: string) => void;
  onQuiz: (deckId: string) => void;
}

export function DeckList({ decks, progress, onStudy, onQuiz }: DeckListProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">Baralhos</h2>

      <ul className="grid gap-4 sm:grid-cols-2">
        {decks.map((deck) => {
          const mastered = masteredInDeck(deck, progress);
          const pct = Math.round((mastered / deck.cards.length) * 100);
          return (
            <li
              key={deck.id}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{deck.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{deck.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{deck.description}</p>
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    {mastered}/{deck.cards.length} dominadas
                  </span>
                  <span>{pct}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <button
                  type="button"
                  onClick={() => onStudy(deck.id)}
                  className="flex-1 rounded-xl bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  📇 Estudar
                </button>
                <button
                  type="button"
                  onClick={() => onQuiz(deck.id)}
                  className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  🧠 Quiz
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
