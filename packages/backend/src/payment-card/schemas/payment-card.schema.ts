import * as mongoose from 'mongoose';
    
export const PaymentCardSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    logo_url: String,
    is_actived: Boolean,
    created_date: Date,
});