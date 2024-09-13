import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    'process.env.VITE_MAPBOX_API_KEY': JSON.stringify(process.env.VITE_MAPBOX_API_KEY)
  }
})