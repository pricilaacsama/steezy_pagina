import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/steezy_pagina/', // <- debe coincidir con el nombre del repo
  plugins: [react()],
})
