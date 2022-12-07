import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTableService } from './investment-table.service';

describe('InvestmentTableService', () => {
  let service: InvestmentTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentTableService],
    }).compile();

    service = module.get<InvestmentTableService>(InvestmentTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
