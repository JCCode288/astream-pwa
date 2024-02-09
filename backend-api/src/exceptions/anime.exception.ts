import { HttpException } from '@nestjs/common';

export interface IAnimeExceptionInput {
  message: string | Record<string, any>;
  status?: number;
}

export class AnimeException extends HttpException {
  constructor({ message, status = 503 }: IAnimeExceptionInput) {
    super(message, status);
  }
}
