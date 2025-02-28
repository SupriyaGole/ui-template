import { render, screen } from '@testing-library/react';
import Home from './Home';

vi.mock('@/components', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));
describe('Home Component', () => {
  test('renders content inside Layout', () => {
    render(<Home />);

    // Check if the Layout component is rendered
    expect(screen.getByTestId('layout')).toBeInTheDocument();

    // Check if the text content exists inside the Layout
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
