import { IsOptional, IsString } from 'class-validator';

export class CreateAniRecordDto {
  @IsString()
  user_ip: string;

  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
