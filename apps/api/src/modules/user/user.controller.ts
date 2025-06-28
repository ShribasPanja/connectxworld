import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('profile')
    async getProfile(@Query('id') id: string) {
        return this.userService.getProfile(Number(id));
    }
}
