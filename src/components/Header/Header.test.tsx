import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

const mockToggleTheme = vi.fn();
vi.mock('../Navigation/Navigation', () => ({
  Navigation: () => <div>Navigation</div>,
}));
vi.mock('../ThemeProvider/ThemeProvider', () => {
  const actual = vi.importActual('../ThemeProvider/ThemeProvider');
  return {
    ...actual,
    useTheme: () => ({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    }),
  };
});

describe('Header', () => {
  test('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('🌙 Dark Mode')).toBeInTheDocument();
  });

  test('toggles theme on button click', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('🌙 Dark Mode'));

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
