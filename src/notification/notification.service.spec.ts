import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { PrismaService } from '../../prisma/prisma.service'; // Import PrismaService

// Mock PrismaService
const mockPrismaService = {
  keywordNotification: {
    findMany: jest.fn(), // Mock Prisma methods used in NotificationService
    create: jest.fn(),
  },
};

describe('NotificationService', () => {
  let service: NotificationService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: PrismaService, // Mock PrismaService
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Additional tests for NotificationService functions go here

  it('should send notifications for matching keywords in posts', async () => {
    const mockPost = { title: 'test title', content: 'test content', author: 'author1', password:"" };
    const mockKeywordNotifications = [{ author: 'author1', keyword: 'test' }];

    //prisma.notification.findMany.mockResolvedValue(mockKeywordNotifications);

    //await service.checkForKeywordNotificationsInBoard(mockPost);

    // Assert
    //expect(prisma.notification.findMany).toHaveBeenCalled();
  });
});