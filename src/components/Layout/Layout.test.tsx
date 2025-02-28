import { render, screen } from '@testing-library/react';
import Layout from './Layout';

vi.mock('@/components', async () => {
  const actual = await vi.importActual('@/components');

  return {
    ...actual,
    Header: () => <div>Header</div>,
    useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  };
});
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
