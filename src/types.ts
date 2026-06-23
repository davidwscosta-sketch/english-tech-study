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
