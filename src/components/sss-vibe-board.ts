import { SQUAD_EXCUSES, SQUAD_CHALLENGES } from '../data/squad-data.js';

export class SssVibeBoard extends HTMLElement {
  private currentExcuse = SQUAD_EXCUSES[0];
  private currentChallenge = SQUAD_CHALLENGES[0];

  connectedCallback(): void {
    this.render();
    this.attachEvents();
  }

  private render(): void {
    this.innerHTML = `
      <section class="vibe-section" id="vibes">
        <div class="section-header">
          <span class="section-kicker">INTERACTIVE SQUAD TOOLS</span>
          <h2>THE SQUAD SOUND &amp; EXCUSE BOARD</h2>
          <p>Need an excuse for why that play went sideways or a mission for tonight’s lobby? Tap below.</p>
        </div>

        <div class="interactive-grid">
          <div class="interactive-card card-pink">
            <div class="card-badge">
              <span class="material-icons">mic_external_on</span>
              <span>OFFICIAL SQUAD EXCUSE GENERATOR</span>
            </div>
            <p class="quote-box" id="excuse-text">“${this.currentExcuse}”</p>
            <button type="button" class="btn-action" id="roll-excuse-btn">
              <span class="material-icons">casino</span>
              <span>Roll Another Excuse</span>
            </button>
          </div>

          <div class="interactive-card card-cyan">
            <div class="card-badge">
              <span class="material-icons">emoji_events</span>
              <span>TONIGHT'S SQUAD SIDE-QUEST</span>
            </div>
            <p class="quote-box" id="challenge-text">“${this.currentChallenge}”</p>
            <button type="button" class="btn-action btn-cyan" id="roll-challenge-btn">
              <span class="material-icons">bolt</span>
              <span>New Squad Quest</span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private attachEvents(): void {
    const excuseBtn = this.querySelector<HTMLButtonElement>('#roll-excuse-btn');
    const excuseText = this.querySelector<HTMLParagraphElement>('#excuse-text');
    if (excuseBtn && excuseText) {
      excuseBtn.addEventListener('click', () => {
        const pool = SQUAD_EXCUSES.filter(e => e !== this.currentExcuse);
        this.currentExcuse = pool[Math.floor(Math.random() * pool.length)];
        excuseText.textContent = `“${this.currentExcuse}”`;
      });
    }

    const challengeBtn = this.querySelector<HTMLButtonElement>('#roll-challenge-btn');
    const challengeText = this.querySelector<HTMLParagraphElement>('#challenge-text');
    if (challengeBtn && challengeText) {
      challengeBtn.addEventListener('click', () => {
        const pool = SQUAD_CHALLENGES.filter(c => c !== this.currentChallenge);
        this.currentChallenge = pool[Math.floor(Math.random() * pool.length)];
        challengeText.textContent = `“${this.currentChallenge}”`;
      });
    }
  }
}

customElements.define('sss-vibe-board', SssVibeBoard);
