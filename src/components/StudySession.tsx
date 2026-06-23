import type { Deck } from '../types';
import { useStudySession } from '../hooks/useStudySession';
import { Flashcard } from './Flashcard';
import { SessionSummary } from './SessionSummary';

interface StudySessionProps {
  deck: Deck;
  onExit: () => void;
}

export function StudySession({ deck, onExit }: StudySessionProps) {
  const session = useStudySession(deck);

  if (session.finished) {
    return (
      <SessionSummary
        knownCount={session.knownCount}
        total={session.total}
        onRestart={session.restart}
        onExit={onExit}
      />
    );
  }

  const card = session.current;
  // `finished` é falso aqui, então `current` sempre existe; guarda por segurança de tipo.
  if (!card) return null;

  const progress = Math.round((session.index / session.total) * 100);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onExit}
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          ← Baralhos
        </button>
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {deck.emoji} {deck.title}
        </span>
      </div>

      <div>
        <div className="mb-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            Carta {session.index + 1} de {session.total}
          </span>
          <span>
            ✅ {session.knownCount} · 🔁 {session.unknownCount}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-sky-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Flashcard card={card} flipped={session.flipped} onFlip={session.flip} />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={session.markUnknown}
          className="flex-1 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 font-semibold text-amber-800 transition hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200"
        >
          🔁 Revisar
        </button>
        <button
          type="button"
          onClick={session.markKnown}
          className="flex-1 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200"
        >
          ✅ Eu sabia
        </button>
      </div>
    </section>
  );
}
