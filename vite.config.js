import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const isDev = command !== 'build'
  const isVercel = Boolean(process.env.VERCEL)

  return {
    plugins: [react(), tailwindcss()],
    // GitHub Pages needs a subpath; Vercel and local dev use root.
    base: isDev || isVercel ? '/' : '/Yevgen-Portfolio/',
  }
})
