import type { Flashcard } from '../types';

export interface QuizQuestion {
  card: Flashcard;
  /** Opções de tradução (uma correta + distratores). */
  options: string[];
  /** Índice da opção correta em `options`. */
  answerIndex: number;
}

export type Shuffle = <T>(items: T[]) => T[];

const defaultShuffle: Shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/** Monta uma pergunta de múltipla escolha para uma carta. */
export function buildQuestion(
  card: Flashcard,
  pool: Flashcard[],
  shuffle: Shuffle = defaultShuffle,
): QuizQuestion {
  const distractors = shuffle(pool.filter((c) => c.id !== card.id && c.back !== card.back))
    .slice(0, 3)
    .map((c) => c.back);
  const options = shuffle([card.back, ...distractors]);
  return { card, options, answerIndex: options.indexOf(card.back) };
}

/** Monta um quiz (lista de perguntas) a partir de um conjunto de cartas. */
export function buildQuiz(
  cards: Flashcard[],
  pool: Flashcard[],
  shuffle: Shuffle = defaultShuffle,
): QuizQuestion[] {
  return shuffle(cards).map((card) => buildQuestion(card, pool, shuffle));
}
