import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/productapi": "https://fakestoreapi.com/product",
  //   }  
  // } ,


  server: {
    cors: false,
    proxy: {
      '/random_joke/product': {
        target: 'https://fakestoreapi.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [react()],
})