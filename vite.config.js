import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 120,
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
