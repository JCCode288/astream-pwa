import { Injectable } from '@nestjs/common';
import { CreateAniRecordDto } from './records.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AniRecord } from './records.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(AniRecord.name)
    private readonly aniRecordModel: Model<AniRecord>,
  ) {}

  saveRecord(recordDto: CreateAniRecordDto) {
    const record = new this.aniRecordModel(recordDto);

    return record.save();
  }
}
