export interface SquadStat {
  value: string;
  label: string;
  sub: string;
}

export interface SquadRole {
  icon: string;
  title: string;
  alias: string;
  specialty: string;
  powerMove: string;
  sexyRating: string;
}

export interface SquadPlaylist {
  title: string;
  tag: string;
  vibe: string;
  description: string;
  embedUrl: string;
  pageHref: string;
  channelHandle: string;
  videoCount: string;
}

export interface ChannelVideo {
  videoId: string;
  title: string;
  date: string;
  era: string;
  crew: string[];
  description: string;
}

export interface ChannelCreatorProfile {
  slug: string;
  name: string;
  handle: string;
  channelId: string;
  playlistId: string;
  pageHref: string;
  youtubeUrl: string;
  avatarUrl: string;
  tagline: string;
  bio: string;
  featuredCrew: string[];
  highlights: string[];
  videos: ChannelVideo[];
}

export const SQUAD_EXCUSES: string[] = [
  'Hold on, grabbing snacks — be back in 5 (actually 45 minutes).',
  'My controller disconnected right at the clutch moment, I swear.',
  'Wait, we were supposed to play tonight? I thought we were just roasting each other in voice chat.',
  'Lag spike! Definitely lag. Not a skill issue.',
  'Look, it seemed like a 200 IQ play in my head.',
  'Sorry I was muted the whole time giving the best callouts of my life.'
];

export const SQUAD_CHALLENGES: string[] = [
  'Drop a nostalgia clip in the group chat with zero context.',
  'Compliment the next squad member who joins voice chat like they just won an Oscar.',
  'Queue up the most chaotic game mode and nobody is allowed to back out.',
  'Send the oldest squad photo you have saved on your phone.',
  'Pick tonight’s late-night food order for the whole crew.'
];

export const SQUAD_STATS: SquadStat[] = [
  { value: '100%', label: 'Certified Sexy', sub: 'Scientifically Unproven' },
  { value: '3', label: 'Creator Channels', sub: 'T3N0R10 • Vim • Andrew' },
  { value: '24/7', label: 'Roast Session', sub: 'Nobody Is Safe' },
  { value: '∞', label: 'Inside Jokes', sub: 'Impossible To Explain' }
];

export const SQUAD_ROLES: SquadRole[] = [
  {
    icon: 'videocam',
    title: 'T3N0R10 (Juan Tenorio)',
    alias: 'Late-Night Squad Director',
    specialty: 'Catching the squad in 4K when the drinks are flowing and zero filter is active ("Drunk fools").',
    powerMove: 'Hitting record right as the late-night hangout reaches peak chaos.',
    sexyRating: '69/10'
  },
  {
    icon: 'celebration',
    title: 'Vim Diesel (Vimal)',
    alias: 'The Sitcom Lead & Hype Legend',
    specialty: 'Turning every hangout and milestone—including Vimal + Sravani’s wedding—into a blockbuster premiere.',
    powerMove: 'Bringing main-character energy to every lobby and celebration.',
    sexyRating: '11/10'
  },
  {
    icon: 'flight_takeoff',
    title: 'Andrew!! (Andrew Marks)',
    alias: 'The IRL Vlogger & #MeetTheMarks',
    specialty: 'Capturing the squad’s biggest life upgrades, from Brooke & Andrew’s wedding to Oahu Hawaii vlogs.',
    powerMove: 'Turning a vacation or wedding into an instant squad classic.',
    sexyRating: '10/10'
  },
  {
    icon: 'groups',
    title: 'The Super Sexy Squad',
    alias: 'Same Crew, Every Chapter',
    specialty: 'From late-night "Drunk fools" sessions to weddings (#MeetTheMarks2020 & Vimal + Sravani) and island trips.',
    powerMove: 'Showing up for the homies whether it’s 2 AM in voice chat or across the country.',
    sexyRating: '∞/10'
  }
];

export const SQUAD_COMMANDMENTS: string[] = [
  'If a play or late-night hangout goes off the rails, clip it immediately so we can laugh at it forever.',
  '"Be on in 5 minutes" legally means anywhere between 15 minutes and next Tuesday.',
  'Always hype up the homies—we didn’t name it the Super Sexy Squad by accident.',
  'Whether it’s late-night gaming, Oahu vacations, or squad weddings (#MeetTheMarks & Vimal + Sravani), the Squad shows up.'
];

export const SQUAD_PLAYLISTS: SquadPlaylist[] = [
  {
    title: 'T3N0R10 // Late Night Squad Vault',
    tag: '@T3N0RI0',
    vibe: 'Peak Chaos',
    description: 'Juan Tenorio’s latest squad feature ("Drunk fools") with the same Super Sexy Squad crew.',
    embedUrl: 'https://www.youtube.com/embed/KR4XFNyVE6M',
    pageHref: 't3n0r10.html',
    channelHandle: '@T3N0RI0',
    videoCount: 'Latest Feature'
  },
  {
    title: 'Vim Diesel // Blockbuster Milestones',
    tag: '@vimdiesel1148',
    vibe: 'Main Character Energy',
    description: 'Vim Diesel Presents: from squad shenanigans to the official Vimal + Sravani Wedding feature.',
    embedUrl: 'https://www.youtube.com/embed?listType=playlist&list=UUB_MUgAx83W7dgjcVzBvzMQ',
    pageHref: 'vim-diesel.html',
    channelHandle: '@vimdiesel1148',
    videoCount: 'Featured Vault'
  },
  {
    title: 'Andrew!! // Weddings & Island Vlogs',
    tag: '@andrewmarks100',
    vibe: 'IRL Adventures',
    description: 'Brooke & Andrew’s #MeetTheMarks2020 wedding, live streams, and the Oahu Hawaii Ohana vacation vlog.',
    embedUrl: 'https://www.youtube.com/embed?listType=playlist&list=UURtFnCJzX9Xj5tN7_NuiIWw',
    pageHref: 'andrew-marks.html',
    channelHandle: '@andrewmarks100',
    videoCount: '3 Videos'
  }
];

export const CHANNEL_PROFILES: Record<string, ChannelCreatorProfile> = {
  t3n0r10: {
    slug: 't3n0r10',
    name: 'T3N0R10 (Juan Tenorio)',
    handle: '@T3N0RI0',
    channelId: 'UCzI3_nqDwiieD9xWKNoi8Pg',
    playlistId: 'UUzI3_nqDwiieD9xWKNoi8Pg',
    pageHref: 't3n0r10.html',
    youtubeUrl: 'https://www.youtube.com/@T3N0RI0',
    avatarUrl: 'https://yt3.googleusercontent.com/oofryxZFp7RFX5A7wdC_Yxe9mA-7Z4thuqi8l61Tul6nhFvr9bGF64s_ZZtpBcoccVuvlY0A30I=s900-c-k-c0x00ffffff-no-rj',
    tagline: 'Latest Squad Release • Unfiltered Late-Night Super Sexy Squad Energy',
    bio: 'Juan Tenorio (@T3N0RI0) brings the unfiltered late-night energy of the Super Sexy Squad—featuring the same core crew from the weddings and vlogs letting loose in the latest channel release, "Drunk fools".',
    featuredCrew: [
      'Juan Tenorio (@T3N0RI0)',
      'Andrew Marks (@andrewmarks100)',
      'Vimal (@vimdiesel1148)',
      'The Super Sexy Squad'
    ],
    highlights: [
      'Latest Squad Feature: "Drunk fools" (September 2020)',
      'Features the same core Super Sexy Squad crew across all three channels',
      'Zero script, 100% authentic late-night squad chaos'
    ],
    videos: [
      {
        videoId: 'KR4XFNyVE6M',
        title: 'Drunk fools',
        date: '2020-09-26',
        era: 'Latest Squad Feature',
        crew: ['Juan Tenorio (@T3N0RI0)', 'Andrew Marks', 'Vimal', 'Super Sexy Squad'],
        description: 'The latest upload on T3N0R10: the Super Sexy Squad crew caught in 4K during an unforgettable late-night hangout.'
      }
    ]
  },

  'vim-diesel': {
    slug: 'vim-diesel',
    name: 'Vim Diesel (Vimal)',
    handle: '@vimdiesel1148',
    channelId: 'UCB_MUgAx83W7dgjcVzBvzMQ',
    playlistId: 'UUB_MUgAx83W7dgjcVzBvzMQ',
    pageHref: 'vim-diesel.html',
    youtubeUrl: 'https://www.youtube.com/@vimdiesel1148',
    avatarUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_nHjyEj2IexzBzCC2-I4vbMc_-AjFflotKqEMiowumGXO8xdG3mDSyES70iplrEpNBcDg=s900-c-k-c0x00ffffff-no-rj',
    tagline: 'Welcome to Vim Diesel Presents • Squad Blockbusters & Milestones',
    bio: 'Channel 01 in the original Super Sexy Squad lineup. Vim Diesel brings cinematic celebration energy to the squad—headlined by the unforgettable Vimal + Sravani Wedding feature with the homies.',
    featuredCrew: [
      'Vimal (Vim Diesel)',
      'Sravani',
      'Juan Tenorio (@T3N0RI0)',
      'Andrew Marks (@andrewmarks100)',
      'The Super Sexy Squad'
    ],
    highlights: [
      'Founding channel of the SSS TV triad',
      'Home of the Vimal + Sravani Wedding celebration',
      '100% Fast & Furious family energy'
    ],
    videos: [
      {
        videoId: 'kplSi5vHtK4',
        title: 'Vimal + Sravani Wedding',
        date: '2025-12-29',
        era: 'Squad Milestones IRL',
        crew: ['Vimal', 'Sravani', 'Juan Tenorio', 'Andrew Marks', 'Super Sexy Squad'],
        description: 'Vim Diesel Presents: The official Vimal + Sravani Wedding highlight film with the squad.'
      }
    ]
  },

  'andrew-marks': {
    slug: 'andrew-marks',
    name: 'Andrew!! (Andrew Marks)',
    handle: '@andrewmarks100',
    channelId: 'UCRtFnCJzX9Xj5tN7_NuiIWw',
    playlistId: 'UURtFnCJzX9Xj5tN7_NuiIWw',
    pageHref: 'andrew-marks.html',
    youtubeUrl: 'https://www.youtube.com/@andrewmarks100',
    avatarUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_k0FVP07NHLjFeGs2zlQirKlGptxfXn0ji-r_uCNA=s900-c-k-c0x00ffffff-no-rj',
    tagline: '#MeetTheMarks2020 & Island Vlogs • IRL Squad Adventures',
    bio: 'From the original #MeetTheMarks2020 wedding that inspired the very first version of the SSS website to tropical Ohana vacations in Oahu, Hawaii, Andrew’s channel captures the squad’s biggest real-life chapters.',
    featuredCrew: [
      'Andrew Marks (@andrewmarks100)',
      'Brooke Marks (#MeetTheMarks2020)',
      'Juan Tenorio (@T3N0RI0)',
      'Vimal (@vimdiesel1148)',
      'The Super Sexy Squad'
    ],
    highlights: [
      'Features Brooke & Andrew’s #MeetTheMarks2020 wedding (featured on the SSS Hall of Fame polaroid)',
      'Oahu Hawaii Ohana Vacation Vlog (June 2021)',
      'Andrew!! Live Stream archives'
    ],
    videos: [
      {
        videoId: 'qv_OjGfuSr4',
        title: 'Oahu Hawaii Vlog June 2021',
        date: '2021-08-19',
        era: 'Island Vlogs',
        crew: ['Andrew Marks', 'Brooke Marks', 'Ohana Crew'],
        description: 'Clips from the Ohana vacation to Oahu, Hawaii in June 2021.'
      },
      {
        videoId: 'r288GhzZPR0',
        title: "Brooke and Andrew's Wedding #meetthemarks2020",
        date: '2020-04-25',
        era: '#MeetTheMarks2020',
        crew: ['Brooke Marks', 'Andrew Marks', 'Juan Tenorio', 'Vimal', 'Super Sexy Squad'],
        description: 'The official #MeetTheMarks2020 wedding celebration that kicked off the original SSS repo!'
      },
      {
        videoId: '183Va6gLZ5s',
        title: 'Andrew!! Live Stream',
        date: '2020-04-20',
        era: '2020 Streams',
        crew: ['Andrew Marks', 'Juan Tenorio', 'Vimal', 'Super Sexy Squad'],
        description: 'Classic April 2020 live stream session with the squad.'
      }
    ]
  }
};
