import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock Home Component
vi.mock('@/components', () => ({
  Home: () => <div data-testid='home-page'>Home Page</div>,
}));

describe('App Routing', () => {
  test('renders Home page on "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders Home page on "/about" route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders Home page on "/contact" route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
