import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Injectable, BadRequestException  } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getUserByUsername(username: string) {
      return this.userModel.findOne({
          username
        })
        .exec();
    }

    async getUserByEmail(email: string) {
      return this.userModel.findOne({
          email
        })
        .exec();
    }

    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await new this.userModel(createUserDTO);
        const user_username = await this.getUserByUsername(newUser.username);
        if (user_username) {
          throw new BadRequestException();
        }
        const user_email = await this.getUserByEmail(newUser.email);
        if (user_email) {
          throw new BadRequestException();
        }
        return newUser.save();
      }  
        
      async getUser(userID): Promise<User> {
        const user = await this.userModel
          .findById(userID)
          .exec();
        return user;
      }
        
      async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
      }
    
      async editUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
        const editedUser = await this.userModel
          .findByIdAndUpdate(userID, createUserDTO, { new: true });
        return editedUser;
      }
      async deleteUser(userID): Promise<any> {
        const deletedUser = await this.userModel
          .findByIdAndRemove(userID);
        return deletedUser;
      }

      async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({
          username
        })
        .exec();
      }

      private readonly users = [
        {
          userId: 1,
          username: 'erika123',
          password: 'changeme',
        },
      ];
}
