import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    input:{
        main:resolve(__dirname, "index.html"),
        prueba:resolve(__dirname, "prueba.html")
    }

  }
})