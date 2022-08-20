import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import * as permissions from 'mongoose-permissions';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User {
  @Prop({ type: SchemaTypes.ObjectId })
  _id!: Types.ObjectId;

  @Prop()
  first_name!: string;

  @Prop()
  last_name?: string;

  @Prop({ trim: true })
  password?: string;

  @Prop()
  email!: string;

  @Prop()
  phone_number!: string;

  @Prop()
  kyc?: string;

  @Prop()
  zoom_id?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
UserSchema.plugin(permissions);
UserSchema.plugin(mongoosePaginate);
