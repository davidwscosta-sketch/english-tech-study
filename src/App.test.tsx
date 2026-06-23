import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import { APP_NAME } from './lib/constants';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renderiza o nome do app no cabeçalho', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: APP_NAME })).toBeInTheDocument();
  });

  it('mostra a home com estatísticas e baralhos', () => {
    render(<App />);
    expect(screen.getByText('Sequência')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Baralhos' })).toBeInTheDocument();
    expect(screen.getByText('Vocabulário básico de código')).toBeInTheDocument();
  });

  it('inicia uma sessão de estudo ao clicar em Estudar', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: /Estudar/ })[0]);
    expect(screen.getByText(/Carta 1 de/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Eu sabia/ })).toBeInTheDocument();
  });

  it('abre a tela de estatísticas', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Estatísticas/ }));
    expect(screen.getByRole('heading', { name: 'Estatísticas' })).toBeInTheDocument();
    expect(screen.getByText('cartas dominadas')).toBeInTheDocument();
  });

  it('inicia um quiz ao clicar em Quiz', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: /Quiz/ })[0]);
    expect(screen.getByText(/Pergunta 1 de/)).toBeInTheDocument();
  });
});
