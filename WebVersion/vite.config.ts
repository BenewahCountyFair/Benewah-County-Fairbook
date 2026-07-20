import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/Benewah-County-Fairbook/' : '/',
  root: 'WebVersion',
  build: { outDir: '../dist', emptyOutDir: true },
})
