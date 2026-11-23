# Luis Nativi Claude Portfolio

Premium personal CV website built with React, Tailwind CSS, Vite, and Docker.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Docker

Run the CV locally with live updates and the GitHub contributions API:

```bash
docker compose up --build --watch
```

Open `http://localhost:8080`. Stop it with `Ctrl+C` or `docker compose down`.

To serve only the static production build with Nginx:

```bash
docker build -t luis-nativi-portfolio .
docker run --rm -p 127.0.0.1:8080:80 luis-nativi-portfolio
```

## Vercel

Use the Vite framework preset with `npm run build` and output directory `dist`.
Vercel serves the production contributions endpoint from `api/github-contributions.mjs`.

## Content Updates

Most personal content lives in `src/data.ts`. Replace placeholder projects, certifications, LinkedIn, and CV links when the final material is ready.
