export class SssNavbar extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = `
      <header class="sss-navbar">
        <div class="nav-inner">
          <a class="brand" href="#top">
            <span class="brand-badge">SSS</span>
            <div class="brand-text">
              <span class="brand-title">SUPER SEXY SQUAD</span>
              <span class="brand-sub">EST. FOREVER &bull; TROLLS &amp; NERDS HQ</span>
            </div>
          </a>

          <nav class="nav-links">
            <a href="#vibes">Squad Vibes</a>
            <a href="#roster">The Roster</a>
            <a href="#theater">SSS TV</a>
            <a href="#memories">Hall of Fame</a>
          </nav>

          <div class="nav-status">
            <span class="pulse-dot"></span>
            <span>SQUAD STATUS: <strong>LEGENDARY</strong></span>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('sss-navbar', SssNavbar);
