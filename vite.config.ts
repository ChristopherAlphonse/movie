import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': new URL('src/', import.meta.url).pathname,
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
