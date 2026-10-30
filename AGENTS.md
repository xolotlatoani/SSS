# AGENTS.md — Super Sexy Squad (SSS)

## Overview
**Super Sexy Squad (SSS)** (`https://www.supersexysquad.com`) is a fast, retro-neon friend-group website and video vault featuring interactive squad tools (excuse generator, side-quest roller, hype counter), squad archetypes, a YouTube playlist theater (`SSS TV`), and IRL squad milestones.

## Tech Stack & Architecture
- **Language & Compiler**: **TypeScript 7.1** (`7.1.0-dev` native Go-based compiler via `@typescript/typescript-<platform>-<arch>`) targeting `ES2022` modules.
- **UI Architecture**: **Native Web Components (Custom Elements v1)** with zero runtime framework dependencies.
- **Styling**: Modular plain CSS files in `src/styles/` loaded directly by `src/index.html`.
- **SEO & Static Hosting**: Pre-populated semantic fallback HTML inside custom element tags, Schema.org JSON-LD (`WebSite`, `Organization`, `ItemList`), Open Graph & Twitter Card metadata, `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`.
- **Deployment Target**: Built via **AWS CodeBuild** (`buildspec.yml`) and deployed as static files to **Amazon S3** from `./dist/sss`.

## Directory Layout
- `src/index.html` — Main HTML entry point, SEO metadata, JSON-LD, and static fallback content.
- `src/main.ts` — Imports and registers all custom elements.
- `src/data/squad-data.ts` — Typed interfaces and content arrays (`SQUAD_STATS`, `SQUAD_ROLES`, `SQUAD_EXCUSES`, `SQUAD_CHALLENGES`, `SQUAD_PLAYLISTS`, `SQUAD_COMMANDMENTS`).
- `src/components/` — Modular Web Components:
  - `sss-navbar.ts` (`<sss-navbar>`)
  - `sss-hero.ts` (`<sss-hero>`)
  - `sss-vibe-board.ts` (`<sss-vibe-board>`)
  - `sss-roster.ts` (`<sss-roster>`)
  - `sss-theater.ts` (`<sss-theater>`)
  - `sss-memories.ts` (`<sss-memories>`)
  - `sss-footer.ts` (`<sss-footer>`)
- `src/styles/` — Modular CSS (`base.css`, `navbar.css`, `hero.css`, `vibes-roster.css`, `theater-memories.css`).
- `src/assets/` — Static images (`sss.jpg`, `themarks.jpg`).
- `build.js` — Invokes the platform's native TypeScript 7.1 `tsc` binary and copies all static assets into `./dist/sss`.

## Commands
- **Install dependencies**: `npm install`
- **Build & Typecheck**: `npm run build` (or `npm run typecheck`)
- **Output directory**: `./dist/sss`

## Conventions for Agents
- Keep components modular and self-contained in `src/components/`, and keep shared data in `src/data/squad-data.ts`.
- Do not introduce heavy runtime frameworks; use native DOM APIs and Custom Elements.
- Use `.js` extensions in relative TypeScript `import` paths (e.g., `import { SQUAD_STATS } from '../data/squad-data.js';`) so native browser ES modules resolve cleanly in `./dist/sss` without a bundler.
- Always run `npm run build` after modifying `.ts`, `.html`, or `.css` files to verify TypeScript 7.1 compilation and static asset output.
