import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CachingModule } from './modules/cache-module/caching.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './modules/records/records.module';
import { AnimeProviderModule } from './modules/anime-provider/anime-provider.module';

const configs = [
  ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),
  MongooseModule.forRootAsync({
    useFactory: () => {
      return { uri: process.env.MONGO_URI };
    },
  }),
];

@Module({
  imports: [...configs, CachingModule, RecordsModule, AnimeProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
