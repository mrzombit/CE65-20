import { Module } from '@nestjs/common';
import { InvestmentTableController } from './investment-table.controller';
import { InvestmentTableService } from './investment-table.service';

@Module({
  controllers: [InvestmentTableController],
  providers: [InvestmentTableService]
})
export class InvestmentTableModule {}
