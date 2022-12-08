
import * as mongoose from 'mongoose';
    
export const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    phone_number: String,
    password: String,
    payment_detail: String,
    subscription_plan_id: String,
    project_ids: [String],
    is_cooperation: Boolean,
    transaction_ids: [String],
});