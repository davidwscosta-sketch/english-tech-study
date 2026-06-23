import { useCallback, useEffect, useState } from 'react';
import type { ProgressState } from '../types';
import { clearProgress, loadProgress, saveProgress, emptyProgress } from '../lib/storage';
import { nextProgress } from '../lib/srs';
import { toDateString } from '../lib/stats';

export interface ProgressApi {
  state: ProgressState;
  /** Registra uma revisão (acerto/erro) de uma carta e marca o dia como estudado. */
  recordReview: (cardId: string, known: boolean) => void;
  /** Apaga todo o progresso. */
  reset: () => void;
}

/** Gerencia o progresso do estudante, persistido no localStorage. */
export function useProgress(): ProgressApi {
  const [state, setState] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  const recordReview = useCallback((cardId: string, known: boolean) => {
    setState((prev) => {
      const now = Date.now();
      const today = toDateString(now);
      const studyDates = prev.studyDates.includes(today)
        ? prev.studyDates
        : [...prev.studyDates, today];
      return {
        cards: { ...prev.cards, [cardId]: nextProgress(prev.cards[cardId], known, now) },
        studyDates,
      };
    });
  }, []);

  const reset = useCallback(() => {
    clearProgress();
    setState(emptyProgress);
  }, []);

  return { state, recordReview, reset };
}
