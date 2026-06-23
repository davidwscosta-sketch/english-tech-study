import type { ProgressState } from '../types';

const STORAGE_KEY = 'ets-progress-v1';

export const emptyProgress: ProgressState = { cards: {}, studyDates: [] };

/** Carrega o progresso salvo do localStorage (tolerante a dados ausentes/corrompidos). */
export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return emptyProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      cards: parsed.cards ?? {},
      studyDates: parsed.studyDates ?? [],
    };
  } catch {
    return emptyProgress;
  }
}

/** Persiste o progresso no localStorage. */
export function saveProgress(state: ProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Armazenamento indisponível (modo privado/cheio): ignora silenciosamente.
  }
}

/** Remove todo o progresso salvo. */
export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignora
  }
}
