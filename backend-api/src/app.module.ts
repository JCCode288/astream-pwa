import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeProviderModule } from './modules/anime-provider/anime-provider.module';
import { CachingModule } from './modules/cache-module/caching.module';
import { ConfigModule } from '@nestjs/config';

const configs = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
];

@Module({
  imports: [...configs, AnimeProviderModule, CachingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
