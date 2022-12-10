export class CreateTransactionDTO {
    readonly amount: string;
    readonly payment_card_id: string;
    readonly created_date: Date;
    readonly subscription_plan_id: string;
  }