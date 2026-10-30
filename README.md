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
│   │   ├── sss-navbar.ts           # Sticky navigation bar & multi-page links
│   │   ├── sss-hero.ts             # Hero section, Squad Hype counter & stats
│   │   ├── sss-vibe-board.ts       # Interactive Excuse Generator & Side-Quests
│   │   ├── sss-roster.ts           # Squad archetype & creator cards
│   │   ├── sss-theater.ts          # SSS TV creator channel cards & links
│   │   ├── sss-memories.ts         # The Squad Code & IRL polaroid showcase
│   │   ├── sss-channel-page.ts     # Dedicated creator channel page component
│   │   └── sss-footer.ts           # Footer & back-to-top navigation
│   ├── data/
│   │   └── squad-data.ts           # Typed squad content, channel profiles & videos
│   ├── styles/                     # Modular CSS stylesheets
│   │   ├── base.css                # Global theme, typography & layout
│   │   ├── navbar.css              # Sticky glassmorphic header styles
│   │   ├── hero.css                # Hero grid, hype buttons & sitcom poster
│   │   ├── vibes-roster.css        # Interactive board & roster card styles
│   │   ├── theater-memories.css    # Video vault, Squad Code & polaroid styles
│   │   └── channel-page.css        # Dedicated creator channel page styles
│   ├── index.html                  # HQ Home page with SEO meta tags & JSON-LD
│   ├── t3n0r10.html                # T3N0R10 (@T3N0RI0) creator page (latest video: Drunk fools)
│   ├── vim-diesel.html             # Vim Diesel (@vimdiesel1148) creator page
│   ├── andrew-marks.html           # Andrew!! (@andrewmarks100) creator page
│   ├── main.ts                     # Registers all custom elements
│   ├── manifest.webmanifest        # Web App Manifest
│   ├── robots.txt                  # Search engine crawler directives
│   └── sitemap.xml                 # XML sitemap for https://www.supersexysquad.com
├── AGENTS.md                       # AI agent & contributor architecture guide
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
