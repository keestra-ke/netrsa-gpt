# Nestra / Keja Scan

Nestra is a GPS-based housing platform that maps vacant rooms, apartments, and estates in Nairobi. This repo is the Stage 1 website: a React demo of listings, Building Pulse, Inner Jobs, marketplace, and a map placeholder.

Live site: [keestra-ke.github.io/netrsa-gpt](https://keestra-ke.github.io/netrsa-gpt/)

## Local development

```bash
npm ci
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173/`).

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the Vite app and deploys `dist/` to GitHub Pages at `/netrsa-gpt/`.

## Product notes

The full product vision lives in `vacant_kenya_concept.md`. The UI currently uses dummy Nairobi data; there is no backend yet.
