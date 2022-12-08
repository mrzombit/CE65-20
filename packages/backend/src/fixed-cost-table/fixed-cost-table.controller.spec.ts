import { Test, TestingModule } from '@nestjs/testing';
import { FixedCostTableController } from './fixed-cost-table.controller';

describe('FixedCostTableController', () => {
  let controller: FixedCostTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixedCostTableController],
    }).compile();

    controller = module.get<FixedCostTableController>(FixedCostTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
