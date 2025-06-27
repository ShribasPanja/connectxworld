import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupSchema, LoginSchema } from '@repo/zod/types';

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() body: RegisterRequest) {
    const validated = SignupSchema.safeParse(body);
    if (!validated.success) {
      throw new BadRequestException('Validation failed');
    }
    return this.authService.registerUser(validated.data);
  }

  @Post('signin')
  async signin(@Body() body: LoginRequest) {
    const validated = LoginSchema.safeParse(body);
    if (!validated.success) {
      throw new BadRequestException('Validation failed');
    }
    return this.authService.loginUser(validated.data);
  }

  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    if (!refreshToken)
      throw new BadRequestException('No refresh token provided');
    return this.authService.refreshToken(refreshToken);
  }
}
