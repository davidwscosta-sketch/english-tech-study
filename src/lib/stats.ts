const DAY_MS = 24 * 60 * 60 * 1000;

/** Converte um timestamp (ms) em uma data local no formato YYYY-MM-DD. */
export function toDateString(ts: number): string {
  const date = new Date(ts);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Sequência de dias consecutivos de estudo, terminando hoje (ou ontem, se
 * ainda não estudou hoje, para não "quebrar" a sequência durante o dia).
 */
export function currentStreak(dates: string[], nowTs: number): number {
  const set = new Set(dates);
  let cursor = nowTs;

  if (!set.has(toDateString(cursor))) {
    cursor -= DAY_MS;
    if (!set.has(toDateString(cursor))) return 0;
  }

  let streak = 0;
  while (set.has(toDateString(cursor))) {
    streak += 1;
    cursor -= DAY_MS;
  }
  return streak;
}
