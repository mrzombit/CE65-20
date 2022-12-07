import { Module } from '@nestjs/common';
import { ServiceTableController } from './service-table.controller';
import { ServiceTableService } from './service-table.service';

@Module({
  controllers: [ServiceTableController],
  providers: [ServiceTableService]
})
export class ServiceTableModule {}
