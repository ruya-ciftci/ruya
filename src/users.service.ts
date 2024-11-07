// users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './backend/models/user.model'; // Kullanıcı modeli
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
}
