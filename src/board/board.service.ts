import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBoardDto, UpdateBoardDto } from '../dto/board.dto';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number) {
    const skip = (page - 1) * 10;
    return this.prisma.board.findMany({
      skip,
      take: 10,
      include: { comments: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.board.findUnique({
      where: { id },
      include: { comments: true },
    });
  }

  // Function to search board by title using MySQL LIKE query
  async searchByTitle(title: string) {
    return this.prisma.board.findMany({
      where: {
        title: {
          contains: title, // This will perform a LIKE query
        },
      },
    });
  }

  // Function to search board by author (exact match)
  async searchByAuthor(author: string) {
    return this.prisma.board.findMany({
      where: {
        author: {
          equals: author, // This will perform an exact match
        },
      },
    });
  }

  async create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({
      data: createBoardDto,
    });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.prisma.board.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  async delete(id: number, password: string) {
    const board = await this.prisma.board.findUnique({ where: { id } });
    if (board && board.password === password) {
      return this.prisma.board.delete({ where: { id } });
    }
    throw new Error('Invalid password');
  }
}