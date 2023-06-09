import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@ui':      __dirname + '/src/components/ui',
        '@widgets': __dirname + '/src/components/widgets',
        '@api': __dirname + '/src/api',
        '@context': __dirname + '/src/context',

    }
  }
})
