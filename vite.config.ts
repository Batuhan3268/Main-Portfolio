import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  build: {
    sourcemap: true,
    // terserOptions:
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    tailwindcss(),
    vue(),
    robots(),
    sitemap({
      hostname: 'https://hetari.github.io/',
      basePath: 'portfolio',
      changefreq: 'hourly', // default: 'daily'
      priority: 1,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
}));
