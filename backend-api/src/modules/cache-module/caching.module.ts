import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { CachingService } from './caching.service';

@Global()
@Module({
  imports: [
    CacheModule.register({
      max: 100,
      ttl: 600000, // 10 mins
    }),
  ],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
