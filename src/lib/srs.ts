import type { CardProgress } from '../types';

/** Caixa máxima de Leitner — uma carta nesta caixa é considerada dominada. */
export const MAX_BOX = 5;

/** Intervalo (em dias) até a próxima revisão, por caixa de Leitner resultante. */
export const BOX_INTERVAL_DAYS: Record<number, number> = {
  1: 0,
  2: 1,
  3: 3,
  4: 7,
  5: 14,
};

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Calcula o novo progresso de uma carta após uma revisão.
 * Acerto sobe uma caixa; erro volta para a caixa 1.
 */
export function nextProgress(
  prev: CardProgress | undefined,
  known: boolean,
  now: number,
): CardProgress {
  const prevBox = prev?.box ?? 1;
  const box = known ? Math.min(prevBox + 1, MAX_BOX) : 1;
  const due = now + BOX_INTERVAL_DAYS[box] * DAY_MS;
  return {
    box,
    due,
    lastReviewed: now,
    seen: (prev?.seen ?? 0) + 1,
  };
}

/** Uma carta está "para revisar" se nunca foi vista ou se já passou da data. */
export function isDue(progress: CardProgress | undefined, now: number): boolean {
  if (!progress) return true;
  return progress.due <= now;
}

/** Uma carta está dominada quando chega à caixa máxima. */
export function isMastered(progress: CardProgress | undefined): boolean {
  return (progress?.box ?? 0) >= MAX_BOX;
}
