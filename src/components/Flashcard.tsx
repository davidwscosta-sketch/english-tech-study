import type { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
  card: FlashcardType;
  flipped: boolean;
  onFlip: () => void;
}

/** Carta que vira ao clicar: frente em inglês, verso com tradução e exemplo. */
export function Flashcard({ card, flipped, onFlip }: FlashcardProps) {
  return (
    <button
      type="button"
      onClick={onFlip}
      aria-pressed={flipped}
      aria-label={flipped ? 'Ver frente da carta' : 'Ver tradução'}
      className="flip-card block w-full text-left"
    >
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
        {/* Frente: inglês */}
        <div className="flip-face rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
            🇬🇧 English
          </span>
          <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{card.front}</p>
          <span className="mt-4 block text-sm text-slate-400">Toque para ver a tradução</span>
        </div>

        {/* Verso: português */}
        <div className="flip-face flip-back rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-950">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            🇧🇷 Português
          </span>
          <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">{card.back}</p>
          {card.example && (
            <p className="mt-3 text-sm italic text-slate-600 dark:text-slate-300">
              💡 {card.example}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
