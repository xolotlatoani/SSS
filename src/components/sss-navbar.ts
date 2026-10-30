export class SssNavbar extends HTMLElement {
  connectedCallback(): void {
    const active = this.getAttribute('active') || 'home';

    this.innerHTML = `
      <header class="sss-navbar">
        <div class="nav-inner">
          <a class="brand" href="index.html">
            <span class="brand-badge">SSS</span>
            <div class="brand-text">
              <span class="brand-title">SUPER SEXY SQUAD</span>
              <span class="brand-sub">EST. 2008 &bull; TROLLS &amp; NERDS HQ</span>
            </div>
          </a>

          <nav class="nav-links" aria-label="Primary Navigation">
            <a href="index.html" class="${active === 'home' ? 'active-link' : ''}">HQ Home</a>
            <a href="t3n0r10.html" class="${active === 't3n0r10' ? 'active-link' : ''}">T3N0R10</a>
            <a href="vim-diesel.html" class="${active === 'vim-diesel' ? 'active-link' : ''}">Vim Diesel</a>
            <a href="andrew-marks.html" class="${active === 'andrew-marks' ? 'active-link' : ''}">Andrew!!</a>
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
