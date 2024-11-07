// posts.service.ts
import { Injectable } from '@nestjs/common';
import { Post } from './post.model'; // Gönderi modeli
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }
}
