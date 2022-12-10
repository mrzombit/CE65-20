import * as mongoose from 'mongoose';
    
export const TransactionSchema = new mongoose.Schema({
    amount: String,
    payment_card_id: String,
    created_date: Date,
    subscription_plan_id: String,
});