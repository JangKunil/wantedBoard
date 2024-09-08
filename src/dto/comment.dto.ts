import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsNumber()
    boardId: number;

    @IsOptional()
    @IsNumber()
    parentCommentId: number;  // For replies to comments
  }
  
  export class UpdateCommentDto {
    @IsString()
    content?: string;

    @IsString()
    author?: string;
  }