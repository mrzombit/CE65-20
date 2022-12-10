import { ValidateObjectId } from './../user/shared/pipes/validate-object-id.pipes';
import { CreatePaymentCardDTO } from './dto/create-payment-card.dto';
import { PaymentCardService } from './payment-card.service';
import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

@Controller('paymentCard')
export class PaymentCardController {

    constructor(private paymentCardService: PaymentCardService){ }

    @Post('/post')
    async addPaymentCard(@Res() res, @Body() createPaymentCardDTO: CreatePaymentCardDTO){
        const newPaymentCard = await this.paymentCardService.addPaymentCard(createPaymentCardDTO);
        return res.status(HttpStatus.OK).json({
            message: 'PaymentCard has been submitted successfully!',
            paymentCard: newPaymentCard,
        });
    }
    
    @Get('post/:paymentCardID') //"../paymentCard/post/1"
    async getPaymentCard(@Res() res, @Param('paymentCardID', new ValidateObjectId()) paymentCardID) {
    const paymentCard = await this.paymentCardService.getPaymentCard(paymentCardID);
    if (!paymentCard) {
        throw new NotFoundException('PaymentCard does not exist!');
    }
    return res.status(HttpStatus.OK).json(paymentCard);
    }

    @Get('paymentCards') //"../paymentCard/paymentCards"
    async getPaymentCards(@Res() res) {
    const paymentCards = await this.paymentCardService.getPaymentCards();
    return res.status(HttpStatus.OK).json(paymentCards);
    }

    @Put('/edit')
    async editPaymentCard(
      @Res() res,
      @Query('paymentCardID', new ValidateObjectId()) paymentCardID,
      @Body() createPaymentCardDTO: CreatePaymentCardDTO,
    ) {
      const editedPaymentCard = await this.paymentCardService.editPaymentCard(paymentCardID, createPaymentCardDTO);
      if (!editedPaymentCard) {
          throw new NotFoundException('PaymentCard does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'PaymentCard has been successfully updated',
        paymentCard: editedPaymentCard,
      });
    }

    @Delete('/delete')
    async deletePaymentCard(@Res() res, @Query('paymentCardID', new ValidateObjectId()) paymentCardID) {
      const deletedPaymentCard = await this.paymentCardService.deletePaymentCard(paymentCardID);
      if (!deletedPaymentCard) {
          throw new NotFoundException('PaymentCard does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'PaymentCard has been deleted!',
        paymentCard: deletedPaymentCard,
      });
    }
}
