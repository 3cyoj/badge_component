import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/badge_component/',
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./setupVitest.js'],
  },
})
