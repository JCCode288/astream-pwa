import { Test, TestingModule } from '@nestjs/testing';
import { AnimeProviderService } from './anime-provider.service';

describe('AnimeProviderService', () => {
  let service: AnimeProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeProviderService],
    }).compile();

    service = module.get<AnimeProviderService>(AnimeProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
