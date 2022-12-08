import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTableController } from './investment-table.controller';

describe('InvestmentTableController', () => {
  let controller: InvestmentTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentTableController],
    }).compile();

    controller = module.get<InvestmentTableController>(InvestmentTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
