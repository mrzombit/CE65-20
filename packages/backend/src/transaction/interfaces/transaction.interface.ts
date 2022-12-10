import { Document } from 'mongoose';
    
export interface Transaction extends Document {
    readonly amount: string;
    readonly payment_card_id: string;
    readonly created_date: Date;
    readonly subscription_plan_id: string;
}
