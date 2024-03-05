import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CachingModule } from './modules/cache-module/caching.module';
import { RecordsModule } from './modules/records/records.module';
import { IAnimeResult } from '@consumet/extensions';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

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

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [...configs, CachingModule, RecordsModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('should return main page animes', () => {
    let currentRecent: IAnimeResult[];
    let currentTop: IAnimeResult[];

    it('should return recent and top animes', async () => {
      const { recentAnimes, topAnimes } = await appController.getMainPage();

      expect(recentAnimes).toBeDefined();
      expect(topAnimes).toBeDefined();
      expect(Array.isArray(recentAnimes)).toBe(true);
      expect(Array.isArray(topAnimes)).toBe(true);

      currentRecent = recentAnimes;
      currentTop = topAnimes;
    });

    it('should return different recent', async () => {
      const { recentAnimes, topAnimes } = await appController.getMainPage(2, 1);

      expect(recentAnimes).toBeDefined();
      expect(topAnimes).toBeDefined();

      const recentAnimeId = recentAnimes[0].id;
      const curRecentId = currentRecent[0].id;
      const topAnimeId = topAnimes[0].id;
      const curTopId = currentTop[0].id;

      expect(recentAnimeId === curRecentId).toBe(false);
      expect(topAnimeId === curTopId).toBe(true);
    });

    it('should return different top', async () => {
      const { recentAnimes, topAnimes } = await appController.getMainPage(1, 2);

      expect(recentAnimes).toBeDefined();
      expect(topAnimes).toBeDefined();

      const recentAnimeId = recentAnimes[0].id;
      const curRecentId = currentRecent[0].id;
      const topAnimeId = recentAnimes[0].id;
      const curTopId = currentTop[0].id;

      expect(topAnimeId === curTopId).toBe(false);
      expect(recentAnimeId === curRecentId).toBe(true);
    });
  });

  // test the rest
});
