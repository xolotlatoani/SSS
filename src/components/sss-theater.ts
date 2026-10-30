import { SQUAD_PLAYLISTS } from '../data/squad-data.js';

export class SssTheater extends HTMLElement {
  connectedCallback(): void {
    const videosHtml = SQUAD_PLAYLISTS.map(
      item => `
        <div class="video-card">
          <div class="video-card-header">
            <span class="video-tag">${item.tag}</span>
            <span class="video-vibe">${item.vibe} &bull; ${item.videoCount}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="video-frame-wrapper">
            <iframe
              src="${item.embedUrl}"
              title="${item.title}"
              loading="lazy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-card-footer">
            <a href="${item.pageHref}" class="btn-channel-link">
              <span class="material-icons">video_library</span>
              <span>Explore ${item.channelHandle} Page &rarr;</span>
            </a>
          </div>
        </div>
      `
    ).join('');

    this.innerHTML = `
      <section class="theater-section" id="theater">
        <div class="section-header">
          <span class="section-kicker">CAUGHT IN 4K</span>
          <h2>SSS TV // THE 3 CREATOR CHANNELS</h2>
          <p>Grab popcorn. Watch the playlists below or dive into each squad member's dedicated channel archive page.</p>
        </div>

        <div class="video-grid">
          ${videosHtml}
        </div>
      </section>
    `;
  }
}

customElements.define('sss-theater', SssTheater);
