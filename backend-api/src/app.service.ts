import { Injectable } from '@nestjs/common';
import { AnimeException } from './exceptions/anime.exception';
import cache_keys from './utils/cache.keys';
import { CachingService } from './modules/cache-module/caching.service';
import { IAnimeResult, ISearch } from '@consumet/extensions';
import { AnimeProviderService } from './modules/anime-provider/anime-provider.service';

export interface IMainPagination {
  recent?: number;
  top?: number;
}

@Injectable()
export class AppService {
  constructor(
    private readonly cacheService: CachingService,
    private readonly animeProvider: AnimeProviderService,
  ) {}

  getMain({ recent, top }: IMainPagination) {
    try {
      return Promise.all([this.getRecent(recent), this.getTop(top)]);
    } catch (err) {
      console.log(err);
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  private async getRecent(page: number = 1) {
    try {
      const cached: ISearch<IAnimeResult> | null =
        await this.cacheService.getCache(cache_keys.RECENT, page);

      if (cached) {
        return cached.results;
      }

      const recentAnimes = await this.animeProvider.fetchRecentEpisodes(page);

      await this.cacheService.setCache(cache_keys.RECENT, recentAnimes, page);

      return recentAnimes.results;
    } catch (err) {
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  private async getTop(page: number = 1) {
    try {
      const cached: ISearch<IAnimeResult> | null =
        await this.cacheService.getCache(cache_keys.TOP, page);

      if (cached) {
        return cached.results;
      }

      const topAnimes = await this.animeProvider.fetchTopAiring(page);

      await this.cacheService.setCache(cache_keys.TOP, topAnimes, page);

      return topAnimes.results;
    } catch (err) {
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  async getAnimeDetail(id: string) {
    try {
      console.log(id);
      const key = `${cache_keys.DETAIL}:${id}`;
      const cached = await this.cacheService.getCache(key);

      if (cached) return cached;

      const aniDetail = await this.animeProvider.fetchAnimeInfo(`${id}`);

      await this.cacheService.setCache(key, aniDetail);

      return aniDetail;
    } catch (err) {
      console.log(err);
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  async getAnimeSource(epsId: string) {
    try {
      const key = `${cache_keys.STREAM}:${epsId}`;

      const cached = await this.cacheService.getCache(key);

      if (cached) return cached;

      const animeSource = await this.animeProvider.fetchEpisodeSources(epsId);

      if (animeSource.sources.length) {
        await this.cacheService.setCache(key, animeSource);
      }

      return animeSource;
    } catch (err) {
      console.log(err);
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  async getAnimeByGenres(genre: string, page = 1) {
    try {
      const key = `${cache_keys.GENRES}:${genre}`;

      const cached = await this.cacheService.getCache(key, page);

      if (cached) return cached;

      const animeGenres = await this.animeProvider.fetchGenreInfo(genre, page);

      await this.cacheService.setCache(key, animeGenres, page);

      return animeGenres;
    } catch (err) {
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }

  searchAnimes(query: string, page = 1) {
    try {
      return this.animeProvider.search(query, page);
    } catch (err) {
      throw new AnimeException({
        message: err?.message ?? err,
        status: err?.status,
      });
    }
  }
}
