# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint across all .js/.jsx files
```

## Architecture

**Stack:** React 19 + Vite 8 + Tailwind CSS v4

**Tailwind v4 setup** — no `tailwind.config.js`. The plugin is registered in `vite.config.js` via `@tailwindcss/vite`, and `src/index.css` contains only `@import "tailwindcss"`. All customization goes through CSS `@theme` directives in that file.

**Component layout:**
- `src/App.jsx` — root, composes layout sections
- `src/components/` — page-level sections (Header, Hero, Features, Footer); no routing yet

**ESLint config** uses flat config (`eslint.config.js`). Unused vars are an error except for names matching `/^[A-Z_]/` (React component conventions).
