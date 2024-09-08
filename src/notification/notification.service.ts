import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBoardDto } from '../dto/board.dto';
import { CreateNotificationDto } from 'src/dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  // Method to register a new keyword notification
  async createKeywordNotification(createNotificationDto: CreateNotificationDto) {
    return this.prisma.notification.create({
      data: {
        userId: createNotificationDto.userId,
        author: createNotificationDto.author,
        keyword: createNotificationDto.keyword,
      },
    });
  }
  
  // Check for keyword matches in boards and send notifications
  async checkForKeywordNotificationsInBoard(board: CreateBoardDto) {
    const notifications = await this.prisma.notification.findMany({
      where: {
        OR: [
          { author: { equals: board.author } },   // Condition for author
          { keyword: { contains: board.title } }   // Condition for keyword
        ]
      }
    });

    for (const notification of notifications) {
      this.sendNotification(notification.author, board.title, notification.userId);
    }
  }

  // Mock notification function
  private sendNotification(author: string, title: string, toUser: number ) {
    // Log the notification for now (this is where the actual notification logic would go)
    console.log(`Notification sent to ${toUser} about author: "${author}", about title: "${title}"`);
  }
}