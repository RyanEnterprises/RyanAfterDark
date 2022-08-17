import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: false
    }
  })],
  build: {
    rollupOptions: {
        input: {
            index: 'index.html',
            fourOhFour: '404.html',
        },
        output: {
            dir: './docs',
        }
    }
  }
})
