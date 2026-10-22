import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/Benewah-County-Fairbook/' : '/',
  root: 'WebVersion',
  build: {
    // Preserve the browser targets used by the original Vite 5 build.
    target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
    // Preserve the design system's CSS cascade when building with Vite 8.
    cssMinify: 'esbuild',
    outDir: '../dist',
    emptyOutDir: true,
  },
})
