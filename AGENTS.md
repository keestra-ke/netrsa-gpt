# AGENTS.md

## Cursor Cloud specific instructions

Keja Scan Kenya is a single-page **Vite + React** app (React Router) with no backend — all data is dummy Nairobi data in `src/data/dummyData.js`. There is nothing to authenticate against and no database/services to run.

Environment: Node 22 with npm (lockfile is `package-lock.json`). Dependencies are refreshed by the startup update script (`npm ci`), so you normally don't need to reinstall.

Standard commands live in `package.json` and `README.md`:
- `npm run dev` — Vite dev server (defaults to `http://localhost:5173/`; add `-- --host 0.0.0.0` to expose it). This is the main way to run the app for development.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build.

Non-obvious notes:
- There are **no lint or test scripts** defined; the CI workflow (`.github/workflows/deploy.yml`) only runs `npm ci` + `npm run build` and deploys `dist/` to GitHub Pages.
- The Vite `base` path switches to `/netrsa-gpt/` only when `GITHUB_ACTIONS` is set (see `vite.config.js`). Locally it stays at `/`, and the React Router `basename` follows `import.meta.env.BASE_URL`, so use root-relative routes like `/listings` when testing locally.
