import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AnimeProviderInterceptor } from './interceptors/anime/anime-provider.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/main')
  async getMainPage(
    @Query('recentPage') recent?: number,
    @Query('topPage') top?: number,
  ) {
    const [recentAnimes, topAnimes] = await this.appService.getMain({
      recent,
      top,
    });

    return { recentAnimes, topAnimes };
  }

  @Get('/detail/:id')
  @UseInterceptors(AnimeProviderInterceptor)
  async getDetailPage(@Param('id') animeId: string) {
    if (!animeId) {
      throw new BadRequestException('No anime ID provided');
    }

    return this.appService.getAnimeDetail(animeId);
  }

  @Get('/stream')
  async getAnimeStream(@Query('eps') episodeId: string) {
    if (!episodeId) {
      throw new BadRequestException('No episode ID provided');
    }

    return this.appService.getAnimeSource(episodeId);
  }

  @Get('/search')
  async getAnimeSearch(
    @Query('q') query: string,
    @Query('page') page?: string,
  ) {
    if (!query) {
      throw new BadRequestException('No query provided');
    }

    let numPage = +page;

    if (isNaN(numPage)) numPage = 1;

    return this.appService.searchAnimes(query, numPage);
  }
}
