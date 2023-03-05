import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { env } from 'process'
import path from 'path'

export default defineConfig({
  base: env.NODE_ENV === 'development' ? '/' : '/meta2d-vue/',
  plugins: [vue()],
  server: {
    open: true,
    port: 7777,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
