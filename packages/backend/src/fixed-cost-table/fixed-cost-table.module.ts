import { Module } from '@nestjs/common';
import { FixedCostTableController } from './fixed-cost-table.controller';
import { FixedCostTableService } from './fixed-cost-table.service';

@Module({
  controllers: [FixedCostTableController],
  providers: [FixedCostTableService]
})
export class FixedCostTableModule {}
