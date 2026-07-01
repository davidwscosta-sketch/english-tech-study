import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useStudySession } from './useStudySession';
import type { Deck } from '../types';

const deck: Deck = {
  id: 'test',
  title: 'Teste',
  emoji: '🧪',
  description: 'baralho de teste',
  cards: [
    { id: 'a', front: 'a', back: 'á', level: 'iniciante' },
    { id: 'b', front: 'b', back: 'bê', level: 'iniciante' },
  ],
};

describe('useStudySession', () => {
  it('começa na primeira carta, sem virar e sem placar', () => {
    const { result } = renderHook(() => useStudySession(deck));
    expect(result.current.index).toBe(0);
    expect(result.current.current?.id).toBe('a');
    expect(result.current.flipped).toBe(false);
    expect(result.current.finished).toBe(false);
  });

  it('vira e desvira a carta', () => {
    const { result } = renderHook(() => useStudySession(deck));
    act(() => result.current.flip());
    expect(result.current.flipped).toBe(true);
  });

  it('avança e contabiliza acertos e revisões, terminando ao fim', () => {
    const { result } = renderHook(() => useStudySession(deck));
    act(() => result.current.markKnown());
    expect(result.current.index).toBe(1);
    expect(result.current.knownCount).toBe(1);
    expect(result.current.flipped).toBe(false);

    act(() => result.current.markUnknown());
    expect(result.current.finished).toBe(true);
    expect(result.current.unknownCount).toBe(1);
    expect(result.current.current).toBeUndefined();
  });

  it('reinicia a sessão', () => {
    const { result } = renderHook(() => useStudySession(deck));
    act(() => result.current.markKnown());
    act(() => result.current.restart());
    expect(result.current.index).toBe(0);
    expect(result.current.knownCount).toBe(0);
  });
});
