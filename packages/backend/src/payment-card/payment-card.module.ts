import { PaymentCardSchema } from './schemas/payment-card.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PaymentCardController } from './payment-card.controller';
import { PaymentCardService } from './payment-card.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PaymentCard', schema: PaymentCardSchema }]),
  ], // add
  controllers: [PaymentCardController],
  providers: [PaymentCardService]
})
export class PaymentCardModule {}
