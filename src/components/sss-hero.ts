import { SQUAD_STATS } from '../data/squad-data.js';

export class SssHero extends HTMLElement {
  private hypeCount = 69;

  connectedCallback(): void {
    this.render();
    this.attachEvents();
  }

  private render(): void {
    const statsHtml = SQUAD_STATS.map(
      stat => `
        <div class="stat-card">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
          <span class="stat-sub">${stat.sub}</span>
        </div>
      `
    ).join('');

    this.innerHTML = `
      <section class="hero-section">
        <div class="hero-glow hero-glow-pink"></div>
        <div class="hero-glow hero-glow-cyan"></div>

        <div class="hero-grid">
          <div class="hero-copy">
            <div class="eyebrow-pill">
              <span class="material-icons">bolt</span>
              <span>OFFICIAL HEADQUARTERS &bull; TROLLS, NERDS &amp; LEGENDS</span>
            </div>

            <h1 class="hero-title">
              SUPER <span class="text-gradient">SEXY</span> SQUAD
            </h1>

            <p class="hero-subtitle">
              You are probably asking yourself: <strong>“WTF is this?”</strong><br>
              To be honest, we still don’t have any answers—just elite friendship, questionable strategies, and years of legendary clips.
            </p>

            <div class="hero-actions">
              <a href="#theater" class="btn-primary">
                <span class="material-icons">play_circle_filled</span>
                <span>Watch Squad TV</span>
              </a>

              <button type="button" class="btn-hype" id="hype-btn">
                <span class="material-icons">whatshot</span>
                <span id="hype-label">Squad Hype: ${this.hypeCount} 🔥</span>
              </button>
            </div>

            <div class="stats-row">
              ${statsHtml}
            </div>
          </div>

          <div class="hero-visual">
            <div class="poster-frame">
              <div class="poster-sticker">SITCOM OPENING ENERGY</div>
              <img src="assets/sss.jpg" alt="Super Sexy Squad Skyline Logo" class="hero-logo-img">
              <div class="poster-caption">
                <span class="caption-tag">S01 &bull; EP&infin;</span>
                <span>Filmed on location in voice chat &amp; real life</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private attachEvents(): void {
    const btn = this.querySelector<HTMLButtonElement>('#hype-btn');
    const label = this.querySelector<HTMLSpanElement>('#hype-label');
    if (btn && label) {
      btn.addEventListener('click', () => {
        this.hypeCount += 1;
        label.textContent = `Squad Hype: ${this.hypeCount} 🔥`;
      });
    }
  }
}

customElements.define('sss-hero', SssHero);
