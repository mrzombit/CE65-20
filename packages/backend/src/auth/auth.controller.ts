import { LocalAuthGuard } from './local-auth.guard';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }
}
