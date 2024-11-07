// post.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string; // Yüklenen fotoğrafın URL'si

  // Diğer alanlar...
}

export const PostSchema = SchemaFactory.createForClass(Post);
