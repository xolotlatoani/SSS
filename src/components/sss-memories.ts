import { SQUAD_COMMANDMENTS } from '../data/squad-data.js';

export class SssMemories extends HTMLElement {
  connectedCallback(): void {
    const rulesHtml = SQUAD_COMMANDMENTS.map(
      (rule, idx) => `
        <li>
          <span class="rule-num">0${idx + 1}</span>
          <span class="rule-text">${rule}</span>
        </li>
      `
    ).join('');

    this.innerHTML = `
      <section class="memories-section" id="memories">
        <div class="memories-grid">
          <div class="rules-panel">
            <span class="section-kicker">UNWRITTEN LAWS</span>
            <h2>THE SQUAD CODE</h2>
            <ul class="rules-list">
              ${rulesHtml}
            </ul>
          </div>

          <div class="polaroid-panel">
            <div class="polaroid-card">
              <div class="polaroid-tape"></div>
              <img src="assets/themarks.jpg" alt="Squad Milestones - The Marks">
              <div class="polaroid-caption">
                <strong>Squad Milestones IRL ❤️🎣</strong>
                <span>From late-night lobbies to real-life celebrations (#MeetTheMarks &amp; beyond)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('sss-memories', SssMemories);
