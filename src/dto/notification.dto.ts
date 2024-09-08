import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsString()
    author: string;

    @IsString()
    keyword: string;
}