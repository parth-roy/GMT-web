import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this server block right here:
  server: {
    allowedHosts: ['gomytruck.com', 'www.gomytruck.com']
  }
})