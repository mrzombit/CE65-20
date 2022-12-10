import { Test, TestingModule } from '@nestjs/testing';
import { FixedCostController } from './fixed-cost.controller';

describe('FixedCostController', () => {
  let controller: FixedCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixedCostController],
    }).compile();

    controller = module.get<FixedCostController>(FixedCostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
