import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { RecordsService } from 'src/modules/records/records.service';

@Injectable()
export class AnimeProviderInterceptor implements NestInterceptor {
  constructor(private readonly recordService: RecordsService) {}

  async intercept(
    ctx: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = ctx.switchToHttp().getRequest();
    return next.handle().pipe(tap((resBody) => this.trackAnimes(resBody, req)));
  }

  private async trackAnimes(body: any, req: Request) {
    try {
      if (!body || !req) return;

      const headers = req.headers['x-ip'];

      const { id, url, title, image, type } = body;

      if (typeof headers === 'string') {
        const recordData = {
          id,
          title,
          url,
          image,
          type,
          user_ip: headers,
        };

        return await this.recordService.saveRecord(recordData);
      }

      const promiseArr = [];

      for (const ip of headers) {
        const recordData = { id, title, url, image, type, user_ip: ip };

        promiseArr.push(this.recordService.saveRecord(recordData));
      }

      return await Promise.all(promiseArr);
    } catch (err) {
      console.log(err, '<<<<<<<<< HANDLE RES ERR');
      throw err;
    }
  }
}
