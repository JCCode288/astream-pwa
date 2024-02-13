import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AnimeProviderInterceptor implements NestInterceptor {
  async intercept(
    ctx: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = ctx.switchToHttp().getRequest();
    return next.handle().pipe(tap((resBody) => this.trackAnimes(resBody, req)));
  }

  private async trackAnimes(body: any, req: Request) {
    try {
      const headers = req.headers['x-ip'];
      console.log({ body, headers }, '<<<<<<<<<< RESPONSE');
    } catch (err) {
      console.log(err, '<<<<<<<<< HANDLE RES ERR');
      throw err;
    }
  }
}
