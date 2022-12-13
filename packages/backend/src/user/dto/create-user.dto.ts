export class CreateUserDTO {
    readonly name: string;
    readonly surname: string;
    readonly username: string;
    readonly email: string;
    readonly phone_number: string;
    password: string;
    readonly payment_detail: JSON;
    readonly subscription_plan_id: string;
    readonly project_ids: [string];
    readonly is_cooperation: boolean;
    readonly transaction_ids: [string];
  }