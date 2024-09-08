import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':boardId')
  findAllByPost(@Param('boardId') boardId: string) {
    return this.commentsService.findAllByPost(+boardId);
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }
}