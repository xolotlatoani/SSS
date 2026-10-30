import { SQUAD_ROLES } from '../data/squad-data.js';

export class SssRoster extends HTMLElement {
  connectedCallback(): void {
    const cardsHtml = SQUAD_ROLES.map(
      role => `
        <article class="role-card">
          <div class="role-top">
            <div class="role-icon">
              <span class="material-icons">${role.icon}</span>
            </div>
            <span class="sexy-meter">SEXY LEVEL: ${role.sexyRating}</span>
          </div>
          <h3>${role.title}</h3>
          <span class="role-alias">${role.alias}</span>
          <p class="role-desc">${role.specialty}</p>
          <div class="role-power">
            <strong>Signature Move:</strong> ${role.powerMove}
          </div>
        </article>
      `
    ).join('');

    this.innerHTML = `
      <section class="roster-section" id="roster">
        <div class="section-header">
          <span class="section-kicker">MEET THE ARCHETYPES</span>
          <h2>ANATOMY OF THE SUPER SEXY SQUAD</h2>
          <p>Every friend group has them. Ours just happens to look way better doing it.</p>
        </div>

        <div class="roster-grid">
          ${cardsHtml}
        </div>
      </section>
    `;
  }
}

customElements.define('sss-roster', SssRoster);
