import { Test, TestingModule } from '@nestjs/testing';
import { FixedCostService } from './fixed-cost.service';

describe('FixedCostService', () => {
  let service: FixedCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixedCostService],
    }).compile();

    service = module.get<FixedCostService>(FixedCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
