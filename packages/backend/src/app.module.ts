import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { BlogModule } from './blog/blog.module';
import { MONGODB_CONNECTION } from './app.properties'
import { AssetAccountModule } from './asset-account/asset-account.module';
import { CurrencyModule } from './currency/currency.module';
import { FixedCostModule } from './fixed-cost/fixed-cost.module';
import { FixedCostTableModule } from './fixed-cost-table/fixed-cost-table.module';
import { IndustryModule } from './industry/industry.module';
import { InvestmentModule } from './investment/investment.module';
import { PaymentCardModule } from './payment-card/payment-card.module';
import { PeriodModule } from './period/period.module';
import { ProductModule } from './product/product.module';
import { ProductTableModule } from './product-table/product-table.module';
import { ProjectModule } from './project/project.module';
import { ServiceModule } from './service/service.module';
import { InvestmentTableModule } from './investment-table/investment-table.module';
import { ServiceTableModule } from './service-table/service-table.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';
import { SubscriptionPlanModule } from './subscription-plan/subscription-plan.module';
import { AuthModule } from './auth/auth.module';
import { BusinessGoalController } from './business-goal/business-goal.controller';
import { BusinessGoalModule } from './business-goal/business-goal.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION, {
      useNewUrlParser: true,
    }),
    BlogModule,
    AssetAccountModule,
    CurrencyModule,
    FixedCostModule,
    FixedCostTableModule,
    IndustryModule,
    InvestmentModule,
    InvestmentTableModule,
    PaymentCardModule,
    PeriodModule,
    ProductModule,
    ProductTableModule,
    ProjectModule,
    ServiceModule,
    ServiceTableModule,
    SubscriptionPlanModule,
    TransactionModule,
    UserModule,
    AuthModule,
    BusinessGoalModule,
  ],
  controllers: [AppController, BusinessGoalController],
  providers: [AppService],
})
export class AppModule {}