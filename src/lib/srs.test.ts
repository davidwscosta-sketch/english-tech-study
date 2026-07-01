import { describe, expect, it } from 'vitest';
import { BOX_INTERVAL_DAYS, MAX_BOX, isDue, isMastered, nextProgress } from './srs';

const DAY_MS = 24 * 60 * 60 * 1000;
const NOW = 1_700_000_000_000;

describe('nextProgress', () => {
  it('sobe uma caixa ao acertar', () => {
    const p = nextProgress(undefined, true, NOW);
    expect(p.box).toBe(2);
    expect(p.due).toBe(NOW + BOX_INTERVAL_DAYS[2] * DAY_MS);
    expect(p.seen).toBe(1);
  });

  it('volta para a caixa 1 ao errar', () => {
    const after3 = { box: 3, due: NOW, lastReviewed: NOW, seen: 3 };
    const p = nextProgress(after3, false, NOW);
    expect(p.box).toBe(1);
    expect(p.seen).toBe(4);
  });

  it('não passa da caixa máxima', () => {
    const top = { box: MAX_BOX, due: NOW, lastReviewed: NOW, seen: 9 };
    expect(nextProgress(top, true, NOW).box).toBe(MAX_BOX);
  });
});

describe('isDue', () => {
  it('considera carta nunca vista como disponível', () => {
    expect(isDue(undefined, NOW)).toBe(true);
  });

  it('respeita a data de revisão', () => {
    const p = { box: 2, due: NOW + DAY_MS, lastReviewed: NOW, seen: 1 };
    expect(isDue(p, NOW)).toBe(false);
    expect(isDue(p, NOW + DAY_MS)).toBe(true);
  });
});

describe('isMastered', () => {
  it('só é verdadeiro na caixa máxima', () => {
    expect(isMastered(undefined)).toBe(false);
    expect(isMastered({ box: 4, due: NOW, lastReviewed: NOW, seen: 4 })).toBe(false);
    expect(isMastered({ box: MAX_BOX, due: NOW, lastReviewed: NOW, seen: 5 })).toBe(true);
  });
});
