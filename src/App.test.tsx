import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { APP_NAME } from './lib/constants';

describe('App', () => {
  it('renderiza o nome do app no cabeçalho', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: APP_NAME })).toBeInTheDocument();
  });

  it('mostra a lista de baralhos na tela inicial', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Escolha um baralho/ })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Claude Code — Slash commands/ }),
    ).toBeInTheDocument();
  });

  it('inicia uma sessão de estudo ao escolher um baralho', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Vocabulário básico de código/ }));
    expect(screen.getByText(/Carta 1 de/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Eu sabia/ })).toBeInTheDocument();
  });
});
