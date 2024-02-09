import { CacheKey } from './cache.keys';

const cache_ttl: Record<CacheKey, number> = {
  'RECENT:ANIMES': 7200 as const, // 2 hour
  'TOP:ANIMES': 172800 as const, // 2 days
  'DETAIL:ANIMES': 604800 as const, //1 week
  'STREAM:ANIMES': 3600, //1 hour
  'GENRES:ANIMES': 604800 as const, //1 week
};

export default cache_ttl;
