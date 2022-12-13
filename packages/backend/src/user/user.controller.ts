import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Get, Res, HttpStatus,
  Param, NotFoundException,
  Post, Body, Put, Query,
  Delete, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Post('/post')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      post: newUser,
    });
  }
  
  @Get('post/:userID') //"../user/post/1"
  async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
    const user = await this.userService.getUser(userID);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
  }

  async getUserByUsername(@Res() res, @Param('username', new ValidateObjectId()) username) {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
  }

  @Get('users') //"../user/users"
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Put('/edit')
  async editUser(
    @Res() res,
    @Query('userID', new ValidateObjectId()) userID,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    const editedUser = await this.userService.editUser(userID, createUserDTO);
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }

  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID', new ValidateObjectId()) userID) {
    const deletedUser = await this.userService.deleteUser(userID);
    if (!deletedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted!',
      user: deletedUser,
    });
  }
}
