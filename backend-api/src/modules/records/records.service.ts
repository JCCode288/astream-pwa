import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getPopular(limit = 10) {
    try {
      const popularCount: any[] = await this.aniRecordModel
        .aggregate([
          { $group: { _id: '$id', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: limit },
        ])
        .exec();

      if (!popularCount.length) {
        throw new NotFoundException({ msg: 'No Popular Anime Found.' });
      }

      const popularIds = popularCount.map((el) => el._id);

      const popularPromise = [];

      for (const id of popularIds) {
        const query = this.aniRecordModel
          .find({ id }, { user_ip: 0 })
          .sort({ created_at: -1 })
          .limit(1)
          .exec();

        popularPromise.push(query);
      }

      return Promise.all(popularPromise);
    } catch (err) {
      throw err;
    }
  }
}
