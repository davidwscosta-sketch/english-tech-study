import type { Deck, Flashcard, ProgressState } from '../types';
import { isDue, isMastered } from './srs';

/** Quantas cartas de um baralho já estão dominadas. */
export function masteredInDeck(deck: Deck, state: ProgressState): number {
  return deck.cards.filter((card) => isMastered(state.cards[card.id])).length;
}

/** Total de cartas dominadas em todos os baralhos. */
export function totalMastered(decks: Deck[], state: ProgressState): number {
  return decks.reduce((sum, deck) => sum + masteredInDeck(deck, state), 0);
}

/** Total de cartas existentes em todos os baralhos. */
export function totalCards(decks: Deck[]): number {
  return decks.reduce((sum, deck) => sum + deck.cards.length, 0);
}

/** Cartas que estão "para revisar" agora, em todos os baralhos. */
export function dueCards(decks: Deck[], state: ProgressState, now: number): Flashcard[] {
  return decks.flatMap((deck) => deck.cards).filter((card) => isDue(state.cards[card.id], now));
}
