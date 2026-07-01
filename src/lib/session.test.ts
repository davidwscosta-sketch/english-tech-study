import { describe, expect, it } from 'vitest';
import { scoreLabel, scoreMessage, scorePercent } from './session';

describe('scorePercent', () => {
  it('retorna 0 quando não há cartas', () => {
    expect(scorePercent(0, 0)).toBe(0);
  });

  it('calcula e arredonda a porcentagem', () => {
    expect(scorePercent(5, 10)).toBe(50);
    expect(scorePercent(2, 3)).toBe(67);
  });
});

describe('scoreLabel', () => {
  it('classifica conforme os limiares', () => {
    expect(scoreLabel(90)).toBe('Excelente');
    expect(scoreLabel(70)).toBe('Bom');
    expect(scoreLabel(45)).toBe('Inicial');
    expect(scoreLabel(10)).toBe('Precisa revisar');
  });
});

describe('scoreMessage', () => {
  it('retorna uma mensagem para qualquer pontuação', () => {
    for (const percent of [0, 45, 70, 100]) {
      expect(scoreMessage(percent).length).toBeGreaterThan(0);
    }
  });
});
