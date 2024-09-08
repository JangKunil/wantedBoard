import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    password: string;
  }
  
  export class UpdateBoardDto {
    @IsString()
    title?: string;

    @IsString()
    content?: string;

    @IsString()
    password?: string;
  }