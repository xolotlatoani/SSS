import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface SquadPlaylist {
  title: string;
  tag: string;
  vibe: string;
  description: string;
  embedUrl: SafeResourceUrl;
}

interface SquadRole {
  icon: string;
  title: string;
  alias: string;
  specialty: string;
  powerMove: string;
  sexyRating: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hypeCount = 69;
  currentExcuse = 'Hold on, grabbing snacks — be back in 5 (actually 45 minutes).';
  currentChallenge = 'Drop a nostalgia clip in the group chat with zero context.';

  excuses: string[] = [
    'Hold on, grabbing snacks — be back in 5 (actually 45 minutes).',
    'My controller disconnected right at the clutch moment, I swear.',
    'Wait, we were supposed to play tonight? I thought we were just roasting each other in voice chat.',
    'Lag spike! Definitely lag. Not a skill issue.',
    'Look, it seemed like a 200 IQ play in my head.',
    'Sorry I was muted the whole time giving the best callouts of my life.'
  ];

  challenges: string[] = [
    'Drop a nostalgia clip in the group chat with zero context.',
    'Compliment the next squad member who joins voice chat like they just won an Oscar.',
    'Queue up the most chaotic game mode and nobody is allowed to back out.',
    'Send the oldest squad photo you have saved on your phone.',
    'Pick tonight’s late-night food order for the whole crew.'
  ];

  squadStats = [
    { value: '100%', label: 'Certified Sexy', sub: 'Scientifically Unproven' },
    { value: '0', label: 'Plans Followed', sub: 'Pure Improvisation' },
    { value: '24/7', label: 'Roast Session', sub: 'Nobody Is Safe' },
    { value: '∞', label: 'Inside Jokes', sub: 'Impossible To Explain' }
  ];

  squadRoles: SquadRole[] = [
    {
      icon: 'local_fire_department',
      title: 'The Instigator',
      alias: 'Captain "One More Game"',
      specialty: 'Convincing everyone to stay up until 3 AM on a weeknight.',
      powerMove: 'Says "last one" four hours before actually logging off.',
      sexyRating: '11/10'
    },
    {
      icon: 'psychology',
      title: 'The 200 IQ Tactician',
      alias: 'Spreadsheet & Chaos',
      specialty: 'Over-engineering a master plan that falls apart in 12 seconds.',
      powerMove: 'Blames RNG with a 15-minute PowerPoint presentation.',
      sexyRating: '10/10'
    },
    {
      icon: 'sentiment_very_satisfied',
      title: 'The Chief Troll',
      alias: 'Friendly Fire Enthusiast',
      specialty: 'Turning every serious moment into a legendary clip.',
      powerMove: 'Laughing so hard on mic nobody can hear the callouts.',
      sexyRating: '69/10'
    },
    {
      icon: 'nightlife',
      title: 'The Vibe Curator',
      alias: 'DJ Soundboard & Hype',
      specialty: 'Dropping the exact meme, quote, or link at the perfect second.',
      powerMove: 'Carrying squad morale even on a 10-game losing streak.',
      sexyRating: '∞/10'
    }
  ];

  commandments: string[] = [
    'If a play fails Spectacularly, clip it immediately so we can laugh at it for the next 6 years.',
    '"Be on in 5 minutes" legally means anywhere between 15 minutes and next Tuesday.',
    'Always hype up the homies—we didn’t name it the Super Sexy Squad by accident.',
    'Whether it’s gaming, weddings, or random late-night hangouts, the Squad shows up.'
  ];

  playlists: SquadPlaylist[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const rawPlaylists = [
      {
        title: 'Channel 01 // Classic Squad Vault',
        tag: 'OG ARCHIVES',
        vibe: 'Peak Chaos',
        description: 'Where the legends, fails, and late-night madness got caught in 4K.',
        url: 'https://www.youtube.com/embed?listType=playlist&list=UUB_MUgAx83W7dgjcVzBvzMQ'
      },
      {
        title: 'Channel 02 // Unfiltered Highlights',
        tag: 'CERTIFIED CLIPS',
        vibe: 'Zero Chill',
        description: 'No script, no answers, just pure unfiltered squad energy.',
        url: 'https://www.youtube.com/embed?listType=playlist&list=UUzI3_nqDwiieD9xWKNoi8Pg'
      },
      {
        title: 'Channel 03 // Late Night Chronicles',
        tag: 'AFTER HOURS',
        vibe: '3 AM Vibes',
        description: 'When sleep deprivation meets galaxy-brain decision making.',
        url: 'https://www.youtube.com/embed?listType=playlist&list=UURtFnCJzX9Xj5tN7_NuiIWw'
      }
    ];

    this.playlists = rawPlaylists.map(item => ({
      title: item.title,
      tag: item.tag,
      vibe: item.vibe,
      description: item.description,
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(item.url)
    }));
  }

  ngOnInit(): void {}

  boostHype(): void {
    this.hypeCount += 1;
  }

  rollExcuse(): void {
    const filtered = this.excuses.filter(e => e !== this.currentExcuse);
    this.currentExcuse = filtered[Math.floor(Math.random() * filtered.length)];
  }

  rollChallenge(): void {
    const filtered = this.challenges.filter(c => c !== this.currentChallenge);
    this.currentChallenge = filtered[Math.floor(Math.random() * filtered.length)];
  }
}
