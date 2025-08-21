import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Routebar from './Routebar';

describe('Routebar', () => {
  // Teste 1: Renderização na página inicial
  test('renders "Home" when on the homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routebar />
      </MemoryRouter>
    );
    const homeSpan = screen.getByText('Home');
    expect(homeSpan).toBeInTheDocument();
    expect(homeSpan).toHaveClass('active');
  });

  // Teste 2: Renderização para uma rota de nível único
  test('renders "Home / Lista de desejos" on a single-level route', () => {
    render(
      <MemoryRouter initialEntries={['/wishlist']}>
        <Routebar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const separator = screen.getByText('/');
    const wishlistSpan = screen.getByText('Lista de desejos');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(separator).toBeInTheDocument();
    expect(wishlistSpan).toBeInTheDocument();
    expect(wishlistSpan).toHaveClass('active');
  });

  // Teste 3: Renderização para uma rota de múltiplos níveis
  test('renders multiple links and the last active span on a multi-level route', () => {
    render(
      <MemoryRouter initialEntries={['/profile/settings']}>
        <Routebar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const profileLink = screen.getByRole('link', { name: 'Perfil' });
    const settingsSpan = screen.getByText('Settings');

    expect(homeLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/profile');
    expect(settingsSpan).toBeInTheDocument();
    expect(settingsSpan).toHaveClass('active');
  });
});