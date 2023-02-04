export class CreateTransactionDTO {
    readonly amount: Number;
    readonly payment_card_id: string;
    readonly created_date: Date;
    readonly subscription_plan_id: string;
  }