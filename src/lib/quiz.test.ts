import { describe, expect, it } from 'vitest';
import { buildQuestion, buildQuiz } from './quiz';
import type { Flashcard } from '../types';

const cards: Flashcard[] = [
  { id: 'a', front: 'A', back: 'um', level: 'iniciante' },
  { id: 'b', front: 'B', back: 'dois', level: 'iniciante' },
  { id: 'c', front: 'C', back: 'três', level: 'iniciante' },
  { id: 'd', front: 'D', back: 'quatro', level: 'iniciante' },
];

// shuffle determinístico (identidade) para testar sem aleatoriedade
const identity = <T>(items: T[]): T[] => items;

describe('buildQuestion', () => {
  it('inclui a resposta correta e até 4 opções', () => {
    const q = buildQuestion(cards[0], cards, identity);
    expect(q.options).toContain('um');
    expect(q.options.length).toBeLessThanOrEqual(4);
    expect(q.options[q.answerIndex]).toBe('um');
  });

  it('não usa a própria carta como distrator', () => {
    const q = buildQuestion(cards[0], cards, identity);
    const distractors = q.options.filter((o) => o !== 'um');
    expect(distractors).not.toContain('um');
  });
});

describe('buildQuiz', () => {
  it('cria uma pergunta por carta', () => {
    const quiz = buildQuiz(cards, cards, identity);
    expect(quiz).toHaveLength(cards.length);
    quiz.forEach((q) => {
      expect(q.options[q.answerIndex]).toBe(q.card.back);
    });
  });
});
