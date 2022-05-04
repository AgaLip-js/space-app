import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: false
          }
        ]
      ]
    }
  })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      '/user': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      },
    },
  },
  build: {
    outDir: "build",
  }
})
