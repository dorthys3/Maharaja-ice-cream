import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Maharaja-ice-cream/',  // Repo name correct ah kudunga
  plugins: [react()],
})