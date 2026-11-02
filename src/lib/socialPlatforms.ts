/**
 * Social platform catalogue.
 *
 * The admin used to let you type a label and a URL freely, which meant every
 * platform had to be hardcoded somewhere on the public side to get an icon â€”
 * and anything unrecognised fell back to one generic glyph. This registry
 * makes the full set first-class: the admin offers a picker, the public side
 * reads the same record, and adding a platform is a one-line change here
 * rather than an edit in two components.
 *
 * `icon` is a lucide-react export name. `null` means lucide has no glyph for
 * that brand, in which case the card falls back to `FALLBACK_ICON` and relies
 * on its label and blurb to identify the platform. That is deliberate: shipping
 * a wrong glyph for a brand is worse than shipping a neutral one, and the old
 * code's mistake was letting Threads and Telegram both render as the same
 * generic @ symbol.
 */

export type SocialCategory = 'social' | 'professional' | 'dev' | 'media' | 'messaging';

export interface SocialPlatform {
  id: string;
  label: string;
  /** lucide-react export name, or `null` when the brand has no lucide glyph. */
  icon: string | null;
  /** One line describing what the visitor will find there. */
  blurb: string;
  category: SocialCategory;
  /** Base used to turn a bare handle into a URL. `null` means full URL required. */
  base: string | null;
  /** Example handle, shown as the placeholder in the admin. */
  example: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  // â€” Social â€”
  { id: 'instagram', label: 'Instagram', icon: 'Instagram', category: 'social', base: 'https://instagram.com/', example: 'priyankapawar', blurb: 'Photography and visual work' },
  { id: 'facebook', label: 'Facebook', icon: 'Facebook', category: 'social', base: 'https://facebook.com/', example: 'priyankapawar', blurb: 'Longer-form posts' },
  { id: 'threads', label: 'Threads', icon: 'AtSign', category: 'social', base: 'https://threads.net/@', example: 'priyankapawar', blurb: 'Short-form writing' },
  { id: 'twitter', label: 'X / Twitter', icon: 'Twitter', category: 'social', base: 'https://x.com/', example: 'priyankapawar', blurb: 'Notes and updates' },
  { id: 'snapchat', label: 'Snapchat', icon: null, category: 'social', base: 'https://snapchat.com/add/', example: 'priyankapawar', blurb: 'Stories and snaps' },
  { id: 'pinterest', label: 'Pinterest', icon: null, category: 'social', base: 'https://pinterest.com/', example: 'priyankapawar', blurb: 'Curated pins and ideas' },
  { id: 'tiktok', label: 'TikTok', icon: null, category: 'social', base: 'https://tiktok.com/@', example: 'priyankapawar', blurb: 'Short video' },
  { id: 'reddit', label: 'Reddit', icon: 'MessageCircle', category: 'social', base: 'https://reddit.com/user/', example: 'priyankapawar', blurb: 'Community comments' },
  { id: 'tumblr', label: 'Tumblr', icon: null, category: 'social', base: 'https://', example: 'priyankapawar.tumblr.com', blurb: 'Blog posts' },
  { id: 'bluesky', label: 'Bluesky', icon: null, category: 'social', base: 'https://bsky.app/profile/', example: 'priyankapawar', blurb: 'Open social posts' },
  { id: 'mastodon', label: 'Mastodon', icon: null, category: 'social', base: 'https://mastodon.social/@', example: 'priyankapawar', blurb: 'Federated posting' },

  // â€” Professional â€”
  { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', category: 'professional', base: 'https://linkedin.com/in/', example: 'priyankapawar', blurb: 'Professional profile' },
  { id: 'medium', label: 'Medium', icon: null, category: 'professional', base: 'https://medium.com/@', example: 'priyankapawar', blurb: 'Long-form essays' },
  { id: 'substack', label: 'Substack', icon: null, category: 'professional', base: 'https://', example: 'priyankapawar.substack.com', blurb: 'Newsletter' },
  { id: 'behance', label: 'Behance', icon: null, category: 'professional', base: 'https://behance.net/', example: 'priyankapawar', blurb: 'Visual portfolio' },
  { id: 'dribbble', label: 'Dribbble', icon: null, category: 'professional', base: 'https://dribbble.com/', example: 'priyankapawar', blurb: 'Interface shots' },

  // â€” Dev â€”
  { id: 'github', label: 'GitHub', icon: 'Github', category: 'dev', base: 'https://github.com/', example: 'priyankapawar', blurb: 'Code and experiments' },
  { id: 'gitlab', label: 'GitLab', icon: null, category: 'dev', base: 'https://gitlab.com/', example: 'priyankapawar', blurb: 'Repositories' },
  { id: 'devto', label: 'DEV', icon: null, category: 'dev', base: 'https://dev.to/', example: 'priyankapawar', blurb: 'Dev community posts' },
  { id: 'codepen', label: 'CodePen', icon: null, category: 'dev', base: 'https://codepen.io/', example: 'priyankapawar', blurb: 'Pen demos' },
  { id: 'stackoverflow', label: 'Stack Overflow', icon: null, category: 'dev', base: 'https://stackoverflow.com/users/', example: '0/priyanka', blurb: 'Answers and reputation' },

  // â€” Media â€”
  { id: 'youtube', label: 'YouTube', icon: 'Youtube', category: 'media', base: 'https://youtube.com/@', example: 'priyankapawar', blurb: 'Readings and behind the scenes' },
  { id: 'spotify', label: 'Spotify', icon: null, category: 'media', base: 'https://open.spotify.com/user/', example: 'priyankapawar', blurb: 'Playlists' },
  { id: 'soundcloud', label: 'SoundCloud', icon: 'Music', category: 'media', base: 'https://soundcloud.com/', example: 'priyankapawar', blurb: 'Audio work' },
  { id: 'twitch', label: 'Twitch', icon: null, category: 'media', base: 'https://twitch.tv/', example: 'priyankapawar', blurb: 'Streams' },
  { id: 'vimeo', label: 'Vimeo', icon: null, category: 'media', base: 'https://vimeo.com/', example: 'priyankapawar', blurb: 'Video hosting' },
  { id: 'flickr', label: 'Flickr', icon: 'Camera', category: 'media', base: 'https://flickr.com/photos/', example: 'priyankapawar', blurb: 'Photo albums' },

  // â€” Messaging â€”
  { id: 'telegram', label: 'Telegram', icon: 'Send', category: 'messaging', base: 'https://t.me/', example: 'priyankapawar', blurb: 'Quick messages' },
  { id: 'whatsapp', label: 'WhatsApp', icon: null, category: 'messaging', base: 'https://wa.me/', example: '919999999999', blurb: 'Direct messages' },
  { id: 'discord', label: 'Discord', icon: null, category: 'messaging', base: null, example: 'https://discord.gg/invite', blurb: 'Community server' },
  { id: 'signal', label: 'Signal', icon: null, category: 'messaging', base: null, example: 'https://signal.org', blurb: 'Private messaging' },
  { id: 'email', label: 'Email', icon: 'Mail', category: 'messaging', base: 'mailto:', example: 'you@example.com', blurb: 'Direct email' },
];

const BY_ID = new Map(SOCIAL_PLATFORMS.map((platform) => [platform.id, platform]));

export function findPlatform(id: string): SocialPlatform | undefined {
  return BY_ID.get(id);
}

/** Turns a bare handle into a URL, leaving a full URL untouched. */
export function resolveSocialUrl(platformId: string, rawUrl: string): string {
  const url = rawUrl.trim();
  if (!url) return '';
  if (/^(https?:|mailto:|tel:)/i.test(url)) return url;

  const platform = BY_ID.get(platformId);
  if (!platform?.base) return `https://${url.replace(/^\/+/, '')}`;
  return `${platform.base}${url.replace(/^\/+/, '').replace(/^@/, '')}`;
}

/** Label, blurb, category and the stored icon key for one entry. */
export function describePlatform(id: string, label: string): {
  label: string;
  blurb: string;
  icon: string | null;
  category: SocialCategory;
} {
  const platform = BY_ID.get(id);
  return {
    label: platform?.label ?? label,
    blurb: platform?.blurb ?? '',
    icon: platform?.icon ?? null,
    category: platform?.category ?? 'social',
  };
}

export const SOCIAL_CATEGORY_LABELS: Record<SocialCategory, string> = {
  social: 'Social',
  professional: 'Professional',
  dev: 'Developer',
  media: 'Media',
  messaging: 'Messaging',
};