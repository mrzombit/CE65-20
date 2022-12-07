import { Module } from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';

@Module({
  providers: [SubscriptionPlanService]
})
export class SubscriptionPlanModule {}
