# Keja Scan Kenya (Vacant Kenya)

Stage 1 website for a GPS housing and estate-life map of Nairobi. You open a live feed — not a search bar — then explore houses, **Mtaa View**, services, and the community board.

Live site: [keestra-ke.github.io/netrsa-gpt](https://keestra-ke.github.io/netrsa-gpt/)

## Demo routes

- `/` live housing feed
- `/listings` deep search · `/listings/:id` full room (rules, utilities, caretaker)
- `/map` Mtaa View layers (housing, services, community)
- `/services` movers, vibarua, water, security, network, venues, door breaker
- `/community` building notices · `/pulse` `/jobs` `/marketplace`

Dummy Nairobi data only. No backend or M-Pesa yet. The long product write-up is `vacant_kenya_concept.md`.

## Local development

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

Pushes to `main` deploy `dist/` to GitHub Pages at `/netrsa-gpt/`.
