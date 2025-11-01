import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto-detect base for GitHub Pages when building in Actions
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGhActions = !!process.env.GITHUB_ACTIONS
const base = isGhActions && repo ? `/${repo}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})

