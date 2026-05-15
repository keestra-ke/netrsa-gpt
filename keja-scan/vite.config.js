import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'keja-scan' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/keja-scan/', 
})
