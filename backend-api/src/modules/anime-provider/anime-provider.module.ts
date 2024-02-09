import { Module } from '@nestjs/common';
import { AnimeProviderService } from './anime-provider.service';

@Module({
  providers: [AnimeProviderService],
  exports: [AnimeProviderService],
})
export class AnimeProviderModule {}
