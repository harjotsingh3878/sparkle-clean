import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: './', // Ensures relative paths for assets in production
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
      sourcemap: false, // Disable sourcemaps in production for cleaner build
      chunkSizeWarningLimit: 1000
    },
    server: {
      host: true // Listen on all addresses (0.0.0.0) which is often required for containerized previews
    }
  };
});