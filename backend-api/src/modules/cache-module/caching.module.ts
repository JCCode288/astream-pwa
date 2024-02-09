import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { CachingService } from './caching.service';

@Global()
@Module({
  imports: [
    CacheModule.register({
      max: 1000,
    }),
  ],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
