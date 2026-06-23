import type { Deck } from '../types';

interface DeckListProps {
  decks: Deck[];
  onSelect: (deckId: string) => void;
}

export function DeckList({ decks, onSelect }: DeckListProps) {
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Escolha um baralho
        </h2>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          {decks.length} baralhos · {totalCards} cartas para estudar.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {decks.map((deck) => (
          <li key={deck.id}>
            <button
              type="button"
              onClick={() => onSelect(deck.id)}
              className="flex h-full w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-sky-700"
            >
              <span className="text-3xl">{deck.emoji}</span>
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {deck.title}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300">{deck.description}</span>
              <span className="mt-auto pt-2 text-xs font-medium text-sky-600 dark:text-sky-400">
                {deck.cards.length} cartas →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
