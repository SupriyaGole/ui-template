import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/components';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

// Mock localStorage
beforeEach(() => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
    if (key === 'theme') return 'light';
    return null;
  });

  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

// Test Component to consume the context
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  test('renders children correctly', () => {
    render(
      <ThemeProvider>
        <p>Theme Provider Loaded</p>
      </ThemeProvider>
    );

    expect(screen.getByText('Theme Provider Loaded')).toBeInTheDocument();
  });

  test('provides default theme as "light"', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByText('Current Theme: light')).toBeInTheDocument();
  });

  test('toggles theme when button is clicked', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    await userEvent.click(button);

    expect(screen.getByText('Current Theme: dark')).toBeInTheDocument();
  });

  test('stores theme in localStorage when toggled', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    await userEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });
});
