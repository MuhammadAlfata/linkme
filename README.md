# Link-in-Bio SPA (React + Vite + Tailwind)

A lightweight, no-backend Link-in-Bio web app. Edit inline, autosave to localStorage, drag-and-drop reordering, import/export JSON, dark mode, and modern gradient background. Ready for Vercel or GitHub Pages.

## Features
- Inline edit: profile + links (title, URL, emoji, badge, note)
- Autosave to `localStorage` (`linkinbio_config_v1`)
- Import/Export JSON, Copy All links
- Drag-and-drop reorder (pointer events, no heavy libs)
- Dark mode toggle (persisted), accessible focus rings
- Responsive, mobile-first, Lighthouse 90+ targets

## Tech Stack
- React 18, Vite, Tailwind CSS, lucide-react

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build to `dist`
- `npm run preview` — preview production build

## Local Development
1. Install deps: `npm i`
2. Run dev server: `npm run dev`
3. Open the printed local URL.

## Build
- `npm run build` → outputs to `dist`

## Deploy
### Vercel
- Import the repo on Vercel
- Framework preset: Vite (auto)
- Build command: `npm run build`
- Output: `dist`

### GitHub Pages
- This repo includes a workflow: `.github/workflows/deploy.yml`
- Ensure the default branch is `main`
- In GitHub: Settings → Pages → Source: GitHub Actions
- Push to `main`; the workflow builds and deploys to Pages

Vite base path is auto-detected in CI from `${GITHUB_REPOSITORY}` (so you don’t need to hardcode `base: '/REPO/'`).

## JSON Schema
```
{
  "profile": {
    "name": "string",
    "handle": "string",
    "bio": "string",
    "avatarUrl": "string",
    "accent": "string",
    "socials": [
      { "type": "website|instagram|github|email|linkedin|tiktok|x", "label": "string", "url": "string" }
    ]
  },
  "links": [
    {
      "id": "string-uuid",
      "title": "string",
      "url": "string",
      "emoji": "string",
      "badge": "string (optional)",
      "note": "string (optional)"
    }
  ]
}
```

## Accessibility
- Buttons include `aria-label`
- Focus rings via Tailwind utilities
- Sufficient text contrast in light/dark

## Notes
- Tailwind safelist includes gradient utilities like `from-*/via-*/to-*` to support dynamic gradient editing.
- Drag-and-drop uses simple pointer enter logic; works on touch and mouse.

***

MIT-like usage. Customize freely.
