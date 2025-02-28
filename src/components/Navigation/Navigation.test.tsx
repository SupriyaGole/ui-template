import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('links have correct href attributes', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
  });
});
