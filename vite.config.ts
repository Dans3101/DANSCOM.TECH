import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          services: path.resolve(__dirname, 'services.html'),
          virtualAssistant: path.resolve(__dirname, 'virtual-assistant.html'),
          aiAutomation: path.resolve(__dirname, 'ai-automation.html'),
          development: path.resolve(__dirname, 'development.html'),
          tradingTechnology: path.resolve(__dirname, 'trading-technology.html'),
          writingResearch: path.resolve(__dirname, 'writing-research.html'),
          projects: path.resolve(__dirname, 'projects.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          articleVA: path.resolve(__dirname, 'article-virtual-assistance.html'),
          articleAI: path.resolve(__dirname, 'article-ai-workflows.html'),
          articleStatic: path.resolve(__dirname, 'article-static-sites.html'),
          articleResearch: path.resolve(__dirname, 'article-research.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          notFound: path.resolve(__dirname, '404.html'),
          offline: path.resolve(__dirname, 'offline.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

