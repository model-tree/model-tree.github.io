import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'

function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const outDir = resolve('dist')
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf-8')
      writeFileSync(resolve(outDir, '404.html'), html)
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), copy404Plugin()],
  base: '/',
  build: {
    outDir: 'dist',
  },
}))
