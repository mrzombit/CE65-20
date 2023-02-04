import * as mongoose from 'mongoose';
    
export const CurrencySchema = new mongoose.Schema({
    name: {
        th: {
            name: String,
            weight: Number,
        },
        en: {
            name: String,
            weight: Number,
        },
    },
    abbreviation: String,
    full_name: String,
    created_date: Date,
});