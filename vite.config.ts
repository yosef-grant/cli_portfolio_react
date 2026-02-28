import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 500
    }
  },
  plugins: [
    react({
      include: "**/*.tsx",
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
