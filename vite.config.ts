import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      exclude: ['src/main.tsx', 'vite.config.ts', 'src/vite-env.d.ts'],
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
});
