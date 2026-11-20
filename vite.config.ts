import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import contributions from './api/github-contributions.mjs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-github-contributions',
      configureServer(server) {
        server.middlewares.use('/api/github-contributions', contributions);
      },
      configurePreviewServer(server) {
        server.middlewares.use('/api/github-contributions', contributions);
      },
    },
  ],
});
