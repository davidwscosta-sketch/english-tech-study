import type { Deck, ProgressState } from '../types';
import { currentStreak } from '../lib/stats';
import { dueCards, totalCards, totalMastered } from '../lib/progress';
import { StatsBar } from './StatsBar';
import { DeckList } from './DeckList';

interface HomeScreenProps {
  decks: Deck[];
  progress: ProgressState;
  onStudy: (deckId: string) => void;
  onQuiz: (deckId: string) => void;
  onReview: () => void;
  onStats: () => void;
}

export function HomeScreen({
  decks,
  progress,
  onStudy,
  onQuiz,
  onReview,
  onStats,
}: HomeScreenProps) {
  const now = Date.now();
  const streak = currentStreak(progress.studyDates, now);
  const mastered = totalMastered(decks, progress);
  const total = totalCards(decks);
  const due = dueCards(decks, progress, now).length;

  return (
    <div className="flex flex-col gap-6">
      <StatsBar streak={streak} mastered={mastered} total={total} due={due} />

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onReview}
          disabled={due === 0}
          className="flex-1 rounded-2xl bg-sky-600 px-5 py-4 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          🔁 Revisão do dia {due > 0 ? `(${due})` : '— em dia!'}
        </button>
        <button
          type="button"
          onClick={onStats}
          className="rounded-2xl border border-slate-300 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          📊 Estatísticas
        </button>
      </div>

      <DeckList decks={decks} progress={progress} onStudy={onStudy} onQuiz={onQuiz} />
    </div>
  );
}
