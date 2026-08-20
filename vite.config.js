import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const forApp = process.env.CAPACITOR === 'true'
const forPages = process.env.GITHUB_ACTIONS === 'true' && !forApp

export default defineConfig({
  plugins: [react()],
  base: forApp ? '/' : forPages ? '/netrsa-gpt/' : '/',
})
