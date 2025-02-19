import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwind/myapp'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
