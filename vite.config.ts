import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Define a pasta "front-end" como raiz do projeto Vite
  root: 'front-end',
  // Mantém a pasta "public" na raiz do repo como diretório de assets estáticos
  // para que caminhos absolutos como "/fellipe.png" e "/jhonathan.png" funcionem.
  publicDir: '../public',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: false, // se 5173 estiver em uso, tenta a próxima porta
  },
})