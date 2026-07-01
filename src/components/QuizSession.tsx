import { useState } from 'react';
import type { Deck } from '../types';
import { buildQuiz } from '../lib/quiz';
import { SessionSummary } from './SessionSummary';

interface QuizSessionProps {
  deck: Deck;
  pool: Deck['cards'];
  onExit: () => void;
  onReview?: (cardId: string, known: boolean) => void;
}

export function QuizSession({ deck, pool, onExit, onReview }: QuizSessionProps) {
  const [questions, setQuestions] = useState(() => buildQuiz(deck.cards, pool));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const total = questions.length;
  const finished = index >= total;

  if (finished) {
    return (
      <SessionSummary
        knownCount={correctCount}
        total={total}
        onRestart={() => {
          setQuestions(buildQuiz(deck.cards, pool));
          setIndex(0);
          setSelected(null);
          setCorrectCount(0);
        }}
        onExit={onExit}
      />
    );
  }

  const question = questions[index];

  const choose = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === question.answerIndex;
    if (isCorrect) setCorrectCount((value) => value + 1);
    onReview?.(question.card.id, isCorrect);
  };

  const next = () => {
    setSelected(null);
    setIndex((value) => value + 1);
  };

  const optionClass = (optionIndex: number): string => {
    if (selected === null) {
      return 'border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-800';
    }
    if (optionIndex === question.answerIndex) {
      return 'border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950';
    }
    if (optionIndex === selected) {
      return 'border-rose-400 bg-rose-50 dark:border-rose-600 dark:bg-rose-950';
    }
    return 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800';
  };

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
          🧠 Quiz · {deck.title}
        </span>
      </div>

      <span className="text-xs text-slate-500 dark:text-slate-400">
        Pergunta {index + 1} de {total} · ✅ {correctCount}
      </span>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
          O que significa?
        </span>
        <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {question.card.front}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {question.options.map((option, optionIndex) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => choose(optionIndex)}
              disabled={selected !== null}
              className={`w-full rounded-xl border px-4 py-3 text-left font-medium text-slate-800 transition dark:text-slate-100 ${optionClass(optionIndex)}`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      {selected !== null && (
        <button
          type="button"
          onClick={next}
          className="self-end rounded-xl bg-sky-600 px-5 py-2.5 font-semibold text-white transition hover:bg-sky-700"
        >
          {index + 1 >= total ? 'Ver resultado' : 'Próxima'} →
        </button>
      )}
    </section>
  );
}
