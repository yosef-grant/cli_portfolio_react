/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 500
    }
  },
  plugins: [react({
    include: "**/*.tsx",
    babel: {
      plugins: [['babel-plugin-react-compiler']]
    }
  })],
});