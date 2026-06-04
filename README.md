# @onlooker-community/docs

Source for [docs.onlooker.dev](https://docs.onlooker.dev) — the Onlooker ecosystem
documentation site.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and
deployed to Cloudflare via Wrangler.

## Develop

```sh
mise install
npm install
npm run dev
```

Local dev server runs at `localhost:4321`.

## Build

```sh
npm run build
```

Output lands in `dist/`.

## Deploy

Once the Cloudflare project and GitHub deploy hook are set up, pushing to `main` deploys to `docs.onlooker.dev`. To deploy locally:

```sh
npm run deploy
```

## Structure

Docs pages live under `src/content/docs/`. The sidebar is configured in
`astro.config.mjs`. Search is provided by [Pagefind](https://pagefind.app), which
Starlight enables by default.
