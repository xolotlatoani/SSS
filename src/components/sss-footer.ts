export class SssFooter extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = `
      <footer class="sss-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <span class="footer-logo">SUPER SEXY SQUAD</span>
            <p>Trolls, nerds, and best friends for life.</p>
          </div>
          <div class="footer-right">
            <a href="#top" class="back-top">Back to Top &uarr;</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('sss-footer', SssFooter);
