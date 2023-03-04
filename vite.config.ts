import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  base: env.NODE_ENV === 'development' ? '/' : '/meta2d-vue/',
  plugins: [vue()],
  server: {
    open: true,
    port: 7777,
  },
})
