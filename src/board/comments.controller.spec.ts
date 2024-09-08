import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

// Mock CommentsService
const mockCommentsService = {
  findAllByPost: jest.fn(), // Mock findAllByPost method
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('CommentsController', () => {
  let controller: CommentsController;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        {
          provide: CommentsService,
          useValue: mockCommentsService, // Inject mocked service
        },
      ],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all comments for a board', async () => {
    const mockComments = [{ id: 1, content: 'Test comment', boardId: 1 }];
    mockCommentsService.findAllByPost.mockResolvedValue(mockComments); // Mock the return value

    const result = await controller.findAllByPost('1');
    expect(result).toEqual(mockComments); // Assert that the result is the mocked comments array
  });

  it('should create a comment', async () => {
    const mockComment = { id: 1, content: 'New comment', boardId: 1, author:"", parentCommentId:1 };
    mockCommentsService.create.mockResolvedValue(mockComment); // Mock the return value

    const result = await controller.create(mockComment);
    expect(result).toEqual(mockComment); // Assert that the result is the mocked comment
  });
});