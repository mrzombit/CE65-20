import { Module } from '@nestjs/common';
import { ProductTableController } from './product-table.controller';
import { ProductTableService } from './product-table.service';

@Module({
  controllers: [ProductTableController],
  providers: [ProductTableService]
})
export class ProductTableModule {}
