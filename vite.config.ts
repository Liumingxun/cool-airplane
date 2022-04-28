import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const r = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': r('src'),
      '~a': r('src/assets'),
      '~v': r('src/views'),
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('G'),
      },
    },
  })],
})
