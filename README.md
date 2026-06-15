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

```bash
docker build -t luis-nativi-portfolio .
docker run --rm -p 8080:80 luis-nativi-portfolio
```

Open `http://localhost:8080`.

## Content Updates

Most personal content lives in `src/data.ts`. Replace placeholder projects, certifications, LinkedIn, and CV links when the final material is ready.
