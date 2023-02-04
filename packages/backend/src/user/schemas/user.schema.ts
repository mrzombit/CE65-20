
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone_number: String,
    password: { type: String, required: true },
    payment_detail: {
        payment_card_id: String,
        name: String,
        code: String,
        expired_date: String,
        cvv: String,
    },
    subscription_plan_id: String,
    project_ids: [String],
    is_cooperation: Boolean,
    transaction_ids: [String],
});
