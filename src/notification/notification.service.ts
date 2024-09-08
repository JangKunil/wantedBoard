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
        author: createNotificationDto.author,
        keyword: createNotificationDto.keyword,
      },
    });
  }
  
  // Check for keyword matches in boards and send notifications
  async checkForKeywordNotificationsInBoard(board: CreateBoardDto) {
    const notifications = await this.prisma.notification.findMany();

    for (const notification of notifications) {
      if (board.title.includes(notification.keyword) || board.content.includes(notification.keyword)) {
        this.sendNotification(notification.author, board.title, 'board');
      }
    }
  }

  // Mock notification function
  private sendNotification(author: string, content: string, type: 'board' | 'comment') {
    // Log the notification for now (this is where the actual notification logic would go)
    console.log(`Notification sent to ${author} about ${type}: "${content}"`);
  }
}