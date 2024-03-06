import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AniRecord, AniRecordSchema } from './records.schema';
import { RecordsService } from './records.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AniRecord.name, schema: AniRecordSchema },
    ]),
  ],
  providers: [RecordsService],
  exports: [RecordsService],
})
export class RecordsModule {}
