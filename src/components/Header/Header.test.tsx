import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

const mockToggleTheme = vi.fn();
vi.mock('@/components', () => {
  const actual = vi.importActual<typeof import('@/components')>('@/components');
  return {
    ...actual, // Preserve other exports like `Navigation`
    useTheme: () => ({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    }),
    Navigation: () => <div>Navigation</div>,
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
