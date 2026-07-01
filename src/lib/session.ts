/** Calcula a porcentagem de acertos (0–100). */
export function scorePercent(known: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((known / total) * 100);
}

export type ScoreLabel = 'Excelente' | 'Bom' | 'Inicial' | 'Precisa revisar';

/** Classifica o desempenho a partir da porcentagem de acertos. */
export function scoreLabel(percent: number): ScoreLabel {
  if (percent >= 85) return 'Excelente';
  if (percent >= 60) return 'Bom';
  if (percent >= 40) return 'Inicial';
  return 'Precisa revisar';
}

/** Mensagem de incentivo de acordo com o desempenho. */
export function scoreMessage(percent: number): string {
  const label = scoreLabel(percent);
  switch (label) {
    case 'Excelente':
      return 'Mandou muito bem! Tente um baralho mais difícil.';
    case 'Bom':
      return 'Bom progresso! Revise as cartas que escaparam.';
    case 'Inicial':
      return 'Bom começo. Repita este baralho amanhã para fixar.';
    case 'Precisa revisar':
      return 'Sem pressa: refaça este baralho devagar, lendo o exemplo.';
  }
}
