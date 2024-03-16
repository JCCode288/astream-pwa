import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type AniRecordDocument = HydratedDocument<AniRecord>;

@Schema()
export class AniRecord {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  user_ip: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  type: string;

  @Prop()
  url: string;

  @Prop({
    default: now(),
  })
  created_at: Date;
}

export const AniRecordSchema = SchemaFactory.createForClass(AniRecord);
