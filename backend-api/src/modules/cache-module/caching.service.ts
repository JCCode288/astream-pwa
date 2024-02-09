import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import cache_ttl from 'src/utils/cache.ttl';

@Injectable()
export class CachingService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getCache(key: string, page: number = 1): Promise<any | null> {
    const cacheKey = key + `:${page}`;
    return this.cacheManager.get(Buffer.from(cacheKey).toString('base64'));
  }

  async setCache(key: string, value: any, page: number = 1): Promise<void> {
    const cacheKey = key + `:${page}`;
    await this.cacheManager.set(
      Buffer.from(cacheKey).toString('base64'),
      value,
      cache_ttl[key],
    );
  }
}
