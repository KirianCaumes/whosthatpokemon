import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    service = module.get<AppService>(AppService);

    jest.setTimeout(30000)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  },30000);
});
