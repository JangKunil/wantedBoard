import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

// Mock BoardService
const mockBoardService = {
  findAll: jest.fn(), // Mock this method
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('BoardController', () => {
  let controller: BoardController;
  let service: BoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        {
          provide: BoardService,
          useValue: mockBoardService, // Inject mock service
        },
      ],
    }).compile();

    controller = module.get<BoardController>(BoardController);
    service = module.get<BoardService>(BoardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all board', async () => {
    const mockBoard = [{ id: 1, title: 'Test Post', content: 'Test content' }];
    mockBoardService.findAll.mockResolvedValue(mockBoard); // Mocking the return value of findAll

    const result = await controller.findAll(1);
    expect(result).toEqual(mockBoard); // Assert that the result is the mocked board array
  });

  it('should return one board', async () => {
    const mockPost = { id: 1, title: 'Test Post', content: 'Test content' };
    mockBoardService.findOne.mockResolvedValue(mockPost); // Mocking the return value of findOne

    const result = await controller.findOne('1');
    expect(result).toEqual(mockPost); // Assert that the result is the mocked board
  });

  it('should create a board', async () => {
    const mockPost = { id: 1, title: 'New Post', content: 'Test content', author:"", password:"1234" };
    mockBoardService.create.mockResolvedValue(mockPost); // Mocking the return value of create

    const result = await controller.create(mockPost);
    expect(result).toEqual(mockPost); // Assert that the result is the mocked created board
  });

  it('should delete a board', async () => {
    mockBoardService.delete.mockResolvedValue({ deleted: true }); // Mocking the return value of delete

    const result = await controller.delete('1', 'password');
    expect(result).toEqual({ deleted: true }); // Assert that the result is the mocked delete response
  });
});