import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Explicit base for GitHub Pages
// Repo name: linkme → served at https://<user>.github.io/linkme/
const base = '/linkme/'

export default defineConfig({
  plugins: [react()],
  base,
})
