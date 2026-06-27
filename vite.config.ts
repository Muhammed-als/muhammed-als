import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/muhammed-als/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    fs: {
      strict: true,
    },
  },
  preview: {
    host: '127.0.0.1',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
