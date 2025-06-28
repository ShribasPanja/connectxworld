import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@repo/prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async getProfile(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
