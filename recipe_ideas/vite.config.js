import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // default output folder
  },
  server: {
    port: 3000, // local dev server port
  },
})

const apiKey = import.meta.env.VITE_API_KEY;

console.log("API Key:", apiKey); // Just for checking
