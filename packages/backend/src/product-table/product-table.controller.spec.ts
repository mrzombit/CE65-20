import { Test, TestingModule } from '@nestjs/testing';
import { ProductTableController } from './product-table.controller';

describe('ProductTableController', () => {
  let controller: ProductTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTableController],
    }).compile();

    controller = module.get<ProductTableController>(ProductTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
