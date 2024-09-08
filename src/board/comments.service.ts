import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async findAllByPost(boardId: number) {
    return this.prisma.comment.findMany({
      where: { boardId },
      include: { replies: true },  // Include nested comments
    });
  }

  async create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto
    });
  }
}