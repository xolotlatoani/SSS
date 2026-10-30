# Super Sexy Squad (SSS)

Official friend-group website and video vault for the **Super Sexy Squad** (`https://www.supersexysquad.com`).

Built with **TypeScript 7.1**, **Native Web Components (Custom Elements)**, semantic **HTML5**, and modular **CSS**—with zero runtime framework overhead and static-site output tailored for **AWS CodeBuild + Amazon S3**.

---

## Project Structure

```text
SSS/
├── src/
│   ├── assets/
│   │   ├── sss.jpg                 # Super Sexy Squad skyline logo
│   │   └── themarks.jpg            # Squad IRL milestone photo
│   ├── components/                 # Native Web Components (<sss-*>)
│   │   ├── sss-navbar.ts           # Sticky navigation bar & squad status
│   │   ├── sss-hero.ts             # Hero section, Squad Hype counter & stats
│   │   ├── sss-vibe-board.ts       # Interactive Excuse Generator & Side-Quests
│   │   ├── sss-roster.ts           # Squad archetype cards
│   │   ├── sss-theater.ts          # SSS TV YouTube playlist theater
│   │   ├── sss-memories.ts         # The Squad Code & IRL polaroid showcase
│   │   └── sss-footer.ts           # Footer & back-to-top navigation
│   ├── data/
│   │   └── squad-data.ts           # Typed squad content, playlists & quotes
│   ├── styles/                     # Modular CSS stylesheets
│   │   ├── base.css                # Global theme, typography & layout
│   │   ├── navbar.css              # Sticky glassmorphic header styles
│   │   ├── hero.css                # Hero grid, hype buttons & sitcom poster
│   │   ├── vibes-roster.css        # Interactive board & roster card styles
│   │   └── theater-memories.css    # Video vault, Squad Code & polaroid styles
│   ├── index.html                  # SEO-friendly entry point with JSON-LD & SSR fallback
│   ├── main.ts                     # Registers all custom elements
│   ├── manifest.webmanifest        # Web App Manifest
│   ├── robots.txt                  # Search engine crawler directives
│   └── sitemap.xml                 # XML sitemap for https://www.supersexysquad.com
├── tools/                          # AWS CodeBuild compatibility shim for legacy `ng build`
├── build.js                        # TypeScript 7.1 native compiler & static asset bundler
├── buildspec.yml                   # AWS CodeBuild specification (outputs to ./dist/sss)
├── package.json
└── tsconfig.json
```

---

## Development & Build

### Install Dependencies
```bash
npm install
```

### Build for Production (S3 Static Hosting)
Compiles all TypeScript modules with the **TypeScript 7.1** native compiler and copies static assets (`index.html`, `styles/`, `assets/`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`) into `./dist/sss`:
```bash
npm run build
```

### Preview Locally
Serve `./dist/sss` with any static file server:
```bash
npx serve dist/sss
# or
python -m http.server 8080 --directory dist/sss
```
