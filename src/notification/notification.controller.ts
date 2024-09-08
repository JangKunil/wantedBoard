import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from 'src/dto/notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // Endpoint to register a new keyword notification
  @Post()
  createKeywordNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.createKeywordNotification(createNotificationDto);
  }
}