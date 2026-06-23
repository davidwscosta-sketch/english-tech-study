import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { APP_NAME } from './lib/constants';

describe('App', () => {
  it('renderiza o nome do app', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: APP_NAME })).toBeInTheDocument();
  });

  it('mostra o marco da Etapa 1', () => {
    render(<App />);
    expect(screen.getByText(/Etapa 1/)).toBeInTheDocument();
  });
});
