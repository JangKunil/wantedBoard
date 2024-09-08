import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';  // Prisma service
import { BoardController } from './board.controller';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { BoardService } from './board.service';
import { NotificationController } from 'src/notification/notification.controller';
import { NotificationService } from 'src/notification/notification.service';

@Module({
  controllers: [BoardController, CommentsController, NotificationController],  // Controllers for board and comments
  providers: [BoardService, CommentsService, PrismaService, NotificationService],  // Services for board, comments, and Prisma
})
export class BoardModule {}