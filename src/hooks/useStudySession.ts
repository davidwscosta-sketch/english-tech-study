import { useCallback, useState } from 'react';
import type { Deck, Flashcard } from '../types';

export interface StudySession {
  /** Índice da carta atual (base 0). */
  index: number;
  /** Total de cartas no baralho. */
  total: number;
  /** Carta atual, ou undefined quando a sessão termina. */
  current: Flashcard | undefined;
  /** Se o verso está visível. */
  flipped: boolean;
  /** Se todas as cartas já foram respondidas. */
  finished: boolean;
  knownCount: number;
  unknownCount: number;
  flip: () => void;
  markKnown: () => void;
  markUnknown: () => void;
  restart: () => void;
}

/** Gerencia o estado de uma sessão de estudo de flashcards. */
export function useStudySession(deck: Deck): StudySession {
  const total = deck.cards.length;
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);

  const finished = index >= total;
  const current = finished ? undefined : deck.cards[index];

  const flip = useCallback(() => setFlipped((value) => !value), []);

  const advance = useCallback((known: boolean) => {
    if (known) setKnownCount((value) => value + 1);
    else setUnknownCount((value) => value + 1);
    setFlipped(false);
    setIndex((value) => value + 1);
  }, []);

  const markKnown = useCallback(() => advance(true), [advance]);
  const markUnknown = useCallback(() => advance(false), [advance]);

  const restart = useCallback(() => {
    setIndex(0);
    setFlipped(false);
    setKnownCount(0);
    setUnknownCount(0);
  }, []);

  return {
    index,
    total,
    current,
    flipped,
    finished,
    knownCount,
    unknownCount,
    flip,
    markKnown,
    markUnknown,
    restart,
  };
}
