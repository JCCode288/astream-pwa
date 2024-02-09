const cache_keys = {
  RECENT: 'RECENT:ANIMES',
  TOP: 'TOP:ANIMES',
  DETAIL: 'DETAIL:ANIMES',
  STREAM: 'STREAM:ANIMES',
  GENRES: 'GENRES:ANIMES',
} as const;

type CacheType = keyof typeof cache_keys;

export type CacheKey = (typeof cache_keys)[CacheType];

export default cache_keys;
