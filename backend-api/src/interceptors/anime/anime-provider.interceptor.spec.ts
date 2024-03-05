import { AnimeProviderInterceptor } from './anime-provider.interceptor';
import { Test, TestingModule } from '@nestjs/testing';
import { RecordsModule } from 'src/modules/records/records.module';

describe('AnimeProviderInterceptor', () => {
  let animeInterceptor: AnimeProviderInterceptor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RecordsModule],
      providers: [AnimeProviderInterceptor],
    }).compile();

    animeInterceptor = module.get<AnimeProviderInterceptor>(
      AnimeProviderInterceptor,
    );
  });

  it('should be defined', () => {});
});
