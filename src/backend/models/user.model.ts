// user.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  // Diğer alanlar...
}

export const UserSchema = SchemaFactory.createForClass(User);
