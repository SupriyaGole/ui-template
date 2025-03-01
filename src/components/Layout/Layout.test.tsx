import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

vi.mock('../ThemeProvider/ThemeProvider', async () => {
  const actual = await vi.importActual('../ThemeProvider/ThemeProvider');

  return {
    ...actual,
    useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  };
});
vi.mock('../Header/Header', () => ({
  Header: () => <div>Header</div>,
}));
describe('Layout Component', () => {
  test('renders Layout correctly', () => {
    render(
      <Layout>
        <p>Test Content</p>
      </Layout>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(
      screen.getByText('Released under the MIT License.'),
    ).toBeInTheDocument();
  });
});
