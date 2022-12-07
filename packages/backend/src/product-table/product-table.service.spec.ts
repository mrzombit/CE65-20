import { Test, TestingModule } from '@nestjs/testing';
import { ProductTableService } from './product-table.service';

describe('ProductTableService', () => {
  let service: ProductTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTableService],
    }).compile();

    service = module.get<ProductTableService>(ProductTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
