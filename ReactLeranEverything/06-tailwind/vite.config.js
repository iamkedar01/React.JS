import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Here installing the tailwindcss for the react vite  to link  with react vite 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()], // here runing the tailwind css commond
})
