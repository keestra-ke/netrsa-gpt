import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /netrsa-gpt/. Local `vite` / `vite preview` stay at /.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/netrsa-gpt/' : '/',
})
