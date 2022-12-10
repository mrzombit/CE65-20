import { Test, TestingModule } from '@nestjs/testing';
import { FixedCostTableService } from './fixed-cost-table.service';

describe('FixedCostTableService', () => {
  let service: FixedCostTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixedCostTableService],
    }).compile();

    service = module.get<FixedCostTableService>(FixedCostTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
