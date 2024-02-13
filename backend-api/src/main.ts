import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { ValidationPipe } from '@nestjs/common';
import { GlobalException } from './exceptions/global.exception';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: process.env.WHITELIST,
    methods: ['GET'],
    allowedHeaders: ['x-ip'],
  });
  const adapter = app.get(HttpAdapterHost);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalException(adapter));

  await Promise.all([
    app.register(fastifyCsrf),
    app.register(helmet, {
      contentSecurityPolicy: {
        directives: {
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
        },
      },
    }),
  ]);

  await app.listen(3001, '0.0.0.0', async (err) => {
    if (err) return console.log(err);

    console.log(`listening on ${await app.getUrl()}`);
  });
}
bootstrap();
