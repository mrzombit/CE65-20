import { PaymentCard } from './interfaces/payment-card.interface';
import { CreatePaymentCardDTO } from './dto/create-payment-card.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PaymentCardService {
    constructor(@InjectModel('PaymentCard') private readonly paymentCardModel: Model<PaymentCard>) { }

    async addPaymentCard(createPaymentCardDTO: CreatePaymentCardDTO): Promise<PaymentCard> {
        const newPaymentCard = await new this.paymentCardModel(createPaymentCardDTO);
        return newPaymentCard.save();
      }  
        
      async getPaymentCard(paymentCardID): Promise<PaymentCard> {
        const paymentCard = await this.paymentCardModel
          .findById(paymentCardID)
          .exec();
        return paymentCard;
      }
        
      async getPaymentCards(): Promise<PaymentCard[]> {
        const paymentCards = await this.paymentCardModel.find().exec();
        return paymentCards;
      }
    
      async editPaymentCard(paymentCardID, createPaymentCardDTO: CreatePaymentCardDTO): Promise<PaymentCard> {
        const editedPaymentCard = await this.paymentCardModel
          .findByIdAndUpdate(paymentCardID, createPaymentCardDTO, { new: true });
        return editedPaymentCard;
      }
      async deletePaymentCard(paymentCardID): Promise<any> {
        const deletedPaymentCard = await this.paymentCardModel
          .findByIdAndRemove(paymentCardID);
        return deletedPaymentCard;
      }
}
