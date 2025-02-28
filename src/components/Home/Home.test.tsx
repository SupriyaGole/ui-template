import { render, screen } from '@testing-library/react';
import Home from './Home';

vi.mock('@/components', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));
describe('Home Component', () => {
  test('renders content inside Layout', () => {
    render(<Home />);

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
