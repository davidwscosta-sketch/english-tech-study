export type Level = 'iniciante' | 'intermediario';

/** Um flashcard: frente em inglês, verso com tradução/significado e exemplo opcional. */
export interface Flashcard {
  id: string;
  /** Termo ou frase em inglês (frente da carta). */
  front: string;
  /** Tradução ou significado em português (verso da carta). */
  back: string;
  /** Exemplo de uso ou observação (opcional). */
  example?: string;
  level: Level;
}

/** Um baralho de estudo, agrupando cards de um mesmo tema. */
export interface Deck {
  id: string;
  title: string;
  emoji: string;
  description: string;
  cards: Flashcard[];
}

/** Progresso de uma carta no sistema de repetição espaçada (Leitner). */
export interface CardProgress {
  /** Caixa de Leitner (1 = recente/difícil, 5 = dominada). */
  box: number;
  /** Timestamp (ms) em que a carta volta a ficar disponível para revisão. */
  due: number;
  /** Timestamp (ms) da última revisão. */
  lastReviewed: number;
  /** Quantas vezes a carta já foi revisada. */
  seen: number;
}

/** Estado de progresso persistido do estudante. */
export interface ProgressState {
  /** Progresso por id de carta. */
  cards: Record<string, CardProgress>;
  /** Datas (YYYY-MM-DD) em que houve estudo, para calcular a sequência. */
  studyDates: string[];
}
