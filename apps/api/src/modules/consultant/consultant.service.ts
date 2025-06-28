import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@repo/prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ConsultantService {
  async getAllConsultants(page: number = 1, pageSize: number = 10) {
    const skip = (page - 1) * pageSize;
    const [consultants, total] = await Promise.all([
      prisma.consultant.findMany({
        skip,
        take: pageSize,
        orderBy: { id: 'asc' },
      }),
      prisma.consultant.count(),
    ]);
    return {
      data: consultants,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }
  async getConsultantByName(search: string) {
    const consultant = await prisma.consultant.findMany({
      where: {
        OR: [
          {
            name: { startsWith: search },
          },
          { specialization: { startsWith: search } },
        ],
      },
    });
    if (consultant.length === 0) {
      throw new NotFoundException('Consultant not found');
    }
    return { consultant };
  }
  async createConsultant(data: any) {
    const { name, specialization, experience, bio, profilePicture, rate } =
      data;
    if (!name || !specialization || !rate) {
      throw new NotAcceptableException('All fields are required');
    }
    const consultant = await prisma.consultant.create({
      data: {
        name,
        specialization,
        bio,
        profilePicture,
        rate,
      },
    });
    return { message: 'Consultant created successfully', consultant };
  }
}
