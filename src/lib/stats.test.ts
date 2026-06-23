import { describe, expect, it } from 'vitest';
import { currentStreak, toDateString } from './stats';

const DAY_MS = 24 * 60 * 60 * 1000;
const NOW = new Date('2026-06-23T12:00:00').getTime();

const day = (offset: number) => toDateString(NOW + offset * DAY_MS);

describe('currentStreak', () => {
  it('retorna 0 sem dias estudados', () => {
    expect(currentStreak([], NOW)).toBe(0);
  });

  it('conta dias consecutivos terminando hoje', () => {
    expect(currentStreak([day(-2), day(-1), day(0)], NOW)).toBe(3);
  });

  it('mantém a sequência se estudou ontem mas ainda não hoje', () => {
    expect(currentStreak([day(-2), day(-1)], NOW)).toBe(2);
  });

  it('quebra com lacuna', () => {
    expect(currentStreak([day(-5), day(-4)], NOW)).toBe(0);
  });
});
