import { describe, expect, it } from 'vitest';
import { dueCards, masteredInDeck, totalCards, totalMastered } from './progress';
import type { Deck, ProgressState } from '../types';

const NOW = 1_700_000_000_000;

const deckA: Deck = {
  id: 'a',
  title: 'A',
  emoji: '🅰️',
  description: '',
  cards: [
    { id: 'a1', front: 'a1', back: '', level: 'iniciante' },
    { id: 'a2', front: 'a2', back: '', level: 'iniciante' },
  ],
};
const deckB: Deck = {
  id: 'b',
  title: 'B',
  emoji: '🅱️',
  description: '',
  cards: [{ id: 'b1', front: 'b1', back: '', level: 'iniciante' }],
};
const decks = [deckA, deckB];

const state: ProgressState = {
  cards: {
    a1: { box: 5, due: NOW, lastReviewed: NOW, seen: 5 }, // dominada
    a2: { box: 2, due: NOW + 999999, lastReviewed: NOW, seen: 1 }, // não vence ainda
  },
  studyDates: [],
};

describe('seletores de progresso', () => {
  it('conta dominadas por baralho e no total', () => {
    expect(masteredInDeck(deckA, state)).toBe(1);
    expect(totalMastered(decks, state)).toBe(1);
  });

  it('conta o total de cartas', () => {
    expect(totalCards(decks)).toBe(3);
  });

  it('lista cartas a revisar (vencidas ou nunca vistas)', () => {
    const due = dueCards(decks, state, NOW).map((c) => c.id);
    // a1 vence agora; a2 ainda não; b1 nunca visto
    expect(due).toContain('a1');
    expect(due).toContain('b1');
    expect(due).not.toContain('a2');
  });
});
