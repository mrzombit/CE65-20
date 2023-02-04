import { Document } from 'mongoose';
    
export interface User extends Document {
    readonly name: string;
    readonly surname: string;
    readonly username: string;
    readonly email: string;
    readonly phone_number: string;
    readonly password: string;
    readonly  payment_detail: {
        payment_card_id: string,
        name: string,
        code: string,
        expired_date: string,
        cvv: string,
    };
    readonly subscription_plan_id: string;
    readonly project_ids: [string];
    readonly is_cooperation: boolean;
    readonly transaction_ids: [string];
}