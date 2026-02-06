import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so the same build works on:
  // - https://rotemgonen.github.io/My-Portfolio/
  // - https://rotemg-portfolio.com/
  base: './',
  build: {
    outDir: '.',
  },
})
