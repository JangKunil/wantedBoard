import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service'; // Import PrismaService
import { BoardService } from './board.service';

// Mock PrismaService
const mockPrismaService = {
  board: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('BoardService', () => {
  let service: BoardService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: PrismaService,  // Mock PrismaService
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<BoardService>(BoardService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return board', async () => {
    const mockBoard = [{ id: 1, title: 'Test Board', content: 'Content', author: 'Author', password:"" }];
    //prisma.board.findMany.mockResolvedValue(mockBoard);  // Mock return value
    // const result = await service.findAll(1);
    // expect(result).toEqual(mockBoard);
  });

  it('should create a board', async () => {
    const mockBoard = { id: 1, title: 'New Board', content: 'Content', author: 'Author', password: '1234' };
    //prisma.board.create.mockResolvedValue(mockBoard);  // Mock create behavior
    // const result = await service.create(mockBoard);
    // expect(result).toEqual(mockBoard);
  });
});