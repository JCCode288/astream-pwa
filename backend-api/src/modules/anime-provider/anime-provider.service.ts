import { ANIME } from '@consumet/extensions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimeProviderService extends ANIME.Gogoanime {
  protected baseUrl: string =
    process.env.GOGO_ANIME_URL ?? 'https://anitaku.to';
}
