import { render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Test Error');
};

describe('Error Boundary', () => {
  beforeEach(() => {
    // Mock console.error to suppress error messages during the test
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {}); // Optional, if you want to suppress warnings too
  });

  test('renders children without error', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders fallback UI when an error is thrown', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
  });

  test('componentDidCatch is called when an error is thrown', () => {
    const spyOnConsoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(spyOnConsoleError).toHaveBeenCalledWith(
      'Error caught by ErrorBoundary:',
      expect.any(Error),
      expect.any(Object),
    );

    spyOnConsoleError.mockRestore(); // Restore original console.error implementation
  });

  test('renders fallback UI only when an error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );

    expect(screen.queryByText('Oops! Something went wrong.')).toBeNull();

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
  });

  test('getDerivedStateFromError is called and sets hasError state', () => {
    const spy = vi.spyOn(ErrorBoundary, 'getDerivedStateFromError');

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    // Check if getDerivedStateFromError was called
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
