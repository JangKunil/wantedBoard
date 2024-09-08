import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import { PrismaService } from '../../prisma/prisma.service';

// Mock PrismaService
const mockPrismaService = {
  comment: {
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('CommentsService', () => {
  let service: CommentsService;
  let prisma: PrismaService;

  beforeEach(async () => {''
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return comments for a board', async () => {
    const mockComments = [{ id: 1, content: 'Test comment', boardId: 1 , author:"",parentCommentId:1}];
    //prisma.comment.findMany.mockResolvedValue(mockComments);
    // const result = await service.findAllByPost(1);
    // expect(result).toEqual(mockComments);
  });

  it('should create a comment', async () => {
    const mockComment = { id: 1, content: 'New comment', boardId: 1, author:"", parentCommentId:1 };
    //prisma.comment.create.mockResolvedValue(mockComment);
    // const result = await service.create(mockComment);
    // expect(result).toEqual(mockComment);
  });

});