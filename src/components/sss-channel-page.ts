import { CHANNEL_PROFILES, ChannelCreatorProfile, ChannelVideo } from '../data/squad-data.js';

export class SssChannelPage extends HTMLElement {
  private profile: ChannelCreatorProfile | undefined;
  private activeVideo: ChannelVideo | undefined;

  connectedCallback(): void {
    const slug = this.getAttribute('channel') || 't3n0r10';
    this.profile = CHANNEL_PROFILES[slug];
    if (!this.profile) return;
    this.activeVideo = this.profile.videos[0];
    this.render();
  }

  private render(): void {
    if (!this.profile || !this.activeVideo) return;

    const crewPills = this.profile.featuredCrew
      .map(person => `<span class="crew-pill"><span class="material-icons">person</span>${person}</span>`)
      .join('');

    const highlightsHtml = this.profile.highlights
      .map(h => `<li><span class="material-icons">auto_awesome</span><span>${h}</span></li>`)
      .join('');

    const videoCardsHtml = this.profile.videos
      .map(
        vid => `
        <article class="archive-video-card ${vid.videoId === this.activeVideo?.videoId ? 'playing' : ''}" data-videoid="${vid.videoId}">
          <div class="thumb-wrap">
            <img src="https://i.ytimg.com/vi/${vid.videoId}/hqdefault.jpg" alt="${vid.title}" loading="lazy" width="320" height="180">
            <span class="era-badge">${vid.era}</span>
            <button type="button" class="play-overlay-btn" data-videoid="${vid.videoId}" aria-label="Play ${vid.title}">
              <span class="material-icons">play_circle_filled</span>
            </button>
          </div>
          <div class="archive-card-body">
            <div class="archive-meta">
              <span class="archive-date">${vid.date}</span>
            </div>
            <h3>${vid.title}</h3>
            <p>${vid.description}</p>
            <div class="crew-tags-row">
              ${vid.crew.map(c => `<span class="mini-crew-tag">${c}</span>`).join('')}
            </div>
          </div>
        </article>
      `
      )
      .join('');

    const showPlaylistBox = this.profile.slug !== 't3n0r10';

    const secondaryBoxHtml = showPlaylistBox
      ? `
          <div class="playlist-embed-box">
            <div class="spotlight-header">
              <span class="video-tag">FULL CHANNEL PLAYLIST</span>
              <span class="spotlight-era">${this.profile.handle}</span>
            </div>
            <div class="video-frame-wrapper">
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=${this.profile.playlistId}"
                title="${this.profile.name} Uploads Playlist"
                loading="lazy"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <p class="playlist-note">Continuous playlist feed from ${this.profile.name}.</p>
          </div>
      `
      : `
          <div class="playlist-embed-box">
            <div class="spotlight-header">
              <span class="video-tag">SQUAD CROSSOVER</span>
              <span class="spotlight-era">THE SSS TRIAD</span>
            </div>
            <p class="playlist-note" style="margin-top:0; font-size:15px; color:#fff; font-weight:700;">
              Same Crew, Three Channels
            </p>
            <p class="playlist-note">
              The same Super Sexy Squad homies from <strong>“Drunk fools”</strong> also star in the other two official squad channels:
            </p>
            <div style="display:flex; flex-direction:column; gap:12px; margin-top:16px;">
              <a href="vim-diesel.html" class="btn-channel-link">
                <span class="material-icons">celebration</span>
                <span>Vim Diesel (Vimal + Sravani Wedding) &rarr;</span>
              </a>
              <a href="andrew-marks.html" class="btn-channel-link">
                <span class="material-icons">flight_takeoff</span>
                <span>Andrew!! (#MeetTheMarks &amp; Hawaii Vlog) &rarr;</span>
              </a>
            </div>
          </div>
      `;

    this.innerHTML = `
      <section class="channel-hero">
        <div class="channel-hero-card">
          <div class="channel-identity">
            <img src="${this.profile.avatarUrl}" alt="${this.profile.name} YouTube Avatar" class="channel-avatar" width="96" height="96">
            <div class="channel-title-group">
              <span class="channel-handle-badge">${this.profile.handle} &bull; OFFICIAL SSS CREATOR</span>
              <h1>${this.profile.name}</h1>
              <p class="channel-tagline">${this.profile.tagline}</p>
            </div>
          </div>

          <p class="channel-bio">${this.profile.bio}</p>

          <div class="channel-highlights-box">
            <h2>Channel Highlights &amp; Squad Lineup</h2>
            <ul class="channel-highlights-list">
              ${highlightsHtml}
            </ul>
            <div class="crew-roster-pills">
              ${crewPills}
            </div>
          </div>

          <div class="channel-cta-row">
            <a href="${this.profile.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              <span class="material-icons">open_in_new</span>
              <span>Open ${this.profile.handle} on YouTube</span>
            </a>
            <a href="index.html" class="btn-hype">
              <span class="material-icons">arrow_back</span>
              <span>Back to SSS HQ</span>
            </a>
          </div>
        </div>
      </section>

      <section class="channel-spotlight" id="player-stage">
        <div class="spotlight-grid">
          <div class="spotlight-player-box">
            <div class="spotlight-header">
              <span class="video-tag">FEATURED VIDEO</span>
              <span class="spotlight-era">${this.activeVideo.era} &bull; ${this.activeVideo.date}</span>
            </div>
            <div class="video-frame-wrapper">
              <iframe
                id="active-yt-iframe"
                src="https://www.youtube.com/embed/${this.activeVideo.videoId}?rel=0"
                title="${this.activeVideo.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="spotlight-info">
              <h2 id="active-video-title">${this.activeVideo.title}</h2>
              <p id="active-video-desc">${this.activeVideo.description}</p>
              <div class="crew-tags-row" id="active-video-crew">
                <strong>Featuring:</strong>
                ${this.activeVideo.crew.map(c => `<span class="mini-crew-tag">${c}</span>`).join('')}
              </div>
            </div>
          </div>

          ${secondaryBoxHtml}
        </div>
      </section>

      <section class="channel-archive-section">
        <div class="section-header">
          <span class="section-kicker">FEATURED RELEASES</span>
          <h2>${this.profile.name.toUpperCase()} // ${this.profile.videos.length === 1 ? 'LATEST RELEASE' : `${this.profile.videos.length} VIDEOS`}</h2>
          <p>Select a video card below to play it on the main stage above.</p>
        </div>

        <div class="archive-video-grid">
          ${videoCardsHtml}
        </div>
      </section>
    `;

    this.attachEvents();
  }

  private attachEvents(): void {
    if (!this.profile) return;

    this.querySelectorAll<HTMLElement>('.archive-video-card').forEach(card => {
      card.addEventListener('click', () => {
        const vidId = card.getAttribute('data-videoid');
        const found = this.profile?.videos.find(v => v.videoId === vidId);
        if (found) {
          this.activeVideo = found;
          this.render();
          const stage = this.querySelector('#player-stage');
          stage?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

customElements.define('sss-channel-page', SssChannelPage);
