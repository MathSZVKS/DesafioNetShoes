import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Navbar', () => {
  // Teste 1: Se o componente renderiza
  test('renders Navbar component', () => {
    renderWithRouter(<Navbar />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  // Teste 2: Comportamento do link dependendo da rota
  test('changes link text and icon based on route', () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const wishlistLink = screen.getByRole('link', { name: /lista de desejos/i });
    expect(wishlistLink).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={['/wishlist']}>
        <Navbar />
      </MemoryRouter>
    );
    const productsLink = screen.getByRole('link', { name: /produtos/i });
    expect(productsLink).toBeInTheDocument();
  });
});