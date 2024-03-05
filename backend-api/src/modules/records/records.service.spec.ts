import { Test, TestingModule } from '@nestjs/testing';
import { RecordsService } from './records.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AniRecord, AniRecordSchema } from './records.schema';
import { AppModule } from '../../app.module';
import { CreateAniRecordDto } from './records.dto';

describe('RecordsService', () => {
  let service: RecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([
          { name: AniRecord.name, schema: AniRecordSchema },
        ]),
      ],
      providers: [RecordsService],
    }).compile();

    service = module.get<RecordsService>(RecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be saving record', async () => {
    const recordData: CreateAniRecordDto = {
      user_ip: '255.255.255.255',
      title: 'some anime',
      id: 'some-anime',
      image: 'some image',
      type: 'anime type',
      url: 'anime url',
    };
    const save = await service.saveRecord(recordData);

    expect(save).toBeDefined();
    expect(save).toHaveProperty('_id');

    save.deleteOne();
  });
});
