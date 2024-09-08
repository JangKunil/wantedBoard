import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto, UpdateBoardDto } from '../dto/board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll(@Query('page') page: number) {
    return this.boardService.findAll(page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  // Function to search board by title (using LIKE query)
  @Get('search-by-title/:title')
  searchByTitle(@Param('title') title: string) {
    return this.boardService.searchByTitle(title);
  }

  // Function to search board by author (exact match)
  @Get('search-by-author/:author')
  searchByAuthor(@Param('author') author: string) {
    return this.boardService.searchByAuthor(author);
  }

  @Post()
  create(@Body() createPostDto: CreateBoardDto) {
    return this.boardService.create(createPostDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdateBoardDto) {
    return this.boardService.update(+id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Body('password') password: string) {
    return this.boardService.delete(+id, password);
  }
}